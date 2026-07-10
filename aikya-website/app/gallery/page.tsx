import Image from "next/image";
import { galleryData } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <main className="page-stack">
      {/* Page Header */}
      <section className="section-padding bg-gradient-to-b from-[var(--accent-light)] to-transparent">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">Gallery</h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Explore the moments that define our mission. From community engagement to transformative initiatives, every photograph captures the essence of AIKYA's work.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom surface-card">
          <div className="grid gap-6 md:grid-cols-2">
            {galleryData.map((item) => (
              <div key={item.id} className="surface-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-80 md:h-96 w-full bg-gray-200">
                  <Image
                    src={`/images/gallery/${item.image}`}
                    alt={item.caption}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={item.id <= 4}
                  />
                </div>
                <div className="p-6">
                  <p className="text-center text-lg font-semibold text-[var(--foreground)]">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
