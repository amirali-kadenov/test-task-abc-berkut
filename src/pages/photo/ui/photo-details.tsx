"use client"

import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { notFound } from "next/navigation"
import { photoQueries } from "@/entities/photos"
import { PhotoActions } from "@/entities/photos/ui/photo-actions"
import { PhotoDetailsBackground } from "./photo-details-background"
import { PhotoDetailsSkeleton } from "./photo-details-skeleton"
import { UserInfo } from "./user-info"

export const PhotoDetails = ({ id }: { id: string }) => {
  const { data: photo, isLoading, error } = useQuery(photoQueries.photo(id))

  if (isLoading) {
    return <PhotoDetailsSkeleton />
  }

  if (error || !photo) {
    return notFound()
  }

  return (
    <div className="relative pb-12 sm:pb-28 overflow-x-hidden">
      <PhotoDetailsBackground className="hidden sm:block" />

      <div className="relative container z-10 pt-10">
        <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-4 sm:gap-0">
          <UserInfo photo={photo} />
          <PhotoActions photo={photo} />
        </div>

        <Image
          className="mt-10 shadow-imageFull rounded-lg bg-white"
          key={photo.id}
          src={photo.urls.full}
          alt={photo.description || ""}
          width={photo.width}
          height={photo.height}
        />
      </div>
    </div>
  )
}
