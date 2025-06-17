import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { notFound } from "next/navigation"
import { photoQueries } from "@/entities/photos"
import { createQueryClient } from "@/shared/lib/create-query-client"
import { PhotoDetails } from "./ui/photo-details"

type Props = {
  params: Promise<{ id: string }>
}

export const PhotoPage = async ({ params }: Props) => {
  const { id } = await params

  if (!id) notFound()

  const queryClient = createQueryClient()
  await queryClient.prefetchQuery(photoQueries.photo(id))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PhotoDetails id={id} />
    </HydrationBoundary>
  )
}
