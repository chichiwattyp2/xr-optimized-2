"use client"

import React, { useEffect, useState } from "react"

export default function MainPage() {
  const [radioState, setRadioState] = useState(null)
  const [errorVisible, setErrorVisible] = useState(false)

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.querySelectorAll("input").forEach((input) => {
        input.checked = false
      })
    }
  }, [])

  const handleRadioClick = (e) => {
    setRadioState(e.target.id)
    setErrorVisible(false)
  }

  const handleAnchorClick = (e) => {
    if (!radioState) {
      e.preventDefault()
      setErrorVisible(true)
    }
  }

  const getHref = () => {
    if (radioState === "marker") return "/marker"
    if (radioState === "location") return "/location"
    return ""
  }

  return (
    <div>
      <h1>Select AR Mode</h1>

      <label>
        <input type="radio" id="marker" name="mode" onClick={handleRadioClick} /> Marker
      </label>
      <label>
        <input type="radio" id="location" name="mode" onClick={handleRadioClick} /> Location
      </label>

      <br />

      <a id="start-building" href={getHref()} onClick={handleAnchorClick}>
        Start Building
      </a>

      {errorVisible && <p style={{ color: "red" }}>Please select an option first.</p>}
    </div>
  )
}
