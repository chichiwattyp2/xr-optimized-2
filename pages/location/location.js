"use client"

import React, { useEffect } from "react"

export default function LocationPage() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const pkg = new Package({
      arType: "location",
      assetType: window.assetType,
      assetFile: window.assetFile,
      assetParam: window.assetParam
    })

    pkg.serve({ packageType: "zip" }).then((base64) => {
      const link = document.createElement("a")
      link.href = `data:application/zip;base64,${base64}`
      link.download = "ar.zip"
      link.click()
    })
  }, [])

  return <div id="ar-location">Generating AR location package…</div>
}
