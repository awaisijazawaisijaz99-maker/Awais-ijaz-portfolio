
"use client";

import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="hero-nav">
        {/* Logo */}
        <div className="nav-logo">
          <h1>
            Port<span style={{ color: "#13BDF2" }}>folio</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav
          id="main-navigation"
          className={`nav-links ${menuOpen ? "open" : ""}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${link.active ? "active" : ""}`}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile CV Button */}
          <a
            href="/Awais-ijaz-ca.pdf"
            download="Awais-ijaz-ca.pdf"
            className="download-btn mobile-cv"
            onClick={closeMenu}
          >
            Download CV

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 10.5L12 15m0 0l4.5-4.5M12 15V3"
              />
            </svg>
          </a>
        </nav>

        {/* Header Actions */}
        <div className="nav-actions">

          {/* Theme Toggle */}
          <div className="theme-toggle">
            <span className="toggle-circle" />
          </div>

          {/* Desktop CV Button */}
          {/* Desktop CV Button */}
          <a
            href="/Awais-ijaz-ca.pdf"
            download="Awais-ijaz-ca.pdf"
            className="download-btn desktop-cv"
          >
            Download CV

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 10.5L12 15m0 0l4.5-4.5M12 15V3"
              />
            </svg>
          </a>

          {/* Mobile Toggle */}
          <button
            className={`mobile-toggle ${menuOpen ? "active" : ""}`}
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <style jsx>{`

        /* ================= HEADER ================= */

        .hero-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;

          padding: 0.9rem clamp(1.25rem, 7vw, 7.5rem);
          box-sizing: border-box;

          background: #03141f;
          border-bottom: 1px solid rgba(148, 163, 184, 0.14);

          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        /* ================= LOGO ================= */

        .nav-logo {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          flex-shrink: 0;
        }

        /* ================= DESKTOP LINKS ================= */

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          cursor: pointer;
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-link.active,
        .nav-link:hover {
          color: #13BDF2;
        }

        /* ================= ACTIONS ================= */

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        /* Theme Toggle */

        .theme-toggle {
          width: 44px;
          height: 24px;
          background-color: #004d66;
          border-radius: 20px;

          display: flex;
          align-items: center;
          padding: 2px;

          cursor: pointer;
          flex-shrink: 0;
        }

        .toggle-circle {
          width: 20px;
          height: 20px;
          background-color: #13BDF2;
          border-radius: 50%;
        }

        /* CV Button */

        .download-btn {
          cursor: pointer;

          background: linear-gradient(
            135deg,
            #e63946,
            #d90429
          );

          color: #ffffff;
          padding: 0.55rem 1.1rem;
          border-radius: 8px;

          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;

          display: flex;
          align-items: center;
          gap: 0.5rem;

          white-space: nowrap;
          transition: opacity 0.2s, transform 0.2s;
        }

        .download-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .download-btn svg {
          width: 15px;
          height: 15px;
        }

        .mobile-cv,
        .mobile-toggle {
          display: none;
        }

        /* ================= TABLET + MOBILE ================= */

        @media (max-width: 900px) {

          .hero-nav {
            padding: 0.85rem 5%;
          }

          /* Mobile Dropdown */

          .nav-links {
            display: none;

            position: absolute;
            top: 100%;
            left: 0;
            right: 0;

            width: 100%;
            max-height: calc(100vh - 70px);

            overflow-y: auto;
            overscroll-behavior: contain;

            box-sizing: border-box;

            flex-direction: column;
            align-items: stretch;
            gap: 0;

            padding: 15px 5% 20px;
            margin: 0;

            background: #03141f;

            border: none;
            border-top: 1px solid rgba(19, 189, 242, 0.2);
            border-radius: 0;

            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);

            z-index: 1001;
          }

          .nav-links.open {
            display: flex;
          }

          /* Menu Items */

          .nav-link {
            display: block;
            width: 100%;

            box-sizing: border-box;
            padding: 15px 14px;

            border-radius: 8px;
            font-size: 1rem;
          }

          .nav-link:hover,
          .nav-link.active {
            background: rgba(19, 189, 242, 0.1);
            color: #13BDF2;
          }

          /* CV Buttons */

          .desktop-cv {
            display: none;
          }

          .mobile-cv {
            display: inline-flex;
            align-self: flex-start;
            margin: 12px 8px 5px;
          }

          /* Hamburger Button */

          .mobile-toggle {
            width: 42px;
            height: 42px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5px;

            background: rgba(19, 189, 242, 0.1);
            border: 1px solid rgba(19, 189, 242, 0.35);
            border-radius: 9px;

            cursor: pointer;
          }

          .mobile-toggle span {
            width: 20px;
            height: 2px;

            background: #13BDF2;
            border-radius: 5px;

            transition: transform 0.25s, opacity 0.25s;
          }

          /* Hamburger to Cross Animation */

          .mobile-toggle.active span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
          }

          .mobile-toggle.active span:nth-child(2) {
            opacity: 0;
          }

          .mobile-toggle.active span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 480px) {

          .hero-nav {
            padding: 0.75rem 1rem;
          }

          .nav-logo {
            font-size: 1.4rem;
          }

          .nav-actions {
            gap: 0.8rem;
          }

          .theme-toggle {
            width: 40px;
            height: 22px;
          }

          .toggle-circle {
            width: 18px;
            height: 18px;
          }

          .nav-links {
            padding: 12px 1rem 20px;
            max-height: calc(100dvh - 65px);
          }
        }

      `}</style>
    </>
  );
}
