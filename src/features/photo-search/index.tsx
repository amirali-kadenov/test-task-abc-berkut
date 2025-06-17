"use client"

import clsx from "clsx"
import { Search, X as Cross } from "lucide-react"
import { usePathname, useSearchParams } from "next/navigation"
import type { ChangeEvent } from "react"
import { useState } from "react"
import { Input } from "@/shared/ui/input"

const SEARCH_PARAM = "query"

type Event = ChangeEvent<HTMLInputElement>

type Props = {
  className?: string
  containerClassName?: string
  onSearch?: (params: URLSearchParams) => void
}

export const PhotoSearch = ({
  className,
  containerClassName,
  onSearch,
}: Props) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const searchParam = searchParams?.get(SEARCH_PARAM)
  const initialValue = searchParam ? decodeURIComponent(searchParam) : ""
  const [value, setValue] = useState(initialValue)

  const setSearch = (search: string | null) => {
    if (!searchParams) return

    const params = new URLSearchParams(searchParams)

    if (search) {
      params.set(SEARCH_PARAM, encodeURIComponent(search))
    } else {
      params.delete(SEARCH_PARAM)
    }

    if (onSearch) {
      onSearch(params)
    } else {
      const newUrl = `${pathname}?${params.toString()}`
      window.history.replaceState(null, "", newUrl)
    }
  }

  const handleSearch = () => {
    setSearch(value)
  }

  const handleChange = (event: Event) => setValue(event.target.value)

  return (
    <div className={clsx("relative flex items-center", containerClassName)}>
      {value && (
        <Cross
          className="absolute left-8 size-6 text-muted-foreground cursor-pointer"
          onClick={() => {
            setValue("")
            setSearch(null)
          }}
        />
      )}

      <Input
        placeholder="Поиск"
        className={clsx("pr-8 max-w-96 truncate", value && "pl-12", className)}
        value={value}
        onChange={handleChange}
        name="search"
      />

      <button className="absolute right-8 p-2" onClick={handleSearch}>
        <Search className="size-6" />
      </button>
    </div>
  )
}
