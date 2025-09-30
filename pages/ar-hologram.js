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
    let hitTestSource = null
    let hitTestSourceRequested = false
    let reticle

    const video = document.querySelector("video")
    const videoSelect = document.querySelector("#videoSource")

    async function loadModel() {
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
      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.01,
        20
      )
      scene = new THREE.Scene()

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.xr.enabled = true
      renderer.setSize(window.innerWidth, window.innerHeight)
      document.getElementById("container").appendChild(renderer.domElement)
      document.body.appendChild(ARButton.createButton(renderer))

      // Reticle for hit-testing placement
      reticle = new THREE.Mesh(
        new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      )
      reticle.matrixAutoUpdate = false
      reticle.visible = false
      scene.add(reticle)

      const uniforms = {
        uVideo: { value: textureOriginal },
        uDepthMap: { value: textureDepthMap },
        uUseDepthMap: { value: true },
        uPointSize: { value: 2.5 },
        uDepthScale: { value: 1.2 },
        uThreshold: { value: 0.05 },
        uTime: { value: time },
      }

      shaderMaterialParticles = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.getElementById("vertexshaderParticle").textContent,
        fragmentShader: document.getElementById("fragmentshaderParticle").textContent,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })

      function onSelect() {
        grabFrame()
        if (particles && reticle.visible) {
          particles.position.setFromMatrixPosition(reticle.matrix)
          particles.quaternion.setFromRotationMatrix(reticle.matrix)
          scene.add(particles)
        }
      }

      controller = renderer.xr.getController(0)
      controller.addEventListener("select", onSelect)
      scene.add(controller)
    }
    init()

    function animate() {
      renderer.setAnimationLoop(render)
    }

    function render(timestamp, frame) {
      time += 0.01
      if (particles) {
        particles.material.uniforms.uTime.value = time
      }

      // Hit test each frame
      if (frame) {
        const referenceSpace = renderer.xr.getReferenceSpace()
        if (!hitTestSourceRequested) {
          const session = renderer.xr.getSession()
          session.requestReferenceSpace("viewer").then((refSpace) => {
            session.requestHitTestSource({ space: refSpace }).then((source) => {
              hitTestSource = source
            })
          })
          session.addEventListener("end", () => {
            hitTestSourceRequested = false
            hitTestSource = null
          })
          hitTestSourceRequested = true
        }

        if (hitTestSource) {
          const hitTestResults = frame.getHitTestResults(hitTestSource)
          if (hitTestResults.length) {
            const hit = hitTestResults[0]
            const pose = hit.getPose(referenceSpace)
            reticle.visible = true
            reticle.matrix.fromArray(pose.transform.matrix)
          } else {
            reticle.visible = false
          }
        }
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

      for (let i = 0; i < size; i++) {
        const stride = i * 3
        data[stride] = seg.data[i] * 255
        data[stride + 1] = seg.data[i]
        data[stride + 2] = seg.data[i]

        if (seg.data[i] > 0) {
          if (nAdded % 4 === 0) {
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
      geometry.setAttribute("aUv", new THREE.Float32BufferAttribute(uvs, 2))

      particles = new THREE.Points(geometry, shaderMaterialParticles)
      particles.frustumCulled = false
      particles.material.uniforms.uVideo.value = textureOriginal
      particles.material.uniforms.uDepthMap.value = textureSegmentation
      particles.material.uniforms.uTime.value = 0

      textureSegmentation = new THREE.DataTexture(data, seg.width, seg.height, THREE.RGBFormat)
      textureSegmentation.flipY = true

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
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.2"></script>
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix@2.0"></script>

        {/* Shaders (unchanged) */}
        <script type="x-shader/x-vertex" id="vertexshaderParticle">{`...`}</script>
        <script type="x-shader/x-fragment" id="fragmentshaderParticle">{`...`}</script>
      </Head>

      <div className="containerV">
        <video autoPlay playsInline className="hidden"></video>
        <div className="red-square">
          <div className="overlay">
            <label htmlFor="videoSource">Choose your camera: </label>
            <select id="videoSource"></select>
            <p>
              In AR mode, point at a person/photo and tap the screen to place
              their hologram at the green reticle.
            </p>
          </div>
        </div>
      </div>
      <div id="container"></div>
    </>
  )
}
