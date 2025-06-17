"use client"

import { AlertCircle } from "lucide-react"
import { Button } from "@/shared/ui/button"

export const GalleryError = () => {
  const retry = () => {
    window.location.reload()
  }

  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center container">
      <AlertCircle className="w-16 h-16 text-destructive mb-4" />
      <h2 className="text-2xl font-semibold mb-2">
        Oops! Something went wrong
      </h2>
      <p className="text-muted-foreground mb-4">
        We are having trouble loading the images. Please try again.
      </p>
      <Button onClick={retry}>Retry</Button>
    </div>
  )
}
