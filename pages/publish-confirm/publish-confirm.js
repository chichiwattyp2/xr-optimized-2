"use client"

import React, { useEffect, useState } from "react"

export default function PublishConfirmPage() {
  const [status, setStatus] = useState("Authenticating...")

  useEffect(() => {
    const run = async () => {
      if (typeof window === "undefined") return

      try {
        const params = new URLSearchParams(window.location.search)
        const code = params.get("code")

        let response = await fetch(`https://gatekeeper-arjsstudio.fly.dev/authenticate/${code}`)
        response = await response.json()

        const pkg = new Package(window.session)
        const pagesUrl = await pkg.serve({
          packageType: "github",
          token: response.token,
          message: "first commit for WebAR!"
        })

        console.log("Published to:", pagesUrl)
        setStatus("Published successfully!")
      } catch (err) {
        console.error(err)
        setStatus("Publish failed.")
      }
    }

    run()
  }, [])

  return (
    <div>
      <h1>Publish Confirmation</h1>
      <p>{status}</p>
    </div>
  )
}
