export const PATHS = {
  ROOT: "/",
  FAVORITES: "/favorites",
  PHOTO: {
    get: (id: string) => `/photo/${id}`,
  },
}
