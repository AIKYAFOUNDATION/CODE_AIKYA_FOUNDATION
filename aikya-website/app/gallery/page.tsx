import Image from "next/image";
import Link from "next/link";
import { galleryData } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <main className="page-stack">
      {/* Gallery Section - combined into a single parent card */}
      <section className="section-padding">
        <div className="container-custom surface-card">
          <div className="pill">Our Moments</div>
          <h2>Gallery</h2>
          <p className="mt-2 max-w-3xl text-[var(--muted)]">
            Explore the moments that define our mission. From community engagement to transformative initiatives, every photograph captures the essence of AIKYA's work.
          </p>

          {/* Gallery Grid - reduced gap between heading and images */}
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {galleryData.map((item) => (
              <div key={item.id} className="surface-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-80 md:h-96 w-full bg-gray-200">
                  <Image
                    src={`/images/gallery/${item.image}`}
                    alt={item.caption}
                    fill
                    className="gallery-image"
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
