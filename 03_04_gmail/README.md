
# Gmail — natywne narzędzia z OAuth + Promptfoo (03_04_gmail)

Agent Gmail z 5 natywnymi narzędziami, OAuth i kompletnymi eval suites Promptfoo.

## 📝 Opis
Łączy się z Gmail przez OAuth z 5 narzędziami: gmail_search, gmail_read, gmail_send, gmail_modify, gmail_attachment. Wszystkie wyniki narzędzi mają strukturalną kopertę {data, hint} ze statusem, sugestiami recovery i propozycjami next-action. Discovery-first: search → read → act (nigdy nie wymyśla zawartości). gmail_send auto-drafts gdy odbiorcy spoza whitelist. Eval suites Promptfoo: tool behavior + multi-turn (mocked + live).

## 🎯 Zastosowania
- Łączenie agenta z Gmailem do triage'u maili i automatycznych odpowiedzi
- Asystenci wykonawczy odpowiadający na maile z whitelist
- Bazowy szablon dla Gmail-powered agentów (newsletter triage, follow-upy)

## 💡 Zapamiętaj
- Native API tools > MCP gdy potrzebny pełen kontrol nad responsem
- Structured output envelope {data, hint} dramatycznie ułatwia recovery
- Whitelist + auto-draft to bezpieczny default dla send

## 🔧 Szczegóły
- **Lekcja**: [S03E04 - Budowanie narzędzi na podstawie danych testowych](../../index.html#S03E04)
- **Tagi**: `gmail-api`, `oauth`, `zod`, `promptfoo`, `native-tools`, `evals`
- **Narzędzia**: `Gmail API`, `googleapis`, `Zod`, `Promptfoo`, `OpenAI / OpenRouter`
- **Uruchomienie**: `npm run lesson14:gmail`

---

## 🛠️ Technical Details / Jak to działa

# 03_04_gmail

Native Gmail tools agent with OAuth, Zod schemas, and Promptfoo evals.

## Run

**Step 1** — Authenticate with Google (one-time):

```bash
npm run lesson14:gmail:auth
```

This opens a browser for OAuth consent and saves a refresh token to `.auth/gmail-token.json`. You need a Google Cloud project with Gmail API enabled and a desktop OAuth client — place `credentials.json` in this directory (or set `GMAIL_CREDENTIALS_PATH`).

**Step 2** — Start the agent:

```bash
npm run lesson14:gmail
```

Then ask questions like:
- `Find my latest unread emails`
- `Read the last message from Anna`
- `Reply to the invoice thread saying "Got it, thanks"`

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.
3. Create a Google Cloud project at [console.developers.google.com](https://console.developers.google.com), enable the Gmail API, and download the desktop OAuth client JSON as `credentials.json`.
4. Run `npm run lesson14:gmail:auth` to complete the OAuth flow.
5. Optional: `MODEL` (default `gpt-5.2`), `GMAIL_SEND_WHITELIST` (comma-separated safe recipients).

## What it does

1. Connects to your Gmail via OAuth with five native tools: `gmail_search`, `gmail_read`, `gmail_send`, `gmail_modify`, `gmail_attachment`
2. All tool outputs use a structured `{ data, hint }` envelope with status, recovery suggestions, and next-action proposals
3. Runs a discovery-first agent loop: search → read → act (the agent never invents message content)
4. `gmail_send` auto-drafts when recipients are outside the whitelist — the agent reports this to the user

## Evals (Promptfoo)

Mocked suites (no live Gmail needed):

```bash
cd 03_04_gmail
bun run eval:tools        # tool behavior suites (search, read, send, modify, attachment, errors)
bun run eval:scenarios    # multi-turn scenario suites (readonly, actions, safety)
bun run eval:all          # all mocked suites
```

Live suites (against real Gmail):

```bash
bun run eval:tools:live
bun run eval:scenarios:live
bun run eval:all:live
```

Results are saved to `evals/promptfoo/results/` as HTML reports.

## Notes

Use `bun run probe:shapes` to inspect live Gmail API response shapes for development. Tool specs live in `spec/`, eval configs in `evals/promptfoo/`.
