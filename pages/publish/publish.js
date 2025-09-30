"use client"

import React, { useEffect, useState } from "react"

export default function PublishPage() {
  const [status, setStatus] = useState("Preparing...")

  useEffect(() => {
    const run = async () => {
      if (typeof window === "undefined") return

      try {
        const pkg = new Package(window.session)
        await pkg.serve({ packageType: "zip" })
        setStatus("Package created successfully!")
      } catch (err) {
        console.error("Publish failed", err)
        setStatus("Error creating package.")
      }
    }

    run()
  }, [])

  return (
    <div>
      <h1>Publishing</h1>
      <p>{status}</p>
    </div>
  )
}
