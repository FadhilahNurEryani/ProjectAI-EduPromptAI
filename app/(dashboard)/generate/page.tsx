import React, { Suspense } from "react"
import dynamic from "next/dynamic"

const GenerateClient = dynamic(() => import("./GenerateClient"), { ssr: false })

export default function GeneratePage() {
  return (
    <Suspense fallback={<div className="p-8">Memuat...</div>}>
      <GenerateClient />
    </Suspense>
  )
}

