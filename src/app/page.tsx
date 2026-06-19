import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Hero3DWrapper } from "@/components/canvas/Hero3DWrapper";

export const metadata: Metadata = {
  title: "Aqsa Art — Paintings, Crafts & DIY Tutorials",
  description:
    "Step into Aqsa's creative world. Discover original watercolor paintings, handmade crafts, and step-by-step DIY tutorials on YouTube.",
};

const galleryItems = [
  { src: "/images/art-1.png", title: "Paper Quilling Mandala",  tag: "Paper Craft",  href: "/gallery" },
  { src: "/images/art-2.png", title: "Gestural Peony Study",    tag: "Watercolor",   href: "/gallery" },
  { src: "/images/art-3.png", title: "Botanical Resin Tray",    tag: "DIY Craft",    href: "/gallery" },
  { src: "/images/art-4.png", title: "Fluid Acrylic Pour",      tag: "Mixed Media",  href: "/gallery" },
  { src: "/images/art-5.png", title: "Macramé Wall Art",        tag: "Fiber Art",    href: "/gallery" },
  { src: "/images/art-6.png", title: "Ceramic Botanical Bowl",  tag: "Ceramics",     href: "/gallery" },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO — full-bleed 3D WebGL scene ────────────────── */}
      <section
        style={{
          position: "relative",
          height: "100svh",
          minHeight: "640px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* WebGL canvas fills the entire section */}
        <Hero3DWrapper />

        {/* Soft gradient so text is readable over the dark canvas */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, rgba(8,6,4,0.72) 0%, rgba(8,6,4,0.25) 55%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Text overlay */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "0 48px",
            maxWidth: "820px",
            paddingTop: "100px",
          }}
        >
          <div
            style={{
              marginBottom: "24px",
              opacity: 0,
              animation: "revealUp 0.9s ease 0.3s forwards",
            }}
          >
            <span
              className="tag-pill"
              style={{
                background: "rgba(245,240,232,0.08)",
                color: "var(--cream)",
                borderColor: "rgba(245,240,232,0.25)",
              }}
            >
              Artist &amp; Creator
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3.8rem, 8.5vw, 7.5rem)",
              fontWeight: 300,
              lineHeight: 1.04,
              color: "var(--cream)",
              marginBottom: "28px",
              opacity: 0,
              animation: "revealUp 1s ease 0.5s forwards",
              textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            }}
          >
            Paint what
            <br />
            <em style={{ fontStyle: "italic", color: "var(--rust-light)" }}>
              moves
            </em>{" "}
            you.
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.78)",
              fontSize: "1.1rem",
              lineHeight: 1.85,
              maxWidth: "460px",
              marginBottom: "44px",
              opacity: 0,
              animation: "revealUp 1s ease 0.7s forwards",
            }}
          >
            I&apos;m Aqsa — a self-taught artist making watercolor paintings,
            paper crafts, and DIY tutorials that anyone can follow.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              opacity: 0,
              animation: "revealUp 1s ease 0.9s forwards",
            }}
          >
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mag-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 32px",
                background: "var(--rust)",
                color: "var(--cream)",
                textDecoration: "none",
                borderRadius: "100px",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                border: "1px solid var(--rust)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Subscribe on YouTube
              </span>
            </a>

            <Link
              href="/gallery"
              className="mag-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 32px",
                border: "1px solid rgba(245,240,232,0.4)",
                color: "var(--cream)",
                textDecoration: "none",
                borderRadius: "100px",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              <span>View Gallery</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0,
            animation: "fadeIn 1s ease 1.6s forwards",
            color: "rgba(245,240,232,0.45)",
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background:
                "linear-gradient(to bottom, rgba(245,240,232,0.45), transparent)",
              animation: "float 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ─── MARQUEE ──────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--rust)",
          color: "var(--cream)",
          padding: "16px 0",
          overflow: "hidden",
          borderTop: "1px solid rgba(245,240,232,0.15)",
          borderBottom: "1px solid rgba(245,240,232,0.15)",
        }}
      >
        <div
          className="marquee-inner"
          style={{
            display: "flex",
            gap: "48px",
            whiteSpace: "nowrap",
            width: "fit-content",
          }}
        >
          {Array(2)
            .fill([
              "Watercolor Paintings",
              "Paper Crafts",
              "DIY Tutorials",
              "Mixed Media",
              "Macramé Art",
              "Botanical Prints",
              "Acrylic Pours",
              "Handmade Ceramics",
            ])
            .flat()
            .map((item, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "48px",
                }}
              >
                {item}
                <span style={{ opacity: 0.4, fontSize: "0.5rem" }}>◆</span>
              </span>
            ))}
        </div>
      </div>

      {/* ─── GALLERY PREVIEW (3D Tilt cards) ──────────────────── */}
      <section
        style={{ padding: "120px 48px", maxWidth: "1600px", margin: "0 auto" }}
      >
        <Reveal>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "64px",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <p
                className="tag-pill"
                style={{ marginBottom: "16px", display: "inline-block" }}
              >
                Portfolio
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: "var(--ink)",
                }}
              >
                Recent
                <br />
                <em>Creations</em>
              </h2>
            </div>
            <Link
              href="/gallery"
              className="mag-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                border: "1px solid var(--ink)",
                color: "var(--ink)",
                textDecoration: "none",
                borderRadius: "100px",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              <span>Full Gallery →</span>
            </Link>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {galleryItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07} direction="scale">
              <TiltCard maxTilt={14}>
                <Link href={item.href} style={{ textDecoration: "none", display: "block" }}>
                  <div
                    style={{
                      borderRadius: "20px",
                      overflow: "hidden",
                      background: "var(--cream-dark)",
                      border: "1px solid rgba(26,22,18,0.07)",
                      boxShadow: "0 8px 32px rgba(26,22,18,0.08)",
                    }}
                  >
                    <div
                      className="img-reveal"
                      style={{
                        aspectRatio: i % 3 === 1 ? "3/4" : "4/3",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={item.src}
                        alt={`${item.title} — art by Aqsa`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ padding: "20px 24px 26px" }}>
                      <span
                        className="tag-pill"
                        style={{ marginBottom: "10px", display: "inline-block" }}
                      >
                        {item.tag}
                      </span>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.35rem",
                          fontWeight: 400,
                          color: "var(--ink)",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── FEATURED VIDEO ───────────────────────────────────── */}
      <section
        style={{ background: "var(--ink-soft)", padding: "120px 48px" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                textAlign: "center",
                marginBottom: "64px",
              }}
            >
              <p
                className="tag-pill"
                style={{
                  marginBottom: "16px",
                  display: "inline-block",
                  background: "rgba(184,92,56,0.2)",
                  borderColor: "rgba(184,92,56,0.3)",
                  color: "var(--rust-light)",
                }}
              >
                Latest Tutorial
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: "var(--cream)",
                }}
              >
                Watch &amp; Create
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="scale">
            <TiltCard maxTilt={6}>
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(245,240,232,0.07)",
                }}
              >
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/jNQXAC9IVRw"
                    title="Featured art tutorial by Aqsa"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: "none" }}
                  />
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.3}>
            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mag-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 40px",
                  border: "1px solid rgba(245,240,232,0.25)",
                  color: "var(--cream)",
                  textDecoration: "none",
                  borderRadius: "100px",
                  fontSize: "0.78rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                <span>See All Tutorials →</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─────────────────────────────────────── */}
      <section
        style={{
          padding: "120px 48px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          <Reveal direction="left">
            <TiltCard maxTilt={8}>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    left: "-20px",
                    width: "100%",
                    height: "100%",
                    border: "1px solid var(--rust)",
                    borderRadius: "20px",
                    opacity: 0.25,
                  }}
                />
                <div
                  className="img-reveal"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    aspectRatio: "4/5",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/images/artist.png"
                    alt="Aqsa — artist and YouTube creator — in her art studio"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "32px",
                    right: "-24px",
                    background: "var(--cream)",
                    border: "1px solid var(--cream-dark)",
                    borderRadius: "16px",
                    padding: "20px 28px",
                    boxShadow: "0 20px 60px rgba(26,22,18,0.15)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.5rem",
                      fontWeight: 500,
                      color: "var(--rust)",
                      lineHeight: 1,
                    }}
                  >
                    10K+
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginTop: "6px",
                    }}
                  >
                    Subscribers
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal direction="right">
            <div>
              <p
                className="tag-pill"
                style={{ marginBottom: "24px", display: "inline-block" }}
              >
                About the Artist
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: "var(--ink)",
                  marginBottom: "28px",
                }}
              >
                Art is how I
                <br />
                <em style={{ color: "var(--rust)" }}>speak</em> my truth.
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.9,
                  fontSize: "1rem",
                  marginBottom: "16px",
                }}
              >
                Hello! I&apos;m Aqsa — a self-taught artist with an obsession
                for paint, paper, and anything that can be transformed into
                something beautiful.
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.9,
                  fontSize: "1rem",
                  marginBottom: "40px",
                }}
              >
                What started as a quiet hobby turned into a YouTube channel, a
                growing community, and a belief that creativity lives in
                everyone. My tutorials are designed so that beginners feel brave
                enough to begin.
              </p>
              <Link
                href="/about"
                className="mag-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "16px 32px",
                  background: "var(--ink)",
                  color: "var(--cream)",
                  textDecoration: "none",
                  borderRadius: "100px",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  border: "1px solid var(--ink)",
                }}
              >
                <span>My Full Story →</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── NEWSLETTER ───────────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream-dark)",
          borderTop: "1px solid rgba(26,22,18,0.08)",
          borderBottom: "1px solid rgba(26,22,18,0.08)",
          padding: "100px 48px",
          textAlign: "center",
        }}
      >
        <Reveal>
          <p
            className="tag-pill"
            style={{ marginBottom: "20px", display: "inline-block" }}
          >
            Stay Connected
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--ink)",
              marginBottom: "16px",
            }}
          >
            Creative letters, straight to you.
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              marginBottom: "40px",
              maxWidth: "480px",
              margin: "0 auto 40px",
            }}
          >
            Monthly newsletters with process notes, tutorials, and
            behind-the-scenes peeks at new work. No spam. Ever.
          </p>
          <form
            action="#"
            style={{
              display: "flex",
              gap: "12px",
              maxWidth: "480px",
              margin: "0 auto",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            aria-label="Email newsletter signup"
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              id="newsletter-email"
              style={{
                flex: 1,
                minWidth: "220px",
                padding: "16px 24px",
                borderRadius: "100px",
                border: "1px solid rgba(26,22,18,0.2)",
                background: "var(--cream)",
                fontSize: "0.9rem",
                color: "var(--ink)",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
            <button
              type="submit"
              className="mag-btn"
              style={{
                padding: "16px 32px",
                background: "var(--rust)",
                color: "var(--cream)",
                border: "1px solid var(--rust)",
                borderRadius: "100px",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                cursor: "none",
                fontFamily: "inherit",
              }}
            >
              <span>Subscribe</span>
            </button>
          </form>
        </Reveal>
      </section>

      {/* ─── STATS ROW (3D Tilt cards) ────────────────────────── */}
      <section style={{ padding: "80px 48px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            textAlign: "center",
          }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {[
            { value: "10K+", label: "YouTube Subscribers" },
            { value: "200+", label: "Artworks Created" },
            { value: "50+",  label: "Video Tutorials" },
            { value: "3+",   label: "Years Creating" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <TiltCard maxTilt={20}>
                <div
                  style={{
                    padding: "36px 20px",
                    borderRadius: "20px",
                    border: "1px solid rgba(26,22,18,0.09)",
                    background: "var(--cream)",
                    boxShadow: "0 4px 24px rgba(26,22,18,0.06)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "3.2rem",
                      fontWeight: 400,
                      color: "var(--rust)",
                      lineHeight: 1,
                      marginBottom: "12px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
