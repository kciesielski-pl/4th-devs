
# Email — dwufazowy agent triage + draft (03_02_email)

Faza 1: triage z etykietami. Faza 2: izolowane sesje draftu odpowiedzi z scoped KB.

## 📝 Opis
Faza 1 (Triage): czyta wszystkie nieprzeczytane emaile, sprawdza bazę wiedzy, przypisuje etykiety i flaguje wymagające odpowiedzi (bez generowania draftu). Faza 2 (Draft): dla każdego flagowanego maila uruchamia izolowaną sesję z bazą wiedzy ograniczoną do nadawcy i tworzy draft (tylko completion, bez tools). Zawiera lokalne evals dla triażu, izolacji, języka, bezpieczeństwa.

## 🎯 Zastosowania
- Automatyzacja sortowania i kategoryzacji emaili
- Generowanie draftów odpowiedzi z kontekstem konkretnego nadawcy
- Ewaluacja bezpieczeństwa agent-generated content (PII leak, prompt injection)

## 💡 Zapamiętaj
- Podział na fazy (triage → draft) izoluje błędy między etapami
- Izolacja sesji per-nadawca ogranicza wyciek danych z KB
- Wielowymiarowe evals: triage / język / izolacja / bezpieczeństwo

## 🔧 Szczegóły
- **Lekcja**: [S03E02 - Ograniczenia modeli na etapie założeń projektu](../../index.html#S03E02)
- **Tagi**: `email`, `triage`, `knowledge-base`, `isolation`, `evals`
- **Narzędzia**: `Langfuse`, `Zod`, `OpenAI / OpenRouter`
- **Uruchomienie**: `npm run lesson12:email`

---

## 🛠️ Technical Details / Jak to działa

# 03_02_email

Two-phase email agent: triage with labels, then isolated KB-scoped draft sessions.

## Run

```bash
npm run lesson12:email
```

Custom task via CLI args:

```bash
cd 03_02_email && bun src/index.ts "Triage the work inbox only"
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.
3. Optional: `AI_PROVIDER`, `MODEL` (default `gpt-4.1`).

## What it does

1. **Triage phase** — reads all unread emails, checks the knowledge base, assigns labels, and marks emails that need replies (no drafts produced)
2. **Draft phase** — for each reply plan, runs an isolated session with a KB scoped to the sender's account and produces a draft reply (completion only, no tool access)

## Notes

Eval suites are available locally: `cd 03_02_email && bun run eval:triage`, `bun run eval:draft-isolation`, `bun run eval:draft-language`, `bun run eval:malicious-email`, or `bun run eval:all`.
