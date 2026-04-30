
# MCP Native (MCP + Native Tools) (01_03_mcp_native)

Hybrydowy agent łączący MCP tools (weather, time) z native JS tools (calculator).

## 📝 Opis
Pokazuje jak unified agent może używać zarówno MCP tools (get_weather, get_time) jak i native JS functions (calculate, uppercase). W kod MCP tools mapowane są na OpenAI format, native tools też, wszystkie mergowane do jednego toolset'u. Handler map transparentnie routuje do odpowiedniego źródła. Model nie wie i nie musi wiedzieć która tools z jakiego pochodzą.

## 🎯 Zastosowania
- Migracja z custom tools na MCP bez restartowania agentów
- Kombinowanie publicznych MCP servers z proprietary tools
- Testowanie MCP integration z mock native tools zanim się podłączy real server
- Systemy wymagające fallbacków (jeśli MCP niedostępny, użyj native equivalent)

## 💡 Zapamiętaj
- Unifikacja toolset'u: `[...mcpTools, ...nativeTools]` oraz unified handlers
- MCP tools potrzebują `mcpToolsToOpenAI()` konwersji na OpenAI format
- Label każdego tool'u (MCP_LABEL, NATIVE_LABEL) pomaga w debugowaniu i logowaniu
- Agent loop nie widzi różnicy między sourcami — perfektna abstrakcja

## 🔧 Szczegóły
- **Lekcja**: [S01E03 - Projektowanie API dla efektywnej pracy z modelem](../../index.html#S01E03)
- **Tagi**: `mcp`, `function-calling`, `hybrid`, `native-tools`, `agents`
- **Narzędzia**: `@modelcontextprotocol/sdk`, `Zod`, `Node.js`, `OpenAI`
- **Uruchomienie**: `npm run lesson3:mcp_native`

---

## 🛠️ Technical Details / Jak to działa

# 01_03_mcp_native

One agent using both MCP tools and native function tools in the same loop.

## Run

```bash
npm run lesson3:mcp_native
```

## What it does

1. Starts an in-memory MCP server with weather and time tools
2. Adds native tools for calculation and text transformation
3. Exposes all tools to one model as a single toolset
4. Runs a few demo queries, including a mixed-tool example

## Tools

| Tool | Description |
|------|-------------|
| `get_weather` (MCP) | Mock weather data for a city |
| `get_time` (MCP) | Current time in a timezone |
| `calculate` (native) | Basic math (add, subtract, multiply, divide) |
| `uppercase` (native) | Convert text to uppercase |
