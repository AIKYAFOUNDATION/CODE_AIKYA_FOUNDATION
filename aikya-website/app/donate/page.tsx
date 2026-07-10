import Image from "next/image";

export default function DonatePage() {
  return (
    <main className="page-stack">
      {/* Donate Section */}
      <section className="section-padding">
        <div className="container-custom surface-card">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Left Column - Text Content */}
            <div>
              <div className="pill">Give Back</div>
              <h2>Make a Difference Today</h2>
              <p className="text-[var(--muted)] mt-4 mb-6">
                AIKYA Foundation works on four core pillars: Vidya (Education), Shakti (Women Empowerment), Swasthya (Health), and Netritva (Youth Leadership). Your contribution directly supports these transformative programs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[var(--accent)] text-[var(--background)] text-sm font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">Educational Access</h3>
                    <p className="text-sm text-[var(--muted)]">Support scholarship programs and skill development initiatives</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[var(--accent)] text-[var(--background)] text-sm font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">Community Health</h3>
                    <p className="text-sm text-[var(--muted)]">Fund health awareness and wellness programs</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[var(--accent)] text-[var(--background)] text-sm font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">Women Empowerment</h3>
                    <p className="text-sm text-[var(--muted)]">Enable women's autonomy and economic independence</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[var(--accent)] text-[var(--background)] text-sm font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">Youth Leadership</h3>
                    <p className="text-sm text-[var(--muted)]">Empower young changemakers to lead community initiatives</p>
                  </div>
                </div>
              </div>

              <p className="text-sm font-semibold text-[var(--accent)]">
                100% of your donation goes directly to supporting our beneficiaries and community programs.
              </p>
            </div>

            {/* Right Column - QR Code */}
            <div className="flex flex-col items-center gap-6">
              <div className="surface-card p-8 bg-white rounded-lg border-2 border-[var(--accent-light)]">
                <div className="relative h-80 w-80 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/donate/DONATEQRCODE.jpeg"
                    alt="Donation QR Code"
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">Scan to Donate</h3>
                <p className="text-sm text-[var(--muted)]">Use your phone camera or any QR code scanner to make a secure donation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section-padding">
        <div className="container-custom grid gap-6 md:grid-cols-3">
          <div className="surface-card p-6 text-center">
            <div className="text-3xl font-bold text-[var(--accent)] mb-2">100%</div>
            <p className="text-[var(--muted)]">Transparent & Accountable</p>
            <p className="text-xs text-[var(--muted)] mt-2">Complete transparency in fund utilization</p>
          </div>
          <div className="surface-card p-6 text-center">
            <div className="text-3xl font-bold text-[var(--accent)] mb-2">Secure</div>
            <p className="text-[var(--muted)]">Safe Transactions</p>
            <p className="text-xs text-[var(--muted)] mt-2">All donations are processed securely</p>
          </div>
          <div className="surface-card p-6 text-center">
            <div className="text-3xl font-bold text-[var(--accent)] mb-2">Impact</div>
            <p className="text-[var(--muted)]">Real Change</p>
            <p className="text-xs text-[var(--muted)] mt-2">Your contribution creates lasting impact</p>
          </div>
        </div>
      </section>
    </main>
  );
}
