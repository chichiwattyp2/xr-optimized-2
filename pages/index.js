// pages/landing.js
import { useState } from "react";

export default function Landing() {
  const [filter, setFilter] = useState("");

  const pages = [
    { name: "Assistant1", path: "/Assistant1.html" },
    { name: "Ar", path: "/Ar.html" },
    { name: "Ar Showcase", path: "/Ar-showcase.html" },
    { name: "Browser", path: "/browser.html" },
    { name: "Beta", path: "/Beta.html" },
    { name: "Gallery", path: "/Gallery.html" },
    { name: "Maps", path: "/Maps.html" },
    { name: "Menu", path: "/Menu.html" },
    { name: "Shop", path: "/Shop.html" },
    { name: "Site Index", path: "/Site-index.html" },
    { name: "Terrain", path: "/Terrain.html" },
    { name: "Video Player", path: "/video-player.html" },
    { name: "Vologram", path: "/vologram.html" },
    { name: "Workspace", path: "/workspace.html" },
    { name: "XR Test", path: "/XR-Test" },
    { name: "AR Hologram", path: "/ar-hologram.html" },
    { name: "Assistant Shop", path: "/assistant-shop.html" },
    { name: "Assistant", path: "/assistant.html" },
    { name: "Geodome", path: "/geodome.html" },
    { name: "Studio", path: "/Studio.html" },
    { name: "XR Shop", path: "/xrshop.html" },
    { name: "XR Shop 2", path: "/xrshop2.html" },
    { name: "Wall UX", path: "/wall-ux/index.html" },
  ];

  const filteredPages = pages.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Landing Page</h1>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Search pages..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: "0.6rem",
            width: "300px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <ul style={{ listStyle: "none", padding: 0, maxWidth: "400px", margin: "0 auto" }}>
        {filteredPages.map((page, i) => (
          <li
            key={i}
            style={{
              background: "#fff",
              margin: "0.5rem 0",
              padding: "0.8rem 1rem",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <a
              href={page.path}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#0070f3", fontWeight: "bold" }}
            >
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
