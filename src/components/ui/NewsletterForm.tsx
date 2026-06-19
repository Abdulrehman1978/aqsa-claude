"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("success");
  };

  return (
    <div style={{ maxWidth: "480px", margin: "0 auto", minHeight: "60px" }}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              color: "var(--sage)",
              fontSize: "0.95rem",
              fontWeight: 400,
              padding: "12px 24px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>✓</span>
            <span>Welcome! Check your inbox soon for studio updates.</span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              display: "flex",
              gap: "12px",
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            aria-label="Email newsletter signup"
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              id="newsletter-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "submitting"}
              style={{
                flex: 1,
                minWidth: "220px",
                padding: "16px 24px",
                borderRadius: "100px",
                border: "1px solid rgba(26,22,18,0.18)",
                background: "var(--cream)",
                fontSize: "0.9rem",
                color: "var(--ink)",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="mag-btn"
              style={{
                padding: "16px 32px",
                background: status === "submitting" ? "var(--muted)" : "var(--rust)",
                color: "var(--cream)",
                border: "1px solid " + (status === "submitting" ? "var(--muted)" : "var(--rust)"),
                borderRadius: "100px",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                cursor: "none",
                fontFamily: "inherit",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              {status === "submitting" ? (
                <>
                  <span className="animate-spin" style={{ display: "inline-block", width: "10px", height: "10px", border: "2px solid var(--cream)", borderTopColor: "transparent", borderRadius: "50%" }} />
                  <span>Subscribing…</span>
                </>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
