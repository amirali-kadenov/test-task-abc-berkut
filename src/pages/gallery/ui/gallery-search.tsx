import { PhotoSearch } from "@/features/photo-search"
import searchBg from "../assets/search-bg.png"

export const GallerySearch = () => {
  return (
    <div
      className="flex bg-cover bg-center items-center justify-center py-[92px] border-[#C4C4C4] border-b-[16px]"
      style={{ backgroundImage: `url(${searchBg.src})` }}
    >
      <PhotoSearch className="lg:min-w-[866px] mx-5" />
    </div>
  )
}
