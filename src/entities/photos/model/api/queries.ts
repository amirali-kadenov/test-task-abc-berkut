import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query"
import { getPhoto, getPhotosBySearch, getRandomPhotos } from "./actions"
import { PER_PAGE } from "../../lib/constants"

type Params = {
  query?: string | null
  page?: string | null
}

export const photoQueries = {
  infinitePhotos: (params: Params) =>
    infiniteQueryOptions({
      queryKey: ["photos", params],

      queryFn: () => {
        if (params.query) {
          return getPhotosBySearch({
            query: params.query,
            page: params.page ? Number(params.page) : 1,
            per_page: PER_PAGE,
          })
        }

        return getRandomPhotos({
          count: PER_PAGE,
        })
      },

      getNextPageParam: (lastPage, _, pageParam) => {
        if (!lastPage?.results.length) return

        return pageParam + 1
      },

      initialPageParam: params?.page ? Number(params.page) : 1,
    }),

  photo: (id: string) =>
    queryOptions({
      queryKey: ["photo", id],
      queryFn: () => getPhoto({ id, orientation: "landscape" }),
    }),
}
