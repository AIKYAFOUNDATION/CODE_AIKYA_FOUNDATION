import Image from "next/image";

export default function DonatePage() {
  return (
    <main className="page-stack">
      {/* Donate Section */}
      <section className="section-padding">
        <div className="container-custom surface-card">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Left Column - Text Content */}
            <div className="overflow-hidden px-2 sm:px-4">
              <div className="pill">Give Back</div>
              <h2 className="break-words">Make a Difference Today</h2>
              <p className="text-[var(--muted)] mt-4 mb-6 break-words text-sm sm:text-base">
                AIKYA Foundation works on four core pillars: Vidya (Education), Shakti (Women Empowerment), Swasthya (Health), and Netritva (Youth Leadership). Your contribution directly supports these transformative programs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[var(--accent)] text-[var(--background)] text-sm font-bold">
                      1
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-[var(--foreground)] text-sm sm:text-base break-words">Educational Access</h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] break-words">Support scholarship programs and skill development initiatives</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[var(--accent)] text-[var(--background)] text-sm font-bold">
                      2
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-[var(--foreground)] text-sm sm:text-base break-words">Community Health</h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] break-words">Fund health awareness and wellness programs</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[var(--accent)] text-[var(--background)] text-sm font-bold">
                      3
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-[var(--foreground)] text-sm sm:text-base break-words">Women Empowerment</h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] break-words">Enable women's autonomy and economic independence</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[var(--accent)] text-[var(--background)] text-sm font-bold">
                      4
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-[var(--foreground)] text-sm sm:text-base break-words">Youth Leadership</h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] break-words">Empower young changemakers to lead community initiatives</p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-[var(--accent)] break-words">
                100% of your donation goes directly to supporting our beneficiaries and community programs.
              </p>
            </div>

            {/* Right Column - QR Code */}
            <div className="flex flex-col items-center gap-6 px-2 sm:px-4">
              <div className="surface-card p-4 sm:p-8 bg-white rounded-lg border-2 border-[var(--accent-light)] w-full max-w-xs">
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
              <div className="text-center px-2 w-full">
                <h3 className="font-semibold text-base sm:text-lg text-[var(--foreground)] mb-2 break-words">Scan to Donate</h3>
                <p className="text-xs sm:text-sm text-[var(--muted)] break-words">Use your phone camera or any QR code scanner to make a secure donation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section-padding">
        <div className="container-custom grid gap-6 md:grid-cols-3">
          <div className="surface-card p-6 text-center overflow-hidden">
            <div className="text-3xl font-bold text-[var(--accent)] mb-2 break-words">100%</div>
            <p className="text-[var(--muted)] text-sm break-words">Transparent & Accountable</p>
            <p className="text-xs text-[var(--muted)] mt-2 break-words">Complete transparency in fund utilization</p>
          </div>
          <div className="surface-card p-6 text-center overflow-hidden">
            <div className="text-3xl font-bold text-[var(--accent)] mb-2 break-words">Secure</div>
            <p className="text-[var(--muted)] text-sm break-words">Safe Transactions</p>
            <p className="text-xs text-[var(--muted)] mt-2 break-words">All donations are processed securely</p>
          </div>
          <div className="surface-card p-6 text-center overflow-hidden">
            <div className="text-3xl font-bold text-[var(--accent)] mb-2 break-words">Impact</div>
            <p className="text-[var(--muted)] text-sm break-words">Real Change</p>
            <p className="text-xs text-[var(--muted)] mt-2 break-words">Your contribution creates lasting impact</p>
          </div>
        </div>
      </section>
    </main>
  );
}
