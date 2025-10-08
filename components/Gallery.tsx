"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/gallery", { cache: "no-store" });
        const data = await res.json();
        if (Array.isArray(data.images)) setImages(data.images);
      } catch {}
    };
    load();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [images]);

  return (
    <section id="gallery" className="border-t border-brand-gray/40 py-14">
      <div className="container-max">
        <h2 className="text-2xl font-semibold md:text-3xl">Event Gallery</h2>
        <p className="mt-2 text-sm text-brand-lightgray/80">A rotating look at recent events and moments we loved.</p>

        <div className="mt-6 overflow-hidden rounded-lg border border-brand-gray/40 bg-[#111]">
          <div className="relative h-[52vw] max-h-[520px] min-h-[260px] w-full">
            {images.map((src, i) => (
              <div
                key={src}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === index ? 1 : 0 }}
              >
                <Image src={src} alt="Event photo" fill className="object-contain" sizes="100vw" />
              </div>
            ))}
          </div>
        </div>

        {images.length > 0 && (
          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


