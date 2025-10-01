"use client"

import Head from "next/head"
import Script from "next/script"

export default function ShopPage() {
  return (
    <>
      <Head>
        <title>Assistant + Shop (Staging)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`html,body{margin:0;height:100%;background:#000}`}</style>
      </Head>

      {/* A-Frame + components */}
      <Script src="https://aframe.io/releases/1.7.1/aframe.min.js" strategy="beforeInteractive" />
      <Script src="https://unpkg.com/aframe-environment-component@1.3.1/dist/aframe-environment-component.min.js" strategy="beforeInteractive" />
      <Script src="/js/product-card.js" strategy="afterInteractive" />
      <Script src="/js/assistant-shop.js" strategy="afterInteractive" />

      <div id="arControls"></div>

      <a-scene webxr="requiredFeatures: hit-test, local-floor; optionalFeatures: dom-overlay; overlayElement: #arControls;">
        {/* Camera */}
        <a-entity camera position="0 1.6 0" look-controls wasd-controls ar-cursor></a-entity>

        {/* Lights */}
        <a-entity light="type: directional; intensity: 0.6; color: #ffffff" position="0 3 -2"></a-entity>
        <a-entity light="type: point; intensity: 0.35; color: #7be2ff" position="2 2 1"></a-entity>
        <a-entity light="type: point; intensity: 0.28; color: #ff6bd6" position="-2 2 -1"></a-entity>
        <a-entity light="type: ambient; intensity: 0.25; color: #cfcfcf"></a-entity>

        {/* Two product cards */}
        <a-entity
          position="-0.7 1.1 -2.2"
          product-card="id: awaken-15; src: /assets/awaken15.png; name: Awaken Chews (15ct); price: 15; width: 0.54; height: 0.74"
        ></a-entity>

        <a-entity
          position="0.7 1.1 -2.2"
          product-card="id: awaken-30; src: /assets/awaken30.png; name: Awaken Chews (30ct); price: 28; width: 0.54; height: 0.74"
        ></a-entity>
      </a-scene>
    </>
  )
}
