"use client";

import { GalleryVerticalEnd, House, Info } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center my-10">
            <Link
                className="flex items-center gap-2 group"
                href="/"
            >
                <House className="w-6 h-6" strokeWidth={1} />
                <span className="group-hover:underline underline-offset-4">Home</span>
                <span className="inline-block transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">→</span>
            </Link>
            <Link
                className="flex items-center gap-2 group"
                href="/projects"
            >
                <GalleryVerticalEnd className="w-6 h-6" strokeWidth={1} />
                <span className="group-hover:underline underline-offset-4">Projects</span>
                <span className="inline-block transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">→</span>
            </Link>
            <Link
                className="flex items-center gap-2 group"
                href="/about"
            >
                <Info className="w-6 h-6" strokeWidth={1} />
                <span className="group-hover:underline underline-offset-4">About</span>
                <span className="inline-block transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">→</span>
            </Link>
        </footer>
    )
}