
# Observability — śledzenie agentów z Langfuse (03_01_observability)

Minimalny serwer agenta z Langfuse — tracing requestów, narzędzi i generowania na granicy adaptera.

## 📝 Opis
Serwer HTTP (Hono) z wieloturnowym pętlem agenta i narzędziami get_current_time oraz sum_numbers. Każde żądanie opakowywane jest w ślad Langfuse z hierarchią: chat-request → agent → generation#N / tool#N. Ślady są flushowane po requestach i przy zamknięciu serwera, by minimalizować stratę danych. Tracing inicjalizowany raz przy starcie i degraduje gracefully bez kredencjałów Langfuse.

## 🎯 Zastosowania
- Monitorowanie wydajności wieloturnowych agentów w produkcji
- Diagnozowanie problemów w łańcuchu zapytań i narzędzi
- Audytowalność ścieżek wykonania agenta dla compliance

## 💡 Zapamiętaj
- Integracja tracingu na granicy adaptera daje holistyczne pokrycie
- Hierarchia spanów odzwierciedla strukturę agenta (turn → tool / generation)
- Graceful degradation bez konfiguracji tracingu — nie blokuje developmentu

## 🔧 Szczegóły
- **Lekcja**: [S03E01 - Obserwowanie i ewaluacja](../../index.html#S03E01)
- **Tagi**: `langfuse`, `tracing`, `opentelemetry`, `agent-server`, `hono`
- **Narzędzia**: `Hono`, `Langfuse`, `OpenTelemetry`, `OpenAI / OpenRouter`
- **Uruchomienie**: `npm run lesson11:observability`

---

## 🛠️ Technical Details / Jak to działa

# 03_01_observability

Minimal agent server with Langfuse tracing wired at the adapter boundary.

## Run

```bash
npm run lesson11:observability
```

In a **separate terminal**, run the demo client:

```bash
npm run lesson11:observability:demo
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.
3. Optional: set `LANGFUSE_PUBLIC_KEY`, `LANGFUSE_SECRET_KEY`, and `LANGFUSE_BASE_URL` in root `.env` or local `.env` for tracing (degrades gracefully when missing).

## What it does

1. Starts an HTTP server with `POST /api/chat`, `GET /api/sessions`, and `GET /api/health`
2. Runs a multi-turn agent loop (Alice) with `get_current_time` and `sum_numbers` tools
3. Wraps every request in a Langfuse trace with explicit span hierarchy: `chat-request` → `alice` → `generation#N` / `tool#N`
4. Flushes traces after every request and on shutdown to reduce trace loss

## Notes

The server runs on `http://localhost:3000` by default (override with `PORT`). Tracing is initialized once at startup and skipped when Langfuse credentials are missing. The demo script sends a multi-turn conversation and prints responses.
