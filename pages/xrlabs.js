"use client"

import Head from "next/head"

export default function XRLabsPage() {
  return (
    <>
      <Head>
        <title>XR Labs</title>
        <meta charSet="utf-8" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Asimovian&display=swap"
          rel="stylesheet"
        />

        {/* Libs */}
        <script src="/js/openai-client.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://aframe.io/releases/1.7.1/aframe.min.js"></script>
        <script src="/js/nav.js"></script>
        <script src="https://unpkg.com/aframe-controller-cursor-component@0.2.7/dist/aframe-controller-cursor-component.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/gh/c-frame/aframe-extras@7.6.0/dist/aframe-extras.min.js"></script>
        <script src="https://unpkg.com/aframe-environment-component@1.5.x/dist/aframe-environment-component.min.js"></script>
        <script src="https://unpkg.com/aframe-event-set-component@5.0.1/dist/aframe-event-set-component.min.js"></script>
        <script src="/js/assistant.js"></script>
        <script src="/js/travel-node-component.js"></script>

        {/* Icons */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
        />
      </Head>

      {/* nav placeholder */}
      <div id="nav-placeholder"></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            fetch("/nav.html")
              .then(res => res.text())
              .then(html => {
                document.getElementById("nav-placeholder").innerHTML = html;
              });
          `,
        }}
      />

      {/* Scene */}
      <a-scene
        antialias="true"
        vr-mode-ui="enabled: true"
        loading-screen="backgroundColor: #212121"
        physics
      >
        {/* Camera */}
        <a-entity
          id="camera"
          camera
          position="0 1.6 1"
          look-controls
          wasd-controls
        >
          <a-cursor
            rayOrigin="mouse"
            raycaster="objects: .clickable"
            material="color: white"
          ></a-cursor>
        </a-entity>

        {/* Assets */}
        <a-assets>
          <a-asset-item id="assistant-gltf" src="/assets/character.glb"></a-asset-item>
          <video id="1" autoPlay loop src="/assets/1.mp4"></video>
          <video id="2" autoPlay loop src="/assets/2.mp4"></video>
          {/* ... repeat for 3,4,5 */}
        </a-assets>

        {/* Assistant */}
        <a-entity id="ai" position="0 0 1.3" rotation="0 49.85 0">
          <a-entity
            id="virtual-assistant"
            gltf-model="/assets/character.glb"
            class="clickable"
            animation-mixer="clip: Idle; crossFadeDuration: 0.4"
            assistant-anim="speaking: Walking; listening: Idle"
            speech-input=""
            speech-output=""
            ai-brain="endpoint: api/js/vr-assistant.js"
            position="0.0516 0 -2.83458"
          ></a-entity>
          <a-entity
            position="0.05926 1.89855 -3.0031"
            text="align: center; color: #F54927; value: Press SPACE or click assistant to talk!"
            id="status-text"
          ></a-entity>
        </a-entity>

        {/* Sky + lights */}
        <a-sky src="#dawn"></a-sky>
        <a-entity
          light="color: #EEE; intensity: 0.5"
          position="-1.5379 5.13754 8.19083"
        ></a-entity>
      </a-scene>

      {/* Inline scripts for assistant + videos */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Forward clicks
            window.addEventListener('DOMContentLoaded', () => {
              const hitbox = document.getElementById('assistant-hitbox');
              const assistant = document.getElementById('virtual-assistant');
              if (hitbox && assistant) {
                hitbox.addEventListener('click', () => {
                  assistant.emit('click');
                  assistant.emit('mouseenter');
                  setTimeout(() => assistant.emit('mouseleave'), 150);
                });
              }
            });

            // Autoplay videos on first interaction
            (function () {
              const vids = Array.from(document.querySelectorAll('video'));
              const tryPlayAll = () => { vids.forEach(v => v.play().catch(()=>{})); };
              window.addEventListener('pointerdown', tryPlayAll, { once: true });
              window.addEventListener('keydown', tryPlayAll,   { once: true });
            })();
          `,
        }}
      />
    </>
  )
}
