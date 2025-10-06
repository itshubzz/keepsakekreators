"use client";
import Image from "next/image";
import { useState } from "react";

const images = Array.from({ length: 8 }, (_, i) => `/gallery/image${i + 1}.jpg`);

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="gallery" className="border-t border-brand-gray/40 py-14">
      <div className="container-max">
        <h2 className="text-2xl font-semibold md:text-3xl">Event Gallery</h2>
        <p className="mt-2 text-sm text-brand-lightgray/80">A glimpse of unforgettable moments we helped create.</p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {images.map((src) => (
            <button
              key={src}
              className="group relative aspect-square overflow-hidden rounded border border-brand-gray/40"
              onClick={() => setActive(src)}
              aria-label="Open image"
            >
              <Image src={src} alt="Event photo" fill className="object-cover transition-transform duration-200 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
            </button>
          ))}
        </div>

        {active && (
          <div
            className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal
          >
            <div className="relative h-[80vh] w-full max-w-5xl">
              <Image src={active} alt="Selected event photo" fill className="object-contain" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


