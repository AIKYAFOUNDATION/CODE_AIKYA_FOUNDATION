import Link from "next/link";
import Image from "next/image";
import { galleryData } from "@/data/gallery";

export default function GalleryPreview() {
  const previewImages = galleryData.slice(0, 2);

  return (
    <section className="section-padding">
      <div className="container-custom surface-card">
        <div className="pill">Our Moments</div>
        <h2>Gallery</h2>
        <p className="max-w-3xl text-[var(--muted)]">
          Witness the impact of our initiatives through moments captured from the ground. Every image tells a story of dedication, community, and transformation.
        </p>

        {/* Gallery Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {previewImages.map((item) => (
            <div key={item.id} className="surface-card overflow-hidden">
              <div className="relative h-64 md:h-72 w-full bg-gray-200">
                <Image
                  src={`/images/gallery/${item.image}`}
                  alt={item.caption}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <p className="text-center font-semibold text-[var(--foreground)]">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <Link href="/gallery" className="cta-button cta-button-primary mt-8 inline-flex">
          See More
        </Link>
      </div>
    </section>
  );
}
