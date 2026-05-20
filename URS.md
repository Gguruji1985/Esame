# URS — User Requirements Specification
## MaturaAI · Simulatore Esame di Maturità

**Version:** 1.0  
**Date:** May 2026  
**Author:** Gguruji1985

---

## 1. Purpose

MaturaAI is a browser-based application that allows Italian high school students to practice for the *Esame di Maturità* using AI-generated exam simulations across all school tracks and subjects.

---

## 2. User Needs

| ID | User Need |
|---|---|
| UN-01 | Students need to practice exam questions for any subject without a tutor |
| UN-02 | Students need realistic feedback on their answers with a grade |
| UN-03 | Students need to simulate all parts of the maturità (written, oral, second written exam) |
| UN-04 | Students need to use the tool without creating an account or paying a subscription |
| UN-05 | Students need to track their progress over multiple sessions |
| UN-06 | Students with no API key need to be able to use the tool via ChatGPT or other AI chatbots |
| UN-07 | Students need to submit handwritten answers (photographed from their notebook) for grading |
| UN-08 | Students need to choose their preferred AI provider |
| UN-09 | The tool must work on mobile devices |
| UN-10 | The second written exam must closely resemble real ministerial exam papers |

---

## 3. User Stories

### 3.1 Exam Simulation

**US-01** — As a student, I want to receive a multiple choice question with 4 options and get instant feedback so I can verify my knowledge quickly.

**US-02** — As a student, I want to write a full open-ended answer and receive a grade from 1 to 10 with detailed feedback (strengths, weaknesses) so I can improve my written skills.

**US-03** — As a student, I want to simulate an oral exam where the AI plays the role of the commission and asks me follow-up questions so I can practice speaking under pressure.

**US-04** — As a student, I want to receive a complete *seconda prova* topic with a *premessa*, *caso professionale*, mandatory first part and optional second part (4 quesiti, choose 2) so I can practice the full exam format.

**US-05** — As a student, I want to photograph my handwritten *seconda prova* and upload it to get AI grading so I don't have to retype everything.

### 3.2 Configuration

**US-06** — As a student, I want to type any subject freely (not just a fixed list) so the simulator works for my specific school track.

**US-07** — As a student, I want to select my school track (Liceo Scientifico, Tecnico IT, etc.) so the questions are appropriate to my curriculum.

**US-08** — As a student, I want to set a countdown timer on multiple choice questions so I can practice under exam conditions.

**US-09** — As a student, I want to choose between Base, Medium and Advanced difficulty so I can adapt the simulation to my preparation level.

### 3.3 AI Provider

**US-10** — As a student, I want to use my own API key with Anthropic, OpenAI, Gemini or Groq so I can control costs and choose quality.

**US-11** — As a student, I want to connect a self-hosted AI (Ollama, LM Studio) via a custom endpoint so I can use the tool without cloud API costs.

**US-12** — As a student, I want my API key to be stored only in my browser and never sent to a server so my credentials are safe.

**US-13** — As a student with no API key, I want ready-made prompts I can copy and paste into ChatGPT or Claude so I can still practice for free.

### 3.4 History & Results

**US-14** — As a student, I want to see my correct/total score and average grade during a session so I can monitor my performance.

**US-15** — As a student, I want to see my history of past questions and grades saved locally so I can review my progress over time.

---

## 4. Constraints

| ID | Constraint |
|---|---|
| CON-01 | No backend server — all processing happens in the browser |
| CON-02 | No user accounts or registration required |
| CON-03 | API keys must never leave the user's browser |
| CON-04 | Must work as static files hosted on GitHub Pages |
| CON-05 | No external JS frameworks or build tools |
| CON-06 | Must be usable on mobile (iOS Safari, Android Chrome) |

---

## 5. Out of Scope

- First written exam (*prima prova*) simulation (Italian essay writing) — not planned
- Collaborative/multiplayer features
- Teacher dashboard or class management
- Offline mode (requires internet for AI API calls)

---

## 6. Change Log — v1.1 (May 2026)

### New User Needs

| ID | User Need |
|---|---|
| UN-11 | Students need to practice the Italian first written exam (prima prova) in all three official typologies |
| UN-12 | Students need quick drill modes (true/false, fill-in-the-blank, matching) for fast revision |
| UN-13 | Students need a clear exam-type selector to avoid configuring irrelevant options |
| UN-14 | Students need a session summary at the end of each practice session |
| UN-15 | Students need to export their history for offline review or sharing with a teacher |

### New User Stories

**US-16** — As a student, I want to receive a complete Prima Prova traccia in Tipologia A, B or C and get it evaluated with ministerial criteria so I can practice the full Italian written exam.

**US-17** — As a student, I want to do a Vero/Falso quiz with 5 statements and instant explanations so I can quickly verify my factual knowledge.

**US-18** — As a student, I want to complete fill-in-the-blank sentences and see the correct answers so I can memorize key terminology.

**US-19** — As a student, I want to match terms with definitions by clicking so I can review vocabulary interactively.

**US-20** — As a student, I want to see a summary of my session (questions done, score, grade) before leaving so I can track my progress.

**US-21** — As a student, I want to export my history as a CSV so I can review it offline or share it with my teacher.

**US-22** — As a student, I want a retry button when the AI fails instead of being forced to skip to the next question.

**US-23** — As a student, I want the app to guide me through exam type selection first (Prima Prova / Seconda Prova / Colloquio) so the configuration screen only shows relevant options.
