"use client"

export const dynamic = "force-dynamic"

import React, { useEffect, useState } from "react"
import SceneComponent from "@/components/common/sceneComponent"

export default function ArPage() {
  const [storedValue, setStoredValue] = useState(null)

  useEffect(() => {
    const value = localStorage.getItem("myKey") // safe client-side
    setStoredValue(value)
  }, [])

  return (
    <div>
      <SceneComponent />
      {storedValue && <p>Stored value: {storedValue}</p>}
    </div>
  )
}
