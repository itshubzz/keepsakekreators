import Image from "next/image";

export default function Packages() {
  return (
    <section id="packages" className="border-t border-gray-200 bg-white py-14">
      <div className="container-max">
        <h2 className="text-2xl font-semibold md:text-3xl text-gray-900">Packages</h2>
        <p className="mt-2 text-sm text-gray-600">Flexible options for any event size and style.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
          <div className="relative w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <div className="relative h-[55vh] md:h-[75vh] w-full">
              <Image src="/packages.jpg" alt="Photo booth packages" fill className="object-contain" loading="lazy" placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
            </div>
          </div>
          <div>
            <ul className="grid content-start gap-3 text-sm text-gray-600 md:text-base">
              <li>• Open-Air Photo Booth — modern, spacious setup</li>
              <li>• 360° Photo Booth Experience — stunning slow-motion videos</li>
              <li>• Customizable backdrops — pick from various styles</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


