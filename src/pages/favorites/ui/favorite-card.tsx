import { Photo, PhotoSkeleton } from "@/entities/photos"
import { usePhoto } from "@/entities/photos/model/queries/use-photo"

type Props = {
  photoId: string
}

export const FavoriteCard = ({ photoId }: Props) => {
  const query = usePhoto(photoId)

  if (query.isLoading) {
    return <PhotoSkeleton />
  }

  if (query.error || !query.data) {
    return null
  }

  return <Photo photo={query.data} />
}
