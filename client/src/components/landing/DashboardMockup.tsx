export function DashboardMockup() {
    return (
        <svg viewBox="0 0 720 440" fill="none" className="h-auto w-full">
            <defs>
                <linearGradient id="db-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#007cf0" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#007cf0" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="db-logo" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#007cf0" />
                    <stop offset="100%" stopColor="#00dfd8" />
                </linearGradient>
            </defs>

            <rect x="4" y="4" width="712" height="432" rx="12" fill="white" stroke="#e5e5e5" />

            <rect x="4" y="4" width="712" height="36" rx="12" fill="#f7f7f7" />
            <rect x="4" y="22" width="712" height="18" fill="#f7f7f7" />
            <circle cx="20" cy="22" r="4" fill="#ff5f57" />
            <circle cx="34" cy="22" r="4" fill="#febc2e" />
            <circle cx="48" cy="22" r="4" fill="#28c840" />
            <rect x="240" y="14" width="240" height="16" rx="8" fill="white" stroke="#e5e5e5" />
            <circle cx="262" cy="22" r="3" fill="#c9c9c9" />
            <rect x="270" y="17" width="90" height="10" rx="5" fill="#ececec" />
            <circle cx="696" cy="22" r="6" fill="#e0e0e0" />

            <rect x="4" y="40" width="150" height="396" fill="#fafafa" />
            <rect x="4" y="40" width="1" height="396" fill="#fafafa" />
            <rect x="150" y="40" width="1" height="396" fill="#ececec" />

            <rect x="16" y="56" width="16" height="16" rx="4" fill="url(#db-logo)" />
            <rect x="16" y="84" width="90" height="14" rx="4" fill="#e3e3e3" />
            {[106, 128, 150, 172].map((y) => (
                <g key={y}>
                    <circle cx="22" cy={y + 6} r="3.5" fill="#c9c9c9" />
                    <rect x="32" y={y} width="70" height="12" rx="4" fill="#ececec" />
                </g>
            ))}
            <rect x="16" y="204" width="62" height="12" rx="4" fill="#d6d6d6" />
            <rect x="16" y="240" width="100" height="20" rx="6" fill="#171717" />

            <rect x="168" y="56" width="120" height="14" rx="4" fill="#e6e6e6" />
            <rect x="168" y="78" width="220" height="10" rx="5" fill="#ececec" />
            <rect x="560" y="54" width="120" height="18" rx="9" fill="#f0f0f0" />
            <circle cx="664" cy="63" r="4" fill="#c9c9c9" />

            {[112, 174, 236].map((x, i) => (
                <g key={x}>
                    <rect x={x} y="96" width="132" height="86" rx="8" fill="white" stroke="#e5e5e5" />
                    <rect x={x + 14} y="112" width="60" height="8" rx="4" fill="#ececec" />
                    <rect x={x + 14} y="130" width="36" height="14" rx="3" fill={i === 1 ? "#007cf0" : "#e0e0e0"} />
                    <path
                        d={`m${x + 14} 158 ${10 + i * 4} 0 ${14 + i * 4} -10 0 -8`}
                        stroke={i === 1 ? "#007cf0" : "#c9c9c9"}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            ))}

            <rect x="112" y="206" width="496" height="164" rx="8" fill="white" stroke="#e5e5e5" />
            {[226, 262, 298, 334].map((y) => (
                <rect key={y} x="120" y={y} width="480" height="1" fill="#f0f0f0" />
            ))}
            <path
                d="M130 350 C 180 330 200 336 230 318 S 290 296 320 292 380 260 410 258 470 232 500 240 556 222 580 216"
                stroke="#007cf0"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M130 350 C 180 330 200 336 230 318 S 290 296 320 292 380 260 410 258 470 232 500 240 556 222 580 216 L 580 370 L 130 370 Z"
                fill="url(#db-area)"
            />
            <circle cx="580" cy="216" r="5" fill="#007cf0" />

            <rect x="292" y="380" width="136" height="34" rx="8" fill="#171717" />
            <rect x="306" y="392" width="60" height="10" rx="5" fill="white" />
            <path d="M384 397h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}