import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '../../');
const dbPath = path.join(__dirname, 'db.json');

const dirs = fs.readdirSync(rootDir).filter(d => {
  return d.match(/^0\d_/) && fs.statSync(path.join(rootDir, d)).isDirectory();
});

const db = {};

// Słownik opisów najważniejszych plików w języku polskim
const fileDescriptions = {
  'app.js': 'Główny punkt wejścia',
  'index.ts': 'Główny punkt wejścia (TypeScript)',
  'index.html': 'Główny plik widoku',
  'mcp.json': 'Konfiguracja serwera MCP',
  'package.json': 'Zależności i skrypty npm',
  'package-lock.json': 'Zablokowane wersje zależności',
  'bun.lock': 'Zablokowane wersje zależności (Bun)',
  'tsconfig.json': 'Konfiguracja kompilatora TypeScript',
  'agent.js': 'Główna logika i pętla agenta AI',
  'agent.ts': 'Główna logika i pętla agenta AI',
  'config.js': 'Zmienne środowiskowe i konfiguracja',
  'config.ts': 'Zmienne środowiskowe i konfiguracja',
  'api.js': 'Integracja z zewnętrznymi API (np. OpenAI, Anthropic)',
  'api.ts': 'Integracja z zewnętrznymi API (np. OpenAI, Anthropic)',
  'logger.js': 'Logowanie i formatowanie zdarzeń (konsola)',
  'logger.ts': 'Logowanie i formatowanie zdarzeń (konsola)',
  'shutdown.js': 'Zarządzanie bezpiecznym zamykaniem aplikacji',
  'shutdown.ts': 'Zarządzanie bezpiecznym zamykaniem aplikacji',
  'stats.js': 'Gromadzenie statystyk zapytań do LLM',
  'stats.ts': 'Gromadzenie statystyk zapytań do LLM',
  'client.js': 'Klient łączący się z narzędziami MCP',
  'client.ts': 'Klient łączący się z narzędziami MCP',
  'gemini.js': 'Obsługa modelu językowego Gemini',
  'gemini.ts': 'Obsługa modelu językowego Gemini',
  'tools.js': 'Definicje natywnych narzędzi dla modelu',
  'tools.ts': 'Definicje natywnych narzędzi dla modelu',
  'repl.js': 'Interaktywna konsola (Read-Eval-Print Loop)',
  'repl.ts': 'Interaktywna konsola (Read-Eval-Print Loop)',
  'template.html': 'Szablon bazowy HTML do generowania raportów',
  'template.json': 'Szablon bazowy JSON dla obrazów lub danych',
  'style-guide.md': 'Wytyczne stylu kodowania / wyglądu dla modelu',
  'README.md': 'Dokumentacja i opis danego przykładu'
};

function getFileDescription(filename) {
  const ext = path.basename(filename);
  return fileDescriptions[ext] || '';
}

function getAllFiles(dirPath, arrayOfFiles, baseDir) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];
  baseDir = baseDir || dirPath;

  files.forEach(function(file) {
    if (file === 'node_modules' || file.startsWith('.') || file === 'dist' || file === 'output' || file === 'workspace' || file.endsWith('.lock') || file.endsWith('.sqlite')) return;
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles, baseDir);
    } else {
      const relPath = path.relative(baseDir, fullPath);
      arrayOfFiles.push({
        path: relPath,
        desc: getFileDescription(file)
      });
    }
  });

  return arrayOfFiles;
}

dirs.forEach(dir => {
  const dirPath = path.join(rootDir, dir);
  const readmePath = path.join(dirPath, 'README.md');
  let readme = 'Brak opisu (README.md).';
  if (fs.existsSync(readmePath)) {
    readme = fs.readFileSync(readmePath, 'utf8');
  }
  
  const files = getAllFiles(dirPath);
  
  db[dir] = {
    id: dir,
    readme: readme,
    files: files
  };
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('Database generated at', dbPath);
