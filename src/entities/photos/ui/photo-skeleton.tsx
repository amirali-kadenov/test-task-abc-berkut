import { Skeleton } from "@/shared/ui/skeleton"

export const PhotoSkeleton = () => {
  return (
    <div className="rounded-lg min-h-[453px]">
      <Skeleton className="w-full h-full" />
    </div>
  )
}
