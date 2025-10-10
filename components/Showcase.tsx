"use client";
import Image from "next/image";
import { useRef } from "react";
import PlayableVideo from "@/components/PlayableVideo";

export default function Showcase() {
  const cardClass = "rounded-lg border border-gray-200 p-3 bg-white shadow-sm";
  const mediaFrameClass = "relative aspect-[4/3] w-full overflow-hidden rounded bg-gray-100";
  const mediaClass = "absolute inset-0 h-full w-full object-contain";
  return (
    <section id="showcase" className="border-t border-gray-200 py-16 bg-gray-50">
      <div className="container-max">
        <h2 className="text-2xl font-semibold md:text-3xl text-gray-900">Showcase</h2>
        <p className="mt-2 text-sm text-gray-600">A curated look at our setups, energy, and results.</p>


        {/* Videos Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <figure className={cardClass}>
            <div className={mediaFrameClass}>
              <PlayableVideo src="/video/videokeeps2.mp4" className={mediaClass} autoPlay={false} muted loop requireClick showControls={false} />
            </div>
            <figcaption className="mt-2 text-xs text-gray-600">360° booth highlight—slow-motion moments that guests replay again and again.</figcaption>
          </figure>
          <figure className={cardClass}>
            <div className={mediaFrameClass}>
              <PlayableVideo src="/video/videokeeps3.mp4" className={mediaClass} autoPlay={false} muted loop requireClick showControls={false} />
            </div>
            <figcaption className="mt-2 text-xs text-gray-600">Candid energy—our attendant keeps the line flowing and the smiles genuine.</figcaption>
          </figure>
          <figure className={cardClass}>
            <div className={mediaFrameClass}>
              <PlayableVideo src="/video/videokeeps4.mp4" className={mediaClass} autoPlay={false} muted loop requireClick showControls={false} />
            </div>
            <figcaption className="mt-2 text-xs text-gray-600">Custom branding—overlay and backdrop tailored to your event aesthetic.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}


