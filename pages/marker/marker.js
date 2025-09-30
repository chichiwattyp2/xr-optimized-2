"use client"

import React, { useEffect } from "react"

export default function MarkerPage() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const markerPattern = window.markerPattern

    const pkg = new Package({
      arType: "marker",
      assetType: window.assetType,
      assetFile: window.assetFile,
      assetParam: window.assetParam,
      markerPatt: markerPattern
    })

    pkg.serve({ packageType: "zip" }).then((base64) => {
      const link = document.createElement("a")
      link.href = `data:application/zip;base64,${base64}`
      link.download = "marker-ar.zip"
      link.click()
    })
  }, [])

  return <div id="ar-marker">Generating AR marker package…</div>
}
