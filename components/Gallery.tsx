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
    <section id="gallery" className="border-t border-gray-200 py-14 bg-white">
      <div className="container-max">
        <h2 className="text-2xl font-semibold md:text-3xl text-gray-900">Event Gallery</h2>
        <p className="mt-2 text-sm text-gray-600">A rotating look at recent events and moments we loved.</p>

        <div className="mt-6 overflow-hidden rounded-lg border border-gray-200 bg-gray-100 shadow-lg">
          <div className="relative h-[52vw] max-h-[520px] min-h-[260px] w-full">
            {images.map((src, i) => (
              <div
                key={src}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === index ? 1 : 0 }}
              >
                <Image src={src} alt="Event photo" fill className="object-contain" sizes="100vw" loading="lazy" placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
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


