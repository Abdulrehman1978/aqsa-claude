"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";

interface Artwork {
  src: string;
  title: string;
  tag: string;
  desc: string;
  year: string;
}

const artworks: Artwork[] = [
  { src: "/images/art-1.png", title: "Paper Quilling Mandala", tag: "Paper Craft", desc: "Cream and terracotta paper coils shaped into an intricate mandala. 200+ individual pieces.", year: "2024" },
  { src: "/images/art-2.png", title: "Gestural Peony Study", tag: "Watercolor", desc: "Loose gestural watercolor on cold press paper. Blush and coral palette.", year: "2024" },
  { src: "/images/art-3.png", title: "Botanical Resin Tray", tag: "DIY Craft", desc: "Pressed botanicals suspended in crystal-clear resin. Terracotta wood frame.", year: "2024" },
  { src: "/images/art-4.png", title: "Fluid Acrylic Pour", tag: "Mixed Media", desc: "Sage green and ivory swirled acrylic pour on 60×80cm canvas.", year: "2023" },
  { src: "/images/art-5.png", title: "Macramé Wall Hanging", tag: "Fiber Art", desc: "100% natural cotton rope with dried pampas grass. Handknotted wall piece.", year: "2023" },
  { src: "/images/art-6.png", title: "Ceramic Botanical Bowl", tag: "Ceramics", desc: "Hand-pinched stoneware with botanical imprint and sage green glaze.", year: "2023" },
];

const tags = ["All", "Watercolor", "Paper Craft", "DIY Craft", "Mixed Media", "Fiber Art", "Ceramics"];

export function GalleryFiltersAndGrid() {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredArtworks = selectedTag === "All"
    ? artworks
    : artworks.filter((art) => art.tag === selectedTag);

  return (
    <>
      {/* Filter tags */}
      <section style={{
        paddingTop: "20px",
        paddingBottom: "40px",
        paddingLeft: "48px",
        paddingRight: "48px",
        borderBottom: "1px solid rgba(26,22,18,0.08)",
      }}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
          {tags.map((tag) => {
            const isActive = tag === selectedTag;
            return (
              <button
                key={tag}
                id={`filter-${tag.toLowerCase().replace(" ", "-")}`}
                onClick={() => setSelectedTag(tag)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "100px",
                  border: isActive ? "1px solid var(--rust)" : "1px solid rgba(26,22,18,0.15)",
                  background: isActive ? "var(--rust)" : "transparent",
                  color: isActive ? "var(--cream)" : "var(--muted)",
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
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "80px 48px", maxWidth: "1600px", margin: "0 auto" }}>
        <motion.div 
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "32px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((art) => (
              <motion.div
                key={art.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
