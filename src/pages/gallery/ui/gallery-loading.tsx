import { cn } from "@/shared/lib/utils/cn"
import { GallerySkeleton } from "./gallery-skeleton"
import { GALLERY_GRID } from "../lib/constants"

type Props = {
  className?: string
}

export const GalleryLoading = ({ className }: Props) => {
  return (
    <div className={cn(GALLERY_GRID, "container mb-6", className)}>
      <GallerySkeleton />
    </div>
  )
}
