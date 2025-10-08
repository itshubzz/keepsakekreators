"use client";
import Image from "next/image";
import { useRef } from "react";
import PlayableVideo from "@/components/PlayableVideo";

export default function Showcase() {
  const cardClass = "rounded-lg border border-brand-gray/40 p-3 bg-[#111]";
  const mediaFrameClass = "relative aspect-[4/3] w-full overflow-hidden rounded bg-black";
  const mediaClass = "absolute inset-0 h-full w-full object-contain";
  return (
    <section id="showcase" className="border-t border-brand-gray/40 py-16">
      <div className="container-max">
        <h2 className="text-2xl font-semibold md:text-3xl">Showcase</h2>
        <p className="mt-2 text-sm text-brand-lightgray/80">A curated look at our setups, energy, and results.</p>

        {/* Photos Row */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <figure className={cardClass}>
            <div className={mediaFrameClass}>
              <Image src="/pose.jpg" alt="Guests striking a pose" fill className={mediaClass} />
            </div>
            <figcaption className="mt-3 text-xs text-brand-lightgray/80">Guests striking a pose—our open-air booth keeps the vibe fun and natural.</figcaption>
          </figure>
          <figure className={cardClass}>
            <div className={mediaFrameClass}>
              <Image src="/props.jpg" alt="Playful props table" fill className={mediaClass} />
            </div>
            <figcaption className="mt-3 text-xs text-brand-lightgray/80">A peek at our props—curated to match your theme and bring out big smiles.</figcaption>
          </figure>
        </div>

        {/* Videos Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <figure className={cardClass}>
            <div className={mediaFrameClass}>
              <PlayableVideo src="/video/videokeeps2.mp4" className={mediaClass} autoPlay={false} muted loop requireClick showControls={false} />
            </div>
            <figcaption className="mt-2 text-xs text-brand-lightgray/80">360° booth highlight—slow-motion moments that guests replay again and again.</figcaption>
          </figure>
          <figure className={cardClass}>
            <div className={mediaFrameClass}>
              <PlayableVideo src="/video/videokeeps3.mp4" className={mediaClass} autoPlay={false} muted loop requireClick showControls={false} />
            </div>
            <figcaption className="mt-2 text-xs text-brand-lightgray/80">Candid energy—our attendant keeps the line flowing and the smiles genuine.</figcaption>
          </figure>
          <figure className={cardClass}>
            <div className={mediaFrameClass}>
              <PlayableVideo src="/video/videokeeps4.mp4" className={mediaClass} autoPlay={false} muted loop requireClick showControls={false} />
            </div>
            <figcaption className="mt-2 text-xs text-brand-lightgray/80">Custom branding—overlay and backdrop tailored to your event aesthetic.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}


