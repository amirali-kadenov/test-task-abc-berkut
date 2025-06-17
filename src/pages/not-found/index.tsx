import { PackageX } from "lucide-react"
import Link from "next/link"
import { PATHS } from "@/shared/constants/paths"
import { Button } from "@/shared/ui/button"

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <PackageX className="w-20 h-20 text-muted-foreground mb-8" />
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-8">
        We couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Button asChild>
        <Link href={PATHS.ROOT}>Go home</Link>
      </Button>
    </div>
  )
}
