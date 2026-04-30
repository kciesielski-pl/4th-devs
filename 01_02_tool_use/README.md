
# Wykorzystanie Narzędzi (Tool Use) (01_02_tool_use)

Pętla Myśl→Działaj→Obserwuj (ReAct) z sandboxed filesystem tools.

## 📝 Opis
Pokazuje pełny workflow tool-callingu: model otrzymuje definicje tools (list_files, read_file, write_file, delete_file, create_directory, file_info), decyduje którą użyć i z jakimi argumentami. Aplikacja wykonuje tool, zwraca rezultat, model analizuje i decyduje czy potrzebuje kolejny tool call. Wszystkie operacje są sandboxed — blokowana jest traversal ścieżek. Maksimalnie 5 kroków tool-callingu.

## 🎯 Zastosowania
- Agenci przeglądający lokalne systemy plików w bezpieczny sposób
- Asystenci mogący czytać i pisać konfiguracje aplikacji
- Sandbox dla GPT'a gdzie może eksperymentować bez dostępu do systemu
- Automatyzacja zadań wymagających wielu operacji plikowych

## 💡 Zapamiętaj
- ReAct loop: ask model → get tool_calls → execute → append results → repeat
- Sandboxing wymaga aktywnego blokowania path traversal (`../` patterns) w handlerkach
- MAX_TOOL_STEPS failsafe zapobiega nieskończonym pętlom — kluczowe dla produkcji
- Tool results muszą być natychmiast appendowane do conversation, by model mógł się do nich odnosić

## 🔧 Szczegóły
- **Lekcja**: [S01E02 - Techniki łączenia modelu z narzędziami](../../index.html#S01E02)
- **Tagi**: `function-calling`, `tool-use`, `react-pattern`, `sandboxed-fs`, `node`
- **Narzędzia**: `OpenAI Responses API`, `Node.js filesystem`, `function calling`, `Zod`
- **Uruchomienie**: `npm run lesson2:tool_use`

---

## 🛠️ Technical Details / Jak to działa

# 01_02_tool_use

Function calling with sandboxed filesystem tools — the model lists, reads, writes, and deletes files through tool definitions.

## Run

```bash
npm run lesson2:tool_use
```

## What it does

1. Defines 6 filesystem tools (`list_files`, `read_file`, `write_file`, `delete_file`, `create_directory`, `file_info`)
2. Resets `sandbox/` to an empty state before running the demo
3. Runs each example query as a separate conversation
4. Executes tool calls, appends results within that query, and prints the final answer
5. All operations are sandboxed — path traversal is blocked programmatically

## Tools

| Tool | Description |
|------|-------------|
| `list_files` | List files and directories at a path |
| `read_file` | Read file contents |
| `write_file` | Create or overwrite a file |
| `delete_file` | Delete a file |
| `create_directory` | Create a directory (recursive) |
| `file_info` | Get file/directory metadata |

See `TOOLS.md` for full schemas and examples.
