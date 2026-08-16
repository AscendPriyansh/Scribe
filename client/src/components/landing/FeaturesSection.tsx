const features = [
    {
        title: "Personal Library",
        text: "Create your own digital bookshelf and access your favorite books anytime.",
        svg: (
            <svg viewBox="0 0 48 48" fill="none" className="size-10">
                <path d="M8 10h8v28H8zM16 10h8v28h-8zM24 10h8v28h-8zM32 10h8v28h-8z" stroke="#171717" strokeWidth="2.6" strokeLinejoin="round" />
                <path d="M10 16h4M10 21h4M18 16h4M18 21h4" stroke="#007cf0" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Community Uploads",
        text: "Upload books and resources to contribute to a growing knowledge ecosystem.",
        svg: (
            <svg viewBox="0 0 48 48" fill="none" className="size-10">
                <rect x="10" y="20" width="28" height="20" rx="5" stroke="#171717" strokeWidth="2.6" />
                <path d="M24 8v18" stroke="#171717" strokeWidth="2.6" strokeLinecap="round" />
                <path d="m18 15 6-6 6 6" stroke="#171717" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 30h12" stroke="#007cf0" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Smart Discovery",
        text: "Find books quickly with powerful search and organized categories.",
        svg: (
            <svg viewBox="0 0 48 48" fill="none" className="size-10">
                <circle cx="21" cy="21" r="12" stroke="#171717" strokeWidth="2.6" />
                <path d="m30 30 9 9" stroke="#171717" strokeWidth="2.6" strokeLinecap="round" />
                <path d="m15.5 21 5.5-4 5.5 4-5.5 4z" fill="#007cf0" />
                <path d="M39 6a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2z" fill="#007cf0" />
            </svg>
        ),
    },
    {
        title: "Easy Access",
        text: "Download and read resources whenever you need them.",
        svg: (
            <svg viewBox="0 0 48 48" fill="none" className="size-10">
                <rect x="10" y="12" width="28" height="28" rx="5" stroke="#171717" strokeWidth="2.6" />
                <rect x="16" y="8" width="16" height="6" rx="2" fill="#171717" />
                <path d="M24 22v10" stroke="#007cf0" strokeWidth="2.6" strokeLinecap="round" />
                <path d="m19 28 5 5 5-5" stroke="#007cf0" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Categories & Organization",
        text: "Browse content by topics, genres, and interests.",
        svg: (
            <svg viewBox="0 0 48 48" fill="none" className="size-10">
                <path d="M10 8h14l3 4h11a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3z" stroke="#171717" strokeWidth="2.6" strokeLinejoin="round" />
                <path d="M15 24h18M15 31h12" stroke="#007cf0" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Community Driven",
        text: "Connect readers and contributors through shared knowledge.",
        svg: (
            <svg viewBox="0 0 48 48" fill="none" className="size-10">
                <circle cx="19" cy="17" r="7" stroke="#171717" strokeWidth="2.6" />
                <path d="M7 38c1.5-8.5 6-12 12-12s10.5 3.5 12 12" stroke="#171717" strokeWidth="2.6" strokeLinecap="round" />
                <circle cx="32" cy="19" r="5.5" stroke="#007cf0" strokeWidth="2.6" />
                <path d="M31 34.5c1.6-3.2 3.4-4.9 5.6-5.9" stroke="#007cf0" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
        ),
    },
]

const FeaturesSection = () => {
    return (
        <section id="features" className="bg-white px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                <p className="text-center font-mono text-xs text-[#888888]">
                    FEATURES
                </p>
                <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-semibold tracking-[-1.28px] text-[#171717] sm:text-4xl sm:leading-10">
                    Everything you need for a smarter reading experience.
                </h2>

                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group rounded-lg bg-[#fafafa] p-8 ring-1 ring-[#ebebeb] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_2px_2px_rgba(0,0,0,0.04),0_16px_24px_-8px_rgba(0,0,0,0.1)]"
                        >
                            <div className="flex size-14 items-center justify-center rounded-full border border-[#ebebeb] bg-white transition-colors group-hover:border-[#171717]">
                                {feature.svg}
                            </div>
                            <h3 className="mt-6 text-lg font-semibold tracking-[-0.6px] text-[#171717]">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-sm leading-5 text-[#4d4d4d]">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection