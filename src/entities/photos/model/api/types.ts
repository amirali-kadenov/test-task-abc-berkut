export type GetRandomParams = {
  orientation?: Orientation
  count?: number
}

export type GetBySearchParams = {
  query: string
  page?: number
  per_page?: number
  orientation?: Orientation
}

export type GetBySearchResponse = {
  results: UnsplashPhotoType[]
  total: number
  totalPages: number
}

export type GetPhotoParams = {
  id: string
  orientation?: Orientation
}

type Orientation = "landscape" | "portrait" | "square"

export type UnsplashPhotoType = {
  id: string
  created_at: string
  updated_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  downloads: number
  likes: number
  liked_by_user: boolean
  description: string | null
  exif: ExifData
  location: PhotoLocation
  current_user_collections: UserCollection[]
  urls: PhotoUrls
  links: PhotoLinks
  user: UnsplashUser
}

type ExifData = {
  make: string | null
  model: string | null
  exposure_time: string | null
  aperture: string | null
  focal_length: string | null
  iso: number | null
}

type PhotoLocation = {
  name: string | null
  city: string | null
  country: string | null
  position: {
    latitude: number | null
    longitude: number | null
  }
}

type UserCollection = {
  id: number
  title: string
  published_at: string
  last_collected_at: string
  updated_at: string
  cover_photo: null
  user: null
}

type PhotoUrls = {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

type PhotoLinks = {
  self: string
  html: string
  download: string
  download_location: string
}

type UnsplashUser = {
  id: string
  updated_at: string
  username: string
  name: string
  portfolio_url: string | null
  bio: string | null
  location: string | null
  total_likes: number
  total_photos: number
  total_collections: number
  instagram_username: string | null
  twitter_username: string | null
  links: UserLinks
  profile_image: ProfileImage
}

type UserLinks = {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
}

type ProfileImage = {
  small: string
  medium: string
  large: string
}
