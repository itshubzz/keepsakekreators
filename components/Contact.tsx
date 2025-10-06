export default function Contact() {
  return (
    <section id="contact" className="border-t border-brand-gray/40 bg-[#121212] py-14">
      <div className="container-max">
        <h2 className="text-2xl font-semibold md:text-3xl">Let’s Make Your Event Unforgettable</h2>
        <p className="mt-2 text-sm text-brand-lightgray/80">Serving NJ, NY, PA, CT</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="grid gap-2 text-sm text-brand-lightgray/90">
            <p>📧 Email: <a href="mailto:keepsakekreatorsllc@gmail.com" className="underline">keepsakekreatorsllc@gmail.com</a></p>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <a href="https://tiktok.com/KeepsakeKreators" target="_blank" rel="noreferrer" aria-label="TikTok" className="inline-flex h-9 w-9 items-center justify-center rounded border border-brand-gray/40 hover:bg-brand-gray/40">
                {/* TikTok icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M21 8.5a7.1 7.1 0 0 1-5-2v7.3a5.8 5.8 0 1 1-5.8-5.8c.3 0 .5 0 .8.1V10a3.8 3.8 0 1 0 3.8 3.8V2h2.1a5 5 0 0 0 4.1 4.1V8.5z"/>
                </svg>
              </a>
              <a href="https://instagram.com/Keepsakekreators" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded border border-brand-gray/40 hover:bg-brand-gray/40">
                {/* Instagram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"/>
                </svg>
              </a>
              <a href="https://facebook.com/Keepsakekreators" target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded border border-brand-gray/40 hover:bg-brand-gray/40">
                {/* Facebook icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M13 22v-9h3l1-3h-4V8.5A1.5 1.5 0 0 1 14.5 7H17V4h-2.5A4.5 4.5 0 0 0 10 8.5V10H7v3h3v9z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="rounded border border-brand-gray/40 p-4 text-sm text-brand-lightgray/80">
            <p>
              Tell us about your event details (date, venue, guest count, and the booth
              experience you’re interested in). We’ll get back to you quickly with
              availability and tailored options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


