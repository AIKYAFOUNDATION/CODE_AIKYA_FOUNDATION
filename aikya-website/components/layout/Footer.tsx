import Link from "next/link";
import { foundationData } from "@/data/foundation";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]/80">
      <div className="container-custom flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">AIKYA FOUNDATION</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{foundationData.tagline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
          <Link href="mailto:aikyafoundationtechnical@gmail.com" className="hover:text-[var(--foreground)]">
            aikyafoundationtechnical@gmail.com
          </Link>
          <Link href="/contact" className="hover:text-[var(--foreground)]">
            Contact us
          </Link>
          <span>© 2026 AIKYA FOUNDATION</span>
        </div>
      </div>
    </footer>
  );
}