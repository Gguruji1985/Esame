# 🎓 MaturaAI — Simulatore Esame di Maturità

> Preparati all'esame di maturità con l'intelligenza artificiale. Simula scritto, orale e seconda prova per qualsiasi materia e indirizzo scolastico.

**🔗 Live:** [gguruji1985.github.io/Esame](https://gguruji1985.github.io/Esame)

---

## ✨ Funzionalità

| Funzione | Descrizione |
|---|---|
| 🎯 **Scelta multipla** | Domande a 4 opzioni con timer, feedback istantaneo e spiegazione |
| ✍️ **Risposta aperta** | L'AI genera domande e valuta la risposta da 1 a 10 |
| 🎤 **Simulazione orale** | L'AI interpreta la commissione — rispondi come al vero esame |
| 📄 **Seconda prova** | Traccia ministeriale completa (prima parte + seconda parte) in stile reale |
| 📷 **Foto quaderno** | Carica le foto della seconda prova svolta a mano — l'AI la legge e valuta |
| 💬 **Prompt Library** | Prompt pronti per usare ChatGPT, Claude, Gemini e altri AI |
| 📊 **Storico sessioni** | Voti e domande salvati localmente nel browser |

---

## 🤖 Provider AI supportati

| Provider | Testo | Foto quaderno | Note |
|---|---|---|---|
| **Anthropic Claude** | ✅ | ✅ | Consigliato |
| **OpenAI GPT** | ✅ | ✅ | Usa gpt-4o per le foto |
| **Google Gemini** | ✅ | ✅ | Gratuito con limiti |
| **Groq** | ✅ | ❌ | Gratuito, velocissimo |
| **Custom / Self-hosted** | ✅ | ❌ | Ollama, LM Studio, vLLM, qualsiasi API OpenAI-compatibile |

> La tua API key viene usata direttamente dal browser — mai inviata a server esterni.

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
├── exam.html        — Simulatore esame (AI setup → configurazione → esame)
├── prompts.html     — Libreria prompt per ChatGPT, Claude, Gemini
├── LICENSE          — MIT License
└── README.md        — Questo file
```

---

## 🚀 Come usarlo

1. Apri [gguruji1985.github.io/Esame](https://gguruji1985.github.io/Esame)
2. Scegli il tuo provider AI e inserisci la tua API key
3. Seleziona materia, indirizzo, modalità e difficoltà
4. Inizia l'esame

### Usare i prompt senza API key
Vai su [prompts.html](https://gguruji1985.github.io/Esame/prompts.html) — personalizza la materia e copia il prompt su ChatGPT, Claude o Gemini.

---

## 🛠️ Sviluppo locale

Nessuna dipendenza, nessun build step. Basta clonare e aprire nel browser:

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
