"use client"

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useRef, useState } from "react"
import { PATHS } from "@/shared/constants/paths"
import type { PhotoActionsRef } from "./photo-actions"
import { PhotoActions } from "./photo-actions"
import type { UnsplashPhotoType } from "../model/api/types"

type Props = {
  photo: UnsplashPhotoType
  className?: string
}

const FALLBACK_SRC = "/placeholder.svg"

export const Photo = ({ photo, className }: Props) => {
  const [imgSrc, setImgSrc] = useState(photo.urls.regular)
  const [isHovered, setIsHovered] = useState(false)

  const handleError = () => {
    setImgSrc(FALLBACK_SRC)
  }

  const actionsRef = useRef<PhotoActionsRef>(null)

  const onMouseEnter = useCallback(() => setIsHovered(true), [])

  const onMouseLeave = useCallback(() => {
    if (actionsRef.current?.isDownloading) return

    setIsHovered(false)
  }, [])

  return (
    <Link
      href={PATHS.PHOTO.get(photo.id)}
      className={clsx(
        "relative bg-muted aspect-square rounded-lg overflow-hidden",
        className,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        className="object-cover absolute h-full w-full left-1/2 -translate-x-1/2"
        key={photo.id}
        src={imgSrc}
        alt={photo.description || ""}
        width={photo.width}
        height={photo.height}
        onError={handleError}
      />

      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 p-4">
          <PhotoActions
            photo={photo}
            ref={actionsRef}
            className="justify-end"
          />
        </div>
      )}
    </Link>
  )
}
