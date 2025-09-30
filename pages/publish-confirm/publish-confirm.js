"use client"

import React, { useEffect } from "react"
import { publishToGitHub } from "../../lib/packageUtils"

export default function PublishConfirmPage() {
  useEffect(() => {
    async function publish() {
      const queryDict = {}
      location.search.substr(1).split("&").forEach((item) => {
        const [key, value] = item.split("=")
        queryDict[key] = decodeURIComponent(value)
      })

      let response = await fetch(
        `https://gatekeeper-arjsstudio.fly.dev/authenticate/${queryDict.code}`
      )
      response = await response.json()

      await publishToGitHub(window.session, response.token, "first commit for WebAR!")
    }

    publish()
  }, [])

  return <h1>Publishing Confirmation</h1>
}
