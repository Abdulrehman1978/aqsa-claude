"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Videos", href: "/videos" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif text-3xl font-bold tracking-tight text-charcoal">
              Aqsa.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-sage-600 border-b-2 border-sage-500"
                    : "text-charcoal/70 hover:text-charcoal hover:border-b-2 hover:border-sage-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-charcoal/70 hover:text-charcoal hover:bg-sage-50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background"
          >
            <div className="pt-2 pb-3 space-y-1 sm:px-3 border-t border-sage-100">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    pathname === link.href
                      ? "bg-sage-50 border-sage-500 text-sage-700"
                      : "border-transparent text-charcoal/70 hover:bg-sage-50 hover:border-sage-300 hover:text-charcoal"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
