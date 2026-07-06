import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-padding">
      <div className="container-custom surface-card text-center">
        <div className="pill">Page not found</div>
        <h2>We could not find that page.</h2>
        <p className="mx-auto max-w-xl text-[var(--muted)]">The page you are looking for may have moved or was never created. Return home to continue exploring AIKYA FOUNDATION.</p>
        <Link href="/" className="cta-button cta-button-primary mt-6 inline-flex">
          Go home
        </Link>
      </div>
    </main>
  );
}
