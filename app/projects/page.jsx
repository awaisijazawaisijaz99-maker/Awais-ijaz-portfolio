"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* ---------------------------------------------------------------
   Projects data
   image: public/projects/ mein full-page (lamba) screenshot rakho
---------------------------------------------------------------- */
const projects = [
  {
    title: "Tesla Landing Page",
    category: "E-Commerce",
    // public/projects/tesla.png
    image: "tesla-2.png",
    live: "https://tesla-chi-one.vercel.app/",
    repo: "https://github.com/awaisijazawaisijaz99-maker/Tesla",
    tech: ["HTML5", "CSS3", "JavaScript"],
    summary:
      "Pixel-accurate recreation of Tesla's home page with full-screen model showcases, offers and energy products.",
    description:
      "A responsive front-end recreation of Tesla's landing experience. It presents the vehicle line-up (Model 3, Model Y, Model X and Model S) in immersive full-screen sections with clear Order Now and Learn More calls to action, followed by current offers, Supercharger network statistics and the energy range including Solar Panels, Powerwall, Megapack and Solar Roof.",
    features: [
      "Full-screen hero sections with slider controls",
      "Offer cards, Supercharger stats and energy products",
      "Mobile-friendly navigation menu",
      "Fully responsive from phones to large desktops",
    ],
  },
  {
    title: "Upwork Clone",
    category: "Marketplace",
    // public/projects/upwork.png
    image: "upwork.png",
    live: "https://upwork-two-gold.vercel.app/",
    repo: "https://github.com/awaisijazawaisijaz99-maker/Upwork",
    tech: ["HTML5", "CSS3", "JavaScript"],
    summary:
      "Freelance marketplace home page with mega-menu navigation, job search, pricing plans and testimonials.",
    description:
      "A detailed front-end clone of the Upwork home page. It includes a multi-level mega-menu, a search-driven hero, a category explorer, a three-step How it works flow, pricing cards (Marketplace, Business Plus, Enterprise), client testimonials and a complete multi-column footer.",
    features: [
      "Multi-level dropdown navigation",
      "Job search hero and service categories",
      "Pricing cards with a highlighted Popular plan",
      "Testimonials and full footer link structure",
    ],
  },
  {
    title: "General Hospital",
    category: "Healthcare",
    // public/projects/general-hospital.png
    image: "genral.png",
    live: "https://general-hospital-excellence-in-heal-eta.vercel.app/",
    repo: "https://github.com/awaisijazawaisijaz99-maker/General-Hospital-Excellence-in-Healthcare",
    tech: ["HTML5", "CSS3", "JavaScript"],
    summary:
      "Patient-focused hospital website with appointment booking, services, team and testimonials.",
    description:
      "A modern website for a healthcare provider. It opens with an emergency contact bar and a sticky navigation with a Book Appointment button, followed by quick-action cards, an About section, core services, a Why Choose Us block, team profiles, patient stories and a 24/7 help section.",
    features: [
      "Emergency bar and sticky navigation with booking CTA",
      "Find a Doctor, Appointment and Condition cards",
      "Services, team and patient testimonials",
      "Smooth anchor navigation, fully responsive",
    ],
  },
  {
    title: "Oreo Hospital Dashboard",
    category: "Healthcare",
    // public/projects/oreo-hospital.png
    image: "oreo.png",
    live: "https://oreo-hospital-all-departments-nine.vercel.app/",
    repo: "https://github.com/awaisijazawaisijaz99-maker/Oreo-Hospital-All-Departments",
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    summary:
      "Hospital admin dashboard with sidebar navigation and an All Departments view.",
    description:
      "A hospital management admin interface focused on the All Departments screen. A multi-level sidebar covers Dashboard, Appointments, Doctors, Patients, Payments, Departments and more, while department cards show descriptions and the assigned medical team.",
    features: [
      "Multi-level sidebar for doctors, patients and payments",
      "Department cards with team avatars",
      "Profile header and login state",
      "Dense admin layout kept clean and responsive",
    ],
  },
];

/* Image na mile to placeholder dikhao */
function Shot({ src, alt, letter, className = "", eager = false }) {
  const [failed, setFailed] = useState(false);
  const url = src.startsWith("/") ? src : `/${src}`; // public/ folder se load
  if (failed) {
    return (
      <div className="grid h-full min-h-[220px] w-full place-items-center bg-gradient-to-br from-[#0a2a3d] to-[#061b2a] text-6xl font-extrabold text-white/80">
        {letter}
      </div>
    );
  }
  return (
    <img
      src={url}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[2000] grid place-items-center bg-[#020a11]/80 p-4 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[90vh] w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-3xl border border-[#13BDF2]/45 bg-gradient-to-br from-[#0b2536] to-[#061a28] text-white shadow-[0_40px_90px_rgba(0,0,0,0.55)] md:h-[min(88vh,720px)] md:grid-cols-[1.05fr_1fr] md:grid-rows-1 md:overflow-hidden"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 h-10 w-10 cursor-pointer rounded-full border border-white/25 bg-[#03141f]/90 text-xl transition hover:rotate-90 hover:bg-[#13BDF2] hover:text-[#06131d]"
        >
          ×
        </button>

        {/* Lamba screenshot pop up ke andar scroll hota hai */}
        <div className="h-[260px] min-h-0 overflow-y-auto border-b border-white/10 bg-[#07202f] md:h-full md:border-b-0 md:border-r">
          <Shot
            src={project.image}
            alt={project.title}
            letter={project.title[0]}
            eager
            className="block h-auto w-full"
          />
        </div>

        <div className="min-h-0 p-7 md:h-full md:overflow-y-auto">
          <span className="rounded-full border border-[#13BDF2]/35 bg-[#13BDF2]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#7fdcff]">
            {project.category}
          </span>
          <h3 className="mb-3 mt-4 pr-10 text-3xl font-extrabold">{project.title}</h3>
          <p className="text-[15px] leading-7 text-slate-300">{project.description}</p>

          <h4 className="mb-3 mt-6 text-xs font-bold uppercase tracking-widest text-slate-400">
            Key features
          </h4>
          <ul className="space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm text-slate-200">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#13BDF2] shadow-[0_0_10px_#13BDF2]" />
                {f}
              </li>
            ))}
          </ul>

          <h4 className="mb-3 mt-6 text-xs font-bold uppercase tracking-widest text-slate-400">
            Built with
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] flex-1 cursor-pointer items-center justify-center rounded-[10px] border-[1.5px] border-[#13BDF2] bg-[#13BDF2] px-5 text-sm font-bold text-[#06131d] transition hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(19,189,242,0.55)]"
            >
              Live Demo ↗
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] flex-1 cursor-pointer items-center justify-center rounded-[10px] border-[1.5px] border-white/30 px-5 text-sm font-bold transition hover:-translate-y-0.5 hover:border-[#13BDF2] hover:bg-[#13BDF2]/15 hover:text-[#13BDF2]"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [selected, setSelected] = useState(null);
  const stop = (e) => e.stopPropagation(); // button click par pop up na khule

  return (
    <>
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_85%_6%,rgba(0,137,181,0.25),transparent_38%),linear-gradient(180deg,#03141f,#061b2a_50%,#03131f)] px-5 pb-24 pt-28 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            Portfolio
          </p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            My <span className="text-[#13BDF2]">Projects</span>
          </h1>
          <span className="mx-auto mt-5 block h-0.5 w-16 rounded bg-[#13BDF2]" />
          <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-400">
            A curated collection of web applications built with{" "}
            <b className="text-white">React</b>, <b className="text-white">Next.js</b> &amp;{" "}
            <b className="text-white">Tailwind CSS</b>. Hover a preview to scroll
            through the full page.
          </p>
        </div>

        {/* Project rows: image left/right alternate */}
        <div className="space-y-8">
          {projects.map((p, i) => (
            <article
              key={p.title}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(p)}
              onKeyDown={(e) => e.key === "Enter" && setSelected(p)}
              className="group grid cursor-pointer items-center gap-6 rounded-[28px] border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-5 transition duration-300 hover:-translate-y-1.5 hover:border-[#13BDF2]/70 hover:shadow-[0_24px_50px_-20px_rgba(19,189,242,0.45)] md:grid-cols-2 md:gap-10 md:p-7"
            >
              {/* Image: niche se upar scroll hoti hai (easing: cubic-bezier) */}
              <div
                className={`relative h-[var(--frame)] overflow-hidden rounded-2xl border border-white/15 bg-[#07202f] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] [--frame:240px] md:[--frame:290px] ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <span className="absolute left-3 top-3 z-10 rounded-md bg-[#13BDF2] px-2.5 py-1 text-[11px] font-bold text-[#06131d]">
                  {p.category}
                </span>
                <Shot
                  src={p.image}
                  alt={p.title}
                  letter={p.title[0]}
                  className="block h-auto w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:duration-[5000ms] group-hover:[transform:translateY(min(0px,calc(-100%_+_var(--frame))))]"
                />
              </div>

              {/* Text */}
              <div>
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Project {String(i + 1).padStart(2, "0")}
                  <span className="h-px w-10 bg-[#13BDF2]/60" />
                </p>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{p.summary}</p>

                {/* Language / tech used */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-[#13BDF2]/30 bg-[#13BDF2]/10 px-3 py-1 text-xs font-semibold text-[#9fe6ff]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={stop}
                    className="inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-xl border-[1.5px] border-[#13BDF2] bg-[#13BDF2] px-6 text-sm font-bold text-[#06131d] transition hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(19,189,242,0.55)]"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={stop}
                    className="inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-xl border-[1.5px] border-white/30 px-6 text-sm font-bold transition hover:-translate-y-0.5 hover:border-[#13BDF2] hover:bg-[#13BDF2]/15 hover:text-[#13BDF2]"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Have a project in mind?</h2>
          <p className="mt-3 text-slate-400">Let&apos;s build something amazing together.</p>
          <Link
            href="/contact"
            className="mt-7 inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-xl border-[1.5px] border-[#13BDF2] bg-[#13BDF2] px-8 text-sm font-bold text-[#06131d] transition hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(19,189,242,0.6)]"
          >
            Get In Touch →
          </Link>
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </main>

            {/* FOOTER */}
      <footer className="relative overflow-hidden border-t border-indigo-500/30 bg-[#052333] px-4 py-6 text-gray-300 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
          <h1 className="text-center text-base font-bold sm:text-left sm:text-lg lg:text-xl">
            <span className="text-white">Awais</span>{" "}
            <span className="text-[#13BDF2]">Ijaz</span>
          </h1>

          <p className="text-center text-xs text-gray-300 sm:text-right sm:text-sm">
            © {new Date().getFullYear()} Awais. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
 