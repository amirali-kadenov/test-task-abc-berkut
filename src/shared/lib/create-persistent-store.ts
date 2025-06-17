import type { StateCreator } from "zustand"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

export const createPersistentStore = <T>(
  name: string,
  stateCreator: StateCreator<T, [["zustand/immer", never]], [], T>,
) => {
  return create<T>()(
    persist(immer(stateCreator), {
      name,
    }),
  )
}
