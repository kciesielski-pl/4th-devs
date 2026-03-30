# 📁 Idealna struktura plików — AI_devs

> Przewodnik po konwencjach nazewnictwa, układzie folderów i wzorcach stosowanych w kursie.
> Przeanalizowano **wszystkie lekcje S01–S03** aby wyciągnąć spójne zasady.

---

## 1. Nazewnictwo folderów

```
XX_YY_nazwa_przykladu
│
├── XX  = numer sezonu (01, 02, 03)
├── YY  = numer lekcji w sezonie (01–05)
└── nazwa = krótki, snake_case opis po angielsku
```

**Przykłady z kursu:**
```
01_01_grounding        ← S01E01 – grounding/weryfikacja faktów
01_02_tool_use         ← S01E02 – narzędzia z sandboxem
02_02_hybrid_rag       ← S02E02 – RAG hybrydowy
03_03_browser          ← S03E03 – automatyzacja przeglądarki
```

**Gdybyś tworzył własny skrypt do S02E02:**
```
02_02_moj_embedding    ← Twój własny przykład do tej lekcji
```

---

## 2. Struktura wewnętrzna folderu — dwa wzorce

### Wzorzec A: Prosty (JavaScript) — lekcje S01E01–S02E02

```
02_02_moj_embedding/
├── app.js              ← 🔴 Punkt wejścia (zawsze app.js)
├── package.json        ← Zależności (jeśli potrzebne)
├── README.md           ← Opis: co robi, jak uruchomić
├── mcp.json            ← Konfiguracja MCP (opcjonalnie)
│
├── src/                ← Moduły pomocnicze
│   ├── agent.js        ← Logika agenta / pętla
│   ├── api.js          ← Wywołania API (OpenAI, Gemini...)
│   ├── config.js       ← Stałe, env, konfiguracja
│   ├── tools.js        ← Definicje narzędzi dla modelu
│   ├── repl.js         ← REPL (jeśli interaktywne)
│   ├── logger.js       ← Formatowanie logów
│   └── shutdown.js     ← Graceful shutdown
│
├── workspace/          ← 📂 Dane wejściowe/wyjściowe (patrz §3)
│   ├── input.md
│   └── output/
│
└── sandbox/            ← 📂 Piaskownica (patrz §3)
```

### Wzorzec B: Zaawansowany (TypeScript) — lekcje S02E04+, cały S03

```
03_02_moj_code_agent/
├── src/
│   ├── index.ts        ← 🔴 Punkt wejścia (zawsze src/index.ts)
│   ├── agent.ts        ← Logika agenta
│   ├── config.ts       ← Konfiguracja
│   ├── tools.ts        ← Narzędzia
│   └── db/             ← Schemat bazy (opcjonalnie)
│       ├── schema.ts
│       └── setup.ts
│
├── package.json
├── tsconfig.json       ← Konfiguracja TS
├── mcp.json            ← Serwery MCP
├── README.md
│
├── workspace/          ← Dane robocze
├── spec/               ← Testy / evals
├── docs/               ← Dokumentacja rozszerzona
├── experiments/        ← Eksperymenty (opcjonalnie)
│
└── demo.ts             ← Opcjonalny skrypt demo
```

---

## 3. Kiedy co używać: workspace vs sandbox vs knowledge

### `workspace/` — Twój katalog roboczy

**Kiedy:** Gdy agent czyta pliki wejściowe i/lub zapisuje wyniki.

```
workspace/
├── translate/          ← pliki do przetłumaczenia (input)
├── translated/         ← przetłumaczone pliki (output)
├── output/             ← wygenerowane raporty, obrazy, audio
├── template.json       ← szablony do edycji przez agenta
├── style-guide.md      ← wytyczne stylu
├── whitelist.json      ← listy dozwolonych (np. adresy email)
└── *.md / *.txt        ← dokumenty do indeksowania (RAG)
```

**Przykłady z kursu:**
| Folder | Użycie workspace/ |
|--------|-------------------|
| `01_03_mcp_translator` | `translate/` (input) → `translated/` (output) |
| `01_04_audio` | `output/` (TTS), pliki audio do analizy |
| `01_04_reports` | `template.html` + `style-guide.md` → `output/*.pdf` |
| `02_02_hybrid_rag` | `*.md/*.txt` → automatyczny indeks przy starcie |
| `01_05_confirmation` | `whitelist.json` z dozwolonymi odbiorcami |

### `sandbox/` — Izolowane środowisko wykonawcze

**Kiedy:** Gdy agent wykonuje niebezpieczne operacje (zapis plików, kod) i chcesz je odizolować.

```
sandbox/
├── files/              ← pliki tworzone przez agenta (sandboxowane)
└── (nic więcej)        ← celowo pusty, agent go wypełnia
```

**Przykłady z kursu:**
| Folder | Typ sandboxa |
|--------|-------------|
| `01_02_tool_use` | Prosty filesystem sandbox — blokuje traversal poza `sandbox/` |
| `02_05_sandbox` | QuickJS sandbox — izolowane wykonywanie JS |
| `03_02_code` | Deno sandbox — 4 poziomy: safe → standard → network → full |

**Zasada:**
> `workspace/` = dane, które **Ty** przygotowujesz i agent czyta/zapisuje  
> `sandbox/` = przestrzeń, w której agent **sam tworzy pliki** i jest odcięty od reszty systemu

### `knowledge/` — Baza wiedzy

**Kiedy:** Statyczne pliki referencyjne, które agent czyta, ale nigdy nie modyfikuje.

```
knowledge/
├── profiles/           ← profile postaci (image recognition)
└── rules.md            ← reguły działania agenta
```

### `images/` — Pliki multimedialne

**Kiedy:** Obrazy/media do przetworzenia (nie wygenerowane — te idą do `workspace/output/`).

---

## 4. Konfiguracja MCP (`mcp.json`)

Pliki `mcp.json` łączą agenta z serwerami MCP. Wzorzec:

```json
{
  "mcpServers": {
    "files": {
      "command": "node",
      "args": ["../mcp/files-mcp/index.js"],
      "env": {
        "ALLOWED_DIRS": "./workspace"
      }
    }
  }
}
```

**Kiedy dodawać:**
- Agent potrzebuje narzędzi do plików → `files-mcp`
- Agent potrzebuje uploadu → `uploadthing-mcp`
- Budujesz własny serwer MCP → folder `servers/`

---

## 5. Jak dodać SWÓJ skrypt — pełny przykład

Załóżmy, że chcesz dodać skrypt do **S02E02** (embeddingi) — asystent do analizy CV.

### Krok 1: Utwórz folder

```bash
mkdir -p 02_02_cv_analyzer/src 02_02_cv_analyzer/workspace
```

### Krok 2: Struktura plików

```
02_02_cv_analyzer/
├── app.js                    ← punkt wejścia
├── package.json              ← zależności
├── mcp.json                  ← konfiguracja MCP (files)
├── README.md                 ← dokumentacja
│
├── src/
│   ├── agent.js              ← pętla agenta
│   ├── api.js                ← wywołania embeddingów + LLM
│   ├── config.js             ← import z ../../config.js
│   ├── tools.js              ← narzędzia: search_cv, compare
│   └── embeddings.js         ← logika embeddingów + indeks
│
└── workspace/
    ├── cvs/                  ← pliki CV do analizy (input)
    │   ├── jan_kowalski.pdf
    │   └── anna_nowak.md
    ├── job-description.md    ← opis stanowiska (input)
    └── output/
        └── ranking.json      ← wynik analizy (output)
```

### Krok 3: `app.js` — punkt wejścia

```javascript
// 02_02_cv_analyzer/app.js
import { AI_API_KEY, AI_PROVIDER, EMBEDDINGS_API_ENDPOINT } from '../config.js';
import { createAgent } from './src/agent.js';
import { log } from './src/logger.js';

log(`Provider: ${AI_PROVIDER}`);

const agent = createAgent({
  apiKey: AI_API_KEY,
  embeddingsEndpoint: EMBEDDINGS_API_ENDPOINT,
  workspacePath: './workspace'
});

await agent.run('Przeanalizuj CV z workspace/cvs/ pod kątem job-description.md');
```

### Krok 4: `package.json`

```json
{
  "name": "02_02_cv_analyzer",
  "private": true,
  "type": "module",
  "dependencies": {}
}
```

> **Uwaga:** Wspólne zależności (jeśli potrzebne) dodaj tu. Konfiguracja API
> jest importowana z root `config.js` — nie duplikuj kluczy!

### Krok 5: `mcp.json` (jeśli używasz MCP)

```json
{
  "mcpServers": {
    "files": {
      "command": "node",
      "args": ["../mcp/files-mcp/index.js"],
      "env": {
        "ALLOWED_DIRS": "./workspace"
      }
    }
  }
}
```

### Krok 6: Dodaj do root `package.json`

```json
"lesson7:cv_analyzer": "cd 02_02_cv_analyzer && node app.js"
```

### Krok 7: Dodaj do `index.html`

Wewnątrz sekcji `<section id="s02e02">` → `<div class="cards">`, dodaj:

```html
<div class="card">
  <div class="card-folder"><span class="folder-icon">📁</span> 02_02_cv_analyzer</div>
  <div class="card-title">CV Analyzer — ranking kandydatów</div>
  <div class="card-desc">
    Analizuje pliki CV z workspace/cvs/ i porównuje je z opisem stanowiska
    przez embeddingi + LLM. Generuje ranking w workspace/output/ranking.json.
  </div>
  <div class="card-tags">
    <span class="tag">embeddings</span>
    <span class="tag">cosine similarity</span>
    <span class="tag">CV analysis</span>
  </div>
  <div class="card-run"><span>$</span> <code>npm run lesson7:cv_analyzer</code></div>
</div>
```

### Krok 8: Odśwież bazę modali

```bash
node assets/db/generate_db.js
```

---

## 6. Ewolucja złożoności w kursie — co kiedy stosować

```
S01E01-E02 (podstawy)     → app.js + src/ + proste narzędzia
                              Nie potrzebujesz workspace/ ani MCP

S01E03 (MCP)              → app.js + src/ + mcp.json + workspace/
                              Dodajesz serwer MCP do operacji na plikach

S01E04 (multimodal)       → app.js + src/ + mcp.json + workspace/output/
                              workspace/ z plikami mediów, output/ na wyniki

S01E05 (agent)            → src/index.ts + db/ + workspace/
                              Przejście na TypeScript, baza danych, server HTTP

S02E01-E03 (RAG)          → app.js + src/ + workspace/ z dokumentami
                              workspace/ trzyma dokumenty do indeksowania

S02E04+ (multi-agent)     → src/index.ts + demo.ts + workspace/
                              TypeScript, orchestrator, wyspecjalizowani agenci

S03 (produkcja)           → src/index.ts + spec/ + docs/ + workspace/
                              Evals, observability, browser automation, UI
```

---

## 7. Wspólne zasoby (root)

```
pliki_przykladowe_z_kursu/
├── config.js               ← ⭐ Wspólna konfiguracja API (importuj!)
├── serve.js                ← Serwer HTTP dla index.html
├── index.html              ← Mapa wszystkich przykładów
├── package.json            ← Skrypty npm do uruchamiania lekcji
├── .env                    ← Klucze API (nie commituj!)
├── env.example             ← Szablon .env
│
├── mcp/                    ← Współdzielone serwery MCP
│   ├── files-mcp/          ←   Narzędzia plikowe
│   └── uploadthing-mcp/    ←   Upload plików
│
├── assets/
│   ├── db/
│   │   ├── db.json         ← Baza danych dla modali w index.html
│   │   └── generate_db.js  ← Skrypt generujący db.json
│   └── logo.svg
│
└── 01_01_grounding/        ← Foldery lekcji (XX_YY_nazwa)
    02_02_hybrid_rag/
    03_05_apps/
    ...
```

---

## 8. Checklist nowego skryptu

- [ ] Folder: `XX_YY_nazwa` (snake_case)
- [ ] Punkt wejścia: `app.js` (JS) lub `src/index.ts` (TS)
- [ ] `README.md` z opisem i komendą uruchomienia
- [ ] `package.json` z `"type": "module"`
- [ ] Import configu z `../config.js` (nie duplikuj kluczy!)
- [ ] `workspace/` jeśli agent czyta/pisze pliki
- [ ] `mcp.json` jeśli używasz MCP
- [ ] Skrypt w root `package.json`
- [ ] Karta w `index.html` w odpowiedniej sekcji
- [ ] `node assets/db/generate_db.js` po dodaniu folderu
