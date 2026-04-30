
# Natywne Narzędzia (OpenRouter/OpenAI) (01_02_tools)

Korzystanie z wbudowanych narzędzi modelu (web search) obok własnych funkcji.

## 📝 Opis
Demonstruje definicję custom tools (get_weather, send_email) oraz włączenie wbudowanego web_search. Model decyduje kiedy użyć którego narzędzia. Pokazuje różnicę między narzędziami dostawcy (native tools) a własnymi funkcjami. W kodzie zdefiniowane są dwa custom tools z JSON Schema, implementacja ich logiki oraz helper do mapowania na OpenAI/OpenRouter format.

## 🎯 Zastosowania
- Agenci którzy muszą korzystać zarówno z wbudowanego search jak i custom integracji
- Weatherboty z realtime danymi pogodowymi i wysyłaniem raportów mailem
- Asystenci który mogą zarówno przeglądać sieć jak i wywoływać API
- Systemy z hybrydowymi toolsetami (native + custom)

## 💡 Zapamiętaj
- Native web search ma różne nazwy: `web_search_preview` (OpenAI), `:online` lub `web` plugin (OpenRouter)
- Custom tools mają pełną kontrolę nad argumentami i odpowiedziami — trzeba obsłużyć walidację
- Helper `buildResponsesRequest()` mapuje narzędzia na format odpowiedniego dostawcy

## 🔧 Szczegóły
- **Lekcja**: [S01E02 - Techniki łączenia modelu z narzędziami](../../index.html#S01E02)
- **Tagi**: `web-search`, `native-tools`, `function-calling`, `openai`, `openrouter`
- **Narzędzia**: `OpenAI Responses API`, `OpenRouter`, `web search`, `function calling`, `Zod`
- **Uruchomienie**: `npm run lesson2:tools`

---

## 🛠️ Technical Details / Jak to działa

# 01_02_tools

Minimal tool use with the Responses API — the model can use provider-native web search, then send the result through a mocked email tool.

## Run

```bash
bun run lesson2:tools
```

Backward-compatible alias:

```bash
bun run lesson2:minimal
```

## What it does

1. Defines two custom tools: `get_weather` and `send_email`
2. Enables provider-native web search through a shared helper in `config.js`
3. Sends the user message and available tools to the Responses API
4. Executes each tool in regular JavaScript
5. Sends the tool results back to the model
6. Prints the final natural-language answer

## Tools

| Tool | Description |
|------|-------------|
| `get_weather` | Return mock weather data for a city |
| `send_email` | Return a mocked confirmation that an email was sent |
| built-in web search | OpenAI uses `web_search_preview`; OpenRouter uses `:online` or the `web` plugin |
