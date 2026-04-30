
# Podstawowe Interakcje (Chat) (01_01_interaction)

Zarządzanie historią konwersacji w multi-turn chat z pełnym kontekstem.

## 📝 Opis
Prosty przykład demonstrujący multi-turn conversation z Responses API. Model otrzymuje pytanie ('Ile to 25 * 48?'), następnie odpowiada, a w drugim turnie otrzymuje kontekst całej poprzedniej wymiany ('Podziel to przez 4'), co pozwala na zrozumienie kontekstu. Pokazuje jak budować i przesyłać historię konwersacji oraz jak śledzić token reasoning.

## 🎯 Zastosowania
- Chatboty interaktywne wymagające pamięci sesji
- Asystenci, którzy muszą odnosić się do wcześniejszych stwierdzeń użytkownika
- Debugowanie logiki poprzez wieloetapowe pytania i odpowiedzi
- Integracja z chatami wymagającymi ciągłości dialogu

## 💡 Zapamiętaj
- Zawsze przesyłaj pełną historię (history) — model nie pamięta między requestami
- `reasoning` tokens pozwalają zobaczyć ile tokeny kosztowało myślenie modelu
- Struktura `{type: 'message', role: '...', content: '...'}` jest kluczowa dla poprawnego parsowania

## 🔧 Szczegóły
- **Lekcja**: [S01E01 - Sterowanie zachowaniem modelu z pomocą kodu](../../index.html#S01E01)
- **Tagi**: `multi-turn`, `chat`, `conversation-history`, `openai`, `node`
- **Narzędzia**: `OpenAI Responses API`, `fetch`, `Node.js`
- **Uruchomienie**: `npm run lesson1:interaction`

---

## 🛠️ Technical Details / Jak to działa

# 01_01_interaction

Multi-turn conversation with the Responses API using full input history.

## Run

```bash
npm run lesson1:interaction
```

## What it does

1. Sends a question: "What is 25 * 48?"
2. Sends a follow-up: "Divide that by 4." with the previous exchange as context
3. Prints both answers with reasoning token counts
