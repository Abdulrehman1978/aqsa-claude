import Link from "next/link";
import Image from "next/image";
import blogPosts from "@/data/blog_posts.json";

export const metadata = {
  title: "Blog | Aqsa Art & Craft",
  description: "Read articles, tips, and tricks for painting and paper crafting.",
};

export default function BlogPage() {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-4">The Creative Journal</h1>
        <p className="text-charcoal/70 max-w-2xl mx-auto">Tips, techniques, and behind-the-scenes thoughts on art and creativity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <article key={post.id} className="group flex flex-col h-full bg-white border border-sage-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
            <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
              <Image 
                src={post.featuredImage} 
                alt={post.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Link>
            <div className="p-6 flex flex-col flex-grow">
              <time className="text-sm text-sage-600 mb-3">{new Date(post.publishDate).toLocaleDateString()}</time>
              <h2 className="font-serif text-2xl font-medium text-charcoal mb-3 line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-sage-700 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-charcoal/70 line-clamp-3 mb-6 flex-grow">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sage-600 font-medium group/link">
                Read article
                <span className="ml-1 transform transition-transform group-hover/link:translate-x-1">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
