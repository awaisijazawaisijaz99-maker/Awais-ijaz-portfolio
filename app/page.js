"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// ======== HERO SOCIAL MEDIA LINKS ========
const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1Jn7pC6FDD/",
    path: "M13.5 8.5V6.8c0-.8.5-1 1-1h2.5V2h-3.3C10.8 2 10 4 10 6.4v2.1H7v3.9h3V22h4.2v-9.6h3.1l.5-3.9h-3.6Z",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/awais_ijaz99?exln=cTZzdzVhdWNwaWRr",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/awais-ijaz-52217b38b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    path: "M5.2 3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.7v1.6h.1a4.1 4.1 0 0 1 3.7-2c4 0 4.7 2.6 4.7 6V21h-3.8v-5.7c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.5V9Z",
  },
];

// ======== PORTFOLIO STATISTICS DATA ========
const stats = [
  {
    value: "1.5+",
    target: 1.5,
    decimal: true,
    label: "Years of experience",
  },
  {
    value: "20+",
    target: 20,
    label: "Projects completed",
  },
  {
    value: "6+",
    target: 6,
    label: "Technologies mastered",
  },
  {
    value: "15+",
    target: 15,
    label: "Satisfied Clients",
  },
];

// ======== ANIMATED STATISTICS COUNTER ========
function Counter({ target, decimal = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationId;
    const duration = 2000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const current = target * progress;

      setCount(
        decimal
          ? Number(current.toFixed(1))
          : Math.floor(current)
      );

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [target, decimal]);

  return <>{decimal ? count.toFixed(1) : count}+</>;
}

// ======== REUSABLE STATS GRID COMPONENT ========
function Stats() {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <h3>
            <Counter
              target={stat.target}
              decimal={stat.decimal}
            />
          </h3>

          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

// ======== WHY HIRE ME FEATURES DATA ========
const whyFeatures = [
  {
    title: "Pixel-perfect, responsive UI",
    text: "Interfaces that match the design and look sharp on every screen, from small phones to large desktops.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" />
      </>
    ),
  },
  {
    title: "Performance first",
    text: "Lightweight code and optimised Next.js builds, so your website loads fast and feels instant.",
    icon: (
      <>
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </>
    ),
  },
  {
    title: "Modern tech stack",
    text: "React.js, Next.js and Tailwind CSS, with clean, reusable and easy-to-maintain components.",
    icon: (
      <>
        <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
      </>
    ),
  },
  {
    title: "Smooth interactions",
    text: "Thoughtful hover states and transitions that make the product feel polished and alive.",
    icon: (
      <>
        <path d="M5 3l14 7-6 2-2 6L5 3z" />
      </>
    ),
  },
  {
    title: "Clear communication",
    text: "Regular updates, honest timelines and quick replies, so you always know where the project stands.",
    icon: (
      <>
        <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z" />
      </>
    ),
  },
  {
    title: "Reliable delivery",
    text: "I take ownership of the work and pay attention to the details, so it is delivered on time.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </>
    ),
  },
];

// ======== TECHNOLOGIES USED IN THE SHOWCASE ========
const techStack = ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"];

// ======== WHY HIRE ME SECTION ========
function WhyHireMe() {
  return (
    <section className="why-section" id="why-hire-me">
      <div className="why-inner">
        <div className="why-header">
          <span className="why-eyebrow">Why Hire Me</span>
          <h2 className="why-title">
            Let&apos;s build something that <span>stands out</span>
          </h2>
          <p className="why-subtitle">
            I combine clean design sense with solid engineering, so your website
            looks great, runs fast and is easy to grow.
          </p>
        </div>

        <div className="why-grid">
          {whyFeatures.map(({ title, text, icon }, index) => (
            <article className="why-card" key={title}>
              <span className="why-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="why-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {icon}
                </svg>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="why-stack">
          <p className="why-stack-label">Tech I work with</p>
          <ul className="why-chips">
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="why-cta">
          <div>
            <h3>Have a project in mind?</h3>
            <p>
              Let&apos;s turn your idea into a fast, polished and fully responsive
              website. I&apos;d love to hear about it.
            </p>
          </div>
          <div className="why-cta-actions">
            <a href="/contact" className="why-btn why-btn-primary">
              Hire Me
            </a>
            <a href="/Awais-ijaz-ca.pdf" download="Awais-ijaz-ca.pdf" className="why-btn why-btn-outline">
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* ======== WHY HIRE ME SECTION STYLES ======== */}
      <style jsx>{`
        .why-section {
          position: relative;
          width: 100%;
          box-sizing: border-box;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background:
            radial-gradient(ellipse at 88% 8%, rgba(0, 137, 181, 0.18), transparent 40%),
            radial-gradient(ellipse at 8% 92%, rgba(0, 107, 153, 0.22), transparent 38%),
            linear-gradient(180deg, #03131f 0%, #04192a 55%, #03131f 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: clamp(3.5rem, 9vh, 6.5rem) clamp(1.25rem, 7vw, 7.5rem);
        }

        .why-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: clamp(2rem, 5vh, 3.25rem);
        }

        .why-header {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .why-eyebrow {
          display: inline-block;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(0, 192, 248, 0.35);
          background: rgba(0, 192, 248, 0.08);
          color: #00c0f8;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .why-title {
          margin: 1.1rem 0 0.9rem;
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.5px;
          color: #ffffff;
        }

        .why-title span {
          color: #00c0f8;
        }

        .why-subtitle {
          margin: 0;
          font-size: 1rem;
          line-height: 1.7;
          color: #94a3b8;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .why-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          padding: 1.75rem;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: linear-gradient(160deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06));
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .why-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 100% 0%, rgba(0, 192, 248, 0.22), transparent 55%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .why-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0, 192, 248, 0.45);
          box-shadow: 0 18px 40px -18px rgba(0, 192, 248, 0.35);
        }

        .why-card:hover::before {
          opacity: 1;
        }

        .why-index {
          position: absolute;
          top: 1.25rem;
          right: 1.5rem;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.3);
        }

        .why-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          margin-bottom: 1.25rem;
          border-radius: 14px;
          border: 1px solid rgba(0, 192, 248, 0.3);
          background: rgba(0, 192, 248, 0.1);
          color: #00c0f8;
        }

        .why-icon svg {
          width: 24px;
          height: 24px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .why-card h3 {
          position: relative;
          margin: 0 0 0.55rem;
          font-size: 1.12rem;
          font-weight: 700;
          color: #ffffff;
        }

        .why-card p {
          position: relative;
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.65;
          color: #c3d0dd;
        }

        .why-stack {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1rem 1.5rem;
          padding: 1.4rem 1.5rem;
          cursor: pointer;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.08);
        }

        .why-stack-label {
          margin: 0;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #94a3b8;
        }

        .why-chips {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          margin: 0;
          padding: 0;
        }

        .why-chips li {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 1rem;
          cursor: pointer;
          border-radius: 999px;
          border: 1px solid rgba(0, 192, 248, 0.45);
          background: rgba(0, 192, 248, 0.14);
          color: #e2e8f0;
          font-size: 0.85rem;
          font-weight: 500;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .why-chips li:hover {
          transform: translateY(-2px);
          background: rgba(0, 192, 248, 0.26);
        }

        .why-chips li::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00c0f8;
        }

        .why-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem 2rem;
          cursor: pointer;
          padding: clamp(1.75rem, 4vw, 2.75rem);
          border-radius: 24px;
          border: 1px solid rgba(0, 192, 248, 0.45);
          background:
            radial-gradient(circle at 0% 0%, rgba(0, 192, 248, 0.3), transparent 55%),
            linear-gradient(120deg, rgba(0, 192, 248, 0.2), rgba(0, 192, 248, 0.07));
        }

        .why-cta h3 {
          margin: 0 0 0.4rem;
          font-size: clamp(1.4rem, 2.4vw, 1.9rem);
          font-weight: 800;
          color: #ffffff;
        }

        .why-cta p {
          margin: 0;
          max-width: 520px;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #d3deea;
        }

        .why-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        .why-btn {
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 1.6rem;
          border-radius: 8px;
          font-size: 0.92rem;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s ease, box-shadow 0.3s ease, background-color 0.2s ease, color 0.2s ease;
        }

        .why-btn-primary {
          background: #13bdf2;
          border: 1.5px solid #13bdf2;
          color: #06131d;
        }

        .why-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 18px rgba(19, 189, 242, 0.5);
        }

        .why-btn-outline {
          background: transparent;
          border: 1.5px solid #13bdf2;
          color: #13bdf2;
        }

        .why-btn-outline:hover {
          transform: translateY(-2px);
          background: #13bdf2;
          color: #06131d;
        }

        @media (max-width: 1000px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .why-section {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .why-grid {
            grid-template-columns: 1fr;
          }
          .why-cta {
            flex-direction: column;
            align-items: flex-start;
          }
          .why-cta-actions {
            width: 100%;
          }
          .why-btn {
            flex: 1;
          }
        }
      `}</style>
    </section>
  );
}


// ======== TECHNOLOGY AND SERVICES SHOWCASE SECTION ========
function TechShowcase() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Modern, responsive layouts designed for a smooth experience on every device.",
      icon: "design",
    },
    {
      title: "React Development",
      description: "Interactive components, reusable UI, and efficient state management.",
      icon: "react",
    },
    {
      title: "Next.js Apps",
      description: "Fast, performance-focused web applications with modern routing.",
      icon: "next",
    },
    {
      title: "Tailwind Styling",
      description: "Clean, pixel-perfect interfaces with consistent responsive styling.",
      icon: "tailwind",
    },
  ];

  return (
    <section className="tech-showcase" id="services">
      <div className="tech-showcase-inner">
        <div className="tech-profile-wrap">
          <div className="tech-profile-card">
            <div className="tech-monogram-wrap"><div className="tech-monogram">AWAIS</div></div>
            <p className="tech-profile-name">Awais Ijaz</p>
            <p className="tech-profile-role">Frontend Developer</p>
            <span className="tech-profile-divider" />
            <div className="tech-badges">
              <span><b className="react-mark">⚛</b> React</span>
              <span><b className="next-mark">N</b> Next.js</span>
              <span><b className="tailwind-mark">≋</b> Tailwind</span>
            </div>
          </div>
          <span className="tech-profile-glow" aria-hidden="true" />
        </div>

        <div className="tech-content">
          <span className="tech-eyebrow">What I do</span>
          <h2 className="tech-heading">
            Frontend Developer
            <span>Extraordinaire</span>
          </h2>
          <p className="tech-intro">
            Passionate about crafting modern, responsive web experiences using
            React.js, Next.js, and Tailwind CSS. I build clean, pixel-perfect
            interfaces that feel intuitive on every screen.
          </p>

          <div className="tech-service-grid">
            {services.map((service) => (
              <article className="tech-service-card" key={service.title}>
                <div className={`tech-service-icon ${service.icon}`} aria-hidden="true">
                  {service.icon === "design" && (
                    <svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 0 18h1.2a2 2 0 0 0 1.4-3.4 1.6 1.6 0 0 1 1.1-2.7H18a3 3 0 0 0 3-3c0-5-4-8.9-9-8.9Z"/><circle cx="7.5" cy="10" r="1"/><circle cx="10" cy="6.8" r="1"/><circle cx="14.5" cy="7.2" r="1"/></svg>
                  )}
                  {service.icon === "react" && (
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/></svg>
                  )}
                  {service.icon === "next" && <span className="next-logo">N</span>}
                  {service.icon === "tailwind" && <span className="tailwind-logo">≋</span>}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ======== TECHNOLOGY SHOWCASE SECTION STYLES ======== */}
      <style jsx>{`
        .tech-showcase {
          width: 100%;
          box-sizing: border-box;
          padding: clamp(4rem, 8vw, 7rem) clamp(1.25rem, 7vw, 7.5rem);
          color: #fff;
          background:
            radial-gradient(ellipse at 12% 50%, rgba(0, 137, 181, 0.12), transparent 38%),
            linear-gradient(135deg, #03141f 0%, #061b2a 58%, #03131f 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .tech-showcase-inner {
          max-width: 1250px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(260px, 0.85fr) minmax(0, 1.15fr);
          align-items: center;
          gap: clamp(2.5rem, 7vw, 6.5rem);
        }
        .tech-profile-wrap {
          position: relative;
          isolation: isolate;
          perspective: 900px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem 0;
        }
        .tech-profile-glow {
          position: absolute;
          z-index: 0;
          width: 75%;
          height: 65%;
          border-radius: 50%;
          background: rgba(19, 189, 242, 0.22);
          filter: blur(65px);
          pointer-events: none;
        }
        .tech-profile-card {
          position: relative;
          z-index: 1;
          width: min(100%, 360px);
          min-height: 330px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          cursor: pointer;
          border-radius: 25px;
          border: 1px solid rgba(19, 189, 242, 0.4);
          background: linear-gradient(145deg, rgba(34, 74, 100, 0.95), rgba(20, 52, 74, 0.97));
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.3), inset 0 1px rgba(255, 255, 255, 0.06);
          text-align: center;
          transform-style: preserve-3d;
          transition: transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms ease, border-color 350ms ease;
        }
        .tech-profile-card::after {
          content: "";
          position: absolute;
          z-index: -1;
          left: 10%;
          right: 10%;
          bottom: -35px;
          height: 80px;
          border-radius: 50%;
          background: #13bdf2;
          filter: blur(35px);
          opacity: 0;
          transition: opacity 400ms ease;
          pointer-events: none;
        }
        .tech-profile-wrap:hover .tech-profile-card {
          transform: translateY(-8px) scale(1.035);
          border-color: rgba(19, 189, 242, 0.8);
          box-shadow: 0 22px 40px rgba(0, 0, 0, 0.28), 0 12px 28px rgba(19, 189, 242, 0.16);
        }
        .tech-profile-wrap:hover .tech-profile-card::after { opacity: 0.9; }
        .tech-monogram-wrap {
          display: flex;
          justify-content: center;
          perspective: 500px;
          margin-bottom: 1.45rem;
        }
        .tech-monogram {
          display: grid;
          place-items: center;
          width: 118px;
          height: 52px;
          margin-bottom: 0;
          border-radius: 999px;
          background: linear-gradient(110deg, #13bdf2, #087da8);
          color: #03141f;
          font-size: 1.45rem;
          font-weight: 850;
          letter-spacing: 0.06em;
          box-shadow: 0 8px 25px rgba(19, 189, 242, 0.2);
          transform: perspective(500px) rotateX(18deg) rotateZ(-3deg);
          transform-origin: center;
          transition: transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 400ms ease, background 400ms ease;
          animation: monogramFloat 3s ease-in-out infinite;
        }
        .tech-profile-wrap:hover .tech-monogram {
          transform: perspective(500px) rotateX(30deg) rotateZ(-5deg) translateY(-7px) scale(1.04);
          background: linear-gradient(110deg, #0c2639, #087da8);
          box-shadow: 0 12px 0 rgba(23, 34, 53, 0.08), 0 14px 25px rgba(19, 189, 242, 0.28);
          animation-play-state: paused;
        }
        @keyframes monogramFloat {
          0%, 100% { transform: perspective(500px) rotateX(18deg) rotateZ(-3deg) translateY(0); }
          50% { transform: perspective(500px) rotateX(23deg) rotateZ(-3deg) translateY(-5px); }
        }
        .tech-profile-name {
          margin: 0;
          color: #fff;
          font-size: clamp(1.35rem, 2vw, 1.8rem);
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .tech-profile-role {
          margin: 0.7rem 0 1rem;
          color: #13bdf2;
          font-size: 1rem;
          font-weight: 650;
        }
        .tech-profile-divider {
          width: 68%;
          height: 1px;
          margin-bottom: 1.5rem;
          background: rgba(148, 163, 184, 0.28);
        }
        .tech-badges {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .tech-badges > span {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.65rem 0.85rem;
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          color: #eaf4fb;
          font-size: 0.85rem;
          font-weight: 650;
          cursor: pointer;
          transition: transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease;
        }
        .tech-badges > span:hover {
          transform: translateY(-4px) scale(1.05);
          border-color: rgba(19, 189, 242, 0.75);
          box-shadow: 0 7px 18px rgba(19, 189, 242, 0.18);
        }
        .react-mark { color: #13bdf2; font-size: 1.2rem; }
        .next-mark {
          display: inline-grid;
          place-items: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #fff;
          color: #06131d;
          font-size: 0.72rem;
        }
        .tailwind-mark { color: #13bdf2; font-size: 1.45rem; line-height: 0.7; }
        .tech-content { min-width: 0; }
        .tech-eyebrow {
          display: inline-block;
          margin-bottom: 0.85rem;
          color: #13bdf2;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .tech-heading {
          margin: 0;
          color: #f8fafc;
          font-size: clamp(2.2rem, 4vw, 3.45rem);
          line-height: 1.08;
          font-weight: 850;
          letter-spacing: -0.045em;
        }
        .tech-heading span {
          display: block;
          color: #13bdf2;
        }
        .tech-intro {
          max-width: 610px;
          margin: 1.25rem 0 2rem;
          color: #aab9c8;
          font-size: 1rem;
          line-height: 1.8;
        }
        .tech-service-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }
        .tech-service-card {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-width: 0;
          cursor: pointer;
          padding: 1.35rem;
          border: 1px solid rgba(148, 163, 184, 0.3);
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.09);
          transition: transform 350ms ease, border-color 350ms ease, background 350ms ease, box-shadow 350ms ease;
        }
        .tech-service-card::after {
          content: "";
          position: absolute;
          z-index: -1;
          left: 12%;
          right: 12%;
          bottom: -45px;
          height: 75px;
          border-radius: 50%;
          background: #13bdf2;
          filter: blur(30px);
          opacity: 0;
          transition: opacity 350ms ease;
          pointer-events: none;
        }
        .tech-service-card:hover {
          transform: translateY(-7px) scale(1.025);
          border-color: rgba(19, 189, 242, 0.8);
          background: rgba(19, 189, 242, 0.16);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.16), 0 8px 24px rgba(19, 189, 242, 0.18);
        }
        .tech-service-card:hover::after { opacity: 0.85; }
        .tech-service-icon {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 34px;
          margin-bottom: 0.8rem;
          color: #13bdf2;
        }
        .tech-service-icon { transition: transform 350ms ease; }
        .tech-service-card:hover .tech-service-icon { transform: translateY(-4px) scale(1.12); }
        .tech-service-icon svg { width: 29px; height: 29px; fill: none; stroke: currentColor; stroke-width: 1.7; }
        .tech-service-icon.design svg { fill: currentColor; stroke: #06131d; }
        .next-logo {
          display: grid;
          place-items: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #13bdf2;
          color: #06131d;
          font-size: 1rem;
          font-weight: 850;
        }
        .tailwind-logo { color: #13bdf2; font-size: 2.2rem; font-weight: 800; line-height: 1; }
        .tech-service-card h3 {
          margin: 0 0 0.55rem;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 750;
        }
        .tech-service-card p {
          margin: 0;
          color: #c3d0dd;
          font-size: 0.88rem;
          line-height: 1.65;
        }
        @media (max-width: 900px) {
          .tech-showcase-inner { grid-template-columns: 1fr; gap: 2rem; }
          .tech-profile-wrap { padding: 0.5rem 0 1rem; }
          .tech-profile-card { max-width: 420px; }
          .tech-content { max-width: 720px; margin: 0 auto; }
        }
        @media (max-width: 520px) {
          .tech-showcase { padding-left: 1rem; padding-right: 1rem; }
          .tech-service-grid { grid-template-columns: 1fr; }
          .tech-profile-card { min-height: 300px; padding: 1.75rem 1rem; }
          .tech-heading { font-size: clamp(2rem, 10vw, 2.7rem); }
          .tech-intro { font-size: 0.95rem; }
        }
        :global(a), :global(button) { cursor: pointer; }
        .tech-showcase a:focus-visible, .tech-showcase button:focus-visible {
          outline: 2px solid #13bdf2;
          outline-offset: 4px;
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-service-card, .tech-profile-card, .tech-monogram, .tech-service-icon, .tech-badges > span { transition: none; }
          .tech-monogram { animation: none; }
        }
      `}</style>
    </section>
  );
}

// ======== WEBSITE FOOTER AND CONTACT LINKS SECTION ========
function Footer() {
  const year = new Date().getFullYear();

  // ======== FOOTER CONTENT: EMAIL, PHONE, SOCIAL LINKS, COPYRIGHT ========
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <h2 className="footer-title">Let&apos;s Connect</h2>
        <p className="footer-description">
          Have a project or idea in mind? Feel free to reach out. I love
          collaborating and bringing innovative ideas to life!
        </p>

        <div className="footer-contact-links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=awaisijazawaisijaz100@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-btn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            <span>Email Me</span>
          </a>

          <a href="tel:+923117664343" className="footer-contact-btn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span>Call Me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/awais-ijaz-52217b38b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-btn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LinkedIn</span>
          </a>      
        </div>

        <p className="footer-copyright">
          © {year} Awais Ijaz. All rights reserved.
        </p>
      </div>

      {/* ======== FOOTER SECTION STYLES ======== */}
      <style jsx>{`
        .site-footer {
          width: 100%;
          box-sizing: border-box;
          padding: 5.2rem 1.25rem 4.8rem;
          color: #e5e7eb;
          background: linear-gradient(180deg, #10171d 0%, #111a20 100%);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.025);
        }

        .footer-inner {
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-title {
          margin: 0 0 1.25rem;
          color: #38bdf8;
          font-size: clamp(2rem, 4vw, 2.35rem);
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .footer-description {
          max-width: 680px;
          margin: 0;
          color: #d1d5db;
          font-size: 1rem;
          line-height: 1.65;
        }

        .footer-contact-links {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem 1rem;
          margin-top: 3.1rem;
        }

        .footer-contact-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          width: 118px;
          min-height: 50px;
          box-sizing: border-box;
          padding: 0 0.55rem;
          border: 1px solid #2699c5;
          border-radius: 999px;
          background: transparent;
          color: #38bdf8;
          font-size: 0.98rem;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.25s ease, background 0.25s ease,
            border-color 0.25s ease, transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .footer-contact-btn svg {
          display: block;
          width: 21px;
          height: 21px;
          flex: 0 0 21px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.9;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .footer-contact-btn:hover {
          transform: translateY(-3px);
          border-color: #38bdf8;
          background: rgba(56, 189, 248, 0.08);
          box-shadow: 0 0 18px rgba(56, 189, 248, 0.14);
        }

        .footer-copyright {
          margin: 3.2rem 0 0;
          color: #687482;
          font-size: 0.82rem;
          line-height: 1.5;
        }

        @media (max-width: 560px) {
          .site-footer {
            padding: 4rem 1rem 3.5rem;
          }

          .footer-title {
            font-size: 2rem;
          }

          .footer-description {
            max-width: 420px;
            font-size: 0.95rem;
          }

          .footer-contact-links {
            gap: 0.8rem;
            margin-top: 2.25rem;
          }

          .footer-contact-btn {
            width: 118px;
            min-height: 48px;
            padding: 0 0.5rem;
            font-size: 0.82rem;
          }

          .footer-copyright {
            margin-top: 2.5rem;
            font-size: 0.82rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-contact-btn {
            transition: none;
          }
        }
      `}</style>
    </footer>
  );
}

// ======== MAIN PORTFOLIO HOME / HERO COMPONENT ========
export default function PortfolioHero() {
  // Page refresh par hamesha top (Hero / Home) par open ho
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <main className="hero-wrapper">
      <div className="hero-card">

        {/* ======== HERO MAIN ======== */}
        <section className="hero-main">

          {/* Left: portrait, cyan blob, white curve & glow (traced from the reference image) */}
          <div className="hero-portrait-column">
            <div className="blob-stage">
              {/* Shared clip shape: everything above the shoulders is free,
                  the bottom is cut along one big circle (as in the reference) */}
              <svg className="blob-defs" width="0" height="0" aria-hidden="true" focusable="false">
                <defs>
                  <clipPath id="portrait-clip" clipPathUnits="objectBoundingBox">
                    <rect x="0" y="0" width="1" height="0.7595" />
                    <ellipse cx="0.5269" cy="0.5418" rx="0.3017" ry="0.3605" />
                  </clipPath>
                </defs>
              </svg>

              {/* Cyan glow + cyan blob */}
              <svg className="blob-art blob-art-back" viewBox="0 0 944 790" aria-hidden="true" focusable="false">
                <defs>
                  <clipPath id="blob-clip">
                    <rect x="0" y="0" width="944" height="600" />
                    <circle cx="497.5" cy="428" r="284.8" />
                  </clipPath>
                  <filter id="blob-blur-near" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="35" />
                  </filter>
                  <filter id="blob-blur-far" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="90" />
                  </filter>
                </defs>
                <g filter="url(#blob-blur-far)" opacity="0.9">
                  <g clipPath="url(#blob-clip)">
                    <path d="M 392 126 C 326 127, 260 163, 226 240 C 203 292, 189 345, 188 392 C 187 420, 192 445, 198 470 C 206 495, 216 515, 230 540 C 238 556, 246 568, 256 582 C 300 640, 340 690, 420 740 C 520 790, 640 745, 668 672 C 678 655, 690 635, 696 612 C 706 590, 712 575, 711 560 C 708 525, 700 505, 685 480 C 668 450, 650 430, 628 395 C 610 365, 598 340, 585 310 C 565 240, 540 190, 500 160 C 460 135, 425 126, 392 126 Z" fill="#0cbcff" />
                  </g>
                  <path d="M 262.5 428 A 235 235 0 0 0 732.5 428 Z" fill="#0cbcff" />
                </g>
                <g filter="url(#blob-blur-near)" opacity="0.7">
                  <g clipPath="url(#blob-clip)">
                    <path d="M 392 126 C 326 127, 260 163, 226 240 C 203 292, 189 345, 188 392 C 187 420, 192 445, 198 470 C 206 495, 216 515, 230 540 C 238 556, 246 568, 256 582 C 300 640, 340 690, 420 740 C 520 790, 640 745, 668 672 C 678 655, 690 635, 696 612 C 706 590, 712 575, 711 560 C 708 525, 700 505, 685 480 C 668 450, 650 430, 628 395 C 610 365, 598 340, 585 310 C 565 240, 540 190, 500 160 C 460 135, 425 126, 392 126 Z" fill="#0cbcff" />
                  </g>
                  <path d="M 262.5 428 A 235 235 0 0 0 732.5 428 Z" fill="#0cbcff" />
                </g>
                <g clipPath="url(#blob-clip)">
                  <path d="M 392 126 C 326 127, 260 163, 226 240 C 203 292, 189 345, 188 392 C 187 420, 192 445, 198 470 C 206 495, 216 515, 230 540 C 238 556, 246 568, 256 582 C 300 640, 340 690, 420 740 C 520 790, 640 745, 668 672 C 678 655, 690 635, 696 612 C 706 590, 712 575, 711 560 C 708 525, 700 505, 685 480 C 668 450, 650 430, 628 395 C 610 365, 598 340, 585 310 C 565 240, 540 190, 500 160 C 460 135, 425 126, 392 126 Z" fill="#0cbcff" />
                </g>
              </svg>

              {/* Thin white curved outline (sits behind the portrait) */}
              <svg className="blob-art blob-art-outline" viewBox="0 0 944 790" aria-hidden="true" focusable="false">
                <g fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M 400 126 C 330 140, 275 190, 248 260 C 232 310, 226 365, 230 420 C 233 465, 245 500, 262 530 C 266 540, 270 548, 274 556" vectorEffect="non-scaling-stroke" />
                  <path d="M 578 300 C 600 335, 628 372, 655 420 C 690 470, 740 505, 755 550 C 765 590, 740 630, 705 662 C 660 700, 590 716, 486 720" vectorEffect="non-scaling-stroke" />
                </g>
              </svg>

              {/* Portrait */}
              <div className="blob-portrait-clip">
                <div className="blob-portrait-mask">
                  <Image
                    src="/awais-portrait-v2.png"
                    alt="Awais Ijaz"
                    width={352}
                    height={640}
                    priority
                    className="hero-portrait-img"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Typography & Buttons */}
          <div className="hero-copy">
            <p className="hero-eyebrow">Hello, I&apos;m</p>
            <h1 className="hero-title">Awais Ijaz</h1>
            <p className="hero-role">
              And I&apos;m a <span>Frontend Developer</span>
              {/* <span className="typing-cursor">|</span> */}
            </p>

            <p className="hero-description">
              I craft modern, responsive, and high-performance web experiences using React.js, Next.js, and Tailwind CSS. Passionate about clean UI, smooth interactions, and turning ideas into impactful digital experiences.
            </p>

            <ul className="hero-socials">
              {socialLinks.map(({ name, url, path }) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={name}
                    title={name}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d={path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-[36px] items-center justify-center rounded-[3px] border border-[#13bdf2] bg-[#13bdf2] px-[21px] text-[12px] font-semibold text-[#06131d] no-underline transition-all duration-300 hover:shadow-[0_0_12px_rgba(19,189,242,0.4)]"
              >
                Hire Me
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-[36px] items-center justify-center rounded-[3px] border border-[#13bdf2] bg-transparent px-[21px] text-[12px] font-semibold text-[#13bdf2] no-underline transition-all duration-300 hover:bg-[#13bdf2] hover:text-[#06131d] hover:shadow-[0_0_12px_rgba(19,189,242,0.4)]"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        {/* ======== BOTTOM STATS ======== */}
        <footer className="hero-stats">
          {stats.map(({ target, decimal, label }) => (
            <div className="hero-stat" key={label}>
              <strong>
                <Counter target={target} decimal={decimal} />
              </strong>
              <span>{label}</span>
            </div>
          ))}
        </footer>

      </div>

      {/* ======== HERO, NAVBAR, STATS AND RESPONSIVE STYLES ======== */}
      <style jsx>{`
        .hero-wrapper {
          min-height: 100vh;
          min-height: 100svh;
          width: 100%;
          background:
            radial-gradient(ellipse at 18% 45%, rgba(0, 107, 153, 0.35), transparent 35%),
            radial-gradient(ellipse at 87% 8%, rgba(0, 137, 181, 0.22), transparent 32%),
            linear-gradient(125deg, #03141f 0%, #061b2a 52%, #03131f 100%);
          display: flex;
          align-items: stretch;
          justify-content: stretch;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .hero-card {
          width: 100%;
          max-width: none;
          min-height: 100vh;
          min-height: 100svh;
          background:
            radial-gradient(ellipse at 20% 48%, rgba(0, 125, 172, 0.12), transparent 36%),
            linear-gradient(125deg, rgba(4, 19, 29, 0.2), rgba(5, 19, 29, 0.06));
          border: 0;
          border-radius: 0;
          box-shadow: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2rem clamp(1.25rem, 7vw, 7.5rem) clamp(1rem, 3vh, 2rem);
          box-sizing: border-box;
          position: relative;
        }
        /* ===== MAIN HERO SECTION ===== */
        .hero-main {
          display: flex;
          flex: 1;
          min-height: 0;
          align-items: center;
          justify-content: space-between;
          gap: clamp(2rem, 7vw, 7rem);
          padding: clamp(1rem, 3vh, 2rem) 0;
        }

        /* ===== PORTRAIT / BLOB AREA (traced from the reference image) =====
           The stage keeps the reference proportions (472 x 395). All shapes are
           SVG in the same coordinate system, so they scale together exactly. */
        .hero-portrait-column {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .blob-stage {
          position: relative;
          width: clamp(380px, min(54vw, 84vh), 800px);
          aspect-ratio: 472 / 395;
          /* Portrait framing - nudge these if your cutout is framed differently */
          --portrait-left: 26.5%;
          --portrait-top: 13.9%;
          --portrait-width: 47%;
        }

        .blob-defs {
          position: absolute;
          width: 0;
          height: 0;
        }

        .blob-art {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
          pointer-events: none;
        }

        .blob-art-back {
          z-index: 1;
        }

        .blob-art-outline {
          z-index: 2;
        }

        /* Full-stage layer clipped by the shared shape; the portrait inside
           keeps its natural proportions (no stretching or cropping). */
        .blob-portrait-clip {
          position: absolute;
          inset: 0;
          z-index: 3;
          -webkit-clip-path: url(#portrait-clip);
          clip-path: url(#portrait-clip);
        }

        .blob-portrait-mask {
          position: absolute;
          left: var(--portrait-left);
          top: var(--portrait-top);
          width: var(--portrait-width);
        }

        :global(.hero-portrait-img) {
          display: block;
          width: 100%;
          height: auto;
        }

        /* ===== TEXT CONTENT ===== */
        .hero-copy {
          flex: 1.25;
          color: #ffffff;
        }

        .hero-eyebrow {
          font-size: 1.15rem;
          font-weight: 500;
          margin: 0 0 0.25rem 0;
          color: #e2e8f0;
        }

        .hero-title {
          font-size: clamp(2.85rem, 4.2vw, 4.5rem);
          font-weight: 800;
          margin: 0;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .hero-role {
          font-size: clamp(1.2rem, 1.65vw, 1.65rem);
          font-weight: 600;
          margin: 0.5rem 0 1.2rem 0;
        }

        .hero-role span {
          color: #00c0f8;
        }

        .typing-cursor {
          color: #00c0f8;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #94a3b8;
          max-width: 520px;
          margin-bottom: 1.5rem;
        }

        .hero-socials {
          list-style: none;
          display: flex;
          gap: 0.75rem;
          padding: 0;
          margin: 0 0 1.75rem 0;
        }

        .social-icon {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          background-color: #00c0f8;
          color: #0b151f;
          border-radius: 6px;
          transition: transform 0.2s, background-color 0.2s;
        }

        .social-icon svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }

        .social-icon:hover {
          transform: translateY(-2px);
          background-color: #ffffff;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
        }

        .btn {
          cursor: pointer;
          padding: 0.65rem 1.75rem;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .btn-primary {
          background-color: #00c0f8;
          color: #0b151f;
          border: 1.5px solid #00c0f8;
        }

        .btn-primary:hover {
          background-color: #38d4ff;
        }

        .btn-outline {
          background: transparent;
          color: #00c0f8;
          border: 1.5px solid #00c0f8;
        }

        .btn-outline:hover {
          background: rgba(0, 192, 248, 0.1);
        }

        /* ===== BOTTOM STATS ===== */
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding-top: clamp(1rem, 2.5vh, 1.75rem);
        }

        .hero-stat {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0 0.55rem;
          border-right: 1px solid rgba(255, 255, 255, 0.15);
        }

        .hero-stat:last-child {
          border-right: none;
        }

        .hero-stat strong {
          font-size: 2.1rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
        }

        .hero-stat span {
          font-size: 0.8rem;
          line-height: 1.25;
          color: #94a3b8;
          max-width: 95px;
        }

        /* ===== RESPONSIVENESS ===== */
        @media (min-width: 901px) and (max-width: 1200px) {
          .hero-card {
            padding-right: 3rem;
            padding-left: 3rem;
          }
          .hero-main {
            gap: 2.5rem;
          }
          .blob-stage {
            width: clamp(360px, min(56vw, 78vh), 680px);
          }
          .hero-title {
            font-size: clamp(2.7rem, 4vw, 3.5rem);
          }
        }

        @media (max-width: 900px) {
          .hero-card {
            padding: 2rem clamp(1.5rem, 5vw, 3rem) 1.5rem;
          }
          .hero-main {
            flex-direction: column;
            text-align: center;
            gap: 2.5rem;
          }
          .blob-stage {
            width: min(98vw, 680px);
          }
          .hero-copy {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-socials,
          .hero-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 1.25rem;
          }
          .hero-stat:nth-child(2) {
            border-right: none;
          }
        }

        @media (max-width: 480px) {
          .hero-wrapper {
            min-height: 100svh;
          }
          .hero-card {
            padding: 1.25rem 1rem 1.25rem;
          }
          .blob-stage {
            width: min(104vw, 480px);
          }
          .hero-title {
            font-size: 2.1rem;
          }
          .hero-stats {
            grid-template-columns: 1fr;
          }
          .hero-stat {
            border-right: none;
            justify-content: center;
          }
        }
      `}</style>
    </main>

    <TechShowcase />
    <WhyHireMe />
    <Footer />
    </>
  );
}
