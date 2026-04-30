
# Generator daily ops z delegacją (02_04_ops)

Orchestrator deleguje zadania specjalistom: agent poczty, kalendarza, notatek.

## 📝 Opis
System multi-agentic z orkiestratorem, który czyta workflow z pliku i deleguje zadania do specjalistycznych agentów (poczta, kalendarz, zadania, notatki). Każdy agent ma własną instancję konwersacji z limitem głębokości 3. Szablony agentów definiowane w frontmatter markdown (model, tools, system prompt). Wynik syntetyzowany jest w daily ops summary.

## 🎯 Zastosowania
- Automatyczne generowanie dziennych raportów biznesowych
- Delegacja złożonych procesów do wyspecjalizowanych agentów
- Orkiestracja multi-step workflows z hierarchią decyzji

## 💡 Zapamiętaj
- Multi-agent system wymaga jasnej specjalizacji każdego agenta
- Delegacja z limitem głębokości zapobiega nieskończonym pętlom
- Markdown frontmatter to elegancki sposób definiowania konfiguracji agenta

## 🔧 Szczegóły
- **Lekcja**: [S02E04 - Organizowanie kontekstu dla wielu wątków](../../index.html#S02E04)
- **Tagi**: `multi-agent`, `delegation`, `orchestration`, `automation`
- **Narzędzia**: `gray-matter`, `openai`
- **Uruchomienie**: `npm run lesson9:ops`

---

## 🛠️ Technical Details / Jak to działa

# 02_04_ops

Multi-agent daily ops generator with task delegation.

## Run

```bash
npm run lesson9:ops
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.

## What it does

1. Loads agent templates from `workspace/agents/*.agent.md` (orchestrator, mail, calendar, tasks, notes)
2. The orchestrator reads the workflow from `workspace/workflows/daily-ops.md`
3. Delegates data-gathering to specialist agents (mail, calendar, tasks, notes)
4. Synthesizes results against goals and history
5. Writes a daily ops summary to `workspace/output/YYYY-MM-DD.md`

## Notes

Agent definitions live in markdown frontmatter (model, tools, system prompt). The orchestrator delegates via a `delegate` tool — each sub-agent runs in its own conversation loop with a depth limit of 3.
