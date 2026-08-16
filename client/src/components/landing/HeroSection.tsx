import BackgroundBoxes from "@/components/ui/OriginkitBaseBackgroundBoxes"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { ArrowRight, Upload } from "lucide-react"
import HeroVisual from "@/components/landing/HeroVisual"

const HeroSection = () => {
    return (
        <div className="relative min-h-[calc(100svh-4rem)] w-full overflow-hidden bg-black pb-24">
            <div className="absolute inset-x-0 top-[100px] h-full">
                <BackgroundBoxes/>
            </div>

            <div className="pointer-events-none absolute top-0 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[#007cf0]/20 blur-[120px]" />

            <div className="pointer-events-none relative z-10 flex flex-col items-center px-4 pt-20 text-center sm:px-6 sm:pt-24">
                <p className="flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 font-mono text-xs text-white/70 ring-1 ring-white/20">
                    <span className="size-1.5 rounded-full bg-[#50e3c2]" />
                    YOUR LIBRARY, EVERYWHERE
                </p>

                <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-2.4px] text-white sm:text-6xl md:text-[4.5rem] md:leading-[4.75rem]">
                    Your digital library, built by readers for readers.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-7 text-white/70">
                    Discover, organize, and share knowledge with a
                    community-powered online library. Upload your books,
                    explore new ideas, and access your collection anytime,
                    anywhere.
                </p>

                <div className="pointer-events-auto mt-9 flex flex-col items-center gap-3 sm:flex-row">
                    <Button
                        size="lg"
                        className="group h-12 rounded-full bg-white px-7 text-base font-medium text-[#171717] hover:bg-white/90"
                        asChild
                    >
                        <Link to={"/dashboard"}>
                            Explore Library
                            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        className="h-12 rounded-full border border-white/25 bg-white/10 px-7 text-base font-medium text-white hover:bg-white/20 hover:text-white"
                        asChild
                    >
                        <Link to={"/auth/register"}>
                            <Upload />
                            Upload a Book
                        </Link>
                    </Button>
                </div>
            </div>

            <HeroVisual />
        </div>
    )
}

export default HeroSection