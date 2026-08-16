import { useState } from "react"
import { Link } from "react-router"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import { Separator } from "@/components/ui/separator"
import { ScribeLogo } from "@/components/landing/ScribeLogo"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
    { label: "Product", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Community", href: "/#community" },
    { label: "Resources", href: "/dashboard" },
]

const LandingNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-40 border-b border-[#ebebeb] bg-white">
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
                <Link to={"/"} aria-label="SCRIBE home" className="flex items-center gap-2.5">
                    <ScribeLogo className="size-8" />
                    <h3 className="text-xl font-semibold tracking-tight text-[#171717]">
                        SCRIBE
                    </h3>
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className="rounded-full px-3 py-1 text-sm text-[#4d4d4d] transition-colors hover:bg-[#f5f5f5] hover:text-[#171717]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-2 md:flex">
                    <Separator orientation="vertical" className="mr-2 h-5 bg-[#ebebeb]" />
                    <Button
                        variant="ghost"
                        className="h-7 rounded-md px-3 text-sm font-medium text-[#171717] hover:bg-[#f5f5f5]"
                        asChild
                    >
                        <Link to={"/auth/login"}>Login</Link>
                    </Button>
                    <Button
                        className="h-7 rounded-md px-3 text-sm font-medium"
                        asChild
                    >
                        <Link to={"/auth/register"}>Signup</Link>
                    </Button>
                </div>

                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            aria-label="Open menu"
                        >
                            <Menu className="size-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-72">
                        <SheetHeader>
                            <SheetTitle>SCRIBE</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-1 px-4 pt-6">
                            {navLinks.map((link) => (
                                <SheetClose key={link.label} asChild>
                                    <Link
                                        to={link.href}
                                        className="rounded-md px-3 py-2 text-sm text-[#4d4d4d] transition-colors hover:bg-[#f5f5f5] hover:text-[#171717]"
                                    >
                                        {link.label}
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                        <Separator className="my-2" />
                        <div className="mt-auto flex flex-col gap-2 px-4 pb-6">
                            <SheetClose asChild>
                                <Button variant="ghost" asChild>
                                    <Link to={"/auth/login"}>Login</Link>
                                </Button>
                            </SheetClose>
                            <SheetClose asChild>
                                <Button asChild>
                                    <Link to={"/auth/register"}>Signup</Link>
                                </Button>
                            </SheetClose>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default LandingNav