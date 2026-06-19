"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface GalleryCardProps {
  item: {
    title: string;
    slug: string;
    category: string;
    images: string[];
    materials: string;
  };
  priority?: boolean;
}

export function GalleryCard({ item, priority = false }: GalleryCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col gap-3"
    >
      <Link href={`/gallery?item=${item.slug}`} className="block overflow-hidden rounded-lg bg-sage-50 aspect-[4/5] relative">
        <Image
          src={item.images[0]}
          alt={item.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10" />
      </Link>
      
      <div>
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="font-serif text-lg font-medium text-charcoal truncate">
            {item.title}
          </h3>
          <span className="text-xs tracking-wider uppercase text-sage-600 bg-sage-100 px-2 py-1 rounded-full whitespace-nowrap">
            {item.category}
          </span>
        </div>
        <p className="text-sm text-charcoal/70 truncate">{item.materials}</p>
      </div>
    </motion.div>
  );
}
