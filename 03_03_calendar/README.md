
# Calendar — dwufazowy agent zdarzeń + powiadomień (03_03_calendar)

Faza 1: tworzenie wydarzeń z NL. Faza 2: webhook → dokładnie 1 powiadomienie per event.

## 📝 Opis
Dwie sekwencyjne fazy w jednym procesie. Faza 1 (Add events): przetwarza requesty planowania użytkownika z kontekstem czasu i lokalizacji, używając tools kalendarza. Faza 2 (Notification): przetwarza payload webhooka zbliżających się wydarzeń i wysyła dokładnie jedno powiadomienie per event używając tools notyfikacji. Każda faza ma dedykowany toolset i sesję agenta.

## 🎯 Zastosowania
- Asystent planowania z naturalnego języka
- Automatyczne powiadomienia o zdarzeniach z webhooka
- Integracja z systemami planowania

## 💡 Zapamiętaj
- Separacja faz upraszcza prompt każdej z nich
- Dedykowane toolsety na fazę zapobiegają błędom (np. notify w fazie create)
- Deterministic notification: dokładnie jedno per event

## 🔧 Szczegóły
- **Lekcja**: [S03E03 - Kontekstowy feedback wspierający skuteczność agentów](../../index.html#S03E03)
- **Tagi**: `calendar`, `events`, `notifications`, `webhook`, `scheduling`
- **Narzędzia**: `OpenAI / OpenRouter`
- **Uruchomienie**: `npm run lesson13:calendar`

---

## 🛠️ Technical Details / Jak to działa

# 03_03_calendar

Calendar agent with add-events and notification-webhook phases.

## Run

```bash
npm run lesson13:calendar
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.
3. Optional: `AI_PROVIDER`, `MODEL` (default `gpt-5.2`).

## What it does

1. **Add events phase** — processes a series of user scheduling requests, each with a time context and location, using calendar tools to create events
2. **Notification phase** — processes upcoming-event webhook payloads and sends exactly one notification per event using notification tools

## Notes

Both phases run sequentially in a single process. Each phase uses its own agent session with dedicated tools.
