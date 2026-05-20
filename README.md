# 🎓 MaturaAI — Simulatore Esame di Maturità

> Preparati all'esame di maturità con l'intelligenza artificiale. Simula tutte le prove — prima, seconda e colloquio orale — per qualsiasi materia e indirizzo scolastico.

**🔗 Live:** [gguruji1985.github.io/Esame](https://gguruji1985.github.io/Esame)

---

## ✨ Funzionalità

| Funzione | Descrizione |
|---|---|
| ✍️ **Prima Prova** | Tipologia A (analisi testo), B (argomentativo), C (attualità) in stile ministeriale |
| 📄 **Seconda Prova** | Traccia ministeriale completa con premessa, caso professionale, prima e seconda parte |
| 🎤 **Colloquio Orale** | L'AI interpreta la commissione — rispondi come al vero esame orale |
| 🎯 **Scelta Multipla** | Domande a 4 opzioni con timer, feedback istantaneo e spiegazione |
| ✏️ **Risposta Aperta** | L'AI genera domande e valuta la risposta da 1 a 10 |
| ✅ **Vero / Falso** | 5 affermazioni da giudicare con spiegazione immediata |
| 🔤 **Completa la Frase** | Frasi con parola mancante — verifica automatica |
| 🔗 **Abbinamento** | Associa termini e definizioni con interfaccia click-to-match |
| 📷 **Foto Quaderno** | Carica foto della seconda prova scritta a mano — l'AI la legge e valuta |
| 💬 **Prompt Library** | Prompt pronti per ChatGPT, Claude, Gemini e altri AI (nessuna API key richiesta) |
| 📊 **Storico Sessioni** | Voti e domande salvati localmente nel browser |
| ↓ **Esporta CSV** | Scarica tutto lo storico come file CSV compatibile con Excel |

---

## 🗂️ Flusso d'uso

```
Passo 1 — Scegli il provider AI e inserisci la API key
Passo 2 — Scegli il tipo di esame: Prima Prova / Seconda Prova / Colloquio
Passo 3 — Configura materia, difficoltà, indirizzo (e modalità per il Colloquio)
→ Inizia l'esame
```

---

## 🤖 Provider AI supportati

| Provider | Testo | Foto quaderno | Note |
|---|---|---|---|
| **Anthropic Claude** | ✅ | ✅ | Consigliato — usa `system_instruction` nativa |
| **OpenAI GPT** | ✅ | ✅ | Usa `gpt-4o` per le foto |
| **Google Gemini** | ✅ | ✅ | Gratuito con limiti |
| **Groq** | ✅ | ❌ | Gratuito, velocissimo |
| **Custom / Self-hosted** | ✅ | ❌ | Ollama, LM Studio, vLLM, qualsiasi API OpenAI-compatibile |

> La tua API key viene salvata solo nel tuo browser — mai inviata a server esterni.

---

## 🏫 Indirizzi scolastici supportati

- Liceo Scientifico · Liceo Classico · Liceo Linguistico · Liceo delle Scienze Umane · Liceo Artistico
- Istituto Tecnico Informatica · Istituto Tecnico Economico · Istituto Professionale
- **Qualsiasi materia** — campo libero, inserisci quello che vuoi

---

## 📁 Struttura del progetto

```
/
├── index.html       — Landing page
├── exam.html        — Simulatore esame (AI setup → tipo → configurazione → esame)
├── prompts.html     — Libreria prompt per ChatGPT, Claude, Gemini (senza API key)
├── RS.md            — Requirements Specification
├── URS.md           — User Requirements Specification
├── LICENSE          — MIT License
└── README.md        — Questo file
```

---

## 🚀 Come usarlo

1. Apri [gguruji1985.github.io/Esame](https://gguruji1985.github.io/Esame)
2. Scegli il provider AI e inserisci la tua API key
3. Scegli il tipo di esame (Prima Prova, Seconda Prova, Colloquio)
4. Configura materia, indirizzo e difficoltà
5. Inizia

### Senza API key
Vai su [prompts.html](https://gguruji1985.github.io/Esame/prompts.html) — personalizza la materia e copia il prompt su ChatGPT, Claude o Gemini.

---

## 🛡️ Privacy & Sicurezza

- Nessun backend — tutto gira nel browser
- La API key non lascia mai il tuo dispositivo (trasmessa solo al provider scelto)
- Nessun analytics, nessun tracking, nessun cookie di terze parti
- Storico e preferenze salvati solo in `localStorage`

---

## 🛠️ Sviluppo locale

Nessuna dipendenza, nessun build step:

```bash
git clone https://github.com/Gguruji1985/Esame.git
cd Esame
# Apri index.html nel browser
```

---

## 📄 Licenza

MIT — vedi [LICENSE](LICENSE)

---

<p align="center">Fatto per gli studenti italiani 🇮🇹</p>
