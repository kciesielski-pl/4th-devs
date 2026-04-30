
# Voice agent — LiveKit + realtime API (05_02_voice)

Agent głosowy z LiveKit, OpenAI/Gemini realtime, ElevenLabs TTS, dostępem do MCP tools.

## 📝 Opis
Agent słuchający dialogu w real time z LiveKit. Stack głosowy resolvowany automatycznie z dostępnych kluczy: GEMINI → Gemini Realtime; ELEVEN+OPENAI → OpenAI LLM + ElevenLabs TTS; OPENAI → pełen OpenAI stack. Integruje STT, LLM i TTS. Wsparcie MCP tools (web search, file ops). Token server zapewnia LiveKit tokens.

## 🎯 Zastosowania
- Asystent głosowy (call center, voice ChatGPT)
- Rozmowa real-time z dostępem do narzędzi (web search, FS)
- Multi-stack voice agents z runtime fallbackiem

## 💡 Zapamiętaj
- Realtime API ≠ tradycyjny streaming (audio in/out, niska latencja)
- LiveKit Cloud lub self-hosted — rozdzielenie connectivity od logic
- Auto-resolved voice stack z env keys = elastyczność deploymentu

## 🔧 Szczegóły
- **Lekcja**: [S05E02 - Zestaw narzędzi](../../index.html#S05E02)
- **Tagi**: `voice-agent`, `livekit`, `realtime-api`, `stt`, `tts`, `mcp`
- **Narzędzia**: `@livekit/agents`, `@livekit/agents-plugin-openai`, `ElevenLabs TTS`, `Hono`
- **Uruchomienie**: `npm run lesson22:voice`
