# Deploy MaturaAI Proxy — Cloudflare Worker

## One-time setup (~5 minutes)

### 1. Cloudflare account
Sign up free at https://dash.cloudflare.com — no credit card needed.

### 2. Install Wrangler (Cloudflare CLI)
```bash
npm install -g wrangler
wrangler login          # opens browser, sign in with your CF account
```

### 3. Deploy the worker
```bash
cd proxy/
npx wrangler deploy
```
Your worker URL will be: **https://maturai-proxy.YOUR-CF-USERNAME.workers.dev**

### 4. Add your API keys as secrets (never stored in code)
```bash
npx wrangler secret put ANTHROPIC_KEY
# paste key when prompted

npx wrangler secret put OPENAI_KEY
npx wrangler secret put GEMINI_KEY
npx wrangler secret put GROQ_KEY
```
Skip any provider you don't use — the worker returns 503 for missing keys.

### 5. Update exam.html
Find this line near the top of exam.html:
```js
const PROXY_URL = '';
```
Replace with your worker URL:
```js
const PROXY_URL = 'https://maturai-proxy.YOUR-CF-USERNAME.workers.dev';
```

### 6. Commit + push exam.html
```bash
git add exam.html
git commit -m "Add proxy support — keys no longer client-side"
git push
```

## How it works after
- If no API key is entered → request goes through your proxy (your key, server-side)
- If a user enters their own key → still calls provider directly (backward compat)
- Keys never appear in the browser network tab when using proxy mode

## Free tier limits
Cloudflare Workers free: **100,000 requests/day** — more than enough for a school project.
