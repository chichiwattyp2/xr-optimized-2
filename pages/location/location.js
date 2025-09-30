"use client"

import React, { useEffect } from "react"
import { serveZipPackage } from "@/lib/packageUtils"

export default function LocationPage() {
  useEffect(() => {
    serveZipPackage(
      {
        arType: "location",
        assetType: window.assetType,
        assetFile: window.assetFile,
        assetParam: window.assetParam,
      },
      "location-ar.zip"
    )
  }, [])

  return <h1>Location AR Page</h1>
}
