"use client"

import React, { useEffect, useState } from "react"

export default function MainPage() {
  const [radioState, setRadioState] = useState(null)
  const [errorVisible, setErrorVisible] = useState(false)

  useEffect(() => {
    // Reset all inputs on load
    if (typeof document !== "undefined") {
      document.querySelectorAll("input").forEach((input) => {
        input.checked = false
      })
    }
  }, [])

  const handleRadioClick = (e) => {
    const id = e.target.id
    setRadioState(id)
    setErrorVisible(false) // clear any previous error
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
    <div className="main-page">
      <h1>Select AR Mode</h1>

      <div className="radio-options">
        <label>
          <input
            type="radio"
            id="marker"
            name="mode"
            onClick={handleRadioClick}
          />
          Marker
        </label>

        <label>
          <input
            type="radio"
            id="location"
            name="mode"
            onClick={handleRadioClick}
          />
          Location
        </label>
      </div>

      <a
        id="start-building"
        href={getHref()}
        onClick={handleAnchorClick}
        className="btn"
      >
        Start Building
      </a>

      {errorVisible && (
        <p id="error" style={{ color: "red", visibility: "visible" }}>
          Please select an option before continuing.
        </p>
      )}
    </div>
  )
}
