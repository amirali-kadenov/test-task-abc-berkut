import { useQuery } from "@tanstack/react-query"
import { photoQueries } from "../api/queries"

export const usePhoto = (photoId: string) => {
  return useQuery(photoQueries.photo(photoId))
}
