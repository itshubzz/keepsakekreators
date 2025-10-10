import Image from "next/image";
import PlayableVideo from "@/components/PlayableVideo";

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Banner */}
      <div className="bg-white dark:bg-gray-900 py-16 md:py-24">
        <div className="container-max text-center">
          <h1 className="text-4xl font-medium italic leading-tight text-black dark:text-white md:text-6xl lg:text-7xl tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Transform Your Event Into
            <span className="block text-black dark:text-white font-medium italic">Unforgettable Memories</span>
          </h1>
          <p className="mt-6 text-lg text-gray-800 dark:text-gray-300 md:text-xl max-w-3xl mx-auto font-light" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
            Professional photo booths that turn every celebration into a story worth sharing. 
            From intimate weddings to corporate galas, we create experiences that your guests will treasure forever.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#packages" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Explore Our Packages
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container-max grid gap-8 py-16 md:grid-cols-2 md:items-center md:gap-12">
        <div>
          <h2 className="text-3xl font-normal leading-tight text-black dark:text-white md:text-4xl tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
            Why Choose Keepsake Kreators?
          </h2>
          <p className="mt-4 text-gray-800 dark:text-gray-300 md:text-lg font-light" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
            We're more than just photo booths—we're memory creators. Our premium setups bring 
            professional quality with a personal touch to every event.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-black dark:text-white" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>Open-Air & 360° Booths</h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 font-light" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>Flexible setups that adapt to any space and vibe</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-black dark:text-white" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>Professional Attendant</h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 font-light" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>Dedicated support to keep your guests engaged and happy</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-black dark:text-white" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>Instant Digital Sharing</h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 font-light" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>Photos delivered instantly via QR, text, or email</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-black dark:text-white" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>Custom Branding</h3>
                <p className="text-sm text-gray-700 dark:text-gray-400 font-light" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>Personalized overlays and backdrops to match your theme</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 h-[55vh] md:h-[75vh] shadow-2xl">
          <video
            className="h-full w-full object-cover"
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


