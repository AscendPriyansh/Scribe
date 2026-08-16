export function ScribeLogo({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
            <defs>
                <linearGradient id="scribe-logo-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#007cf0" />
                    <stop offset="100%" stopColor="#00dfd8" />
                </linearGradient>
            </defs>
            <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#scribe-logo-gradient)" />
            <path
                d="M16 9.2c-2.4-1.5-5.3-1.7-8.5-.5v15.1c3.2-1.2 6.1-1 8.5.5 2.4-1.5 5.3-1.7 8.5-.5V8.7c-3.2-1.2-6.1-1-8.5.5z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <path d="M16 9.2v15.1" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    )
}