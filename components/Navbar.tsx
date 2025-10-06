"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-gray/40 bg-brand-black/80 backdrop-blur supports-[backdrop-filter]:bg-brand-black/60">
      <div className="container-max flex h-16 items-center justify-between">
        <Link href="#home" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Keepsake Kreators" width={40} height={40} className="rounded" />
          <span className="text-sm font-semibold tracking-wider uppercase">Keepsake Kreators</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          <a href="#home">Home</a>
          <a href="#packages">Packages</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <button aria-label="Toggle Menu" onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded border border-brand-gray/50 px-3 py-2">
          <span className="text-xs">Menu</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-brand-gray/40 bg-brand-black">
          <div className="container-max grid py-2">
            <a href="#home" className="py-2" onClick={() => setOpen(false)}>Home</a>
            <a href="#packages" className="py-2" onClick={() => setOpen(false)}>Packages</a>
            <a href="#gallery" className="py-2" onClick={() => setOpen(false)}>Gallery</a>
            <a href="#contact" className="py-2" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}


