const stepIcons = {
    account: (
        <svg viewBox="0 0 24 24" fill="none" className="size-6">
            <circle cx="12" cy="8" r="4" stroke="#007cf0" strokeWidth="1.8" />
            <path d="M5 20c1.2-3.2 3.8-5 7-5s5.8 1.8 7 5" stroke="#00dfd8" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="19.5" cy="5.5" r="3" fill="#171717" />
            <path d="M19.5 4v3M18 5.5h3" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
    ),
    discover: (
        <svg viewBox="0 0 24 24" fill="none" className="size-6">
            <circle cx="10.5" cy="10.5" r="6" stroke="#007cf0" strokeWidth="1.8" />
            <path d="m15 15 5 5" stroke="#00dfd8" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M10.5 8v5M8 10.5h5" stroke="#7928ca" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    ),
    read: (
        <svg viewBox="0 0 24 24" fill="none" className="size-6">
            <path d="M12 6.5C10.5 5.2 8.4 4.8 5 4.8v13c3.4 0 5.5.4 7 1.7 1.5-1.3 3.6-1.7 7-1.7v-13c-3.4 0-5.5.4-7 1.7Z" stroke="#007cf0" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M12 6.5v13" stroke="#00dfd8" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M17 3.5a3 3 0 0 1 2.5 3.5L19 9l-1-1.5L17 6l-1 1.5L15 9l-.5-2A3 3 0 0 1 17 3.5Z" fill="#7928ca" />
        </svg>
    ),
}

const steps = [
    {
        step: "01",
        icon: stepIcons.account,
        title: "Create Your Account",
        text: "Join the community and build your personalized library.",
    },
    {
        step: "02",
        icon: stepIcons.discover,
        title: "Discover & Upload",
        text: "Explore books or contribute by uploading your own resources.",
    },
    {
        step: "03",
        icon: stepIcons.read,
        title: "Read & Share",
        text: "Access knowledge anytime and share valuable resources with others.",
    },
]

const HowItWorksSection = () => {
    return (
        <section
            id="how-it-works"
            className="bg-[#fafafa] px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <p className="text-center font-mono text-xs text-[#888888]">
                    HOW IT WORKS
                </p>
                <h2 className="mx-auto mt-3 max-w-xl text-center text-3xl font-semibold tracking-[-1.28px] text-[#171717] sm:text-4xl sm:leading-10">
                    Start exploring in three simple steps.
                </h2>

                <div className="relative mt-16">
                    <div className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-[#007cf0]/40 via-[#e5e5e5] to-[#7928ca]/40 md:block" />
                    <div className="absolute top-14 bottom-14 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-[#007cf0]/40 via-[#e5e5e5] to-[#7928ca]/40 md:hidden" />

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
                        {steps.map((item) => (
                            <div
                                key={item.step}
                                className="relative flex flex-col items-center text-center"
                            >
                                <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-white shadow-[0_2px_2px_rgba(0,0,0,0.04),0_8px_16px_-4px_rgba(0,0,0,0.08)] ring-1 ring-[#ebebeb]">
                                    {item.icon}
                                </span>
                                <p className="mt-5 font-mono text-[11px] text-[#888888]">
                                    STEP {item.step}
                                </p>
                                <h3 className="mt-2 text-lg font-semibold tracking-[-0.6px] text-[#171717]">
                                    {item.title}
                                </h3>
                                <p className="mt-2 max-w-xs text-sm leading-5 text-[#4d4d4d]">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorksSection