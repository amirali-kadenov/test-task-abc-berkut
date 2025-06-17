import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import type { ReactNode } from "react"
import { PATHS } from "@/shared/constants/paths"
import { cn } from "@/shared/lib/utils/cn"
import { Button } from "@/shared/ui/button"
import { OnlyDesktopText } from "@/shared/ui/only-desktop-text"

type Props = {
  className?: string
  logoClassName?: string
  children?: ReactNode
}

export const Header = ({ className, children, logoClassName }: Props) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-black",
        className,
      )}
    >
      <div className="container flex h-14 items-center justify-between gap-2">
        <Link className="flex items-center space-x-2" href={PATHS.ROOT}>
          <Image
            priority={false}
            src="/logo.png"
            alt="Logo"
            width={185}
            height={73}
            className={logoClassName}
          />
        </Link>

        <nav className="flex items-center gap-6">
          {children}

          <Button asChild variant="white" className="text-lg">
            <Link href={PATHS.FAVORITES}>
              <Heart className="size-6" />
              <OnlyDesktopText>Избранное</OnlyDesktopText>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
