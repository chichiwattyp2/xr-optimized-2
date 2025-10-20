# 🧠 XR Home Chat

**XR Home Chat** is an experimental **WebXR communication layer** that merges **AI conversation, spatial computing, and immersive design** into one responsive 3D interface.  
Built with **A-Frame** and powered by **OpenAI**, it allows users to **chat or speak** with an AI assistant that lives inside a dynamic, ambient **virtual home environment**.

---

## 🌍 Vision

Part of the **iLabs XR Ecosystem**, XR Home Chat explores what happens when **AI presence** meets **immersive space**.  
It’s not just a chatbot in 3D — it’s a prototype for **spatially aware AI companions**, capable of understanding and responding inside your XR world.

> *“Your AI shouldn’t live in a window — it should live in your world.”*

---

## 🧩 Core Features

- 🕹️ **Conversational 3D Interface** — floating chat panel designed for seamless use in VR/AR.  
- 💬 **Text Chat** — live-streamed responses from OpenAI’s `Responses API`.  
- 🎙️ **Voice Chat** — real-time interaction using OpenAI’s `Realtime API` via WebRTC.  
- ⚡ **Edge Runtime Architecture** — minimal latency, modular endpoints, and secure key handling.  
- 🧱 **A-Frame Scene System** — clean, modular layout for rapid prototyping of AI-driven XR interfaces.  
- 🔐 **Secure CSP Configuration** — optimized for WebXR, WebRTC, and AI integrations.  

---

## 🧠 Project Structure

```bash
xr-home-chat/
│── index.html            # Core A-Frame scene and spatial UI
│── client.js             # Handles chat streaming + voice synthesis
│── package.json
│── vercel.json           # Content Security Policy + route config
│── api/
│    ├── chat.js          # OpenAI text chat via Responses API
│    ├── realtime-token.js # WebRTC ephemeral tokens for Realtime API
│    └── health.js        # Diagnostic endpoint for testing
