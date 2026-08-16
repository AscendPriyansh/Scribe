import { Link } from "react-router"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const FinalCTA = () => {
    return (
        <section className="relative overflow-hidden bg-[#171717] px-6 py-24 sm:py-32">
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7928ca]/25 blur-[160px]" />
            <div className="pointer-events-none absolute top-0 right-[-150px] h-[300px] w-[300px] rounded-full bg-[#007cf0]/25 blur-[120px]" />

            <div className="relative mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-semibold tracking-[-1.28px] text-white sm:text-5xl sm:leading-[3.5rem]">
                    Ready to build your digital library?
                </h2>
                <p className="mx-auto mt-4 max-w-md text-base leading-6 text-[#a1a1a1]">
                    Join Scribe today and start discovering, organizing, and
                    sharing knowledge.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button
                        size="lg"
                        className="group h-12 rounded-full bg-white px-7 text-base font-medium text-[#171717] hover:bg-white/90"
                        asChild
                    >
                        <Link to={"/auth/register"}>
                            Get Started
                            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        className="h-12 rounded-full border border-white/25 bg-white/10 px-7 text-base font-medium text-white hover:bg-white/20 hover:text-white"
                        asChild
                    >
                        <Link to={"/dashboard"}>Explore Books</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default FinalCTA