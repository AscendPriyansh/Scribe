const pillars = [
    {
        title: "Upload",
        text: "Share your knowledge with readers around the world.",
        svg: (
            <svg viewBox="0 0 48 48" fill="none" className="size-10">
                <path d="M24 8v18" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
                <path d="m17 15 7-7 7 7" stroke="#171717" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 28v8a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-8" stroke="#007cf0" strokeWidth="3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Discover",
        text: "Explore books across multiple categories and interests.",
        svg: (
            <svg viewBox="0 0 48 48" fill="none" className="size-10">
                <circle cx="21" cy="21" r="12" stroke="#171717" strokeWidth="3" />
                <path d="m30 30 9 9" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
                <path d="m16 21 5-3 5 3-5 3z" fill="#007cf0" />
            </svg>
        ),
    },
    {
        title: "Organize",
        text: "Create your personal collection and keep track of your reading journey.",
        svg: (
            <svg viewBox="0 0 48 48" fill="none" className="size-10">
                <rect x="7" y="10" width="34" height="28" rx="4" stroke="#171717" strokeWidth="3" />
                <rect x="13" y="16" width="6" height="16" fill="#007cf0" opacity="0.35" />
                <rect x="21" y="16" width="6" height="16" fill="#7928ca" opacity="0.35" />
                <rect x="29" y="16" width="6" height="11" fill="#ff0080" opacity="0.35" />
            </svg>
        ),
    },
]

const SolutionSection = () => {
    return (
        <section className="bg-[#fafafa] px-6 py-24 sm:py-32">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <div>
                    <p className="font-mono text-xs text-[#888888]">
                        ABOUT SCRIBE
                    </p>
                    <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-[-1.28px] text-[#171717] sm:text-4xl sm:leading-10">
                        A modern library experience for the digital age.
                    </h2>
                    <p className="mt-4 max-w-md text-base leading-6 text-[#4d4d4d]">
                        Scribe transforms the traditional library experience
                        into a collaborative digital platform where anyone can
                        upload, discover, and manage books.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="group flex items-start gap-5 rounded-lg bg-white p-6 ring-1 ring-[#ebebeb] transition-all duration-300 hover:ring-[#171717]"
                        >
                            <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-[#ebebeb] bg-white transition-colors group-hover:border-[#171717]">
                                {pillar.svg}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold tracking-[-0.6px] text-[#171717]">
                                    {pillar.title}
                                </h3>
                                <p className="mt-1.5 text-sm leading-5 text-[#4d4d4d]">
                                    {pillar.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SolutionSection