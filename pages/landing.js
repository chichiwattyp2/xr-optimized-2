// pages/landing.js
import { useState, useEffect, useRef } from "react";

export default function Landing() {
  const [filter, setFilter] = useState("");
  const orbRef = useRef(null);

  // Floating AI Orb Movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 60;
      const y = (e.clientY / window.innerHeight - 0.5) * 60;
      if (orbRef.current) {
        orbRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      {/* Animated Particle Background */}
      <div className="particle-bg">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="particle" />
        ))}
      </div>

      {/* Floating AI Orb */}
      <div ref={orbRef} className="ai-orb" />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          fontFamily: "Inter, sans-serif",
          color: "#fff",
          padding: "3rem 1.5rem",
          textAlign: "center",
        }}
      >
        {/* Header */}
        <h1 style={{ fontSize: "2.8rem", letterSpacing: "1px", marginBottom: "0.4rem" }}>
          🧠 XR Home Chat
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#bbb", maxWidth: "600px", margin: "0 auto" }}>
          A WebXR communication layer that merges AI conversation, spatial computing, and immersive design — powered by iLabs & OpenAI.
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
        <div style={{ marginTop: "2rem" }}>
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
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              fontSize: "1rem",
              textAlign: "center",
              outline: "none",
              backdropFilter: "blur(6px)",
            }}
          />
        </div>

        {/* Ecosystem Section */}
        <h2
          style={{
            color: "#ff69b4",
            marginTop: "3rem",
            marginBottom: "1rem",
            fontSize: "1.5rem",
          }}
        >
          XR Ecosystem
        </h2>
        <p style={{ color: "#aaa", marginBottom: "2rem", maxWidth: "700px", margin: "0 auto" }}>
          Explore the iLabs XR suite — AI, AR, and VR tools for immersive communication,
          creativity, and digital product storytelling.
        </p>

        {/* Grid of Pages */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.2rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {filteredPages.map((page, i) => (
            <a
              key={i}
              href={page.path}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "1.2rem",
                textDecoration: "none",
                color: "#fff",
                fontWeight: "500",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
              }
            >
              {page.name}
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer style={{ marginTop: "4rem", color: "#666" }}>
          <p style={{ fontSize: "0.9rem" }}>
            © {new Date().getFullYear()} iLabs Pharmaceuticals XR Division • Crafted by Chris Watt-Pringle
          </p>
          <p style={{ fontSize: "0.8rem", marginTop: "0.3rem", color: "#888" }}>
            “The future interface isn’t flat — it listens, speaks, and occupies space.”
          </p>
        </footer>
      </div>

      {/* Background + Orb Styles */}
      <style jsx>{`
        .particle-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 1;
          background: radial-gradient(circle at top, #101018, #000);
        }
        .particle {
          position: absolute;
          display: block;
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: float 15s infinite;
          opacity: 0.6;
        }
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-50vh) scale(0.7);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
        }
        .particle:nth-child(odd) {
          animation-duration: 12s;
          background: rgba(255, 105, 180, 0.5);
        }
        .particle:nth-child(even) {
          animation-duration: 18s;
          background: rgba(0, 191, 255, 0.5);
        }
        .ai-orb {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 160px;
          height: 160px;
          margin-top: -80px;
          margin-left: -80px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #ff69b4, #00bfff 70%);
          filter: blur(20px) brightness(1.3);
          opacity: 0.6;
          z-index: 1;
          animation: drift 18s ease-in-out infinite alternate;
          transition: transform 0.8s ease-out;
        }
        @keyframes drift {
          from {
            transform: translate3d(-20px, -10px, 0) scale(1);
          }
          to {
            transform: translate3d(20px, 10px, 0) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
