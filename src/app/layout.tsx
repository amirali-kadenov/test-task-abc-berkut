import "./styles/globals.css"
import clsx from "clsx"
import { type Metadata } from "next"
import type { ReactNode } from "react"
import { roboto } from "./fonts/roboto"
import { TanstackQueryProvider } from "./providers/tanstack-query"

export const metadata: Metadata = {
  title: "Photos app",
  description: "Description",
}

type Props = {
  children: ReactNode
}

export const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={clsx("antialiased", roboto.className)}
      >
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  )
}
