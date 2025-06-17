import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const OnlyDesktopText = ({ children }: Props) => {
  return <div className="hidden sm:block">{children}</div>
}
