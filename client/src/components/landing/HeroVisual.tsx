import { Link } from "react-router"
import { Search } from "lucide-react"
import { DashboardMockup } from "@/components/landing/DashboardMockup"

function BookCover({
    id,
    from,
    to,
    title,
    author,
    className,
}: {
    id: string
    from: string
    to: string
    title: string
    author: string
    className?: string
}) {
    return (
        <svg viewBox="0 0 100 140" fill="none" className={className}>
            <defs>
                <linearGradient id={`cover-${id}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={from} />
                    <stop offset="100%" stopColor={to} />
                </linearGradient>
            </defs>
            <rect
                x="2"
                y="2"
                width="96"
                height="136"
                rx="7"
                fill={`url(#cover-${id})`}
            />
            <rect x="2" y="2" width="96" height="136" rx="7" stroke="rgba(255,255,255,0.25)" />
            <rect x="20" y="2" width="3" height="136" fill="rgba(255,255,255,0.3)" />
            <text
                x="51"
                y="62"
                textAnchor="middle"
                fill="white"
                fontSize="10"
                fontFamily="Geist, sans-serif"
                fontWeight="600"
            >
                {title}
            </text>
            <text
                x="51"
                y="76"
                textAnchor="middle"
                fill="rgba(255,255,255,0.7)"
                fontSize="7"
                fontFamily="Geist, sans-serif"
            >
                {author}
            </text>
        </svg>
    )
}

function ReaderCard() {
    return (
        <div className="w-60 rounded-xl bg-white p-4 shadow-[0_2px_2px_rgba(0,0,0,0.05),0_16px_32px_-8px_rgba(0,0,0,0.25)] ring-1 ring-white/20">
            <div className="flex items-center gap-1.5 border-b border-[#f0f0f0] pb-2">
                <span className="size-2 rounded-full bg-[#ff5f57]" />
                <span className="size-2 rounded-full bg-[#febc2e]" />
                <span className="size-2 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-[9px] text-[#a1a1a1]">
                    reader
                </span>
            </div>
            <p className="mt-3 text-xs font-semibold text-[#171717]">
                The Silent Meridian
            </p>
            <p className="font-mono text-[9px] text-[#888888]">CH. 4 — 68%</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#f0f0f0]">
                <div className="h-full w-[68%] rounded-full bg-[#7928ca]" />
            </div>
            <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-[#ececec]" />
                <div className="h-1.5 w-[92%] rounded-full bg-[#ececec]" />
                <div className="h-1.5 w-[78%] rounded-full bg-[#ececec]" />
                <div className="h-1.5 w-[86%] rounded-full bg-[#ececec]" />
            </div>
        </div>
    )
}

const HeroVisual = () => {
    return (
        <div className="relative mx-auto mt-16 w-full max-w-5xl px-2 sm:px-6">
            <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-[#007cf0]/20 blur-3xl" />

            <Link
                to={"/dashboard"}
                className="relative z-30 mx-auto -mb-5 flex h-11 w-full max-w-md items-center gap-2.5 rounded-full bg-white px-4 shadow-[0_2px_2px_rgba(0,0,0,0.08),0_12px_24px_-6px_rgba(0,0,0,0.3)] ring-1 ring-white/30 transition-transform hover:scale-[1.02]"
            >
                <Search className="size-4 text-[#888888]" />
                <span className="flex-1 text-left text-sm text-[#888888]">
                    Search books, authors, genres...
                </span>
                <kbd className="rounded-md border border-[#ebebeb] bg-[#fafafa] px-1.5 py-0.5 font-mono text-[10px] text-[#888888]">
                    ⌘K
                </kbd>
            </Link>

            <div className="absolute top-20 -left-10 z-20 hidden animate-[float_6s_ease-in-out_infinite] md:block">
                <div className="-rotate-6">
                    <BookCover
                        id="blue"
                        from="#007cf0"
                        to="#00dfd8"
                        title="The Silent Meridian"
                        author="June Wilder"
                        className="h-36 w-auto drop-shadow-[0_16px_24px_rgba(0,0,0,0.45)]"
                    />
                </div>
            </div>

            <div
                className="absolute top-24 -right-10 z-20 hidden animate-[float_6s_ease-in-out_infinite] md:block"
                style={{ animationDelay: "1.2s" }}
            >
                <div className="rotate-6">
                    <BookCover
                        id="violet"
                        from="#7928ca"
                        to="#ff0080"
                        title="Letters from Atlas"
                        author="M. Okonkwo"
                        className="h-32 w-auto drop-shadow-[0_16px_24px_rgba(0,0,0,0.45)]"
                    />
                </div>
            </div>

            <div
                className="absolute -left-8 bottom-2 z-20 hidden animate-[float_6s_ease-in-out_infinite] lg:block"
                style={{ animationDelay: "2.1s" }}
            >
                <div className="-rotate-3">
                    <BookCover
                        id="amber"
                        from="#ff4d4d"
                        to="#f9cb28"
                        title="Field Notes"
                        author="Ana Reyes"
                        className="h-28 w-auto drop-shadow-[0_16px_24px_rgba(0,0,0,0.45)]"
                    />
                </div>
            </div>

            <div
                className="absolute -right-6 -bottom-8 z-20 hidden animate-[float_7s_ease-in-out_infinite] lg:block"
                style={{ animationDelay: "0.6s" }}
            >
                <div className="rotate-2">
                    <ReaderCard />
                </div>
            </div>

            <div className="relative z-10 overflow-hidden rounded-xl shadow-[0_2px_2px_rgba(0,0,0,0.3),0_32px_64px_-16px_rgba(0,0,0,0.6)] ring-1 ring-white/15">
                <DashboardMockup />
            </div>

            <div className="mt-10 flex justify-center gap-2">
                {["#007cf0", "#7928ca", "#ff0080", "#f9cb28", "#00dfd8"].map((color) => (
                    <span
                        key={color}
                        className="size-2 rounded-full"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
        </div>
    )
}

export default HeroVisual