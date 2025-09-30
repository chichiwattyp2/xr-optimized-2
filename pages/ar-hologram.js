"use client"

import React, { useEffect } from "react"
import Head from "next/head"
import * as THREE from "three"
import { ARButton } from "three/examples/jsm/webxr/ARButton.js"

export default function HologramsPage() {
  useEffect(() => {
    let renderer, scene, camera, particles, shaderMaterialParticles
    let textureOriginal = new THREE.Texture()
    let textureDepthMap = new THREE.Texture()
    let textureSegmentation
    let time = 0
    let mediaStream, imageCapture, controller, net

    const video = document.querySelector("video")
    const videoSelect = document.querySelector("#videoSource")

    async function loadModel() {
      // BodyPix is loaded via <script> in Head
      // eslint-disable-next-line no-undef
      net = await bodyPix.load({
        architecture: "MobileNetV1",
        outputStride: 16,
        multiplier: 0.75,
        quantBytes: 2,
        internalResolution: "medium",
        segmentationThreshold: 0.7,
      })
    }
    loadModel()

    function gotDevices(deviceInfos) {
      for (let i = 0; i !== deviceInfos.length; ++i) {
        const deviceInfo = deviceInfos[i]
        if (deviceInfo.kind === "videoinput") {
          const option = document.createElement("option")
          option.value = deviceInfo.deviceId
          option.text = deviceInfo.label || "Camera " + (videoSelect.length + 1)
          videoSelect.appendChild(option)
        }
      }
    }

    function getStream() {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop())
      }
      const videoSource = videoSelect.value
      const constraints = {
        video: { deviceId: videoSource ? { exact: videoSource } : undefined },
      }
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(gotStream)
        .catch((error) => console.error("getUserMedia error:", error))
    }

    function gotStream(stream) {
      mediaStream = stream
      video.srcObject = stream
      video.classList.remove("hidden")
      imageCapture = new ImageCapture(stream.getVideoTracks()[0])
    }

    navigator.mediaDevices
      .enumerateDevices()
      .then(gotDevices)
      .catch((error) => console.error("enumerateDevices error:", error))
      .then(getStream)

    function grabFrame() {
      imageCapture
        .grabFrame()
        .then((imageBitmap) => {
          const canvas = document.createElement("canvas")
          canvas.width = imageBitmap.width
          canvas.height = imageBitmap.height
          canvas.getContext("2d").drawImage(imageBitmap, 0, 0)
          textureOriginal = new THREE.Texture(canvas)
          textureOriginal.needsUpdate = true
          loadAndPredict(textureOriginal.image)
          video.hidden = true
        })
        .catch((err) => console.error("grabFrame error:", err))
    }

    function init() {
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 500)
      scene = new THREE.Scene()

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.xr.enabled = true
      renderer.setSize(window.innerWidth, window.innerHeight)

      document.getElementById("container").appendChild(renderer.domElement)
      document.body.appendChild(ARButton.createButton(renderer))

      const uniforms = {
        optionMode: { value: 1 },
        userPos: { value: camera.position },
        width: { value: 1 },
        height: { value: 1 },
        time: { value: time },
        originalImage: { value: textureOriginal },
        depthMap: { value: textureDepthMap },
      }

      shaderMaterialParticles = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.getElementById("vertexshaderParticle").textContent,
        fragmentShader: document.getElementById("fragmentshaderParticle").textContent,
        depthTest: false,
        transparent: true,
        vertexColors: true,
      })

      function onSelect() {
        grabFrame()
      }

      controller = renderer.xr.getController(0)
      controller.addEventListener("select", onSelect)
      scene.add(controller)
    }
    init()

    function animate() {
      renderer.setAnimationLoop(render)
    }

    function render() {
      time += 0.01
      if (particles) {
        particles.material.uniforms.time.value = time
      }
      renderer.render(scene, camera)
    }

    async function loadAndPredict(img) {
      if (!net) await loadModel()
      // eslint-disable-next-line no-undef
      const segmentation = await net.segmentPerson(img)
      createTextureAndParticlesFromSegmentation(segmentation)
    }

    function createTextureAndParticlesFromSegmentation(seg) {
      if (particles) scene.remove(particles)

      const size = seg.width * seg.height
      const data = new Uint8Array(3 * size)
      const positions = []
      const uvs = []
      let nAdded = 0
      let nbParticles = 0

      for (let i = 0; i < size; i++) {
        const stride = i * 3
        data[stride] = seg.data[i] * 255
        data[stride + 1] = seg.data[i]
        data[stride + 2] = seg.data[i]

        if (seg.data[i] > 0) {
          if (nAdded % 4 === 0) {
            nbParticles++
            const u = (i % seg.width) / seg.width
            const v = Math.floor(i / seg.width) / seg.height
            positions.push(Math.random(), Math.random(), Math.random())
            uvs.push(u, 1 - v)
          }
          nAdded++
        }
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
      geometry.setAttribute("uvs", new THREE.Float32BufferAttribute(uvs, 2))

      particles = new THREE.Points(geometry, shaderMaterialParticles)
      particles.material.uniforms.originalImage.value = textureOriginal
      particles.position.z = -4
      particles.frustumCulled = false
      particles.material.uniforms.width.value = seg.width
      particles.material.uniforms.height.value = seg.height

      textureSegmentation = new THREE.DataTexture(data, seg.width, seg.height, THREE.RGBFormat)
      textureSegmentation.flipY = true
      time = 0
      particles.material.uniforms.time.value = time
      particles.material.uniforms.depthMap.value = textureSegmentation

      scene.add(particles)
      animate()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Holograms</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/main.css" />
        {/* External libs */}
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.2"></script>
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix@2.0"></script>
        {/* Shaders */}
        <!-- Vertex -->
<script type="x-shader/x-vertex" id="vertexshaderParticle">{`
precision mediump float;

uniform sampler2D uVideo;      // color video (or same texture used for luminance-as-depth)
uniform sampler2D uDepthMap;   // OPTIONAL: separate greyscale depth. If not provided, we fall back to luminance of uVideo.
uniform bool uUseDepthMap;     // true to use uDepthMap, false to use luminance(uVideo)

uniform float uPointSize;      // base size in px
uniform float uDepthScale;     // how far to push points along +Z/-Z from the video luminance
uniform float uThreshold;      // drop very dark pixels (0.0–1.0)
uniform float uTime;           // for subtle jitter or effects

attribute vec3 position;       // grid positions on a plane
attribute vec2 aUv;            // per-point UV to sample the video

varying vec2 vUv;
varying float vFade;
varying vec3 vColor;

float luma(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }

void main() {
  vUv = aUv;

  // Sample color and (optionally) depth
  vec4 videoSample = texture2D(uVideo, vUv);
  float depthSample = uUseDepthMap
    ? texture2D(uDepthMap, vUv).r
    : luma(videoSample.rgb);

  // Threshold to reduce background noise
  float alive = step(uThreshold, depthSample);

  // Center depth around 0 so mid-greys stay near the original plane
  float dz = (depthSample - 0.5) * uDepthScale;

  // Optional micro jitter to reduce banding/flicker in very flat regions
  float jitter = (fract(sin(dot(vUv * (uTime*0.1 + 37.0), vec2(12.9898,78.233))) * 43758.5453) - 0.5) * 0.002;
  vec3 displaced = position + vec3(0.0, 0.0, dz + jitter);

  // Standard transform
  vec4 mv = modelViewMatrix * vec4(displaced, 1.0);

  // Size attenuation: closer points look bigger
  float atten = clamp(300.0 / max(1.0, -mv.z), 0.0, 6.0);
  gl_PointSize = max(1.0, uPointSize * atten);

  gl_Position = projectionMatrix * mv;

  // Pass color and a fade factor to frag
  vColor = videoSample.rgb;
  // Slight fade for very dark pixels so edges blend better
  vFade  = smoothstep(uThreshold, uThreshold + 0.1, depthSample) * alive;
}
`}</script>

<!-- Fragment -->
<script type="x-shader/x-fragment" id="fragmentshaderParticle">{`
precision mediump float;

uniform sampler2D uVideo;
varying vec2 vUv;
varying vec3 vColor;
varying float vFade;

void main() {
  // Circular sprite mask for soft round particles
  vec2 p = gl_PointCoord - 0.5;
  float mask = smoothstep(0.5, 0.0, length(p));

  vec3 col = vColor;

  // Compose final color (you can switch to additive in material for glow)
  float alpha = mask * vFade;

  // Discard tiny alphas to keep the depth buffer clean
  if (alpha < 0.01) discard;

  gl_FragColor = vec4(col, alpha);
}
`}</script>

      </Head>

      <div className="containerV">
        <video autoPlay playsInline className="hidden"></video>
        <div className="red-square">
          <div className="overlay">
            <label htmlFor="videoSource">Choose your camera: </label>
            <select id="videoSource"></select>
            <p>
              When in AR mode, create a hologram by looking at a person/face/photo
              and tap on the screen.
            </p>
           </div>
        </div>
      </div>
      <div id="container"></div>
    </>
  )
}
