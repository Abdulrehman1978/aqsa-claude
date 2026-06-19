import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Aqsa Art — Paintings, Crafts & DIY Tutorials",
    template: "%s | Aqsa Art",
  },
  description:
    "Explore Aqsa's world of watercolor paintings, paper crafts, and DIY art tutorials. Watch on YouTube, browse the gallery, and get inspired.",
  keywords: ["art", "watercolor paintings", "DIY crafts", "paper art", "art tutorials", "Aqsa Art"],
  authors: [{ name: "Aqsa" }],
  creator: "Aqsa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aqsaart.com",
    siteName: "Aqsa Art",
    title: "Aqsa Art — Paintings, Crafts & DIY Tutorials",
    description: "Explore Aqsa's world of watercolor paintings, paper crafts, and DIY art tutorials.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqsa Art — Paintings, Crafts & DIY Tutorials",
    description: "Explore Aqsa's world of watercolor paintings, paper crafts, and DIY art tutorials.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://aqsaart.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="grain antialiased">
        <CustomCursor />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
