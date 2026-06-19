import Link from "next/link";
import { GalleryCard } from "@/components/shared/GalleryCard";
import galleryItems from "@/data/gallery_items.json";

export const metadata = {
  title: "Gallery | Aqsa Art & Craft",
  description: "Browse the curated portfolio of Aqsa's paintings, paper crafts, and DIY projects.",
};

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; item?: string }>;
}) {
  const params = await searchParams;
  const currentCategory = params.category || "all";
  
  const categories = ["all", ...Array.from(new Set(galleryItems.map((item) => item.category)))];

  const filteredItems = currentCategory === "all" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === currentCategory);

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-4">Portfolio Gallery</h1>
        <p className="text-charcoal/70 max-w-2xl mx-auto">Explore a collection of my creative explorations, from watercolor landscapes to intricate paper crafts.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={cat === "all" ? "/gallery" : `/gallery?category=${cat}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentCategory === cat
                ? "bg-sage-600 text-white shadow-sm"
                : "bg-white text-charcoal/70 border border-sage-200 hover:bg-sage-50 hover:text-charcoal"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Link>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20 text-charcoal/60">
          No items found for this category.
        </div>
      )}

      {/* Basic Lightbox Modal (Server component placeholder - ideally we use a client component or parallel route for true lightbox, but intercepting routes are complex for v1 mock. We'll show a simple UI if ?item is present) */}
      {params.item && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl relative flex flex-col md:flex-row">
            <Link href={`/gallery${currentCategory !== 'all' ? `?category=${currentCategory}` : ''}`} className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full text-charcoal hover:bg-sage-100 transition-colors">
              ✕
            </Link>
            
            {(() => {
              const item = galleryItems.find(i => i.slug === params.item);
              if (!item) return <div className="p-12 text-center w-full">Item not found.</div>;
              
              return (
                <>
                  <div className="w-full md:w-3/5 bg-sage-50 min-h-[300px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={item.images[0]} 
                      alt={item.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col">
                    <span className="text-xs tracking-wider uppercase text-sage-600 mb-2">
                      {item.category}
                    </span>
                    <h2 className="font-serif text-3xl font-medium text-charcoal mb-4">{item.title}</h2>
                    
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-charcoal mb-1">Materials</h3>
                      <p className="text-charcoal/70">{item.materials}</p>
                    </div>

                    <div className="mb-8 flex-grow">
                      <h3 className="text-sm font-semibold text-charcoal mb-1">Date Created</h3>
                      <p className="text-charcoal/70">{new Date(item.dateCreated).toLocaleDateString()}</p>
                    </div>

                    {item.relatedVideoUrl && (
                      <a 
                        href={item.relatedVideoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full bg-sage-500 text-white py-3 rounded-md font-medium hover:bg-sage-600 transition-colors"
                      >
                        Watch Tutorial
                      </a>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </main>
  );
}
