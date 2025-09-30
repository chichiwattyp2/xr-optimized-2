"use client"

import Head from "next/head"

export default function HomePage() {
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
        }
        body {
          font-family: "Inter", sans-serif;
          background: var(--vanilla);
        }
        /* rest of your CSS here */
      `}</style>

      {/* NAV */}
      <header className="nav-header">
        <div className="md-container">
          <nav>
            <a href="/" className="logo">
              XR Optimized
            </a>
            {/* ... */}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="md-container">
          <h1>Conversational AI in Virtual Reality</h1>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="md-container">
          <p>XR Optimized — Crafted by Chris Watt-Pringle.</p>
        </div>
      </footer>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            function toggleMobileMenu() {
              document.getElementById('mobileMenu').classList.toggle('active');
            }
          `,
        }}
      />
    </>
  )
}
