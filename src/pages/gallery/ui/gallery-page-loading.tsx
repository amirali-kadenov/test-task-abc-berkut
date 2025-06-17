import { GalleryLoading } from "./gallery-loading"
import { GallerySearchSkeleton } from "./gallery-search-skeleton"

export const GalleryPageLoading = () => {
  return (
    <>
      <GallerySearchSkeleton />
      <GalleryLoading className="mt-12 sm:mt-28" />
    </>
  )
}
