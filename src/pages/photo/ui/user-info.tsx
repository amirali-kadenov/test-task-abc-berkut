import Image from "next/image"
import type { UnsplashPhotoType } from "@/entities/photos"

type Props = {
  photo: UnsplashPhotoType
}

export const UserInfo = ({ photo }: Props) => {
  return (
    <div className="flex flex-col gap-4 min-w-[305px]">
      <div className="flex items-center gap-4 p-2">
        <Image
          src={photo.user?.profile_image?.medium || "./placeholder.svg"}
          alt={photo.user?.name}
          width={55}
          height={55}
          className="size-[55px] rounded-lg border-2 border-black sm:border-white object-cover"
        />

        <div className="flex flex-col justify-center text-lg text-black sm:text-white">
          <span>{photo.user?.name}</span>
          <span className="opacity-80">@{photo.user?.username}</span>
        </div>
      </div>
    </div>
  )
}
