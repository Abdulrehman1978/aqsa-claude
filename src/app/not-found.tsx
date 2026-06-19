import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "48px",
      background: "var(--cream)",
    }}>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "14rem",
        fontWeight: 300,
        color: "var(--rust)",
        opacity: 0.12,
        lineHeight: 1,
        position: "absolute",
        userSelect: "none",
      }}>404</div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <p className="tag-pill" style={{ marginBottom: "20px", display: "inline-block" }}>Lost?</p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 300,
          color: "var(--ink)",
          lineHeight: 1.15,
          marginBottom: "20px",
        }}>
          This page wandered off.
        </h1>
        <p style={{ color: "var(--muted)", maxWidth: "380px", lineHeight: 1.8, marginBottom: "40px", fontSize: "1rem" }}>
          Even blank canvas has its place — but this one should probably have something on it. Let&apos;s get you back to where the art is.
        </p>
        <Link
          href="/"
          className="mag-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
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
          <span>Back to Home →</span>
        </Link>
      </div>
    </div>
  );
}
