export default function About() {
  return (
    <section id="about" className="border-t border-brand-gray/40 py-16">
      <div className="container-max grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">About Keepsake Kreators</h2>
          <p className="mt-4 text-brand-lightgray/90">
            We’re a small, passionate team dedicated to transforming celebrations into stories worth
            reliving. Our photo booths are more than equipment—they’re an experience designed to spark
            connection, laughter, and memories your guests can take with them.
          </p>
          <p className="mt-4 text-brand-lightgray/80">
            From intimate weddings to high-energy corporate activations, we tailor each setup with
            thoughtful backdrops, props, and branding to match your style. Every booking includes a
            friendly on-site attendant who guides guests, keeps energy high, and ensures the
            experience flows seamlessly.
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-brand-lightgray/80">
            <li>• Professional-grade lighting and cameras for crisp, flattering results</li>
            <li>• Instant sharing via QR, text, or email—perfect for social media</li>
            <li>• Custom overlays and event branding to match your theme</li>
            <li>• Attentive, reliable team focused on service and fun</li>
          </ul>
        </div>
        <div className="rounded-lg border border-brand-gray/40 p-6 bg-[#111]"><p className="text-sm text-brand-lightgray/80">
          Based in the Tri-State area, we proudly serve NJ, NY, PA, and CT. Whether you’re planning a
          grand gala or a cozy backyard celebration, we’ll help you create a photo experience that
          fits perfectly—and looks incredible.
        </p></div>
      </div>
    </section>
  );
}


