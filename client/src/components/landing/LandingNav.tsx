import { useState } from "react"
import { Link } from "react-router"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import { Separator } from "@/components/ui/separator"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
    { label: "Product", href: "/dashboard" },
    { label: "Contact", href: "/dashboard" },
    { label: "Pricing", href: "/dashboard" },
    { label: "Now", href: "/dashboard" },
    { label: "Resources", href: "/dashboard" },
]

const LandingNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex justify-between items-center pl-8 pr-8 pt-2 pb-2">
            <div>
                <h3 className="font-bold text-xl">SCRIBE</h3>
            </div>

            <div className="hidden md:flex justify-between items-center gap-8 text-gray-600">
                <div className="flex gap-3 text-sm">
                    {navLinks.map((link) => (
                        <Link key={link.label} to={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <Separator orientation="vertical" className="bg-gray-600"/>
                <div className="flex gap-3">
                    <Button variant={"ghost"}>
                        <Link to={"/auth/login"}>Login</Link>
                    </Button>
                    <Button>
                        <Link to={"/auth/register"}>Signup</Link>
                    </Button>
                </div>
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
                                    className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                    {link.label}
                                </Link>
                            </SheetClose>
                        ))}
                    </div>
                    <Separator className="my-2" />
                    <div className="mt-auto flex flex-col gap-2 px-4 pb-6">
                        <SheetClose asChild>
                            <Button variant={"ghost"} asChild>
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
    )
}

export default LandingNav