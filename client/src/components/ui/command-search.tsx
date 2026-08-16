import * as React from "react"
import { Dialog } from "radix-ui"
import { useNavigate } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { ArrowRight, LoaderCircle, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { searchUsers } from "@/http/api"
import type { User } from "@/types"

const escapeQuery = (query: string) => query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>
  const parts = text.split(new RegExp(`(${escapeQuery(query)})`, "ig"))
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={index} className="font-semibold">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  )
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
      {children}
    </kbd>
  )
}

export function CommandSearch({ className }: React.ComponentProps<"button">) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const [debounced, setDebounced] = React.useState("")
  const [activeIndex, setActiveIndex] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const itemRefs = React.useRef<(HTMLDivElement | null)[]>([])
  const navigate = useNavigate()

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(query.trim())
      setActiveIndex(0)
    }, 200)
    return () => clearTimeout(timer)
  }, [query])

  const { data, isFetching } = useQuery({
    queryKey: ["user-search", debounced],
    queryFn: () => searchUsers(debounced),
    enabled: open && debounced.length > 0,
    staleTime: 30000,
  })

  const users: User[] = data?.data?.users ?? []

  const lastIndex = Math.max(users.length - 1, 0)

  React.useEffect(() => {
    itemRefs.current[activeIndex]?.scrollIntoView({ block: "nearest" })
  }, [activeIndex])

  const closeAndReset = () => {
    setOpen(false)
    setActiveIndex(0)
  }

  const selectUser = (user: User) => {
    closeAndReset()
    navigate(`/dashboard/users/${user._id}`)
  }

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, lastIndex))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      const user = users[activeIndex]
      if (user) selectUser(user)
    }
  }

  const showHint = !debounced
  const showEmpty = debounced.length > 0 && !isFetching && users.length === 0

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "flex h-8 w-full items-center gap-2 rounded-md border border-input bg-background px-2 text-sm text-muted-foreground shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground sm:ml-auto sm:w-64",
          className
        )}
      >
        <span className="flex-1 truncate text-left">Search people...</span>
        <Kbd>⌘K</Kbd>
      </button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
          <Dialog.Content
            className="fixed top-[15%] left-1/2 z-50 w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 overflow-hidden rounded-2xl border bg-background shadow-2xl outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"
            onOpenAutoFocus={(e) => {
              e.preventDefault()
              inputRef.current?.focus()
            }}
          >
            <Dialog.Title className="sr-only">Search people</Dialog.Title>

            <div className="relative border-b">
              <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Search people by name or email..."
                className="h-12 w-full bg-transparent pr-3 pl-10 text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>

            <div className="overflow-y-auto p-1.5">
              {showHint && (
                <p className="px-4 py-10 text-center text-sm text-muted-foreground">
                  Type to search for people and view their books.
                </p>
              )}

              {isFetching && (
                <div className="flex justify-center py-10">
                  <LoaderCircle className="animate-spin size-5 text-muted-foreground" />
                </div>
              )}

              {showEmpty && (
                <p className="px-4 py-10 text-center text-sm text-muted-foreground">
                  No results for <span className="font-medium">“{debounced}”</span>
                </p>
              )}

              {!showHint && !isFetching && users.length > 0 && (
                <div>
                  <p className="px-3 pt-2.5 pb-1.5 text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                    People
                  </p>
                  {users.map((user, index) => {
                    const meta = [
                      user.role || "Member",
                      user.location,
                      user.bookCount !== undefined
                        ? `${user.bookCount} book${user.bookCount === 1 ? "" : "s"}`
                        : undefined,
                    ]
                      .filter(Boolean)
                      .join(" • ")

                    return (
                      <div
                        key={user._id}
                        ref={(el) => {
                          itemRefs.current[index] = el
                        }}
                        onClick={() => selectUser(user)}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={cn(
                          "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm outline-none",
                          index === activeIndex &&
                            "bg-accent text-accent-foreground"
                        )}
                      >
                        <Avatar className="h-8 w-8 shrink-0 rounded-full">
                          <AvatarFallback>
                            {user.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left leading-tight">
                          <span className="truncate font-medium">
                            <Highlight text={user.name} query={debounced} />
                          </span>
                          <span className="truncate text-xs text-muted-foreground">
                            {meta}
                          </span>
                        </div>
                        {index === activeIndex && (
                          <ArrowRight className="size-4 shrink-0" />
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 border-t bg-muted/40 px-4 py-2.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Kbd>↑</Kbd>
                <Kbd>↓</Kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1.5">
                <Kbd>↵</Kbd>
                Open
              </span>
              <span className="ml-auto flex items-center gap-1.5">
                <Kbd>esc</Kbd>
                Close
              </span>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}