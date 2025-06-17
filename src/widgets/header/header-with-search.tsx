"use client"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { PhotoSearch } from "@/features/photo-search"
import { PATHS } from "@/shared/constants/paths"
import { Button } from "@/shared/ui/button"
import { Header } from "."

export const HeaderWithSearch = () => {
  const router = useRouter()

  const [isSearchShown, setIsSearchShown] = useState(false)

  const showSearch = () => setIsSearchShown(true)

  const goToMainPage = (params: URLSearchParams) => {
    router.push(PATHS.ROOT + "?" + params.toString())
  }

  return (
    <Header className="pt-6 pb-3.5" logoClassName="scale-75">
      {!isSearchShown && (
        <Button variant="white" onClick={showSearch} className="text-lg">
          <Search className="size-6" />
          Поиск
        </Button>
      )}

      {isSearchShown && (
        <PhotoSearch
          containerClassName="scale-75 translate-x-12"
          onSearch={goToMainPage}
        />
      )}
    </Header>
  )
}
