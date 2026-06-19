import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Hero3DWrapper } from "@/components/canvas/Hero3DWrapper";
import { Gallery3DWrapper } from "@/components/canvas/Gallery3DWrapper";
import { MorphBlobWrapper } from "@/components/canvas/MorphBlobWrapper";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export const metadata: Metadata = {
  title: "Aqsa Art — Paintings, Crafts & DIY Tutorials",
  description:
    "Step into Aqsa's creative world. Discover original watercolor paintings, handmade crafts, and step-by-step DIY tutorials on YouTube.",
};

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          HERO — Full-bleed WebGL 3D scene
      ══════════════════════════════════════════════════════════ */}
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
        {/* WebGL canvas — covers entire section */}
        <Hero3DWrapper />

        {/* Readability gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, rgba(8,6,4,0.74) 0%, rgba(8,6,4,0.18) 55%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Copy */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "0 56px",
            maxWidth: "820px",
            paddingTop: "100px",
          }}
        >
          <div style={{ marginBottom: "24px", opacity: 0, animation: "revealUp 0.9s ease 0.3s forwards" }}>
            <span
              className="tag-pill"
              style={{
                background: "rgba(245,240,232,0.08)",
                color: "var(--cream)",
                borderColor: "rgba(245,240,232,0.22)",
              }}
            >
              Artist &amp; Creator
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(4rem, 9vw, 8rem)",
              fontWeight: 300,
              lineHeight: 1.02,
              color: "var(--cream)",
              marginBottom: "28px",
              opacity: 0,
              animation: "revealUp 1s ease 0.5s forwards",
              textShadow: "0 2px 48px rgba(0,0,0,0.6)",
            }}
          >
            Paint what
            <br />
            <em style={{ color: "var(--rust-light)", fontStyle: "italic" }}>moves</em> you.
          </h1>

          <p
            style={{
              color: "rgba(245,240,232,0.78)",
              fontSize: "1.1rem",
              lineHeight: 1.85,
              maxWidth: "450px",
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
                fontSize: "0.79rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                border: "1px solid var(--rust)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe on YouTube
            </a>
            <Link
              href="/gallery"
              className="mag-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "16px 32px",
                border: "1px solid rgba(245,240,232,0.38)",
                color: "var(--cream)",
                textDecoration: "none",
                borderRadius: "100px",
                fontSize: "0.79rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              View Gallery
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
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
            color: "rgba(245,240,232,0.4)",
            zIndex: 10,
          }}
        >
          <span style={{ fontSize: "0.58rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>Scroll</span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, rgba(245,240,232,0.4), transparent)",
              animation: "float 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MARQUEE TICKER
      ══════════════════════════════════════════════════════════ */}
      <div
        style={{
          background: "var(--rust)",
          color: "var(--cream)",
          padding: "16px 0",
          overflow: "hidden",
          borderTop: "1px solid rgba(245,240,232,0.12)",
          borderBottom: "1px solid rgba(245,240,232,0.12)",
        }}
      >
        <div className="marquee-inner" style={{ display: "flex", gap: "48px", whiteSpace: "nowrap", width: "fit-content" }}>
          {Array(2)
            .fill(["Watercolor Paintings", "Paper Crafts", "DIY Tutorials", "Mixed Media", "Macramé Art", "Botanical Prints", "Acrylic Pours", "Handmade Ceramics"])
            .flat()
            .map((item, i) => (
              <span key={i} style={{ fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "48px" }}>
                {item} <span style={{ opacity: 0.35, fontSize: "0.45rem" }}>◆</span>
              </span>
            ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          3D GALLERY CAROUSEL — full-bleed WebGL carousel
      ══════════════════════════════════════════════════════════ */}
      <section style={{ position: "relative", height: "620px", overflow: "hidden", background: "#060504" }}>
        {/* 3D canvas fills the entire section */}
        <Gallery3DWrapper />

        {/* Text overlay — top-left */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "56px",
            transform: "translateY(-50%)",
            zIndex: 10,
            pointerEvents: "none",
            maxWidth: "280px",
          }}
        >
          <Reveal>
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
              Portfolio
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.08,
                color: "var(--cream)",
              }}
            >
              The
              <br />
              <em style={{ color: "var(--rust-light)" }}>Gallery</em>
            </h2>
            <p
              style={{
                color: "rgba(245,240,232,0.5)",
                fontSize: "0.9rem",
                lineHeight: 1.75,
                marginTop: "16px",
              }}
            >
              Hover any artwork as it rotates past.
            </p>
          </Reveal>
        </div>

        {/* Bottom-right CTA — pointer events enabled */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            right: "56px",
            zIndex: 10,
          }}
        >
          <Link
            href="/gallery"
            className="mag-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 26px",
              border: "1px solid rgba(245,240,232,0.3)",
              color: "var(--cream)",
              textDecoration: "none",
              borderRadius: "100px",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <span>Full Gallery →</span>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FEATURED VIDEO
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: "var(--ink-soft)", padding: "120px 56px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
                  fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                  fontWeight: 300,
                  lineHeight: 1.12,
                  color: "var(--cream)",
                }}
              >
                Watch &amp; Create
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="scale">
            <TiltCard maxTilt={5}>
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 48px 120px rgba(0,0,0,0.55)",
                  border: "1px solid rgba(245,240,232,0.06)",
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
                  border: "1px solid rgba(245,240,232,0.22)",
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

      {/* ══════════════════════════════════════════════════════════
          ABOUT TEASER
      ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: "120px 56px", maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
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
                    opacity: 0.22,
                  }}
                />
                <div className="img-reveal" style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "4/5", position: "relative" }}>
                  <Image
                    src="/images/artist.png"
                    alt="Aqsa — artist and YouTube creator — in her art studio"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {/* Subscriber badge */}
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
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 500, color: "var(--rust)", lineHeight: 1 }}>10K+</div>
                  <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginTop: "6px" }}>Subscribers</div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal direction="right">
            <div>
              <p className="tag-pill" style={{ marginBottom: "24px", display: "inline-block" }}>About the Artist</p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.4rem, 4vw, 4rem)",
                  fontWeight: 300,
                  lineHeight: 1.12,
                  color: "var(--ink)",
                  marginBottom: "28px",
                }}
              >
                Art is how I<br />
                <em style={{ color: "var(--rust)" }}>speak</em> my truth.
              </h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "16px" }}>
                Hello! I&apos;m Aqsa — a self-taught artist with an obsession for paint, paper, and anything that
                can be transformed into something beautiful.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "40px" }}>
                What started as a quiet hobby turned into a YouTube channel, a growing community, and a belief that
                creativity lives in everyone. My tutorials are designed so beginners feel brave enough to begin.
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

      {/* ══════════════════════════════════════════════════════════
          MORPHBLOB DIVIDER — 3D morphing orb with orbital rings
      ══════════════════════════════════════════════════════════ */}
      <section style={{ height: "340px", position: "relative", overflow: "hidden", background: "#060504" }}>
        <MorphBlobWrapper />
        {/* Quote overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 10,
            padding: "0 48px",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
              fontStyle: "italic",
              color: "rgba(245,240,232,0.32)",
              textAlign: "center",
              maxWidth: "560px",
              lineHeight: 1.65,
              letterSpacing: "0.01em",
            }}
          >
            Every creation starts with a single mark on an empty page.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          NEWSLETTER
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--cream-dark)",
          borderTop: "1px solid rgba(26,22,18,0.07)",
          borderBottom: "1px solid rgba(26,22,18,0.07)",
          padding: "100px 56px",
          textAlign: "center",
        }}
      >
        <Reveal>
          <p className="tag-pill" style={{ marginBottom: "20px", display: "inline-block" }}>Stay Connected</p>
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
          <p style={{ color: "var(--muted)", fontSize: "1rem", maxWidth: "460px", margin: "0 auto 40px", lineHeight: 1.8 }}>
            Monthly newsletters with process notes, tutorials, and behind-the-scenes peeks at new work. No spam. Ever.
          </p>
          <NewsletterForm />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STATS — 3D tilt cards
      ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 56px" }}>
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
              <TiltCard maxTilt={22}>
                <div
                  style={{
                    padding: "36px 20px",
                    borderRadius: "20px",
                    border: "1px solid rgba(26,22,18,0.08)",
                    background: "var(--cream)",
                    boxShadow: "0 4px 24px rgba(26,22,18,0.06)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "3.4rem",
                      fontWeight: 400,
                      color: "var(--rust)",
                      lineHeight: 1,
                      marginBottom: "12px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
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
