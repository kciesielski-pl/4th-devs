
# Agent Graph — wizualizacja sesji i zadań w Cytoscape (05_01_agent_graph)

Runtime traczy sesje, aktorów i zadania jako graf z dashboardem live.

## 📝 Opis
System śledzi runtime context z sessionami, aktorami, zadaniami i relacjami. Architektura top-down z domyślnym layoutem ELK. Dashboard wizualizuje stan systemu w czasie rzeczywistym. Kluczowe koncepty: domain (entities), store (persistencja), scheduler (actor loop), tools (execution). Persistencja w SQLite, dashboard auto-otwiera się w przeglądarce.

## 🎯 Zastosowania
- Debugowanie multi-agent workflows wizualnie
- Wizualizacja hierarchii zadań i delegacji
- Live monitoring stanu sesji w produkcji

## 💡 Zapamiętaj
- Event-driven runtime z domain entities (session, actor, task)
- ELK layout dla automatycznego ułożenia hierarchicznego
- SQLite persistencja + live dashboard = potężny debugger

## 🔧 Szczegóły
- **Lekcja**: [S05E01 - Architektura](../../index.html#S05E01)
- **Tagi**: `graph-visualization`, `cytoscape`, `session-tracking`, `task-hierarchy`, `dashboard`
- **Narzędzia**: `cytoscape`, `cytoscape-elk`, `elkjs`, `SQLite`, `OpenAI / OpenRouter`
- **Uruchomienie**: `npm run lesson21:agent_graph`

---

## 🛠️ Technical Details / Jak to działa

src/
├── domain.ts        91 lines  — entity types
├── store.ts         59 lines  — generic file store
├── log.ts           91 lines  — colored terminal logger
├── llm.ts          138 lines  — OpenAI Responses API client
├── runtime.ts      113 lines  — Runtime context + entity helpers
├── tools.ts        390 lines  — tool definitions, actor configs, executeToolCall, artifact I/O
├── scheduler.ts    292 lines  — graph queries, context builder, actor loop, processSession
└── index.ts        152 lines  — demo scenario