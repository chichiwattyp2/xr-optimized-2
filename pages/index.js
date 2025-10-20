// pages/landing.js
import { useState } from "react";

export default function Landing() {
  const [filter, setFilter] = useState("");

  const pages = [
    { name: "AR/AI Spacial Chat", path: "/ar-ai-spacial-chat.html" },
    { name: "my vr office", path: "https://vr-workspace.vercel.app/" },
    { name: "A-FRAME AR/AI Spacial Chat", path: "/aframe-ar-ai-spacial-chat.html" },
    { name: "Training", path: "/ilabs-training.html" },
    { name: "music player", path: "/aframe-webxr-synth.html" },
    { name: "components", path: "/components.html" },
    { name: "browser", path: "/xrbrowser.html" },
    { name: "Assistant Shop", path: "/assistant-shop.html" },
    { name: "AR Showcase", path: "/ar-showcase.html" },
    { name: "Workspace", path: "/workspace.html" },
    { name: "XR Shop", path: "/xrshop.html" },
    { name: "Studio", path: "/studio.html" },
    { name: "Gallery", path: "/gallery.html" },
    { name: "Maps", path: "/maps.html" },
    { name: "Terrain", path: "/terrain.html" },
    { name: "Video Player", path: "/video-player.html" },
    { name: "Vologram", path: "/vologram.html" },
    { name: "Geodome", path: "/geodome.html" },
    { name: "MR", path: "/AR-studio.html" },
    { name: "XR Shop 2", path: "/xrshop2.html" },
    { name: "Wall UX", path: "/wall-ux/index.html" },
    { name: "Vibes", path: "vibes.html" },
  ];

  const filteredPages = pages.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        background: "radial-gradient(circle at top, #101018, #000)",
        color: "#fff",
        minHeight: "100vh",
        padding: "3rem 1.5rem",
      }}
    >
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem", letterSpacing: "1px" }}>
          🧠 Chi Chi Watty-P AI/XR Chat Experiments
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#bbb", maxWidth: "600px", margin: "0 auto" }}>
          An experimental WebXR communication layer that merges AI conversation,
          spatial computing, and immersive design into one responsive 3D interface.
        </p>

        {/* Badges */}
        <div style={{ marginTop: "1.5rem" }}>
          <img
            src="https://img.shields.io/badge/Built%20with-AFrame-ff69b4?style=for-the-badge&logo=three.js"
            alt="A-Frame"
            style={{ marginRight: "8px" }}
          />
          <img
            src="https://img.shields.io/badge/AI-OpenAI%20Realtime-blueviolet?style=for-the-badge&logo=openai"
            alt="OpenAI"
            style={{ marginRight: "8px" }}
          />
          <img
            src="https://img.shields.io/badge/Framework-XR%20Optimized-blue?style=for-the-badge"
            alt="XR Optimized"
          />
        </div>

        {/* Search */}
        <div style={{ marginTop: "2.5rem" }}>
          <input
            type="text"
            placeholder="Search XR pages..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              padding: "0.8rem 1rem",
              width: "300px",
              borderRadius: "10px",
              border: "1px solid #333",
              background: "#111",
              color: "#fff",
              fontSize: "1rem",
              textAlign: "center",
              outline: "none",
            }}
          />
        </div>
      </header>

      {/* Content Section */}
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", color: "#ff69b4", marginBottom: "1rem" }}>
          XR Ecosystem
        </h2>
        <p style={{ textAlign: "center", color: "#aaa", marginBottom: "2.5rem" }}>
          Explore the iLabs XR suite — AI, AR, and VR tools for immersive communication,
          creativity, and product experiences.
        </p>

        {/* Grid of Pages */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.2rem",
          }}
        >
          {filteredPages.map((page, i) => (
            <a
              key={i}
              href={page.path}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "1.2rem",
                textDecoration: "none",
                color: "#fff",
                fontWeight: "500",
                textAlign: "center",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
            >
              {page.name}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", marginTop: "4rem", color: "#666" }}>
        <p style={{ fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} iLabs Pharmaceuticals XR Division • Crafted by Chris Watt-Pringle
        </p>
        <p style={{ fontSize: "0.8rem", marginTop: "0.3rem" }}>
          “The future interface isn’t flat — it listens, speaks, and occupies space.”
        </p>
      </footer>
    </div>
  );
}
