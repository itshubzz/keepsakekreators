import Image from "next/image";

export default function Packages() {
  return (
    <section id="packages" className="border-t border-brand-gray/40 bg-[#121212] py-14">
      <div className="container-max">
        <h2 className="text-2xl font-semibold md:text-3xl">Packages</h2>
        <p className="mt-2 text-sm text-brand-lightgray/80">Flexible options for any event size and style.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
          <div className="relative w-full overflow-hidden rounded-lg bg-brand-black">
            <div className="relative h-[55vh] md:h-[75vh] w-full">
              <Image src="/packages.jpg" alt="Photo booth packages" fill className="object-contain" />
            </div>
          </div>
          <div>
            <ul className="grid content-start gap-3 text-sm text-brand-lightgray/90 md:text-base">
              <li>• Open-Air Photo Booth — modern, spacious setup</li>
              <li>• 360° Photo Booth Experience — stunning slow-motion videos</li>
              <li>• Customizable backdrops — pick from various styles</li>
            </ul>
            <div className="mt-6">
              <div className="relative w-full max-w-xs overflow-hidden rounded-lg bg-brand-black">
                <div className="relative aspect-square w-full">
                  <Image src="/qr.png" alt="QR code for quick access" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


