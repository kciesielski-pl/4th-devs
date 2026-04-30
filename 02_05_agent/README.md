
# Agent z inżynierią kontekstu (observer/reflector) (02_05_agent)

Agent kompresuje starą historię do obserwacji, obserwacje do refleksji — oszczędza tokeny.

## 📝 Opis
HTTP server (Hono) z sesyjnymi konwersacjami. Gdy rozmowa rośnie, Observer kompresuje starsze wiadomości w strukturyzowane Observations. Gdy Observations są duże, Reflector je dalej destyluje. Kontekst agenta zawsze zawiera: skompresowaną historię (observations) + świeże raw messages. Pamięć persystuje do workspace/memory/. Endpointy: POST /api/chat, GET /api/sessions, GET /api/sessions/:id/memory, POST /api/sessions/:id/flush.

## 🎯 Zastosowania
- Długie konwersacje bez eksplozji zużycia tokenów
- Chatboty o nieskończonym horyzoncie czasowym
- Systemy z samoświadością historii rozmowy

## 💡 Zapamiętaj
- Observer-Reflector pattern skutecznie redukuje zużycie tokenów w długich sesjach
- Kompresja musi zachowywać informacje krytyczne dla zrozumienia kontekstu
- Sesyjna architektura umożliwia skalę wielu jednoczesnych konwersacji

## 🔧 Szczegóły
- **Lekcja**: [S02E05 - Projektowanie agentów](../../index.html#S02E05)
- **Tagi**: `context-engineering`, `memory-compression`, `observer-reflector`, `token-optimization`
- **Narzędzia**: `hono`, `@hono/node-server`, `openai`
- **Uruchomienie**: `npm run lesson10:agent`

---

## 🛠️ Technical Details / Jak to działa

# 02_05_agent

Context engineering agent with observational memory (observer/reflector pattern).

## Run

From the **repo root**, first install dependencies, then start the agent server and run the demo:

```bash
npm run lesson10:install
npm run lesson10:agent
```

In a **separate terminal**, run the demo script that sends a multi-phase conversation to the agent:

```bash
npm run lesson10:agent:demo
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.

## What it does

1. Starts an HTTP server (`POST /api/chat`) with session-based conversations
2. As conversation grows, an **observer** compresses older messages into structured observations
3. When observations grow too large, a **reflector** distills them further
4. The agent's context window always contains: compressed history (observations) + recent raw messages
5. Memory logs are persisted to `workspace/memory/`

## Notes

The server runs on `http://localhost:3001` by default (override with `PORT` env var). Use `GET /api/sessions` to list sessions and `POST /api/sessions/:id/flush` to force-compress remaining messages.

