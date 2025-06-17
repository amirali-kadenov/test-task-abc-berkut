import type { InfiniteData } from "@tanstack/react-query"
import type { GetBySearchResponse } from "@/entities/photos/model/api/types"

export const isEmpty = (
  data: InfiniteData<GetBySearchResponse | null, unknown> | undefined,
) => {
  const totalPhotos = data?.pages.reduce(
    (acc, page) => acc + (page?.results?.length || 0),
    0,
  )

  return totalPhotos === 0
}
