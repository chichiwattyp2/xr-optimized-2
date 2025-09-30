"use client"

import React from "react"
import dynamic from "next/dynamic"

const ThreeDViewer = dynamic(
  () => import("@/components/common/RoomSelector/ThreeDViewer"),
  { ssr: false }
)

export default function UploadImgPage() {
  return (
    <div>
      <ThreeDViewer />
    </div>
  )
}
