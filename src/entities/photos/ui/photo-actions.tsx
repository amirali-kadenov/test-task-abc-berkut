"use client"

import clsx from "clsx"
import { Download, Heart } from "lucide-react"
import type { MouseEventHandler } from "react"
import { forwardRef, useImperativeHandle, useState } from "react"
import type { UnsplashPhotoType } from "@/entities/photos"
import { useFavorites } from "@/entities/photos"
import { downloadFile } from "@/shared/lib/utils/download-file"
import { Button } from "@/shared/ui/button"
import { Spinner } from "@/shared/ui/spinner"

type Props = {
  className?: string
  photo: UnsplashPhotoType
}

type ClickHandler = MouseEventHandler<HTMLButtonElement>

export type PhotoActionsRef = {
  isDownloading: boolean
}

export const PhotoActions = forwardRef<PhotoActionsRef, Props>(
  ({ className, photo }, ref) => {
    const [isDownloading, setIsDownloading] = useState(false)

    useImperativeHandle(ref, () => ({ isDownloading }))

    const { favorites, addFavorite, removeFavorite } = useFavorites()

    const isFavorite = favorites.includes(photo.id)

    const toggleFavorite: ClickHandler = (e) => {
      e.preventDefault()

      if (isFavorite) {
        removeFavorite(photo.id)
      } else {
        addFavorite(photo.id)
      }
    }

    const handleDownload: ClickHandler = async (e) => {
      e.preventDefault()

      setIsDownloading(true)

      await downloadFile(photo.urls.full, photo.id)

      setIsDownloading(false)
    }

    return (
      <div className={clsx("flex gap-5", className)}>
        <Button variant="whiteSolid" size="iconLg" onClick={toggleFavorite}>
          <Heart
            className={clsx(
              "size-6",
              isFavorite && "fill-red-500 text-red-500",
            )}
          />
        </Button>

        <Button
          variant="yellow"
          size="lg"
          disabled={isDownloading}
          onClick={handleDownload}
          className={clsx(
            "flex items-center justify-center gap-2 sm:gap-4",
            isDownloading && "cursor-progress",
          )}
        >
          <Download className="size-6" />
          Скачать
          {isDownloading && <Spinner />}
        </Button>
      </div>
    )
  },
)

PhotoActions.displayName = "PhotoActions"
