"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import InfiniteScroll from "react-infinite-scroll-component"
import { PAGE_PARAM, QUERY_PARAM, Photo, photoQueries } from "@/entities/photos"
import { GalleryEmpty } from "./gallery-empty"
import { GalleryError } from "./gallery-error"
import { GalleryLoading } from "./gallery-loading"
import { GallerySearchResults } from "./gallery-search-result"
import { GallerySkeleton } from "./gallery-skeleton"
import { GALLERY_GRID } from "../lib/constants"
import { isEmpty } from "../lib/utils"

export const Gallery = () => {
  const searchParams = useSearchParams()

  const query = searchParams?.get(QUERY_PARAM)
  const page = searchParams?.get(PAGE_PARAM)

  const { data, fetchNextPage, hasNextPage, error, isLoading } =
    useInfiniteQuery(
      photoQueries.infinitePhotos({
        query,
        page,
      }),
    )

  if (isLoading) {
    return <GalleryLoading />
  }

  if (error) {
    return <GalleryError />
  }

  if (isEmpty(data)) {
    return <GalleryEmpty />
  }

  return (
    <section>
      {query && (
        <GallerySearchResults
          search={query}
          totalResults={data?.pages[0]?.total}
          className="mb-6"
        />
      )}

      <InfiniteScroll
        dataLength={data?.pages.length ?? 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<GallerySkeleton />}
        className={GALLERY_GRID}
      >
        {data?.pages.map((page) =>
          page?.results?.map((photo) => <Photo photo={photo} key={photo.id} />),
        )}
      </InfiniteScroll>
    </section>
  )
}
