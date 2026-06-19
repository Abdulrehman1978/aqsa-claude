import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Aqsa Art website.",
};

export default function PrivacyPage() {
  return (
    <section style={{ paddingTop: "160px", paddingBottom: "120px", paddingLeft: "48px", paddingRight: "48px", maxWidth: "760px", margin: "0 auto" }}>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, marginBottom: "48px", color: "var(--ink)" }}>Privacy Policy</h1>
      <div style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.95rem" }}>
        <p style={{ marginBottom: "20px" }}>This website does not collect personal data beyond what you voluntarily submit via the contact form. No third-party tracking cookies are used beyond Google Analytics (anonymized).</p>
        <p style={{ marginBottom: "20px" }}>Any email addresses submitted via the newsletter form are stored securely and will only be used to send creative newsletters. You may unsubscribe at any time.</p>
        <p style={{ marginBottom: "20px" }}>For questions, contact: hello@aqsaart.com</p>
        <p>Last updated: June 2024</p>
      </div>
      <Link href="/" style={{ display: "inline-block", marginTop: "40px", color: "var(--rust)", textDecoration: "none", fontSize: "0.85rem" }}>← Back to Home</Link>
    </section>
  );
}
