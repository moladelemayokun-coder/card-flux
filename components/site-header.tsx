
"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
} from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "About", href: "#about" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">C</span>
          <span>CARD <strong>FLUX</strong></span>
        </Link>

        <nav className="desktop-nav">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-button"
            aria-label="Toggle theme"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <Link href="/login" className="login-link">
            Log in
          </Link>

          <Link href="/register" className="header-cta">
            Get Started <ArrowUpRight size={16} />
          </Link>

          <button
            className="mobile-menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-nav">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/login" onClick={() => setMenuOpen(false)}>
            Log in
          </Link>
          <Link href="/register" onClick={() => setMenuOpen(false)}>
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}
