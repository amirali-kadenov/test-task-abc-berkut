"use server"

import { unsplashApi } from "./api"
import type {
  GetRandomParams,
  GetBySearchParams,
  GetPhotoParams,
} from "./types"

export const getRandomPhotos = async (params: GetRandomParams) => {
  return unsplashApi.getRandom(params)
}

export const getPhotosBySearch = async (params: GetBySearchParams) => {
  return unsplashApi.getBySearch(params)
}

export const getPhoto = async (params: GetPhotoParams) => {
  return unsplashApi.getPhoto(params)
}
