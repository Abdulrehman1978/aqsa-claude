import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About | Aqsa Art & Craft",
  description: "Learn more about Aqsa, her artistic journey, and her passion for teaching art and craft.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop" 
                alt="Aqsa's paints and brushes" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1544158406-8d6bd1516eeb?q=80&w=800&auto=format&fit=crop" 
                alt="Aqsa working in studio" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1518605368461-1e125222058c?q=80&w=800&auto=format&fit=crop" 
                alt="Finished artwork" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-sage-100 flex items-center justify-center p-6 text-center">
              <p className="font-serif text-2xl text-sage-800 italic">"Art is not what you see, but what you make others see."</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-6">The Story Behind the Brush</h1>
          
          <div className="prose prose-sage prose-lg text-charcoal/80 mb-10">
            <p>
              Hi, I'm Aqsa. My journey with art began as a simple hobby—a way to find quiet amidst the noise of everyday life. What started as sketching in the margins of notebooks eventually bloomed into a deep love for watercolor, mixed media, and paper craft.
            </p>
            <p>
              Over the years, I realized that the joy of creating is multiplied when shared. That's why I started my YouTube channel: to break down complex techniques into easy, approachable steps so that anyone, regardless of their skill level, can experience the magic of making something beautiful.
            </p>
            <p>
              My style is heavily inspired by nature—the delicate structure of a petal, the shifting colors of a sunset, and the organic textures found in the world around us. I believe in using warm, inviting colors and materials that bring a sense of calm to the creative process.
            </p>
            <p>
              When I'm not painting or filming tutorials, you can find me hunting for new art supplies, reading, or finding new ways to craft with everyday objects.
            </p>
          </div>

          <div className="bg-sage-50 border border-sage-100 rounded-2xl p-8 mb-10">
            <h3 className="font-serif text-2xl font-medium text-charcoal mb-4">Milestones & Community</h3>
            <ul className="space-y-3 text-charcoal/70">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-sage-400" />
                Over 100+ free tutorials published
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-sage-400" />
                Featured in [Art/Craft Magazine Name]
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-sage-400" />
                A growing community of creative minds worldwide
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <Link href="/gallery">View my portfolio</Link>
            </Button>
          </div>
        </div>
        
      </div>
    </main>
  );
}
