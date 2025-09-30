"use client"

import React, { useEffect } from "react"

export default function HomePage() {
  useEffect(() => {
    const btn = document.getElementById("start")
    if (btn) {
      btn.onclick = () => alert("AR Started")
    }
  }, [])

  return (
    <div>
      <h1>Welcome to XR Studio</h1>
      <button id="start">Start</button>
    </div>
  )
}
