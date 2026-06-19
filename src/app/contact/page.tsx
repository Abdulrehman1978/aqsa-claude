import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";

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
            <form
              action="#"
              style={{
                background: "var(--cream-dark)",
                borderRadius: "24px",
                padding: "48px",
                border: "1px solid rgba(26,22,18,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
              aria-label="Contact form"
            >
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 400, color: "var(--ink)", marginBottom: "8px" }}>
                Send a message
              </h2>

              {[
                { id: "contact-name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
                { id: "contact-email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>{f.label}</label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      borderRadius: "12px",
                      border: "1px solid rgba(26,22,18,0.15)",
                      background: "var(--cream)",
                      fontSize: "0.9rem",
                      color: "var(--ink)",
                      outline: "none",
                      fontFamily: "inherit",
                      transition: "border-color 0.3s ease",
                    }}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="contact-subject" style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>Subject</label>
                <select
                  id="contact-subject"
                  defaultValue=""
                  required
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: "12px",
                    border: "1px solid rgba(26,22,18,0.15)",
                    background: "var(--cream)",
                    fontSize: "0.9rem",
                    color: "var(--ink)",
                    outline: "none",
                    fontFamily: "inherit",
                    cursor: "none",
                    appearance: "none",
                  }}
                >
                  <option value="" disabled>Select a subject…</option>
                  <option value="collab">Brand Collaboration</option>
                  <option value="question">Art Question</option>
                  <option value="media">Media / Press</option>
                  <option value="other">Just Saying Hello</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me what's on your mind…"
                  required
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: "12px",
                    border: "1px solid rgba(26,22,18,0.15)",
                    background: "var(--cream)",
                    fontSize: "0.9rem",
                    color: "var(--ink)",
                    outline: "none",
                    fontFamily: "inherit",
                    resize: "vertical",
                    minHeight: "120px",
                  }}
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
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
                  width: "100%",
                }}
              >
                <span>Send Message →</span>
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
