import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Collaborate",
  description: "Get in touch with Aqsa for brand collaborations, questions, or just to say hello. Based in [City], open to creative partnerships worldwide.",
};

export default function ContactPage() {
  return (
    <>
      <section style={{ paddingTop: "160px", paddingBottom: "120px", paddingLeft: "48px", paddingRight: "48px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "start" }} className="grid-cols-1 md:grid-cols-2">
          {/* Left */}
          <Reveal direction="left">
            <p className="tag-pill" style={{ marginBottom: "20px", display: "inline-block" }}>Let&apos;s Talk</p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--ink)",
              marginBottom: "28px",
            }}>
              I&apos;d love to<br />
              <em style={{ color: "var(--rust)" }}>hear from you.</em>
            </h1>
            <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "48px" }}>
              Whether you&apos;re a fellow artist, a brand looking to collaborate, or someone who simply wants to share what you made — my inbox is always open.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {[
                { label: "Email", value: "hello@aqsaart.com", href: "mailto:hello@aqsaart.com" },
                { label: "YouTube", value: "@AqsaArt", href: "https://youtube.com" },
                { label: "Instagram", value: "@aqsa.art", href: "https://instagram.com" },
              ].map((item) => (
                <div key={item.label} style={{ borderTop: "1px solid rgba(26,22,18,0.08)", paddingTop: "24px" }}>
                  <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "6px" }}>{item.label}</div>
                  <a href={item.href} className="ink-line" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "var(--ink)", textDecoration: "none" }}>
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — Form */}
          <Reveal direction="right">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
