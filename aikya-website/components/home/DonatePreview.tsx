import Image from "next/image";
import Link from "next/link";

export default function DonatePreview() {
  return (
    <section className="section-padding">
      <div className="container-custom surface-card">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="pill">Support us</div>
            <h2>Make a Difference Today</h2>
            <p className="text-[var(--muted)] mb-6">
              Your contribution directly fuels our initiatives in education, health, women empowerment, and youth leadership. Every donation brings us closer to creating lasting community transformation.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-[var(--accent)] text-lg">✓</span>
                <span className="text-[var(--foreground)]">100% transparent & accountable</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--accent)] text-lg">✓</span>
                <span className="text-[var(--foreground)]">Secure & verified transactions</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--accent)] text-lg">✓</span>
                <span className="text-[var(--foreground)]">Direct impact on communities</span>
              </div>
            </div>

            <Link href="/donate" className="cta-button cta-button-primary inline-flex">
              Donate Now
            </Link>
          </div>

          {/* Right Column - QR Code Preview */}
          <div className="flex flex-col items-center gap-4">
            <div className="surface-card p-6 bg-white rounded-lg border-2 border-[var(--accent-light)] max-w-full">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ width: "100%", maxWidth: "16rem", aspectRatio: "1" }}>
                <Image
                  src="/images/donate/DONATEQRCODE.jpeg"
                  alt="Donation QR Code"
                  fill
                  className="object-contain p-3"
                  priority
                />
              </div>
            </div>
            <p className="text-center text-sm text-[var(--muted)]">
              Scan the QR code to donate instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
