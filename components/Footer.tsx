import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 text-center text-xs text-gray-500 bg-white">
      <div className="container-max">
        <p>© {new Date().getFullYear()} Keepsake Kreators. All rights reserved.</p>
        <div className="mt-6 flex justify-center">
          <div className="relative w-24 h-24 overflow-hidden rounded-lg bg-gray-100 border border-gray-200">
            <Image src="/qr.png" alt="QR code for quick access" fill className="object-contain" loading="lazy" />
          </div>
        </div>
      </div>
    </footer>
  );
}


