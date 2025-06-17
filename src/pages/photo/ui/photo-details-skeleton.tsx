import { Skeleton } from "@/shared/ui/skeleton"

export const PhotoDetailsSkeleton = () => {
  return (
    <div className="relative pb-28">
      <div className="relative container z-10 mt-10">
        <div className="flex items-center justify-between">
          {/* UserInfo Skeleton */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
          {/* PhotoActions Skeleton */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-10 w-24 rounded-md" />
            <Skeleton className="h-10 w-24 rounded-md" />
          </div>
        </div>

        {/* Image Skeleton */}
        <Skeleton className="mt-10 rounded-lg w-full h-[600px]" />
      </div>
    </div>
  )
}
