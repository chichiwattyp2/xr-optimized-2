"use client"

import React, { useEffect } from "react"

export default function MarkerPage() {
  useEffect(() => {
    const markerPattern = window.markerPattern

    new Package({
      arType: "marker",
      assetType: window.assetType,
      assetFile: window.assetFile,
      assetParam: window.assetParam,
      markerPatt: markerPattern
    })
      .serve({ packageType: "zip" })
      .then((base64) => {
        const link = document.createElement("a")
        link.href = `data:application/zip;base64,${base64}`
        link.download = "marker-ar.zip"
        link.click()
      })
  }, [])

  return <div id="ar-marker" />
}
