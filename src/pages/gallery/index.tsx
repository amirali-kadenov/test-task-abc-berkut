import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { Suspense } from "react"
import { photoQueries } from "@/entities/photos/model/api/queries"
import { createQueryClient } from "@/shared/lib/create-query-client"
import { Header } from "@/widgets/header"
import { Gallery } from "./ui/gallery"
import { GallerySearch } from "./ui/gallery-search"
import { GallerySearchSkeleton } from "./ui/gallery-search-skeleton"

type SearchParams = Promise<{
  query?: string
  page?: string
}>

type Props = {
  searchParams: SearchParams
}

export const GalleryPage = async ({ searchParams }: Props) => {
  const params = await searchParams

  const queryClient = createQueryClient()

  await queryClient.prefetchInfiniteQuery(photoQueries.infinitePhotos(params))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header className="py-9" />

      <Suspense fallback={<GallerySearchSkeleton />}>
        <GallerySearch />
      </Suspense>

      <main className="mt-12 sm:mt-28 container">
        <Gallery />
      </main>
    </HydrationBoundary>
  )
}
