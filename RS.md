# RS — Requirements Specification
## MaturaAI · Simulatore Esame di Maturità

**Version:** 1.0  
**Date:** May 2026  
**Author:** Gguruji1985

---

## 1. Functional Requirements

### 1.1 Exam Modes

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | The system shall generate multiple choice questions with exactly 4 options (A, B, C, D) for any subject and difficulty | High |
| FR-02 | The system shall evaluate the selected answer as correct or incorrect and display an AI-generated explanation | High |
| FR-03 | The system shall generate open-ended questions and evaluate written answers with a grade from 1 to 10 | High |
| FR-04 | The system shall provide feedback on open answers including: overall comment, strengths, weaknesses | High |
| FR-05 | The system shall simulate an oral exam with the AI acting as commission member | High |
| FR-06 | The system shall evaluate oral answers on: delivery (esposizione), content (contenuto), and provide a tip (consiglio) | High |
| FR-07 | The system shall generate second written exam topics with: premessa, caso professionale, prima parte (5+ mandatory points), seconda parte (4 optional quesiti), allegati | High |
| FR-08 | The second written exam shall follow the real Italian ministerial format used in A038 exams | High |
| FR-09 | The system shall evaluate seconda prova submissions using ministerial criteria: pertinenza, completezza, correttezza tecnica, esposizione | High |
| FR-10 | The system shall accept image uploads (JPG, PNG, HEIC) of handwritten answers for AI vision grading | Medium |
| FR-11 | The system shall support uploading multiple images (multiple pages) per submission | Medium |

### 1.2 Configuration

| ID | Requirement | Priority |
|---|---|---|
| FR-12 | The system shall allow free-text subject input, not limited to a preset list | High |
| FR-13 | The system shall provide subject presets covering all major Italian school tracks | Medium |
| FR-14 | The system shall allow selection of school track (indirizzo) to contextualize questions | High |
| FR-15 | The system shall support three difficulty levels: Base, Medio, Avanzato | High |
| FR-16 | The system shall support a configurable countdown timer for multiple choice mode (None, 60s, 120s, 5min) | Medium |
| FR-17 | Timer shall only apply to multiple choice mode — open, oral and seconda prova modes have no timer | High |
| FR-18 | When timer expires in MC mode, the question shall be auto-marked as incorrect | Medium |

### 1.3 AI Provider Management

| ID | Requirement | Priority |
|---|---|---|
| FR-19 | The system shall support Anthropic Claude API (claude-sonnet-4) | High |
| FR-20 | The system shall support OpenAI API (gpt-4o-mini for text, gpt-4o for vision) | High |
| FR-21 | The system shall support Google Gemini API (gemini-1.5-flash) | High |
| FR-22 | The system shall support Groq API (llama-3.3-70b-versatile) | High |
| FR-23 | The system shall support custom OpenAI-compatible endpoints with user-specified URL and model name | Medium |
| FR-24 | Image upload for grading shall only be available with Anthropic, OpenAI and Gemini providers | High |
| FR-25 | The system shall clearly label which providers support image upload | High |
| FR-26 | API keys shall be stored in localStorage only when the "remember" checkbox is checked | High |
| FR-27 | API keys shall never be transmitted to any server other than the chosen AI provider | High |

### 1.4 Scoring & History

| ID | Requirement | Priority |
|---|---|---|
| FR-28 | The system shall track correct answers and total questions in the current session | High |
| FR-29 | The system shall display a live grade (1-10) based on session performance | High |
| FR-30 | The system shall display a progress bar reflecting current score percentage | Medium |
| FR-31 | Each completed question shall be saved to localStorage history (max 100 entries) | High |
| FR-32 | History shall display: question text, subject, mode, date, grade/result | Medium |
| FR-33 | The user shall be able to clear all history | Medium |

### 1.5 Prompt Library

| ID | Requirement | Priority |
|---|---|---|
| FR-34 | The system shall provide a standalone page with ready-to-copy prompts for all exam modes | Medium |
| FR-35 | Prompts shall be dynamically updated when the user changes subject, track or difficulty | High |
| FR-36 | Each prompt shall have a one-click copy button with visual confirmation | High |
| FR-37 | The prompt library shall include direct links to ChatGPT, Claude, Gemini, Copilot and Le Chat | Low |

---

## 2. Non-Functional Requirements

### 2.1 Performance

| ID | Requirement |
|---|---|
| NFR-01 | AI response time shall be under 10 seconds for standard questions on a normal internet connection |
| NFR-02 | Page load time shall be under 3 seconds on a 4G mobile connection |
| NFR-03 | The application shall function with no backend — all logic runs client-side |

### 2.2 Usability

| ID | Requirement |
|---|---|
| NFR-04 | The interface shall be fully usable on mobile screens (min 320px width) |
| NFR-05 | All interactive elements shall meet minimum 44px touch target size on mobile |
| NFR-06 | Font sizes shall be legible without zooming on mobile (min 12px) |
| NFR-07 | The language of the interface shall be Italian |
| NFR-08 | Error messages shall be displayed in Italian and describe the problem clearly |

### 2.3 Security & Privacy

| ID | Requirement |
|---|---|
| NFR-09 | No user data shall be sent to any server operated by MaturaAI |
| NFR-10 | API keys shall only be transmitted directly to the chosen AI provider's API endpoint |
| NFR-11 | No analytics, tracking scripts or third-party data collection shall be included |
| NFR-12 | All data (history, keys) shall be stored in browser localStorage only |

### 2.4 Compatibility

| ID | Requirement |
|---|---|
| NFR-13 | The application shall work on Chrome, Firefox, Safari and Edge (latest 2 versions) |
| NFR-14 | The application shall work on iOS Safari 15+ and Android Chrome 100+ |
| NFR-15 | The application shall function as static HTML/CSS/JS — no build step, no Node.js required |
| NFR-16 | The application shall be deployable on GitHub Pages without configuration |

### 2.5 Maintainability

| ID | Requirement |
|---|---|
| NFR-17 | Each exam mode (MC, open, oral, seconda) shall be implemented as a separate JS function |
| NFR-18 | AI provider logic shall be isolated in a single `callAI()` function |
| NFR-19 | All JSON responses from AI shall pass through a `safeParseJSON()` sanitizer |
| NFR-20 | Adding a new AI provider shall require changes only to the `PROVS` object and `callAI()` function |

---

## 3. Traceability Matrix

| User Story | Functional Requirements |
|---|---|
| US-01 | FR-01, FR-02 |
| US-02 | FR-03, FR-04 |
| US-03 | FR-05, FR-06 |
| US-04 | FR-07, FR-08, FR-09 |
| US-05 | FR-10, FR-11, FR-24, FR-25 |
| US-06 | FR-12, FR-13 |
| US-07 | FR-14 |
| US-08 | FR-16, FR-17, FR-18 |
| US-09 | FR-15 |
| US-10 | FR-19, FR-20, FR-21, FR-22 |
| US-11 | FR-23 |
| US-12 | FR-26, FR-27, NFR-09, NFR-10 |
| US-13 | FR-34, FR-35, FR-36, FR-37 |
| US-14 | FR-28, FR-29, FR-30 |
| US-15 | FR-31, FR-32, FR-33 |

---

## 4. Change Log — v1.1 (May 2026)

### 4.1 New Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-38 | The system shall provide a Prima Prova mode with three sub-types: Tipologia A (literary analysis), Tipologia B (argumentative), Tipologia C (current affairs) | High |
| FR-39 | Prima Prova Tipologia A shall include an authentic Italian literary excerpt from a 20th-century author with contextual notes and 5 structured analysis tasks | High |
| FR-40 | Prima Prova shall evaluate submissions on: pertinenza, linguistica, argomentazione, originalità with grade 1-10 | High |
| FR-41 | The system shall provide a Vero/Falso mode generating 5 true/false statements with per-item explanation | High |
| FR-42 | The system shall provide a Completa la Frase mode with fill-in-the-blank sentences and automatic answer verification | High |
| FR-43 | The system shall provide an Abbinamento mode with 5 term-definition pairs, shuffled definitions, click-to-match UI | High |
| FR-44 | The system shall present a session summary screen on exit showing: total questions, % correct, grade, subject | Medium |
| FR-45 | The system shall allow export of full history as UTF-8 CSV file | Medium |
| FR-46 | A retry button shall appear on AI errors instead of forcing a new question | Medium |
| FR-47 | The exam flow shall be restructured into 3 steps: AI setup → exam type selection → configuration | High |
| FR-48 | Exam type selection (Passo 2) shall offer three distinct paths: Prima Prova, Seconda Prova, Colloquio Orale | High |
| FR-49 | Colloquio Orale shall expose all quiz modes: Scelta Multipla, Risposta Aperta, Simulazione Orale, Vero/Falso, Completa la Frase, Abbinamento | High |

### 4.2 Updated Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-18 | AI provider logic is isolated in a single merged `callAI(sys, user, maxTokens, images?)` function |
| NFR-21 | Gemini provider shall use `system_instruction` field for system prompts (not concatenation) |
| NFR-22 | API key shall be stored in a JS variable at authentication time, not re-read from DOM on each call |
| NFR-23 | Validation errors shall be displayed as inline DOM elements — no `alert()` calls |
