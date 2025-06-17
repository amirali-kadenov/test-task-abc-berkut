import type { ReactNode } from "react"
import { HeaderWithSearch } from "../header/header-with-search"

type Props = {
  children: ReactNode
}

export const PageLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderWithSearch />

      <main>{children}</main>
    </>
  )
}
