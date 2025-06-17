declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface ProcessEnv {
      API_URL: string
      ACCESS_KEY: string
    }
  }
}

export {}
