# Instrukcja aktualizacji mapy przykładów

Gdy w repozytorium pojawią się nowe foldery z przykładami do kolejnych lekcji (np. z serii 04_01_*), użyj poniższego promptu dla Gemini (lub innego LLM), aby automatycznie zaktualizować stronę główną oraz bazę danych plików.

## Prompt do skopiowania:

> "Pojawiły się nowe lekcje w kursie w folderach zaczynających się od 04_01_*. Zaktualizuj plik `index.html` dodając dla nich nową sekcję z odpowiednimi kartami (cards). Upewnij się, że dodajesz odnośniki w nawigacji. Następnie uruchom skrypt `node assets/db/generate_db.js`, aby wygenerować nową strukturę plików i opisów dla edytora kodu w przeglądarce."
