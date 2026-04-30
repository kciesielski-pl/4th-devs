
# Agentic RAG z multi-step retrieval (02_01_agentic_rag)

Agent decyduje sam, które fragmenty dokumentów przeszukać i kiedy iteracyjnie pogłębić query.

## 📝 Opis
Projekt demonstruje inteligentne wyszukiwanie informacji z dokumentów poprzez agentic loop. Model autonomicznie decyduje, jakie pliki i fragmenty są mu potrzebne do odpowiedzi. System utrzymuje historię rozmowy dla pytań uzupełniających i iteruje przez różne kąty wyszukiwania (synonimy, powiązane terminy). Wyniki przechowywane są z dostępem przez MCP file server.

## 🎯 Zastosowania
- Asystent dokumentacji dla dużych zbiorów tekstowych
- Wyszukiwanie analityczne w bazach wiedzy korporacyjnej
- Chatbot wewnętrzny dla zespołów zarządzających kompleksowymi procesami

## 💡 Zapamiętaj
- Model może autonomicznie decydować o kolejnych krokach wyszukiwania
- MCP tools integrują się z agentic loop dla dynamicznego dostępu do plików
- Historia konwersacji umożliwia naturalne follow-upy bez powtarzania kontekstu

## 🔧 Szczegóły
- **Lekcja**: [S02E01 - Zarządzanie kontekstem w konwersacji](../../index.html#S02E01)
- **Tagi**: `rag`, `multi-step`, `mcp-tools`, `conversational`, `iterative-search`
- **Narzędzia**: `@modelcontextprotocol/sdk`, `OpenAI API`
- **Uruchomienie**: `npm run lesson6:agentic_rag`

---

## 🛠️ Technical Details / Jak to działa

# 02_01_agentic_rag

Agentic RAG with multi-step retrieval over MCP file tools.

## Run

```bash
npm run lesson6:agentic_rag
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.

## What it does

1. Connects to an MCP file server (`list`, `search`, `read`)
2. Runs an agentic loop — the model decides which files to scan, search, and read
3. Iterates through multiple search angles (synonyms, related terms) before answering
4. Maintains conversation history for follow-up questions

## Notes

On startup the agent asks for confirmation because it can consume a noticeable number of tokens. A pre-recorded example session is available in `demo/example.md`. Use `clear` to reset conversation and `exit` to quit the REPL.
