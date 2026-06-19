import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Aqsa's creative journal — tips on watercolor, beginner craft guides, behind-the-scenes studio notes, and art inspiration.",
};

const posts = [
  {
    slug: "beginner-watercolor-mistakes",
    title: "5 Watercolor Mistakes Every Beginner Makes (And How to Fix Them)",
    excerpt: "I made all of these. Repeatedly. Here's what I wish someone had told me in year one — from overworking wet paint to choosing the wrong paper.",
    tag: "Watercolor Tips",
    date: "June 12, 2024",
    readTime: "6 min read",
    image: "/images/art-2.png",
    featured: true,
  },
  {
    slug: "diy-paper-flower-tutorial",
    title: "How to Make Gorgeous Paper Quilled Flowers for Beginners",
    excerpt: "Paper quilling is one of the most meditative crafts I know. You need barely any supplies — just paper strips, a tool, and patience.",
    tag: "Paper Craft",
    date: "May 28, 2024",
    readTime: "8 min read",
    image: "/images/art-1.png",
    featured: false,
  },
  {
    slug: "setting-up-art-space-budget",
    title: "Building a Beautiful Art Space on a Budget",
    excerpt: "My studio tour — including what I actually use versus what I bought and never touched. Plus my top sources for affordable supplies.",
    tag: "Studio Life",
    date: "May 10, 2024",
    readTime: "5 min read",
    image: "/images/artist.png",
    featured: false,
  },
  {
    slug: "acrylic-pour-complete-guide",
    title: "Acrylic Pour Painting: The Complete Beginner Guide",
    excerpt: "Acrylic pouring looks like magic and feels like it too. Here's everything you need — ratios, cells, techniques, and what not to use.",
    tag: "Mixed Media",
    date: "April 22, 2024",
    readTime: "10 min read",
    image: "/images/art-4.png",
    featured: false,
  },
  {
    slug: "macrame-beginners",
    title: "Your First Macramé Project: A Simple Wall Hanging",
    excerpt: "Three knots. That's all you need. I'll walk you through a wall hanging from setup to finished piece in under an afternoon.",
    tag: "Fiber Art",
    date: "April 5, 2024",
    readTime: "7 min read",
    image: "/images/art-5.png",
    featured: false,
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: "160px", paddingBottom: "80px", paddingLeft: "48px", paddingRight: "48px", borderBottom: "1px solid rgba(26,22,18,0.08)" }}>
        <Reveal>
          <p className="tag-pill" style={{ marginBottom: "20px", display: "inline-block" }}>Creative Journal</p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--ink)",
            marginBottom: "20px",
          }}>
            Words &amp; Process
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "460px", lineHeight: 1.8 }}>
            Tutorials, tips, studio notes, and honest reflections on what it means to create every day.
          </p>
        </Reveal>
      </section>

      {/* Featured post */}
      <section style={{ padding: "80px 48px", maxWidth: "1400px", margin: "0 auto" }}>
        <Reveal>
          <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
            <div className="card-lift" style={{ borderRadius: "24px", overflow: "hidden", display: "grid", gridTemplateColumns: "1.2fr 1fr", background: "var(--cream-dark)", border: "1px solid rgba(26,22,18,0.06)" }} >
              <div className="img-reveal" style={{ position: "relative", minHeight: "480px" }}>
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "60px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: "12px", marginBottom: "24px", alignItems: "center" }}>
                  <span className="tag-pill">{featured.tag}</span>
                  <span style={{ background: "var(--rust)", color: "var(--cream)", padding: "4px 14px", borderRadius: "100px", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>Featured</span>
                </div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 400, color: "var(--ink)", marginBottom: "20px", lineHeight: 1.2 }}>
                  {featured.title}
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.92rem", marginBottom: "32px" }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{featured.date} · {featured.readTime}</span>
                  <span style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rust)", fontWeight: 500 }}>Read →</span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* Rest */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px", marginTop: "40px" }} className="grid-cols-1 md:grid-cols-2">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1} direction="scale">
              <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
                <article className="card-lift" style={{ borderRadius: "20px", overflow: "hidden", background: "var(--cream-dark)", border: "1px solid rgba(26,22,18,0.06)" }}>
                  <div className="img-reveal" style={{ aspectRatio: "16/9", position: "relative" }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "28px 32px" }}>
                    <span className="tag-pill" style={{ marginBottom: "14px", display: "inline-block" }}>{post.tag}</span>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, color: "var(--ink)", marginBottom: "12px", lineHeight: 1.25 }}>
                      {post.title}
                    </h2>
                    <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "20px" }}>{post.excerpt}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{post.date} · {post.readTime}</span>
                      <span style={{ fontSize: "0.75rem", color: "var(--rust)", fontWeight: 500, letterSpacing: "0.08em" }}>Read →</span>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
