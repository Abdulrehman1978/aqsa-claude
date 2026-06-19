"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GalleryCard } from "@/components/shared/GalleryCard";
import { VideoEmbed } from "@/components/shared/VideoEmbed";
import galleryItems from "@/data/gallery_items.json";

export default function Home() {
  const featuredVideo = {
    id: "mock1", // this would be a real YT id
    title: "Beginner Watercolor Techniques",
  };

  const recentPortfolio = galleryItems.slice(0, 6);

  return (
    <main className="flex-1 w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sage-50 rounded-l-[100px] opacity-50 -z-10 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-charcoal leading-tight mb-6">
                Inspiring Creativity, <br/>
                <span className="text-sage-600 italic">One Brushstroke</span> at a Time.
              </h1>
              <p className="text-lg text-charcoal/70 mb-8 max-w-md">
                Join our community of artists and crafters. Discover easy tutorials, beautiful paintings, and fun DIY projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto text-base rounded-full" asChild>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    Subscribe on YouTube
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base rounded-full" asChild>
                  <Link href="/gallery">Explore Gallery</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1579783902614-a3f140081d6d?q=80&w=1000&auto=format&fit=crop"
                  alt="Artist painting"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage-200 rounded-full mix-blend-multiply opacity-70 blur-2xl" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply opacity-70 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal mb-4">Latest Tutorial</h2>
            <p className="text-charcoal/70">Grab your brushes and follow along</p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <VideoEmbed videoId={featuredVideo.id} title={featuredVideo.title} />
          </motion.div>
        </div>
      </section>

      {/* Recent Portfolio Section */}
      <section className="py-24 bg-sage-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal mb-4">Recent Works</h2>
              <p className="text-charcoal/70 max-w-md">A collection of my latest paintings and craft projects.</p>
            </div>
            <Link href="/gallery" className="hidden sm:inline-flex items-center text-sage-600 hover:text-sage-800 font-medium group">
              View all
              <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPortfolio.map((item, index) => (
              <GalleryCard key={item.id} item={item} priority={index < 3} />
            ))}
          </div>
          
          <div className="mt-10 sm:hidden flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/gallery">View all works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sage-50 rounded-3xl overflow-hidden shadow-sm border border-sage-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src="https://images.unsplash.com/photo-1544158406-8d6bd1516eeb?q=80&w=800&auto=format&fit=crop"
                  alt="Aqsa working in studio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-medium text-charcoal mb-6">Hello, I'm Aqsa.</h2>
                <p className="text-charcoal/70 mb-8 leading-relaxed">
                  I believe that everyone has a creative spark waiting to be ignited. Through my YouTube tutorials and artwork, I aim to make painting and crafting accessible, joyful, and deeply rewarding.
                </p>
                <div>
                  <Button variant="outline" className="rounded-full" asChild>
                    <Link href="/about">Read my story</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Scaffold */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-sage-900/50 mix-blend-multiply" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Join the Creative Journey</h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Get early access to new tutorials, exclusive freebies, and behind-the-scenes updates sent straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-full text-charcoal focus:outline-none focus:ring-2 focus:ring-sage-400"
              required
            />
            <Button className="rounded-full px-8 bg-sage-500 hover:bg-sage-400 text-white border-0">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
