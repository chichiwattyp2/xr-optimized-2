"use client"

import Head from "next/head"
import { useCallback } from "react"

export default function HomePage() {
  const toggleMobileMenu = useCallback(() => {
    document.getElementById("mobileMenu")?.classList.toggle("active")
  }, [])

  return (
    <>
      <Head>
        <title>XR Studio</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>{`
        :root {
          --prussian-blue: #003049;
          --fire-engine-red: #d62828;
          --orange-wheel: #f77f00;
          --xanthous: #fcbf49;
          --vanilla: #eae2b7;
          --background: var(--vanilla);
          --on-background: #111;
          --surface: #fff;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: "Inter", sans-serif;
          background: var(--background);
          color: var(--on-background);
          line-height: 1.6;
          overflow-x: hidden;
        }
        h1,
        h2,
        h3 {
          font-family: "Orbitron", sans-serif;
          letter-spacing: -0.5px;
        }
        .md-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .nav-header {
          position: fixed;
          top: 0;
          width: 100%;
          background: var(--surface);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          color: var(--fire-engine-red);
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--on-background);
          font-weight: 500;
        }
        .nav-links a:hover {
          color: var(--fire-engine-red);
        }
        .dropdown {
          position: relative;
        }
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 120%;
          left: 0;
          background: white;
          border: 1px solid #eee;
          border-radius: 8px;
          padding: 10px 0;
          min-width: 160px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .dropdown:hover .dropdown-menu {
          display: block;
        }
        .dropdown-menu a {
          display: block;
          padding: 8px 16px;
          color: #111;
          font-size: 14px;
        }
        .dropdown-menu a:hover {
          background: var(--vanilla);
        }
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 0 80px;
          background: linear-gradient(
            135deg,
            var(--prussian-blue),
            var(--fire-engine-red)
          );
          color: white;
        }
        .hero h1 {
          font-size: 56px;
          background: linear-gradient(135deg, var(--orange-wheel), var(--xanthous));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero p {
          margin: 24px 0;
          font-size: 18px;
        }
        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .md-button {
          border-radius: 100px;
          padding: 12px 20px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
        }
        .md-button-primary {
          background: var(--orange-wheel);
          color: white;
        }
        .md-button-outline {
          border: 1px solid white;
          color: white;
        }
        .features {
          padding: 100px 0;
          background: var(--surface);
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .feature-card {
          background: var(--vanilla);
          padding: 24px;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        .creator-note {
          padding: 100px 0;
          background: var(--surface);
        }
        .note-content {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          align-items: center;
        }
        .creator-photo {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--orange-wheel);
          box-shadow: 0 0 25px rgba(0, 48, 73, 0.6),
            0 0 45px rgba(214, 40, 40, 0.4);
        }
        .cta {
          padding: 120px 0;
          background: var(--fire-engine-red);
          text-align: center;
          color: white;
        }
        footer {
          background: var(--prussian-blue);
          color: white;
          padding: 60px 0 30px;
        }
        .footer-bottom {
          text-align: center;
          opacity: 0.8;
        }
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--on-background);
          cursor: pointer;
          padding: 8px;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          left: -100%;
          width: 280px;
          height: 100vh;
          background: var(--surface);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          z-index: 2000;
          transition: left 0.3s ease;
          padding: 24px;
          overflow-y: auto;
        }
        .mobile-menu.active {
          left: 0;
        }
        .mobile-menu nav a {
          margin: 4px 0;
          text-decoration: none;
          color: var(--on-background);
        }
        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-toggle {
            display: block;
          }
        }
      `}</style>

      {/* NAV */}
      <header className="nav-header">
        <div className="md-container">
          <nav>
            <a href="/" className="logo">
              <span className="material-symbols-rounded">view_in_ar</span>
              XR Optimized
            </a>
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#creator">About Chris</a>
              <div className="dropdown">
                <a href="#">XR Tools ▾</a>
                <div className="dropdown-menu">
                  <a href="AR-Studio/studio-master/studio.html">AR Studio</a>
                  <a href="XR-Test">XR Test</a>
                  <a href="ar-showcase.html">AR Showcase</a>
                  <a href="vologram.html">Vologram</a>
                  <a href="ar-hologram.html">Hologram</a>
                  <a href="terrain.html">Terrain</a>
                  <a href="workspace.html">Workspace</a>
                  <a href="gemini-ui/copy.html">Gemini</a>
                </div>
              </div>
            </div>
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <span className="material-symbols-rounded">menu</span>
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="md-container">
          <h1>Conversational AI in Virtual Reality</h1>
          <p>
            Hi, I’m <strong>Chris Watt-Pringle</strong> — designer, builder, and
            curious experimenter. XR Optimized is my playground for blending XR,
            AI, and design.
          </p>
          <div className="hero-buttons">
            <a href="#features" className="md-button md-button-primary">
              Explore Features
            </a>
            <a href="#creator" className="md-button md-button-outline">
              Meet the Creator
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="md-container">
          <p>
            <strong>XR Optimized</strong> — Crafted by Chris Watt-Pringle.
            Blending AI, XR, and design — built with curiosity and coffee ☕.
          </p>
          <div className="footer-bottom">
            <p>&copy; 2024 XR Optimized · MIT License</p>
          </div>
        </div>
      </footer>
    </>
  )
}
