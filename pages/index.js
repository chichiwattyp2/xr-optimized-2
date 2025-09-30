"use client"

import Head from "next/head"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>AR Studio</title>
        <link rel="shortcut icon" href="/assets/img/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Stylesheets */}
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/main/main.css" />

        {/* Scripts (will run client-side) */}
        <script src="/components/header/header.js" />
        <script src="/main/main.js" />
        <script src="/components/feedback/stickybutton.js" />
      </Head>

      {/* Body content */}
      <page-header assetsUrl="assets"></page-header>

      <div className="background">
        <div className="content">
          <p className="title">Web-enabled AR experiences</p>
          <p className="paragraph">
            AR.js Studio is an open-source AR creation platform for building custom augmented
            reality experiences. You can create location-based or marker-based AR applications
            and deploy them straight to the web. That means you won’t have to download any
            extra apps to access your experience! Working with AR.js Studio doesn’t require any
            knowledge of coding, either. You can start creating your first AR project right now.
          </p>

           <img class="splashscreen" src="/assets/img/splashscreen.png" alt="Demo image home page"/>

          <p className="lead">Pick your project type</p>

          <div>
            <label className="radio-container paragraph">
              <span className="radio-title">Location-based</span>
              <input
                id="location"
                type="radio"
                name="radio"
                onClick={() => window.radioOnclick?.(document.getElementById("location"))}
              />
              <span>Place your creation on a map, so it remains tied to a physical location.</span>
              <span className="checkmark"></span>
            </label>

            <label className="radio-container paragraph">
              <span className="radio-title">Marker-based</span>
              <input
                id="marker"
                type="radio"
                name="radio"
                onClick={() => window.radioOnclick?.(document.getElementById("marker"))}
              />
              <span>
                Connect your creation to a visual marker, which can be moved to any location.
              </span>
              <span className="checkmark"></span>
            </label>

            <div className="buttons-container">
              <a
                id="start-building"
                className="primary-button"
                onClick={() =>
                  window.anchorOnclick?.(document.getElementById("start-building"))
                }
              >
                Start building
              </a>
            </div>

            <feedback-button></feedback-button>

            <div id="error" className="error" style={{ visibility: "hidden" }}>
              Please, select a project type.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
