import Link from "next/link";

export function Logo() {
    return (
        <div className="w-1/4 relative z-60">
            <Link href="/" className="font-semibold text-xl text-dark">
                Varmtørmæt
            </Link>
        </div>
    )
}
