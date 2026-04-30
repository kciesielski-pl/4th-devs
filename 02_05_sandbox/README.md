
# Agent sandbox z QuickJS (02_05_sandbox)

Agent bezpiecznie wykonuje kod JavaScript w izolowanym środowisku QuickJS.

## 📝 Opis
System łączy się z MCP todo server przez stdio i dynamicznie odkrywa dostępne tools. Ładuje szablon agenta z workspace/agents/sandbox.agent.md. Uruchamia task przez agentic loop. Każde tool call wykonywane jest w sandboxowanym QuickJS environment dla bezpieczeństwa. Demo: tworzy listę zakupów, oznacza mleko jako ukończone, wyświetla pozostałe.

## 🎯 Zastosowania
- Bezpieczne uruchamianie kodu użytkowników bez ryzyka
- Agenci z dynamic tool discovery przez MCP
- Prototypowanie złożonej logiki bez build pipeline'u

## 💡 Zapamiętaj
- QuickJS WASM zapewnia sandboxing dla arbitralnego kodu JavaScript
- MCP tools discovery umożliwia dynamiczne interfejsy bez hardcodingu
- Tool execution context musi być izolowany dla uniknięcia side effects

## 🔧 Szczegóły
- **Lekcja**: [S02E05 - Projektowanie agentów](../../index.html#S02E05)
- **Tagi**: `sandbox`, `mcp`, `tool-discovery`, `quickjs`, `code-execution`
- **Narzędzia**: `@modelcontextprotocol/sdk`, `quickjs-emscripten-core`, `@jitl/quickjs-wasmfile-release-asyncify`
- **Uruchomienie**: `npm run lesson10:sandbox`

---

## 🛠️ Technical Details / Jak to działa

# 02_05_sandbox

MCP sandbox agent with tool discovery and QuickJS code execution.

## Run

```bash
npm run lesson10:sandbox
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.

## What it does

1. Connects to an MCP todo server (`servers/todo.ts`) over stdio
2. Discovers available tools dynamically from the MCP server
3. Loads an agent template from `workspace/agents/sandbox.agent.md`
4. Runs a task (passed as CLI args or a default demo) through an agentic loop
5. Tool calls are executed in a sandboxed QuickJS environment

## Notes

Pass a custom task as CLI arguments: `bun src/index.ts "your task here"`. The default demo creates a shopping list, marks an item complete, and shows remaining items.

...