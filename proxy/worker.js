/**
 * MaturaAI Proxy Worker
 * Cloudflare Worker — free tier (100k req/day)
 * Secrets required: ANTHROPIC_KEY, OPENAI_KEY, GEMINI_KEY, GROQ_KEY
 *
 * POST /proxy  { provider, model, system, messages, max_tokens }
 * → forwards to the right AI provider using env secrets
 * → CORS locked to gguruji1985.github.io
 */

const ALLOWED_ORIGINS = [
  'https://gguruji1985.github.io',
  'http://localhost',          // local dev
  'http://127.0.0.1',
];

function cors(origin) {
  return {
    'Access-Control-Allow-Origin' : ALLOWED_ORIGINS.some(o => origin.startsWith(o)) ? origin : 'null',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age'      : '86400',
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors(origin) },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    // ── CORS preflight ──────────────────────────────────────────────────────
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors(origin) });
    }

    // ── Block non-allowed origins ────────────────────────────────────────────
    if (!ALLOWED_ORIGINS.some(o => origin.startsWith(o))) {
      return json({ error: 'Forbidden' }, 403, origin);
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405, origin);
    }

    // ── Parse body ───────────────────────────────────────────────────────────
    let body;
    try { body = await request.json(); }
    catch { return json({ error: 'Invalid JSON' }, 400, origin); }

    const { provider, model, system, messages, max_tokens = 2000 } = body;
    if (!provider || !model || !messages) {
      return json({ error: 'Missing provider, model or messages' }, 400, origin);
    }

    // ── Route to provider ────────────────────────────────────────────────────
    let upstreamRes;

    try {
      if (provider === 'anthropic') {
        if (!env.ANTHROPIC_KEY) return json({ error: 'Key not configured' }, 503, origin);
        upstreamRes = await fetch('https://api.anthropic.com/v1/messages', {
          method : 'POST',
          headers: {
            'Content-Type'     : 'application/json',
            'x-api-key'        : env.ANTHROPIC_KEY,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({ model, max_tokens, system, messages }),
        });

      } else if (provider === 'openai') {
        if (!env.OPENAI_KEY) return json({ error: 'Key not configured' }, 503, origin);
        const msgs = system
          ? [{ role: 'system', content: system }, ...messages]
          : messages;
        upstreamRes = await fetch('https://api.openai.com/v1/chat/completions', {
          method : 'POST',
          headers: {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer ' + env.OPENAI_KEY,
          },
          body: JSON.stringify({ model, max_tokens, messages: msgs }),
        });

      } else if (provider === 'gemini') {
        if (!env.GEMINI_KEY) return json({ error: 'Key not configured' }, 503, origin);
        const contents = messages.map(m => ({
          role : m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        }));
        const gemBody = { contents };
        if (system) gemBody.systemInstruction = { parts: [{ text: system }] };
        upstreamRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_KEY}`,
          {
            method : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body   : JSON.stringify(gemBody),
          }
        );

      } else if (provider === 'groq') {
        if (!env.GROQ_KEY) return json({ error: 'Key not configured' }, 503, origin);
        const msgs = system
          ? [{ role: 'system', content: system }, ...messages]
          : messages;
        upstreamRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method : 'POST',
          headers: {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer ' + env.GROQ_KEY,
          },
          body: JSON.stringify({ model, max_tokens, messages: msgs }),
        });

      } else {
        return json({ error: 'Unknown provider: ' + provider }, 400, origin);
      }
    } catch (e) {
      return json({ error: 'Upstream error: ' + e.message }, 502, origin);
    }

    const data = await upstreamRes.json();
    return json(data, upstreamRes.status, origin);
  },
};
