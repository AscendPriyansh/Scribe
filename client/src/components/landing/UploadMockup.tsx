export function UploadMockup() {
    return (
        <svg viewBox="0 0 420 256" fill="none" className="h-auto w-full">
            <g transform="translate(30.8 0) scale(0.8533)">
            <rect x="2" y="2" width="416" height="296" rx="12" fill="white" stroke="#e5e5e5" />
            <rect x="2" y="2" width="416" height="32" rx="12" fill="#f7f7f7" />
            <rect x="2" y="16" width="416" height="18" fill="#f7f7f7" />
            <circle cx="18" cy="18" r="4" fill="#ff5f57" />
            <circle cx="32" cy="18" r="4" fill="#febc2e" />
            <circle cx="46" cy="18" r="4" fill="#28c840" />
            <rect x="176" y="12" width="68" height="16" rx="8" fill="#171717" />
            <rect x="190" y="18" width="40" height="4" rx="2" fill="white" />

            <rect x="60" y="50" width="300" height="86" rx="10" stroke="#007cf0" strokeDasharray="6 5" strokeWidth="2" />
            <circle cx="210" cy="76" r="16" fill="#007cf0" opacity="0.12" />
            <path d="M210 70v12M204 76l6 6 6-6" stroke="#007cf0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="172" y="102" width="76" height="6" rx="3" fill="#ececec" />
            <rect x="174" y="114" width="72" height="12" rx="6" fill="#171717" />

            <rect x="60" y="152" width="300" height="12" rx="6" fill="#f6f6f6" stroke="#ececec" />
            <rect x="72" y="156" width="60" height="4" rx="2" fill="#c9c9c9" />
            <rect x="188" y="176" width="88" height="8" rx="4" fill="#ececec" />

            <rect x="60" y="196" width="88" height="8" rx="4" fill="#ececec" />
            <rect x="60" y="214" width="120" height="8" rx="4" fill="#ececec" />
            {[246, 266, 286].map((y) => (
                <g key={y}>
                    <rect x="60" y={y} width="300" height="1" fill="#f0f0f0" />
                </g>
            ))}

            <rect x="60" y="246" width="16" height="16" rx="3" fill="#ececec" />
            <path d="M66 254l3-4 3 4M72 254v-6" stroke="#a1a1a1" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="84" y="250" width="90" height="8" rx="4" fill="#ececec" />

            <rect x="314" y="246" width="46" height="16" rx="8" fill="#f0f0f0" stroke="#e5e5e5" />
            <rect x="324" y="252" width="26" height="4" rx="2" fill="#a1a1a1" />
            </g>
        </svg>
    )
}