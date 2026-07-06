export default function ContactSection() {
  return (
    <section className="section-padding">
      <div className="container-custom surface-card">
        <div className="pill">Connect with us</div>
        <h2>CONTACT US</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <a href="mailto:aikyafoundationtechnical@gmail.com" className="surface-card block hover:-translate-y-1 transition-transform">
            <p className="font-semibold">Email</p>
            <p className="mt-2 text-[var(--muted)]">aikyafoundationtechnical@gmail.com</p>
          </a>
          <a href="https://www.instagram.com/risewithaikya?igsh=MXV1eGg1Zmt5eTFncA==" target="_blank" rel="noreferrer" className="surface-card block hover:-translate-y-1 transition-transform">
            <p className="font-semibold">Instagram</p>
            <p className="mt-2 text-[var(--muted)]">Rise With AIKYA</p>
          </a>
          <a href="https://www.linkedin.com/company/aikya-foundation/" target="_blank" rel="noreferrer" className="surface-card block hover:-translate-y-1 transition-transform">
            <p className="font-semibold">LinkedIn</p>
            <p className="mt-2 text-[var(--muted)]">AIKYA FOUNDATION</p>
          </a>
        </div>
      </div>
    </section>
  );
}