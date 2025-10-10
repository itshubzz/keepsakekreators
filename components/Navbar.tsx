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
          <span className="text-sm font-medium tracking-wider uppercase text-white" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>Keepsake Kreators</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          <a href="#home" className="text-white hover:text-gray-300 font-light transition-colors" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>Home</a>
          <a href="#packages" className="text-white hover:text-gray-300 font-light transition-colors" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>Packages</a>
          <a href="#gallery" className="text-white hover:text-gray-300 font-light transition-colors" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>Gallery</a>
          <a href="#contact" className="text-white hover:text-gray-300 font-light transition-colors" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>Contact</a>
        </nav>
        <button aria-label="Toggle Menu" onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded border border-white/30 px-3 py-2 hover:bg-white/10 transition-colors">
          <span className="text-xs text-white font-light" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>Menu</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/20 bg-brand-black">
          <div className="container-max grid py-2">
            <a href="#home" className="py-2 text-white hover:text-gray-300 font-light transition-colors" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }} onClick={() => setOpen(false)}>Home</a>
            <a href="#packages" className="py-2 text-white hover:text-gray-300 font-light transition-colors" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }} onClick={() => setOpen(false)}>Packages</a>
            <a href="#gallery" className="py-2 text-white hover:text-gray-300 font-light transition-colors" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }} onClick={() => setOpen(false)}>Gallery</a>
            <a href="#contact" className="py-2 text-white hover:text-gray-300 font-light transition-colors" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }} onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}


