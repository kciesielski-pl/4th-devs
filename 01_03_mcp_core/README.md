
# Model Context Protocol (MCP) Core (01_03_mcp_core)

Pełny standard komunikacji MCP: tools, resources, prompts, elicitation i sampling.

## 📝 Opis
Demonstruje wszystkie możliwości MCP: tools (calculate), resources (config://project, data://stats), prompts (code-review template). Pokazuje jak client spawna server over stdio, odkrywa dostępne zasoby, wywoła tools i obsługuje sampling (zwrocie do LLM). MCP separuje concerns — server dostarcza tools i dane, client integruje z modelem.

## 🎯 Zastosowania
- Unifikacja dostępu do narzędzi z różnych źródeł (bazy danych, API, lokalne)
- Reużywalne biblioteki prompt'ów i templates w dużych systemach
- Integracja z Claude Desktop lub Cursor dzięki standaryzacji MCP
- Obsługa user confirmations (elicitation) przed wykonaniem kritycznych operacji

## 💡 Zapamiętaj
- MCP oddziela providers (server) od consumers (client) — skaluje się na setki integracji
- Elicitation pozwala serverowi prosić o potwierdzenie użytkownika; sampling robi LLM completion
- Stdio transport — child process communication — idealny dla Claude Desktop i Cursor
- Resources są read-only; Tools są callables — jasna semantyka

## 🔧 Szczegóły
- **Lekcja**: [S01E03 - Projektowanie API dla efektywnej pracy z modelem](../../index.html#S01E03)
- **Tagi**: `mcp`, `tools`, `resources`, `prompts`, `sampling`, `elicitation`
- **Narzędzia**: `@modelcontextprotocol/sdk`, `OpenAI Responses API`, `Zod`, `Node.js`
- **Uruchomienie**: `npm run lesson3:mcp_core`

---

## 🛠️ Technical Details / Jak to działa

# 01_03_mcp_core

Core MCP capabilities over stdio: tools, resources, prompts, elicitation, and sampling.

## Run

```bash
npm run lesson3:mcp_core
```

## What it does

1. Spawns a local MCP server as a subprocess over stdio
2. Lists the available tools, resources, and prompts
3. Calls `calculate` directly through MCP
4. Runs `summarize_with_confirmation` to demonstrate elicitation and sampling

## MCP capabilities

| Type | Name | Description |
|------|------|-------------|
| Tool | `calculate` | Basic arithmetic (add, subtract, multiply, divide) |
| Tool | `summarize_with_confirmation` | Summarizes text after elicitation (user confirmation) and sampling (LLM completion) |
| Resource | `config://project` | Static project configuration |
| Resource | `data://stats` | Dynamic runtime statistics |
| Prompt | `code-review` | Code review template with args (code, language, focus) |

## Notes

The client handles sampling with the shared workspace AI config, so setup lives in the root `README.md` and `.env`.
