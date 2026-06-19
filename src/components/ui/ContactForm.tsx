"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      return;
    }
    
    setStatus("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus("success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div style={{ position: "relative", minHeight: "520px" }}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              background: "var(--cream-dark)",
              borderRadius: "24px",
              padding: "60px 48px",
              border: "1px solid rgba(26,22,18,0.06)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "24px",
              minHeight: "520px",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "rgba(122, 158, 126, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--sage)",
                fontSize: "2rem",
                marginBottom: "8px",
              }}
            >
              ✓
            </motion.div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem", fontWeight: 400, color: "var(--ink)" }}>
              Message Sent!
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.95rem", maxWidth: "340px" }}>
              Thank you, {formState.name}. Your message has reached my studio. I usually respond within 24 to 48 hours.
            </p>
            <button
              onClick={() => {
                setFormState({ name: "", email: "", subject: "", message: "" });
                setStatus("idle");
              }}
              className="mag-btn"
              style={{
                marginTop: "16px",
                padding: "12px 28px",
                background: "transparent",
                color: "var(--rust)",
                border: "1px solid var(--rust)",
                borderRadius: "100px",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                cursor: "none",
                fontFamily: "inherit",
              }}
            >
              <span>Send Another Message</span>
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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

            <div>
              <label htmlFor="contact-name" style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>Your Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                value={formState.name}
                onChange={handleChange}
                required
                disabled={status === "submitting"}
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

            <div>
              <label htmlFor="contact-email" style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>Email Address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={formState.email}
                onChange={handleChange}
                required
                disabled={status === "submitting"}
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

            <div>
              <label htmlFor="contact-subject" style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>Subject</label>
              <div style={{ position: "relative" }}>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
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
                <div style={{
                  position: "absolute",
                  right: "18px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "var(--muted)",
                  fontSize: "0.8rem"
                }}>
                  ▼
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me what's on your mind…"
                value={formState.message}
                onChange={handleChange}
                required
                disabled={status === "submitting"}
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
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              {status === "submitting" ? (
                <>
                  <span className="animate-spin" style={{ display: "inline-block", width: "12px", height: "12px", border: "2px solid var(--cream)", borderTopColor: "transparent", borderRadius: "50%" }} />
                  <span>Sending…</span>
                </>
              ) : (
                <span>Send Message →</span>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
