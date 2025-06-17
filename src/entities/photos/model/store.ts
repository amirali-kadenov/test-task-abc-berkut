import { createPersistentStore } from "@/shared/lib/create-persistent-store"

type State = {
  favorites: string[]
  isLoading: boolean
  error: Error | null
  addFavorite: (id: string) => void
  removeFavorite: (id: string) => void
}

export const useFavorites = createPersistentStore<State>("images", (set) => ({
  favorites: [],
  isLoading: false,
  error: null,
  addFavorite: (id) =>
    set((state) => {
      if (!state.favorites.includes(id)) {
        state.favorites.push(id)
      }
    }),
  removeFavorite: (id: string) =>
    set((state) => {
      state.favorites = state.favorites.filter((item) => item !== id)
    }),
}))
