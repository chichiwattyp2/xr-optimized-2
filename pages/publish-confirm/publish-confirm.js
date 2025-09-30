"use client"

import React, { useEffect } from "react"

export default function PublishConfirmPage() {
  useEffect(() => {
    const run = async () => {
      const params = new URLSearchParams(window.location.search)
      const code = params.get("code")

      let response = await fetch(
        `https://gatekeeper-arjsstudio.fly.dev/authenticate/${code}`
      )
      response = await response.json()

      const pkg = new Package(window.session)
      const pagesUrl = await pkg.serve({
        packageType: "github",
        token: response.token, // required OAuth2 token
        message: "first commit for WebAR!" // optional
      })

      console.log("Published to:", pagesUrl)
    }

    run()
  }, [])

  return <div id="publish-confirm" />
}
