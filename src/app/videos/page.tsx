import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Videos",
  description: "Watch Aqsa's complete collection of watercolor painting, paper craft, and DIY art tutorials on YouTube. Organized by series and skill level.",
};

const playlists = [
  {
    id: "beginners-watercolor",
    title: "Beginner Watercolor",
    desc: "Perfect for first-timers. Learn color mixing, brush control, and your first florals.",
    count: "12 videos",
    videos: [
      { id: "jNQXAC9IVRw", title: "Your First Watercolor Wash", duration: "12:34" },
      { id: "jNQXAC9IVRw", title: "Painting Simple Peonies", duration: "18:22" },
      { id: "jNQXAC9IVRw", title: "Wet-on-Wet Backgrounds", duration: "14:08" },
    ],
  },
  {
    id: "paper-crafts",
    title: "Paper Crafts",
    desc: "Quilling, origami, collage and everything in between. No experience needed.",
    count: "9 videos",
    videos: [
      { id: "jNQXAC9IVRw", title: "Intro to Paper Quilling", duration: "20:15" },
      { id: "jNQXAC9IVRw", title: "DIY Quilled Greeting Cards", duration: "15:40" },
      { id: "jNQXAC9IVRw", title: "Botanical Collage Art", duration: "22:00" },
    ],
  },
  {
    id: "mixed-media",
    title: "Mixed Media",
    desc: "When one medium isn't enough. Combining watercolor, ink, acrylic, and found objects.",
    count: "8 videos",
    videos: [
      { id: "jNQXAC9IVRw", title: "Ink & Watercolor Portraits", duration: "25:10" },
      { id: "jNQXAC9IVRw", title: "Acrylic Pour on Watercolor", duration: "16:55" },
      { id: "jNQXAC9IVRw", title: "Resin Art for Beginners", duration: "30:00" },
    ],
  },
];

export default function VideosPage() {
  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: "160px", paddingBottom: "80px", paddingLeft: "48px", paddingRight: "48px", background: "var(--ink)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <Reveal>
            <p className="tag-pill" style={{ marginBottom: "20px", display: "inline-block", background: "rgba(184,92,56,0.2)", borderColor: "rgba(184,92,56,0.3)", color: "var(--rust-light)" }}>Tutorials</p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--cream)",
              marginBottom: "24px",
            }}>
              Learn to Create
            </h1>
            <p style={{ color: "rgba(245,240,232,0.55)", fontSize: "1.05rem", maxWidth: "480px", lineHeight: 1.8, marginBottom: "40px" }}>
              Step-by-step tutorials for all skill levels, organized by series so you can go deep.
            </p>
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
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                border: "1px solid var(--rust)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe on YouTube
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Playlists */}
      <section style={{ padding: "100px 48px", maxWidth: "1400px", margin: "0 auto" }}>
        {playlists.map((playlist, pi) => (
          <div key={playlist.id} style={{ marginBottom: "100px" }}>
            <Reveal>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span className="tag-pill" style={{ marginBottom: "12px", display: "inline-block" }}>{playlist.count}</span>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 300, color: "var(--ink)", marginBottom: "8px" }}>
                    {playlist.title}
                  </h2>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{playlist.desc}</p>
                </div>
              </div>
            </Reveal>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="grid-cols-1 md:grid-cols-3">
              {playlist.videos.map((video, vi) => (
                <Reveal key={vi} delay={vi * 0.1} direction="scale">
                  <div className="card-lift" style={{ borderRadius: "16px", overflow: "hidden", background: "var(--cream-dark)", border: "1px solid rgba(26,22,18,0.06)" }}>
                    {/* Thumbnail */}
                    <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--ink-soft)" }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                      />
                    </div>
                    <div style={{ padding: "20px 24px" }}>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 400, color: "var(--ink)", marginBottom: "8px" }}>
                        {video.title}
                      </h3>
                      <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{video.duration}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {pi < playlists.length - 1 && (
              <div style={{ borderBottom: "1px solid rgba(26,22,18,0.08)", marginTop: "80px" }} />
            )}
          </div>
        ))}
      </section>
    </>
  );
}
