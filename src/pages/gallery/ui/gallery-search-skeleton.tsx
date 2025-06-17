import { Skeleton } from "@/shared/ui/skeleton"

export const GallerySearchSkeleton = () => {
  return (
    <Skeleton className="flex bg-cover bg-center items-center justify-center py-[92px] border-b-[16px]">
      <Skeleton className="lg:min-w-[866px] mx-5 h-[72px] rounded-lg" />
    </Skeleton>
  )
}
