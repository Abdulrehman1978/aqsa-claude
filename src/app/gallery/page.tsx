import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse Aqsa's complete portfolio of watercolor paintings, paper crafts, DIY projects, macramé, and mixed media artwork.",
};

const artworks = [
  { src: "/images/art-1.png", title: "Paper Quilling Mandala", tag: "Paper Craft", desc: "Cream and terracotta paper coils shaped into an intricate mandala. 200+ individual pieces.", year: "2024" },
  { src: "/images/art-2.png", title: "Gestural Peony Study", tag: "Watercolor", desc: "Loose gestural watercolor on cold press paper. Blush and coral palette.", year: "2024" },
  { src: "/images/art-3.png", title: "Botanical Resin Tray", tag: "DIY Craft", desc: "Pressed botanicals suspended in crystal-clear resin. Terracotta wood frame.", year: "2024" },
  { src: "/images/art-4.png", title: "Fluid Acrylic Pour", tag: "Mixed Media", desc: "Sage green and ivory swirled acrylic pour on 60×80cm canvas.", year: "2023" },
  { src: "/images/art-5.png", title: "Macramé Wall Hanging", tag: "Fiber Art", desc: "100% natural cotton rope with dried pampas grass. Handknotted wall piece.", year: "2023" },
  { src: "/images/art-6.png", title: "Ceramic Botanical Bowl", tag: "Ceramics", desc: "Hand-pinched stoneware with botanical imprint and sage green glaze.", year: "2023" },
];

const tags = ["All", "Watercolor", "Paper Craft", "DIY Craft", "Mixed Media", "Fiber Art", "Ceramics"];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section style={{
        paddingTop: "160px",
        paddingBottom: "80px",
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

        {/* Filter tags */}
        <Reveal delay={0.2}>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "40px" }}>
            {tags.map((tag) => (
              <button
                key={tag}
                id={`filter-${tag.toLowerCase().replace(" ", "-")}`}
                style={{
                  padding: "8px 20px",
                  borderRadius: "100px",
                  border: tag === "All" ? "1px solid var(--rust)" : "1px solid rgba(26,22,18,0.15)",
                  background: tag === "All" ? "var(--rust)" : "transparent",
                  color: tag === "All" ? "var(--cream)" : "var(--muted)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "none",
                  fontFamily: "inherit",
                  transition: "all 0.3s ease",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Grid */}
      <section style={{ padding: "80px 48px", maxWidth: "1600px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "32px",
        }}>
          {artworks.map((art, i) => (
            <Reveal key={art.title} delay={i * 0.07} direction="scale">
              <TiltCard maxTilt={12}>
              <article
                className="card-lift"
                style={{
                  background: "var(--cream-dark)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(26,22,18,0.06)",
                  cursor: "none",
                }}
                aria-label={art.title}
              >
                <div className="img-reveal" style={{ aspectRatio: "4/3", position: "relative" }}>
                  <Image
                    src={art.src}
                    alt={`${art.title} — ${art.tag} by Aqsa. ${art.desc}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  {/* Hover overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "rgba(26,22,18,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }}
                  className="gallery-overlay"
                  >
                    <span style={{
                      padding: "12px 28px",
                      border: "1px solid var(--cream)",
                      borderRadius: "100px",
                      color: "var(--cream)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}>
                      View Detail
                    </span>
                  </div>
                </div>
                <div style={{ padding: "24px 28px 28px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span className="tag-pill">{art.tag}</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{art.year}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: "var(--ink)", marginBottom: "10px" }}>
                    {art.title}
                  </h2>
                  <p style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.7 }}>{art.desc}</p>
                </div>
              </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

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
