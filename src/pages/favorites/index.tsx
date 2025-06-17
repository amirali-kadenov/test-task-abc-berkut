"use client"

import { GALLERY_GRID, useFavorites } from "@/entities/photos"
import { cn } from "@/shared/lib/utils/cn"
import { FavoriteCard } from "./ui/favorite-card"

export const FavoritesPage = () => {
  const favorites = useFavorites((state) => state.favorites)

  return (
    <section className="container">
      <h1 className="text-2xl sm:text-7xl mt-12 sm:mt-24 font-bold text-center">
        Избранное
      </h1>

      <div className={cn(GALLERY_GRID, "my-12 sm:my-24")}>
        {favorites.map((photoId) => (
          <FavoriteCard key={photoId} photoId={photoId} />
        ))}
      </div>
    </section>
  )
}
