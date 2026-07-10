export default function ContactSection() {
  return (
    <section className="section-padding">
      <div className="container-custom surface-card contact-section">
        <div className="pill">Connect with us</div>
        <h2>CONTACT US</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <a href="mailto:aikyafoundation26@gmail.com" className="surface-card block hover:-translate-y-1 transition-transform">
            <svg role="img" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-[var(--foreground)]">
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z"/>
            </svg>
            <p className="font-semibold mt-3">Email</p>
            <p className="mt-2 text-[var(--muted)]">aikyafoundation26@gmail.com</p>
          </a>
          <a href="https://www.instagram.com/risewithaikya?igsh=MXV1eGg1Zmt5eTFncA==" target="_blank" rel="noreferrer" className="surface-card block hover:-translate-y-1 transition-transform">
            <svg role="img" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" className="fill-[var(--foreground)]">
              <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 [...]"></path>
            </svg>
            <p className="font-semibold mt-3">Instagram</p>
            <p className="mt-2 text-[var(--muted)]">Rise With AIKYA</p>
          </a>
          <a href="https://www.linkedin.com/company/aikya-foundation/" target="_blank" rel="noreferrer" className="surface-card block hover:-translate-y-1 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24px" height="24px" role="img" className="fill-[var(--foreground)]">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-4[...]"></path>
            </svg>
            <p className="font-semibold mt-3">LinkedIn</p>
            <p className="mt-2 text-[var(--muted)]">AIKYA FOUNDATION</p>
          </a>
        </div>
      </div>
    </section>
  );
}
