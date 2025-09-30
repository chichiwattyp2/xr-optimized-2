"use client"

import Head from "next/head"

export default function HomePage() {
  return (

    <>
      <Head>
        <title>AR Studio</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Chakra+Petch&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />

        {/* External scripts and styles */}
        <script src="/components/header/header.js" type="module"></script>
        <script src="/components/main/main.js" type="module"></script>
        <script src="/components/feedback/stickybutton.js" type="module"></script>
        <script src="/components/back-anchor/back-anchor.js" type="module"></script>

        <link rel="stylesheet" href="/css/studio.css" />
        <link rel="shortcut icon" href="/assets/img/favicon.ico" />
      </Head>

      <div className="background">
        <div className="content">
          <p className="title">Web-enabled AR experiences</p>
          <p className="paragraph">
            I built this project using the open-source AR.js JavaScript
            framework, which makes it easy to create custom augmented reality
            experiences for the web. With AR.js, you can build both
            location-based and marker-based AR applications that run directly in
            your browser—no app downloads or coding expertise required.
          </p>

          <img
            className="splashscreen"
            src="/assets/img/splashscreen.png"
            alt="Demo image home page"
          />

          <p className="lead">Pick your project type</p>

          <div>
            <label className="radio-container paragraph">
              <span className="radio-title">Location-based</span>
              <input
                id="location"
                type="radio"
                name="radio"
                onClick={() =>
                  window.radioOnclick?.(document.getElementById("location"))
                }
              />
              <span>
                Place your creation on a map, so it remains tied to a physical
                location.
              </span>
              <span className="checkmark"></span>
            </label>

            <label className="radio-container paragraph">
              <span className="radio-title">Marker-based</span>
              <input
                id="marker"
                type="radio"
                name="radio"
                onClick={() =>
                  window.radioOnclick?.(document.getElementById("marker"))
                }
              />
              <span>
                Connect your creation to a visual marker, which can be moved to
                any location.
              </span>
              <span className="checkmark"></span>
            </label>

            <div className="buttons-container">
              <a
                id="start-building"
                className="primary-button"
                onClick={() =>
                  window.anchorOnclick?.(
                    document.getElementById("start-building")
                  )
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
