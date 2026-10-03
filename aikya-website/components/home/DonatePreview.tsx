import Image from "next/image";
import Link from "next/link";

export default function DonatePreview() {
  return (
    <section className="section-padding">
      <div className="container-custom surface-card">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Left Column - Content */}
          <div className="overflow-hidden px-2 sm:px-4">
            <div className="pill">Support us</div>
            <h2 className="break-words">Make a Difference Today</h2>
            <p className="text-[var(--muted)] mb-6 break-words text-sm sm:text-base">
              Your contribution directly fuels our initiatives in education, health, women empowerment, and youth leadership. Every donation brings us closer to creating lasting community transformation.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-[var(--accent)] text-lg flex-shrink-0">✓</span>
                <span className="text-[var(--foreground)] break-words text-sm sm:text-base">100% transparent & accountable</span>
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-[var(--accent)] text-lg flex-shrink-0">✓</span>
                <span className="text-[var(--foreground)] break-words text-sm sm:text-base">Secure & verified transactions</span>
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-[var(--accent)] text-lg flex-shrink-0">✓</span>
                <span className="text-[var(--foreground)] break-words text-sm sm:text-base">Direct impact on communities</span>
              </div>
            </div>

            <Link href="/donate" className="cta-button cta-button-primary inline-flex">
              Donate Now
            </Link>
          </div>

          {/* Right Column - QR Code Preview */}
          <div className="flex flex-col items-center gap-4 overflow-hidden px-2 sm:px-4 w-full">
            <div className="surface-card p-4 sm:p-6 bg-white rounded-lg border-2 border-[var(--accent-light)] w-full max-w-xs">
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/donate/DONATEQRCODE.jpeg"
                  alt="Donation QR Code"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
            <p className="text-center text-xs sm:text-sm text-[var(--muted)] break-words max-w-full px-2">
              Scan the QR code to donate instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
