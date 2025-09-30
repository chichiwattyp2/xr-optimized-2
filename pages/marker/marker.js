"use client"

import React, { useEffect } from "react"
import { serveZipPackage } from "../../lib/packageUtils"

export default function MarkerPage() {
  useEffect(() => {
    serveZipPackage(
      {
        arType: "marker",
        assetType: window.assetType,
        assetFile: window.assetFile,
        assetParam: window.assetParam,
        markerPatt: window.markerPattern,
      },
      "marker-ar.zip"
    )
  }, [])

  return <h1>Marker AR Page</h1>
}
