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
        <script type="x-shader/x-vertex" id="vertexshaderParticle">{`
          // your vertex shader code...
        `}</script>
        <script type="x-shader/x-fragment" id="fragmentshaderParticle">{`
          // your fragment shader code...
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
            <div className="linkG">
              <p>
                <b>
                  <a href="https://github.com/nosy-b/holography">
                    https://github.com/nosy-b/holography
                  </a>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="container"></div>
    </>
  )
}
