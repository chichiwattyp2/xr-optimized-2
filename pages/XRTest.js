

"use client"

import React, { useEffect } from "react"
import Head from "next/head"

export default function XRTest() {
  useEffect(() => {
    // All your inline scripts moved here so they run client-side
    // (copy/paste from your <script> blocks)

    // ---- Resume WebAudio on first gesture ----
    window.addEventListener(
      "pointerdown",
      () => {
        const Ctx = window.AudioContext || window.webkitAudioContext
        if (!Ctx) return
        try {
          const ctx = new Ctx()
          ctx.resume && ctx.resume()
        } catch (e) {}
      },
      { once: true }
    )

    // ---- PRODUCTS, CART state, catalog/cart renderers ----
    const PRODUCTS = [
      { id:"awaken-15", name:"Awaken (15ml)", price:399, category:"Tincture", strength:"1:1 THC:CBD", img:"https://images.unsplash.com/photo-1585386959984-a41552231605?q=80&w=400&auto=format&fit=crop" },
      { id:"awaken-30", name:"Awaken (30ml)", price:699, category:"Tincture", strength:"1:1 THC:CBD", img:"https://images.unsplash.com/photo-1611077543631-b002bc36fdae?q=80&w=400&auto=format&fit=crop" },
      { id:"traveler-gummy", name:"Traveler Gummies (10pc)", price:349, category:"Edible", strength:"10mg/pc", img:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=400&auto=format&fit=crop" },
      { id:"big-cookie", name:"Blom Big Cookie (60mg)", price:129, category:"Edible", strength:"60mg", img:"https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop" },
      { id:"neuroplus", name:"NeuroPlus (30ml)", price:799, category:"Tincture", strength:"CBN:CBD Formula", img:"https://images.unsplash.com/photo-1585238342028-79336f1266c9?q=80&w=400&auto=format&fit=crop" },
      { id:"vape-awaken", name:"Awaken Vape (1g)", price:599, category:"Vape", strength:"Broad Spec", img:"https://images.unsplash.com/photo-1601972602229-98bfd02f40a1?q=80&w=400&auto=format&fit=crop" }
    ]

    let CART = []
    const catalogEl = document.getElementById("catalog")
    const cartEl = document.getElementById("cart")
    const cartCount = document.getElementById("cartCount")

    function renderCatalog() {
      if (!catalogEl) return
      catalogEl.innerHTML =
        "<h3>Catalog</h3>" +
        PRODUCTS.map(
          (p) => `
        <div class="item">
          <img src="${p.img}" alt="${p.name}"/>
          <div style="flex:1">
            <div style="font-weight:600">${p.name}</div>
            <div class="muted">${p.category} · ${p.strength || ""}</div>
          </div>
          <div class="row">
            <div style="font-weight:700">R ${p.price}</div>
            <button class="btn" data-id="${p.id}">View</button>
          </div>
        </div>`
        ).join("")
      catalogEl.querySelectorAll("button[data-id]").forEach((btn) =>
        btn.addEventListener("click", () => {
          const p = PRODUCTS.find((x) => x.id === btn.dataset.id)
          if (p) openProduct(p)
        })
      )
    }

    function renderCart() {
      if (!cartEl) return
      const total = CART.reduce((s, i) => s + i.price * i.qty, 0)
      cartEl.innerHTML =
        `<h3>Your Cart</h3>` +
        (CART.length
          ? CART.map(
              (i) => `
          <div class="item">
            <img src="${i.img}" alt="${i.name}"/>
            <div style="flex:1">
              <div style="font-weight:600">${i.name}</div>
              <div class="muted">Qty: ${i.qty}</div>
            </div>
            <div class="row">
              <div style="font-weight:700">R ${i.price * i.qty}</div>
              <button class="btn" data-remove="${i.id}">Remove</button>
            </div>
          </div>`
            ).join("")
          : '<div class="muted">Your cart is empty.</div>') +
        `<div class="row" style="margin-top:8px; justify-content:space-between">
          <div style="font-weight:700">Total</div>
          <div style="font-weight:700">R ${total}</div>
        </div>
        <button id="checkout" class="btn" style="width:100%; margin-top:8px">Checkout</button>`

      cartEl.querySelectorAll("button[data-remove]").forEach((btn) =>
        btn.addEventListener("click", () => {
          CART = CART.filter((i) => i.id !== btn.dataset.remove)
          updateCart()
        })
      )
      const checkoutBtn = cartEl.querySelector("#checkout")
      if (checkoutBtn)
        checkoutBtn.addEventListener("click", () => {
          alert("Checkout clicked – connect to payment gateway / API.")
        })
    }

    function updateCart() {
      if (cartCount) cartCount.textContent = CART.reduce((s, i) => s + i.qty, 0)
      renderCart()
    }

    function addToCart(p) {
      const ex = CART.find((i) => i.id === p.id)
      if (ex) ex.qty += 1
      else CART.push({ ...p, qty: 1 })
      updateCart()
    }

    function openProduct(p) {
      const ok = confirm(
        `${p.name}\n${p.category} • ${p.strength || ""}\nPrice: R ${
          p.price
        }\n\nAdd to cart?`
      )
      if (ok) addToCart(p)
    }

    document.getElementById("btnCatalog")?.addEventListener("click", () =>
      catalogEl.classList.toggle("open")
    )
    document.getElementById("btnCart")?.addEventListener("click", () =>
      cartEl.classList.toggle("open")
    )
    document.getElementById("btnVR")?.addEventListener("click", () => {
      document.querySelector("a-scene")?.enterVR()
    })

    renderCatalog()
    renderCart()
  }, [])

  return (
    <>
      <Head>
        <title>XR-Test</title>
        <script src="https://aframe.io/releases/1.7.0/aframe.min.js"></script>
        <script src="spotify/build.js"></script>
        <script src="https://unpkg.com/spotify-web-api-js/dist/spotify-web-api.js"></script>
        <script src="spotify/annyang.min.js"></script>
        <script src="https://unpkg.com/aframe-play-sound-on-event@1.0.2/dist/aframe-play-sound-on-event.min.js"></script>
        <script src="https://unpkg.com/aframe-event-set-component@3.0.3/dist/aframe-event-set-component.min.js"></script>
        <script src="spotify/aframe-dialog-popup-component.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.0/dist/aframe-extras.min.js"></script>
        <script src="https://rawgit.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"></script>
        <style>{`
          html, body {margin:0; height:100%;}
          .ui {position:fixed; inset:0; pointer-events:none; font-family: system-ui, -apple-system, Segoe UI, Roboto, "DM Sans", Arial, sans-serif; z-index: 9999;}
          .topbar {position:absolute; left:0; right:0; top:0; height:56px; display:flex; align-items:center; gap:10px; padding:0 12px; color:#fff; pointer-events:auto;}
          .topbar .glass {backdrop-filter: blur(8px); background: rgba(0,0,0,.35); border-bottom:1px solid rgba(255,255,255,.08);} 
          .brand {display:flex; align-items:center; gap:10px; font-weight:700}
          .brand .logo {width:28px; height:28px; border-radius:6px; background:#000; display:inline-flex; align-items:center; justify-content:center; color:#0bd3ff; font-weight:800}
          .spacer {flex:1}
          .btn {appearance:none; border:1px solid rgba(255,255,255,.15); background: rgba(0,0,0,.5); color:#fff; padding:8px 12px; border-radius:12px; cursor:pointer; pointer-events:auto}
          .panel {position:absolute; right:12px; top:68px; width:360px; max-height:70vh; overflow:auto; background: rgba(10,10,10,.9); border:1px solid rgba(255,255,255,.12); border-radius:16px; color:#eee; padding:12px; display:none; box-shadow: 0 10px 30px rgba(0,0,0,.4); pointer-events:auto}
          .panel.open {display:block}
          .item {display:flex; gap:10px; padding:10px; border-radius:12px; border:1px solid rgba(255,255,255,.12); margin-bottom:10px; align-items:center}
          .item img {width:56px; height:56px; object-fit:cover; border-radius:8px}
          .muted {opacity:.8; font-size:12px}
          .row {display:flex; align-items:center; justify-content:space-between; gap:8px}
          .hint {position:absolute; left:12px; bottom:12px; background: rgba(0,0,0,.55); border:1px solid rgba(255,255,255,.1); color:#ddd; padding:8px 10px; border-radius:10px; font-size:13px}
        `}</style>
      </Head>

      <div className="ui">
        <div className="topbar glass">
          <div className="brand">
            <div className="logo">i</div> iLabs Dispensary{" "}
            <span style={{ fontSize: "11px", opacity: 0.8, marginLeft: "6px" }}>
              Metaverse
            </span>
          </div>
          <div className="spacer"></div>
          <button className="btn" id="btnCatalog">
            Catalog
          </button>
          <button className="btn" id="btnCart">
            Cart (<span id="cartCount">0</span>)
          </button>
          <button className="btn" id="btnVR">
            Enter VR
          </button>
        </div>
        <div id="catalog" className="panel"></div>
        <div id="cart" className="panel"></div>
        <div className="hint">
          Desktop: WASD + mouse to look · Click products to view · VR: use
          controller to point + trigger
        </div>
      </div>

      {/* Your entire A-Frame scene remains untouched */}
      <a-scene renderer="colorManagement: true; physicallyCorrectLights: true;" background="color: #0b0b0b" vr-mode-ui="enabled: true">
      <a-assets>
       
          <img
            id="dawn"
            crossorigin="anonymous"
            src="https://cdn.glitch.com/9f5d1b92-a581-4134-8864-9bd98ff8ed97%2Fdawn.jpeg"
          />

          <a-asset-item
            id="roomer"
            src="https://cdn.glitch.com/9f5d1b92-a581-4134-8864-9bd98ff8ed97%2Fglassedit.glb"
          ></a-asset-item>
        
        
    
   
      <a-asset-item id="roboto" src="https://cdn.aframe.io/fonts/Roboto-msdf.json"></a-asset-item>
     
    
       
      </a-assets>
  <!-- Hidden “host” for the player + analyser -->
      <a-entity id="playerHost" audioanalyser spotify position="0 0 0" visible="false"></a-entity>

      <!-- Centered UI panel in front of the camera -->
      <a-entity position="-7.70206 4.78398 8.53435" spotify-panel-ui="" rotation="0 180 0"></a-entity>

       <a-sky src="#dawn"></a-sky>

        <!-- directional light and ambient lighting -->

        <a-entity
          light="color: #ccccff; intensity: 1; type: ambient;"
          visible=""
        ></a-entity>
    

    <!-- 
    <a-entity id="room">
      <a-plane position="0 0 0" rotation="-90 0 0" width="30" height="30" material="src: #floorTex; repeat: 4 4; roughness: 0.9" shadow="receive: true"></a-plane>
      <a-box color="#151515" depth="0.2" height="6" width="30" position="0 3 -15"></a-box>
      <a-box color="#151515" depth="30" height="6" width="0.2" position="-15 3 0"></a-box>
      <a-box color="#151515" depth="30" height="6" width="0.2" position="15 3 0"></a-box>
      <a-box color="#222" depth="0.2" height="0.2" width="30" position="0 6 -15"></a-box>
     
      <a-box color="#0bd3ff" width="6" height="0.2" depth="0.5" position="0 3.5 -7" material="emissive: #0bd3ff; emissiveIntensity: 1.2"></a-box>
    </a-entity>-->
<!--travel-->

<!--<a-entity
        id="dialog"
        position="0 1.2 -4"
        dialog-popup="
          openIconImage: assets/info.jpg;
          closeIconImage: assets/close.jpg;
          title: Welcome To SuperCruisr;
          body: To move around the enviroment: line up the white CIRLCE cursor on your screen with the floating crystals and click or tap.
          to release your cursor on desktop. press the ESC key.;
          "></a-entity>-->
<a-gltf-model src="#roomer" position="47.87792 -11.04427 -10.03337" gltf-model="https://cdn.glitch.com/9f5d1b92-a581-4134-8864-9bd98ff8ed97%2Fglassedit.glb" rotation="0 180 0" scale="1.5 1.5 1.5">
        </a-gltf-model>
<a-entity id="travel">
        <!--  CHECKPOINTS BEGIN -->
        <a-icosahedron
          checkpoint=""
          color="#FF926B"
          radius="0.25"
          position="-2.83815 1.03616 -4.50222"
          material="normalMap: true; roughness: 0; metalness: 0.3;  transparent: true; opacity: 1"
          rotation="0 151.5181857798522 0"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 5000"
          geometry=""
          event-set__enter="_event: mouseenter; _target: #Text; visible: true"
                  event-set__leave="_event: mouseleave; _target: #Text; visible: false">
        <a-text id="Text" value="This is a checkpoint" align="center" color="#FFF" visible="false" position="0 -0.55 0.55"
                geometry="primitive: plane; width: 1.75" material="color: #333"></a-text>
        </a-icosahedron>
       
        <a-icosahedron
          checkpoint=""
          color="#FF926B"
          radius="0.25"
          position="10.38706 4.51096 -15.13568"
          material="normalMap: true; roughness: 0; metalness: 0.3;  transparent: true; opacity: 1"
          rotation="0 155.26644895094998 0"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 5000"
          geometry=""
        ></a-icosahedron>
        <a-icosahedron
          checkpoint=""
          color="#FF926B"
          radius="0.25"
          position="23.23242 6.96579 -4.0634"
          material="normalMap: true; roughness: 0; metalness: 0.3;  transparent: true; opacity: 1"
          rotation="0 155.26644895094998 0"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 5000"
          geometry=""
        ></a-icosahedron>
        <a-icosahedron
          checkpoint=""
          color="#FF926B"
          radius="0.25"
          position="3.97271 6.96579 -10.7524"
          material="normalMap: true; roughness: 0; metalness: 0.3;  transparent: true; opacity: 1"
          rotation="0 155.26644895094998 0"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 5000"
          geometry=""
        ></a-icosahedron>
        <a-icosahedron
          checkpoint=""
          color="#FF926B"
          radius="0.25"
          position="-5.85937 4.97873 -10.7524"
          material="normalMap: true; roughness: 0; metalness: 0.3;  transparent: true; opacity: 1"
          rotation="0 155.26644895094998 0"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 5000"
          geometry=""
        ></a-icosahedron></a-entity>

    
   <a-entity id="rig" movement-controls="controls: checkpoint" checkpoint-controls="mode: animate" position="0 2.22085 6.6555" rotation="0 0 0">
          <a-camera>
         <a-entity cursor="" position="0.00705 0.04225 -1.70324" geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03" material="shader: flat; color: #CCC" raycaster=""></a-entity></a-camera></a-entity>
    </a-scene>
    </>
  )
}
