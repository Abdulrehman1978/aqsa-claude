import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import blogPosts from "@/data/blog_posts.json";
import { VideoEmbed } from "@/components/shared/VideoEmbed";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Aqsa Art & Craft`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <Link href="/blog" className="inline-flex items-center text-sage-600 hover:text-sage-800 mb-8 font-medium">
        ← Back to all articles
      </Link>
      
      <article>
        <header className="mb-10 text-center">
          <time className="text-sm tracking-widest uppercase text-sage-600 mb-4 block">
            {new Date(post.publishDate).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src={post.featuredImage} 
              alt={post.title} 
              fill 
              priority
              className="object-cover"
            />
          </div>
        </header>

        <div className="prose prose-sage prose-lg mx-auto text-charcoal/80">
          {/* Simple mock markdown renderer - since it's mock data we'll just render it as paragraphs for v1 */}
          {post.body.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={idx} className="font-serif text-3xl font-medium text-charcoal mt-12 mb-6">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('- ')) {
              return (
                <ul key={idx} className="list-disc pl-6 space-y-2 my-6">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i}>{item.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx} className="mb-6 leading-relaxed">{paragraph}</p>;
          })}
        </div>

        {post.relatedVideoUrl && (
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-medium text-charcoal mb-6 text-center">Watch the Tutorial</h3>
            <VideoEmbed videoId="mock_id" title={post.title} />
          </div>
        )}
      </article>
    </main>
  );
}
