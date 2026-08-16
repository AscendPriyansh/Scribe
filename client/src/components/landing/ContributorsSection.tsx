import { Check } from "lucide-react"

const points = [
    "Upload your resources",
    "Manage your collection",
    "Reach new readers",
    "Build your contribution profile",
]

const ContributorsSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#171717] px-6 py-24 sm:py-32">
            <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#007cf0]/20 blur-[140px]" />

            <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <div>
                    <p className="font-mono text-xs text-[#888888]">
                        FOR CONTRIBUTORS
                    </p>
                    <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-[-1.28px] text-white sm:text-4xl sm:leading-10">
                        Share knowledge. Inspire readers.
                    </h2>
                    <p className="mt-4 max-w-md text-base leading-6 text-[#a1a1a1]">
                        Have valuable resources? Upload your books and become
                        part of a community that believes knowledge should be
                        accessible to everyone.
                    </p>

                    <ul className="mt-8 flex flex-col gap-4">
                        {points.map((point) => (
                            <li key={point} className="flex items-center gap-3">
                                <span className="flex size-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                                    <Check className="size-3.5 text-[#50e3c2]" />
                                </span>
                                <span className="text-sm text-white/90">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <svg viewBox="0 0 420 340" fill="none" className="h-auto w-full">
                        <defs>
                            <linearGradient id="cb-glow" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#007cf0" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#00dfd8" stopOpacity="0.3" />
                            </linearGradient>
                        </defs>
                        <ellipse cx="210" cy="290" rx="150" ry="22" fill="url(#cb-glow)" />

                        <rect x="150" y="70" width="120" height="172" rx="10" fill="#0f0f0f" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
                        <rect x="172" y="70" width="6" height="172" fill="white" fillOpacity="0.1" />
                        <rect x="168" y="150" width="84" height="10" rx="5" fill="white" fillOpacity="0.85" />
                        <rect x="166" y="168" width="58" height="7" rx="3.5" fill="white" fillOpacity="0.35" />
                        <rect x="166" y="182" width="74" height="7" rx="3.5" fill="white" fillOpacity="0.25" />
                        <rect x="166" y="196" width="64" height="7" rx="3.5" fill="white" fillOpacity="0.2" />

                        <circle cx="210" cy="262" r="26" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
                        <circle cx="210" cy="255" r="9" fill="white" fillOpacity="0.6" />
                        <path d="M196 276c3-10 7.5-11.5 14-11.5s11 1.5 14 11.5" fill="white" fillOpacity="0.6" />

                        <rect x="86" y="120" width="58" height="80" rx="6" fill="#007cf0" fillOpacity="0.75" transform="rotate(-10 86 120)" />
                        <rect x="276" y="104" width="58" height="80" rx="6" fill="#7928ca" fillOpacity="0.75" transform="rotate(8 276 104)" />
                        <rect x="304" y="132" width="52" height="70" rx="6" fill="#ff0080" fillOpacity="0.7" transform="rotate(14 304 132)" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default ContributorsSection