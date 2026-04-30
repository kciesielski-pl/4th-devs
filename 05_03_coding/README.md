
# Coding agent — MCP + rolling memory (05_03_coding)

Mały coding agent z explicit pętlą, MCP file tools, kompaktowaniem pamięci.

## 📝 Opis
Agent z jawną pętlą (turn-based), dostęp do filesystemu via MCP, rolling memory. Pracuje w workspace/. Komendy: /demo (Snake game), /clear (nowa sesja), /quit. Sesja loguje strukturyzownie, history kompaktowane gdy rośnie. Reasoning support.

## 🎯 Zastosowania
- Generowanie/edycja kodu w lokalnym workspace
- Punkt startowy dla custom coding agenta (alternatywa Cursor/Claude)
- Edukacyjny: jak zbudować mini-Cursor od zera

## 💡 Zapamiętaj
- Explicit agent loop > streaming gdy potrzebna kontrola debugowania
- Memory compaction kluczowy dla długich sesji kodowania
- MCP file ops to wspólny standard dla coding agentów

## 🔧 Szczegóły
- **Lekcja**: [S05E03 - Rozwój funkcjonalności](../../index.html#S05E03)
- **Tagi**: `coding-agent`, `mcp-files`, `agent-loop`, `memory-compaction`, `cli`
- **Narzędzia**: `@modelcontextprotocol/sdk`, `files-mcp`, `OpenAI / OpenRouter`
- **Uruchomienie**: `npm run lesson23:coding`
