import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryFiltersAndGrid } from "@/components/ui/GalleryFiltersAndGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse Aqsa's complete portfolio of watercolor paintings, paper crafts, DIY projects, macramé, and mixed media artwork.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section style={{
        paddingTop: "160px",
        paddingBottom: "40px",
        paddingLeft: "48px",
        paddingRight: "48px",
        borderBottom: "1px solid rgba(26,22,18,0.08)",
      }}>
        <Reveal>
          <p className="tag-pill" style={{ marginBottom: "20px", display: "inline-block" }}>Portfolio</p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--ink)",
            marginBottom: "24px",
          }}>
            The Gallery
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "480px", lineHeight: 1.8 }}>
            Every piece is an experiment in material, colour, and texture. Browse by medium or wander freely.
          </p>
        </Reveal>
      </section>

      {/* Interactive Filters & Grid */}
      <GalleryFiltersAndGrid />


      {/* CTA */}
      <section style={{
        padding: "80px 48px",
        textAlign: "center",
        borderTop: "1px solid rgba(26,22,18,0.08)",
      }}>
        <Reveal>
          <p style={{ color: "var(--muted)", marginBottom: "20px" }}>Want to see the process behind each piece?</p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mag-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 36px",
              background: "var(--rust)",
              color: "var(--cream)",
              textDecoration: "none",
              borderRadius: "100px",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 500,
              border: "1px solid var(--rust)",
            }}
          >
            <span>Watch on YouTube →</span>
          </a>
        </Reveal>
      </section>
    </>
  );
}
