
# File & Email Agent z Confirmacją (01_05_confirmation)

Agent z wysyłaniem emaili poprzedzonym manual confirmation i whitelist enforcement.

## 📝 Opis
Interaktywny agent (REPL) mogący czytać/pisać pliki (MCP), wysyłać emaili (Resend API). Kluczowa funkcja: send_email zwraca special status, pyta użytkownika w terminalu czy potwierdzić. Whitelist w workspace/whitelist.json kontroluje które emaili mogą być wysłane. Demonstruje safety pattern — agent nie może działać bez approval.

## 🎯 Zastosowania
- Email agents które muszą mieć human approval przed wysłaniem
- File generation z approval workflow
- Systemy z audit trail — każda akcja tracked i confirmed
- Agenci dostępni mniej zaawansowanym użytkowników — safety guard

## 💡 Zapamiętaj
- Whitelist pattern — `user@example.com` exact, `@example.com` domain-level
- Terminal confirmation — `rl.question()` blocks agentic loop, czeka na approval
- Tool result + confirmation status — agent widzi rejection, może retry z innym adresem
- Resend API — dedicated email service, better deliverability niż mailgun/sendgrid dla mass

## 🔧 Szczegóły
- **Lekcja**: [S01E05 - Zarządzanie jawnymi oraz niejawnymi limitami modeli](../../index.html#S01E05)
- **Tagi**: `agent-loop`, `file-operations`, `email-sending`, `confirmation`, `whitelist`, `safety`
- **Narzędzia**: `@modelcontextprotocol/sdk`, `Resend API`, `Node.js`
- **Uruchomienie**: `npm run lesson5:confirmation`

---

## 🛠️ Technical Details / Jak to działa

# 01_05_confirmation

Interactive file-and-email agent with whitelist enforcement and a terminal confirmation step before sending email.

## Run

```bash
npm run lesson5:confirmation
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.
3. Set `RESEND_API_KEY` and `RESEND_FROM`.
4. Edit `workspace/whitelist.json` with allowed recipients or domains.

## What it does

1. Connects to the local file MCP server from `mcp.json`
2. Lets the agent read, search, and write workspace files
3. Drafts emails with the model using `gpt-5.4`
4. Requires explicit terminal confirmation before `send_email` is executed

## Notes

The whitelist supports exact emails like `user@example.com` and whole domains like `@example.com`. Use `clear` to reset the conversation and `exit` to quit the REPL.
