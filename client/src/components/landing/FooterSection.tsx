import { Link } from "react-router"
import { ScribeLogo } from "@/components/landing/ScribeLogo"

const socials = [
    {
        label: "GitHub",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.1 10.1 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M18.9 2.06h3.68l-8.04 9.19L24 22.06h-7.41l-5.8-7.58-6.63 7.58H.47l8.6-9.83L0 2.06h7.6l5.24 6.93 6.06-6.93zM17.6 20.04h2.04L6.5 3.99H4.32L17.6 20.04z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
        ),
    },
]

const columns = [
    {
        label: "PRODUCT",
        links: [
            { label: "Features", href: "/dashboard" },
            { label: "Pricing", href: "/#pricing" },
            { label: "Search", href: "/dashboard" },
            { label: "Changelog", href: "/dashboard" },
        ],
    },
    {
        label: "RESOURCES",
        links: [
            { label: "Documentation", href: "/dashboard" },
            { label: "Help Center", href: "/dashboard" },
            { label: "Status", href: "/dashboard" },
            { label: "Contact", href: "/dashboard" },
        ],
    },
    {
        label: "LEGAL",
        links: [
            { label: "Privacy", href: "/dashboard" },
            { label: "Terms", href: "/dashboard" },
            { label: "Security", href: "/dashboard" },
        ],
    },
]

const FooterSection = () => {
    return (
        <footer className="border-t border-[#ebebeb] bg-white px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2.5">
                            <ScribeLogo className="size-8" />
                            <h3 className="text-xl font-semibold tracking-tight text-[#171717]">
                                SCRIBE
                            </h3>
                        </div>
                        <p className="mt-3 max-w-xs text-sm leading-5 text-[#4d4d4d]">
                            The publishing platform for authors. Share your
                            books, discover new voices, and grow your library.
                        </p>
                        <div className="mt-5 flex items-center gap-3">
                            {socials.map((social) => (
                                <Link
                                    key={social.label}
                                    to={"/dashboard"}
                                    aria-label={social.label}
                                    className="flex size-9 items-center justify-center rounded-full border border-[#ebebeb] text-[#888888] transition-colors hover:border-[#171717] hover:text-[#171717]"
                                >
                                    {social.svg}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {columns.map((column) => (
                        <div key={column.label}>
                            <p className="font-mono text-xs text-[#888888]">
                                {column.label}
                            </p>
                            <ul className="mt-4 flex flex-col gap-3">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.href}
                                            className="text-sm leading-5 text-[#4d4d4d] transition-colors hover:text-[#171717]"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#ebebeb] pt-6 sm:flex-row">
                    <p className="font-mono text-xs text-[#888888]">
                        © 2026 SCRIBE
                    </p>
                    <p className="font-mono text-xs text-[#888888]">
                        BUILT FOR READERS, EVERYWHERE
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection