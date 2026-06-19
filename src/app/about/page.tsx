import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Get to know Aqsa — a self-taught artist and YouTube creator passionate about watercolor, paper crafts, and making art accessible to everyone.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "48px", paddingRight: "48px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="grid-cols-1 md:grid-cols-2">
          <div>
            <Reveal>
              <p className="tag-pill" style={{ marginBottom: "20px", display: "inline-block" }}>The Artist</p>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 300,
                lineHeight: 1.08,
                color: "var(--ink)",
                marginBottom: "32px",
              }}>
                Hello, I&apos;m<br />
                <em style={{ color: "var(--rust)" }}>Aqsa.</em>
              </h1>
              <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "20px" }}>
                I was never the kid who took art classes. I was the one who filled notebook margins with little flowers and patterns, convinced that "real art" was for people with talent — a word I didn't think applied to me.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "20px" }}>
                The pandemic changed that. With time stretching endlessly and a set of cheap watercolors bought on impulse, I sat down at my kitchen table and painted my first peony. It was terrible. I loved it instantly.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "40px" }}>
                I started filming my practice sessions and posting them online. The response was overwhelming — not because my work was perfect, but because people were tired of perfection. They wanted to watch someone figure it out in real time. So that&apos;s exactly what I kept doing.
              </p>
              <Link
                href="/contact"
                className="mag-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "16px 32px",
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
                <span>Work With Me →</span>
              </Link>
            </Reveal>
          </div>
          <Reveal direction="right">
            <div style={{ position: "relative", paddingTop: "40px" }}>
              <div style={{
                position: "absolute", top: 0, right: "40px",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "14rem", fontWeight: 300,
                color: "var(--rust)", opacity: 0.06,
                lineHeight: 1, pointerEvents: "none",
                userSelect: "none",
              }}>A</div>
              <div className="img-reveal" style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
                <Image
                  src="/images/artist.png"
                  alt="Aqsa in her art studio surrounded by paintings and creative supplies"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section style={{ background: "var(--ink)", padding: "100px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--cream)",
              marginBottom: "64px",
              maxWidth: "600px",
            }}>
              What I believe about<br /><em style={{ color: "var(--rust-light)" }}>creativity</em>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "48px" }} className="grid-cols-1 md:grid-cols-3">
            {[
              { num: "01", title: "Everyone is creative", body: "Creativity is not a talent. It is a practice. It gets stronger every time you sit down, even when you don't feel like it." },
              { num: "02", title: "Mistakes are the medium", body: "Some of my best pieces started as disasters. I treat every unexpected result as the art giving me new directions to explore." },
              { num: "03", title: "Process over product", body: "The finished painting matters less than the hour you spent fully present in your body, mixing colors, following your instincts." },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 0.1}>
                <div style={{ borderTop: "1px solid rgba(245,240,232,0.1)", paddingTop: "32px" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", color: "var(--rust)", opacity: 0.4, marginBottom: "16px" }}>{item.num}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "var(--cream)", fontWeight: 400, marginBottom: "16px" }}>{item.title}</h3>
                  <p style={{ color: "rgba(245,240,232,0.5)", lineHeight: 1.8, fontSize: "0.9rem" }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section style={{ padding: "100px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, color: "var(--ink)", marginBottom: "64px" }}>
            The journey so far
          </h2>
        </Reveal>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "120px", top: 0, bottom: 0, width: "1px", background: "rgba(26,22,18,0.1)" }} className="hidden md:block" />
          {[
            { year: "2021", title: "First brushstroke", body: "Bought a cheap watercolor set during lockdown. Painted my first flower. Was hooked immediately." },
            { year: "2022", title: "First upload", body: "Filmed and uploaded my first tutorial. 200 views felt like 2 million. I couldn't sleep from excitement." },
            { year: "2023", title: "1,000 subscribers", body: "Hit my first milestone. Started diversifying into paper crafts, macramé, and mixed media." },
            { year: "2024", title: "10K & growing", body: "The community grew beyond what I imagined. Collaborations with art supply brands. Studio set up properly." },
          ].map((item, i) => (
            <Reveal key={item.year} delay={i * 0.1} direction="left">
              <div style={{ display: "flex", gap: "48px", marginBottom: "56px", alignItems: "flex-start" }}>
                <div style={{ minWidth: "80px", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "var(--rust)", fontWeight: 500, paddingTop: "4px" }}>{item.year}</div>
                <div style={{ paddingLeft: "48px", borderLeft: "1px solid rgba(26,22,18,0.1)" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, color: "var(--ink)", marginBottom: "10px" }}>{item.title}</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.9rem" }}>{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
