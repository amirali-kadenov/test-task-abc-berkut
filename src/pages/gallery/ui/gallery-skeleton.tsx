import { PER_PAGE, PhotoSkeleton } from "@/entities/photos"

type Props = {
  itemsCount?: number
}

export const GallerySkeleton = ({ itemsCount = PER_PAGE }: Props) => {
  return Array.from({ length: itemsCount }, (_, i) => <PhotoSkeleton key={i} />)
}
