
# Cyfrowy ogród — vault MD + agent + statyczna strona (04_01_garden)

Agent edytuje notatki w Markdown vault; generator grove buduje statyczny serwis HTML.

## 📝 Opis
Trójczłonowa architektura: publiczna baza wiedzy w Markdown (vault), agent mogący tworzyć i edytować notatki, oraz generator statycznej strony (grove) zamieniający vault w HTML. Public-by-design — instrukcje agenta i konfiguracja również w vault/system. Build + preview command pozwalają na natychmiastowy podgląd zmian lokalnie.

## 🎯 Zastosowania
- Osobisty digital garden / blog z wpisami pisanymi przez AI
- Wspólna dokumentacja zespołowa z agentem-edytorem
- Publikacja notatek badawczych z auto-linkowaniem

## 💡 Zapamiętaj
- Czysta separacja: dane (vault) ↔ UI (grove) ↔ agent
- Markdown frontmatter jako metadata + sterowanie agentem
- CLI z streamem edycji vaulta jako workflow autora

## 🔧 Szczegóły
- **Lekcja**: [S04E01 - Wdrożenia rozwiązań AI](../../index.html#S04E01)
- **Tagi**: `digital-garden`, `static-site`, `markdown-vault`, `agent-driven`, `knowledge-base`
- **Narzędzia**: `gray-matter`, `marked`, `OpenAI`, `Node static site builder`
- **Uruchomienie**: `npm run lesson16:garden`
