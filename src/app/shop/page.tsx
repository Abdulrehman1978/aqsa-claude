import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Shop | Aqsa Art & Craft",
  description: "Shop original artwork, prints, and craft kits.",
};

export default function ShopPage() {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex items-center justify-center">
      <div className="text-center max-w-xl mx-auto">
        <div className="mb-8 relative w-24 h-24 mx-auto bg-sage-100 rounded-full flex items-center justify-center">
          <span className="text-4xl">🎨</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-6">Coming Soon</h1>
        <p className="text-charcoal/70 text-lg mb-10">
          I'm currently working hard in the studio to prepare a collection of original artworks, limited edition prints, and craft kits. 
        </p>
        <div className="bg-sage-50 border border-sage-100 rounded-2xl p-8 mb-10 text-left">
          <h3 className="font-semibold text-charcoal mb-2">Want to be the first to know?</h3>
          <p className="text-charcoal/70 text-sm mb-4">Subscribe to my newsletter to get notified the moment the shop goes live.</p>
          <form className="flex gap-2" action="#">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-2 rounded-md border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-400"
              required
            />
            <Button>Subscribe</Button>
          </form>
        </div>
        <Button variant="outline" asChild>
          <Link href="/gallery">Browse Gallery Meanwhile</Link>
        </Button>
      </div>
    </main>
  );
}
