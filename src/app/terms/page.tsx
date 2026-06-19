import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <section style={{ paddingTop: "160px", paddingBottom: "120px", paddingLeft: "48px", paddingRight: "48px", maxWidth: "760px", margin: "0 auto" }}>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, marginBottom: "48px", color: "var(--ink)" }}>Terms of Use</h1>
      <div style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.95rem" }}>
        <p style={{ marginBottom: "20px" }}>All artwork and content on this site is © Aqsa Art. You may not reproduce, distribute, or use any images or content for commercial purposes without written permission.</p>
        <p style={{ marginBottom: "20px" }}>Tutorial content is provided for personal, non-commercial use. You are welcome to share links to tutorials but may not re-upload the original videos.</p>
        <p>For licensing enquiries, contact: hello@aqsaart.com</p>
      </div>
      <Link href="/" style={{ display: "inline-block", marginTop: "40px", color: "var(--rust)", textDecoration: "none", fontSize: "0.85rem" }}>← Back to Home</Link>
    </section>
  );
}
