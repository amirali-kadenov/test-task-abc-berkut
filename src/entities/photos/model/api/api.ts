import type { AxiosInstance, AxiosRequestConfig } from "axios"
import axios from "axios"
import type {
  GetRandomParams,
  GetBySearchParams,
  UnsplashPhotoType,
  GetPhotoParams,
  GetBySearchResponse,
} from "./types"

type ExtendedConfig = {
  cache?: RequestCache // "no-store" | "reload" | ...
} & AxiosRequestConfig

class UnsplashApiClass {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: process.env.API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    })

    this.api.interceptors.request.use((config) => {
      config.headers.Authorization = `Client-ID ${process.env.ACCESS_KEY}`

      // @ts-expect-error axios types
      config.next = {
        revalidate: 3600,
      }

      return config
    })
  }

  public getRandom(params: GetRandomParams) {
    return this.wrapInTryCatch(async () => {
      const config: ExtendedConfig = {
        params,
        cache: "no-store",
      }

      const response = await this.api.get<UnsplashPhotoType[]>(
        "/photos/random",
        config,
      )

      const total = response.headers["X-Total"] ?? 0
      const perPage = response.headers["X-Per-Page"] ?? 0
      const totalPages = total / perPage

      return {
        results: response.data,
        total,
        totalPages,
      }
    })
  }

  public getBySearch(params: GetBySearchParams) {
    return this.wrapInTryCatch(async () => {
      const response = await this.api.get<GetBySearchResponse>(
        "/search/photos",
        {
          params,
        },
      )

      return response.data
    })
  }

  public async getPhoto(params: GetPhotoParams) {
    return this.wrapInTryCatch(async () => {
      const response = await this.api.get<UnsplashPhotoType>(
        `/photos/${params.id}`,
        {
          params: {
            orientation: params.orientation,
          },
        },
      )
      return response.data
    })
  }

  wrapInTryCatch<T>(fn: () => Promise<T>) {
    try {
      return fn()
    } catch (e: unknown) {
      console.error(e)
      return null
    }
  }
}

export const unsplashApi = new UnsplashApiClass()
