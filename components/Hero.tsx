import Image from "next/image";
import PlayableVideo from "@/components/PlayableVideo";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="container-max grid gap-8 py-8 md:grid-cols-2 md:items-center md:gap-12 md:py-12">
        <div>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">Capture the Moment with Our Premium Photo Booths!</h1>
          <p className="mt-4 text-brand-lightgray/80 md:text-lg">Perfect for: Weddings, Birthdays, Corporate Events, Graduations — any celebration!</p>
          <ul className="mt-6 grid gap-2 text-sm text-brand-lightgray/90">
            <li>✅ Open-Air Photo Booth</li>
            <li>✅ 360° Photo Booth Experience</li>
            <li>✅ Customizable Backdrops</li>
            <li>✅ Fun Props</li>
            <li>✅ Instant Digital Sharing</li>
            <li>✅ Prints Available (additional cost)</li>
          </ul>
          <div className="mt-8 flex gap-3">
            <a href="#packages" className="rounded bg-white px-5 py-3 text-sm font-semibold text-black">View Packages</a>
            <a href="#contact" className="rounded border border-white px-5 py-3 text-sm font-semibold">Contact Us</a>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-lg bg-brand-black h-[55vh] md:h-[75vh]">
          <video
            className="h-full w-full object-contain"
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
          >
            <source src="/video/videokeeps.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}


