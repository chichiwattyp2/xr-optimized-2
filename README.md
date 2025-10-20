--- # 🌌 XR Home Chat **XR Home Chat** is an experimental **A-Frame VR/AR app** with an integrated **OpenAI chatbot and voice assistant**. You can type or speak to the AI inside a 3D environment — and it answers right on your floating panel in VR. ✨ --- ## 🚀 Features * **Immersive A-Frame Scene** — clean, minimalist 3D panel for conversations. * **Text Chat** — powered by OpenAI’s Responses API with **streaming SSE output**. * **Voice Chat** — WebRTC + OpenAI **Realtime API** (ephemeral tokens). * **Edge Functions** — serverless routes (/api/chat, /api/realtime-token, /api/health) deployed on **Vercel Edge Runtime**. * **Strict but Flexible CSP** — lets A-Frame and WebRTC run safely. * **One-click deploy** to Vercel. --- ## 🛠️ Project Structure
xr-home-chat/
│── index.html          # A-Frame frontend
│── client.js           # Handles chat streaming + voice
│── package.json
│── vercel.json         # CSP headers
│── api/
│    ├── chat.js        # Text chat via OpenAI Responses API
│    ├── realtime-token.js # Ephemeral tokens for Realtime API
│    └── health.js      # Debug endpoint for env vars
--- ## ⚡ Deployment (Vercel) 1. Push this repo to **GitHub**. 2. Import it into **Vercel**. 3. Add Environment Variables (**Settings → Environment Variables**) for both **Preview** and **Production**:
OPENAI_API_KEY       = sk-proj-xxxxxxxxxxxxxxxxxxxxxxxx
   OPENAI_MODEL_TEXT    = gpt-4o-mini
   OPENAI_MODEL_REALTIME= gpt-4o-realtime-preview
4. Redeploy. 5. Visit: * / → VR scene with floating chat panel * /api/health → shows env status (handy debug) --- ## 🎤 Usage * **Type:** enter a message in the input box and hit **Send**. * **Speak:** click 🎤 to start a voice session — the model responds with **live audio**. --- ## 🧩 Troubleshooting * **401 invalid\_api\_key** → Check your OpenAI key. Must be a **Project API Key** from the project with billing enabled. * **404 on /api/** → Ensure the api/ folder is at the repo root. * **CSP errors** → The included vercel.json loosens restrictions for A-Frame & WebRTC. --- ## 🌟 Inspiration This project combines: * [A-Frame](https://aframe.io/) for 3D + WebXR * [OpenAI Responses API](https://platform.openai.com/docs/guides/responses) for streaming text * [OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime) for voice chat Built as a **sandbox** to explore conversational XR experiences. 🚀 --- 💡 *Imagine a future where VR spaces have native AI companions floating right beside you — this is a first step.* ---
