import { DashboardMockup } from "@/components/landing/DashboardMockup"
import { BookDetailsMockup } from "@/components/landing/BookDetailsMockup"
import { UploadMockup } from "@/components/landing/UploadMockup"
import { ReaderMockup } from "@/components/landing/ReaderMockup"

const mockups = [
    {
        title: "Book details",
        text: "Covers, genres, and downloads for every title.",
        tag: "DETAILS",
        dot: "bg-[#007cf0]",
        node: <BookDetailsMockup />,
    },
    {
        title: "Upload page",
        text: "Drop your files and publish in seconds.",
        tag: "UPLOAD",
        dot: "bg-[#7928ca]",
        node: <UploadMockup />,
    },
    {
        title: "Reader view",
        text: "A clean, distraction-free reading experience.",
        tag: "READER",
        dot: "bg-[#ff0080]",
        node: <ReaderMockup />,
    },
]

const ShowcaseSection = () => {
    return (
        <section className="bg-white px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                <p className="text-center font-mono text-xs text-[#888888]">
                    SHOWCASE
                </p>
                <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-semibold tracking-[-1.28px] text-[#171717] sm:text-4xl sm:leading-10">
                    Everything organized in one place.
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-center text-base leading-6 text-[#4d4d4d]">
                    Manage your uploads, track your reading, and explore new
                    books through a clean and intuitive dashboard.
                </p>

                <div className="relative mx-auto mt-16 max-w-4xl">
                    <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-gradient-to-r from-[#007cf0]/15 via-[#7928ca]/10 to-[#ff0080]/15 blur-3xl" />
                    <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_2px_2px_rgba(0,0,0,0.04),0_24px_48px_-12px_rgba(0,0,0,0.15)] ring-1 ring-[#ebebeb]">
                        <DashboardMockup />
                    </div>
                    <div className="mt-5 flex items-center justify-center gap-3">
                        <span className="size-2 rounded-full bg-[#50e3c2]" />
                        <p className="font-mono text-xs text-[#888888]">
                            LIBRARY DASHBOARD — DOWNLOADS & VISITS AT A GLANCE
                        </p>
                    </div>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {mockups.map((item) => (
                        <div
                            key={item.title}
                            className="group rounded-xl bg-white p-3 shadow-[0_2px_2px_rgba(0,0,0,0.04),0_8px_16px_-4px_rgba(0,0,0,0.08)] ring-1 ring-[#ebebeb] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_2px_rgba(0,0,0,0.05),0_16px_24px_-8px_rgba(0,0,0,0.12)]"
                        >
                            <div className="overflow-hidden rounded-lg ring-1 ring-[#f0f0f0]">
                                {item.node}
                            </div>
                            <div className="px-2 pt-4 pb-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-semibold tracking-[-0.3px] text-[#171717]">
                                        {item.title}
                                    </h3>
                                    <span className={`size-2 rounded-full ${item.dot}`} />
                                </div>
                                <p className="mt-1.5 text-xs leading-5 text-[#4d4d4d]">
                                    {item.text}
                                </p>
                                <p className="mt-2 font-mono text-[10px] tracking-wide text-[#a1a1a1]">
                                    {item.tag}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection