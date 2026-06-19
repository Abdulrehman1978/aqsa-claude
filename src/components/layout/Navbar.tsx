"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "14px 48px" : "28px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding 0.4s ease, background 0.4s ease",
          background: scrolled ? "rgba(245,240,232,0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(184,92,56,0.1)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.6rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: "var(--ink)",
          }}>
            Aqsa<span style={{ color: "var(--rust)" }}>.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: "40px", alignItems: "center" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`ink-line ${pathname === l.href ? "nav-active" : ""}`}
              style={{
                textDecoration: "none",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: pathname === l.href ? "var(--rust)" : "var(--ink-soft)",
                fontWeight: 500,
                transition: "color 0.3s ease",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mag-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 24px",
              border: "1px solid var(--ink)",
              borderRadius: "100px",
              textDecoration: "none",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "var(--ink)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe
            </span>
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "none", padding: "8px" }}
          aria-label="Toggle menu"
        >
          <div style={{
            display: "flex", flexDirection: "column", gap: "5px", transition: "all 0.3s ease"
          }}>
            <span style={{
              display: "block", width: "24px", height: "1px",
              background: "var(--ink)",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              transition: "transform 0.3s ease",
            }} />
            <span style={{
              display: "block", width: "24px", height: "1px",
              background: "var(--ink)",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s ease",
            }} />
            <span style={{
              display: "block", width: "24px", height: "1px",
              background: "var(--ink)",
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              transition: "transform 0.3s ease",
            }} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "var(--cream)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
        transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
      }}>
        {links.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              textDecoration: "none",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.5rem",
              fontWeight: 400,
              color: pathname === l.href ? "var(--rust)" : "var(--ink)",
              letterSpacing: "0.05em",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
