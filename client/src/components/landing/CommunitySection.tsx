const members = [
    { name: "June Wilder", role: "Novelist", color: "#007cf0" },
    { name: "M. Okonkwo", role: "Poet", color: "#7928ca" },
    { name: "Ana Reyes", role: "Essayist", color: "#ff0080" },
    { name: "Sam Chen", role: "Historian", color: "#f9cb28" },
    { name: "Lena Voss", role: "Translator", color: "#00dfd8" },
    { name: "Omar Farah", role: "Researcher", color: "#50e3c2" },
]

const CommunitySection = () => {
    return (
        <section id="community" className="bg-white px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                <p className="text-center font-mono text-xs text-[#888888]">
                    COMMUNITY
                </p>
                <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-semibold tracking-[-1.28px] text-[#171717] sm:text-4xl sm:leading-10">
                    A library powered by people.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-center text-base leading-6 text-[#4d4d4d]">
                    Scribe is more than a place to store books. It is a
                    community where readers and creators come together to
                    exchange ideas and knowledge.
                </p>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                    {members.map((member) => (
                        <div
                            key={member.name}
                            className="flex items-center gap-3 rounded-full border border-[#ebebeb] bg-[#fafafa] py-2 pr-5 pl-2 transition-colors hover:border-[#171717]"
                        >
                            <span
                                className="flex size-8 items-center justify-center rounded-full text-[11px] font-semibold text-white"
                                style={{ backgroundColor: member.color }}
                            >
                                {member.name.split(" ").map((part) => part[0]).join("")}
                            </span>
                            <span className="text-left leading-tight">
                                <span className="block text-sm font-medium text-[#171717]">
                                    {member.name}
                                </span>
                                <span className="block font-mono text-[10px] text-[#888888]">
                                    {member.role.toUpperCase()}
                                </span>
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mx-auto mt-12 max-w-2xl rounded-xl bg-[#fafafa] p-8 ring-1 ring-[#ebebeb]">
                    <svg viewBox="0 0 24 24" fill="none" className="size-6 text-[#007cf0]">
                        <path d="M5 10.5C5 6.5 7.8 4 11.5 4v3c-2 0-3.2 1.3-3.4 3H11v7H5v-6.5zm10 0C15 6.5 17.8 4 21.5 4v3c-2 0-3.2 1.3-3.4 3H21v7h-6v-6.5z" fill="currentColor" />
                    </svg>
                    <p className="mt-4 text-lg leading-7 text-[#4d4d4d]">
                        "I uploaded my first book on a Tuesday. By Friday, a
                        reader from another continent had it open in their
                        library. That's what Scribe is — knowledge that
                        travels."
                    </p>
                    <p className="mt-4 text-sm font-medium text-[#171717]">
                        June Wilder
                        <span className="ml-2 font-mono text-xs text-[#888888]">
                            NOVELIST · CONTRIBUTOR SINCE 2025
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CommunitySection