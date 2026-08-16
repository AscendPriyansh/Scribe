const problems = [
    {
        title: "Scattered Resources",
        text: "Find your favorite books without searching across multiple platforms.",
        svg: (
            <svg viewBox="0 0 48 48" fill="none" className="size-12">
                <rect x="8" y="6" width="26" height="34" rx="4" fill="white" stroke="#c9c9c9" strokeWidth="2" />
                <path d="M14 14h14M14 20h14M14 26h9" stroke="#c9c9c9" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="22" y="12" width="18" height="24" rx="3" fill="#fafafa" stroke="#d6d6d6" strokeWidth="2" transform="rotate(8 22 12)" />
                <path d="M27 19h8M27 23.5h8M27 28h5" stroke="#d6d6d6" strokeWidth="2" strokeLinecap="round" transform="rotate(8 22 12)" />
            </svg>
        ),
    },
    {
        title: "Lost Collections",
        text: "Keep your books organized in one personal library.",
        svg: (
            <svg viewBox="0 0 48 48" fill="none" className="size-12">
                <path d="M12 8h24v30l-5-4-5 4-5-4-5 4z" fill="white" stroke="#c9c9c9" strokeWidth="2" strokeLinejoin="round" />
                <path d="M12 8h24v30l-5-4-5 4-5-4-5 4z" fill="white" />
                <path d="M12 8h24v8H12z" fill="#171717" />
                <path d="M12 8h24v30l-5-4-5 4-5-4-5 4z" stroke="#c9c9c9" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Limited Sharing",
        text: "Share knowledge and discover resources from a growing community.",
        svg: (
            <svg viewBox="0 0 48 48" fill="none" className="size-12">
                <circle cx="24" cy="24" r="17" stroke="#c9c9c9" strokeWidth="2" />
                <ellipse cx="24" cy="24" rx="8" ry="17" stroke="#c9c9c9" strokeWidth="2" />
                <path d="M7 24h34" stroke="#c9c9c9" strokeWidth="2" />
                <circle cx="32" cy="16" r="4.5" fill="#007cf0" opacity="0.15" />
                <circle cx="33" cy="18" r="2.5" fill="#007cf0" />
                <path d="M30.5 24c.8-2.6 2.2-4 3.8-4s3 1.4 3.8 4" stroke="#007cf0" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
]

const ProblemSection = () => {
    return (
        <section className="bg-white px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                <p className="text-center font-mono text-xs text-[#888888]">
                    THE PROBLEM
                </p>
                <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-semibold tracking-[-1.28px] text-[#171717] sm:text-4xl sm:leading-10">
                    Finding and managing knowledge shouldn't be difficult.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-6 text-[#4d4d4d]">
                    Books are scattered across different platforms, personal
                    collections get lost, and valuable resources often remain
                    hidden. Scribe brings everything together into one
                    organized digital space.
                </p>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {problems.map((problem) => (
                        <div
                            key={problem.title}
                            className="rounded-lg bg-[#fafafa] p-8 ring-1 ring-[#ebebeb] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_2px_2px_rgba(0,0,0,0.04),0_16px_24px_-8px_rgba(0,0,0,0.1)]"
                        >
                            {problem.svg}
                            <h3 className="mt-6 text-lg font-semibold tracking-[-0.6px] text-[#171717]">
                                {problem.title}
                            </h3>
                            <p className="mt-2 text-sm leading-5 text-[#4d4d4d]">
                                {problem.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProblemSection