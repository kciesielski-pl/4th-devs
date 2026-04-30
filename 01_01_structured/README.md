
# Dane Strukturalne (JSON Schema) (01_01_structured)

Wymuszenie na modelu zwrócenia danych w ścisłym formacie JSON zgodnie ze schematem.

## 📝 Opis
Pokazuje jak użyć `response_format` z `json_schema` i `strict: true` do wymuszenia na modelu zwrócenia danych w dokładnie określonym formacie. Model nie ma wyboru — zawsze zwróci walidny JSON zgodny ze schematem (imię, wiek, zawód, umiejętności). Eliminuje to potrzebę parsowania i walidacji po stronie aplikacji.

## 🎯 Zastosowania
- Ekstrakcja danych z tekstów (CV, artykuły, recenzje) z gwarancją struktury
- API które muszą zwracać typowane dane bez fallback'ów
- Przetwarzanie batch'e gdzie każdy output musi być natychmiast stosowalny
- Integracja z bazami danych wymagająca ścisłych schematów

## 💡 Zapamiętaj
- Structured Output gwarantuje zgodność ze schematem — nigdy nie będzie `null` lub nieprawidłowy JSON
- `strict: true` zmusza model do ścisłego trzymania się schemy — bardziej restrykcyjne niż zwykły JSON
- Schema definiuje właściwości, wymagane pola i typy — model nie może wymyślić dodatkowych pól

## 🔧 Szczegóły
- **Lekcja**: [S01E01 - Sterowanie zachowaniem modelu z pomocą kodu](../../index.html#S01E01)
- **Tagi**: `structured-output`, `json-schema`, `openai`, `node`, `type-safety`
- **Narzędzia**: `OpenAI Responses API`, `JSON Schema`, `Node.js`
- **Uruchomienie**: `npm run lesson1:structured`

---

## 🛠️ Technical Details / Jak to działa

# 01_01_structured

Structured outputs — the model returns guaranteed valid JSON matching a provided schema.

## Run

```bash
npm run lesson1:structured
```

## What it does

1. Defines a JSON schema for a "person" object (name, age, occupation, skills)
2. Sends text to the API with `text.format` set to the schema (`strict: true`)
3. Parses and displays the extracted data
