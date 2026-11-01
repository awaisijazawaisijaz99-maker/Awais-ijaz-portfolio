'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiBookOpen, FiFileText } from "react-icons/fi";

// EDUCATION DATA (Only F.Sc and BS)
const EDUCATION = [
    {
        id: 1,
        year: "2022 - 2024",
        title: "F.Sc (Pre-Medical)",
        institution: "Swot College — Liaquatpur",
        desc: "Studied Biology, Chemistry & Physics while pursuing frontend development interests and building small projects.",
    },
    {
        id: 2,
        year: "2024 - 2028",
        title: "BS — Information Technology",
        institution: "The Islamia University of Bahawalpur",
        desc: "Pursuing Information Technology to deepen programming, web development & modern computing skills.",
    },
];

// EXPERIENCE DATA
const experiences = [
    {
        role: "Frontend Developer",
        company: "IntellixSoft",
        year: "2025",
        logo: "/intellixsoft-logo.png",
        description: "Built personal and client-based portfolio websites using modern frontend technologies including React, TailwindCSS, and JavaScript.",
        achievements: ["5+ client projects", "100% client satisfaction", "Optimized performance"],
    },
    {
        role: "Web Developer Intern",
        company: "MARKDEV.",
        year: "2026",
        logo: "/markdev.jpg",
        description: "Worked on practice projects to strengthen frontend skills using JavaScript and React, enhancing user interface design.",
        achievements: ["3 major projects", "UI/UX improvements", "Responsive designs"],
    },

];

// SKILLS DATA - Professional text based
const skillCategories = [
    {
        category: "Frontend Core",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
        level: "Advanced",
    },
    {
        category: "Frameworks & Libraries",
        skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion"],
        level: "Advanced",
    },
    {
        category: "Tools & Version Control",
        skills: ["Git & GitHub", "VS Code", "npm/yarn", "Chrome DevTools"],
        level: "Advanced",
    },
    {
        category: "Backend Basics (Learning)",
        skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
        level: "Intermediate",
    },
];

export default function AboutPage() {
    return (
        <div className="bg-[#052333] min-h-screen">

            {/* HERO SECTION */}
            <section className="min-h-[90vh] flex items-center py-16 sm:py-20 lg:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#0A3040] rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.18)] border border-[#17485B] overflow-hidden"
                    >
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Left Content */}
                            <div className="p-8 sm:p-10 lg:p-12">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {/* Welcome Badge with Professional Icon */}
                                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#052333] rounded-full text-sm font-medium text-gray-300 mb-6">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        Welcome to my profile
                                    </span>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                                        Awais
                                    </h1>
                                    <div className="inline-block px-5 py-2 bg-[#0A3040] border border-[#17485B] text-[#13BDF2] rounded-xl font-semibold text-lg mb-6">
                                        Frontend Developer
                                    </div>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                        I craft modern, responsive, and high-performance web applications
                                        with a focus on clean code and exceptional user experiences.
                                    </p>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap gap-4 mb-8">
                                        <Link href="/contact">
                                            <motion.button
                                                whileHover={{ scale: 1.08, y: -2 }}
                                                whileTap={{ scale: 0.96 }}
                                                className="px-8 py-3 bg-[#13BDF2] text-[#05070B] rounded-xl font-semibold border border-[#13BDF2] shadow-[0_0_14px_rgba(19,189,242,0.28)] hover:bg-[#13BDF2] hover:shadow-[0_0_28px_rgba(19,189,242,0.75)] hover:border-[#13BDF2] transition-all duration-300 cursor-pointer"
                                            >
                                                Hire Me
                                            </motion.button>
                                        </Link>
                                        <motion.a
                                            href="/Awais-ijaz-ca.pdf"
                                            download="Awais-Ijaz-CV.pdf"
                                            whileHover={{ scale: 1.08, y: -2 }}
                                            whileTap={{ scale: 0.96 }}
                                            className="px-8 py-3 border border-[#13BDF2]/70 bg-[#0A3040] text-[#13BDF2] rounded-xl font-semibold hover:bg-[#13BDF2] hover:border-[#13BDF2] hover:text-[#05070B] hover:shadow-[0_0_28px_rgba(19,189,242,0.75)] transition-all duration-300 cursor-pointer"
                                        >
                                            Download CV
                                        </motion.a>
                                    </div>

                                    {/* Social Links with Icons only */}
                                    <div className="flex gap-3">
                                        <motion.a
                                            href="https://github.com/awaisijazawaisijaz99-maker"
                                            target="_blank"
                                            whileHover={{ y: -3, scale: 1.05 }}
                                            className="p-2.5 bg-[#052333] rounded-xl hover:bg-[#0E4055] hover:text-white transition group"
                                        >
                                            <svg className="w-5 h-5 group-hover:text-white text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
                                            </svg>
                                        </motion.a>
                                        <motion.a
                                            href="https://www.linkedin.com/in/awais-ijaz-52217b38b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                            target="_blank"
                                            whileHover={{ y: -3, scale: 1.05 }}
                                            className="p-2.5 bg-[#052333] rounded-xl hover:bg-[#0E4055] hover:text-white transition group"
                                        >
                                            <svg className="w-5 h-5 group-hover:text-white text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </motion.a>
                                        <motion.a
                                            href="https://www.upwork.com/freelancers/~01e1ec4c0250298238?mp_source=share"
                                            target="_blank"
                                            whileHover={{ y: -3, scale: 1.05 }}
                                            className="p-2.5 bg-[#052333] rounded-xl hover:bg-[#0E4055] hover:text-white transition group"
                                        >
                                            <svg className="w-5 h-5 group-hover:text-white text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.561 13.158c-1.102 0-2.076-.367-2.784-1.07c-.183.753-.579 1.404-1.131 1.917c-.68.633-1.521.981-2.378.981c-2.017 0-3.639-1.668-3.639-3.722c0-1.324.688-2.503 1.761-3.151c.484-.293 1.019-.457 1.56-.457c.724 0 1.385.277 1.873.777c.376.386.623.888.714 1.439c.284-.165.607-.266.949-.266c1.949 0 3.538 1.615 3.538 3.593c0 .301-.029.597-.086.884c.73.358 1.344.94 1.756 1.676c.412.736.631 1.574.631 2.452c0 1.366-.566 2.705-1.588 3.756c-1.007 1.032-2.339 1.612-3.775 1.612c-1.922 0-3.625-1.064-4.541-2.739c-.916 1.675-2.619 2.739-4.541 2.739c-1.436 0-2.768-.58-3.775-1.612c-1.022-1.051-1.588-2.39-1.588-3.756c0-1.366.566-2.705 1.588-3.756c1.007-1.032 2.339-1.612 3.775-1.612c.019 0 .038-.002.057-.002a5.992 5.992 0 0 0-.024 1.072c-.011.286-.011.575.011.862c.016.237.042.473.077.706c.24.416.576.758.972.994c.396.236.845.362 1.304.362c1.047 0 1.971-.727 2.211-1.746c.053-.224.078-.456.078-.688c0-.948-.726-1.727-1.667-1.864c-.564-.082-1.137-.008-1.643.214c-.169-.529-.476-1.003-.888-1.399c-.542-.521-1.254-.806-1.999-.806c-.683 0-1.328.237-1.852.673c-1.099.916-1.739 2.295-1.739 3.763c0 1.467.64 2.847 1.739 3.763c.524.436 1.169.673 1.852.673c1.393 0 2.579-1.004 2.949-2.388c.284.4.653.72 1.08.946c.427.226.903.342 1.386.342c1.047 0 1.971-.727 2.211-1.746c.053-.224.078-.456.078-.688c0-.391-.119-.761-.336-1.079c-.217-.318-.524-.571-.88-.738c.024-.181.036-.364.036-.548c0-1.287-1.015-2.331-2.279-2.331zm-9.384 4.641c-.536 0-1.042-.211-1.42-.589c-.378-.378-.586-.883-.586-1.42c0-.537.208-1.042.586-1.42c.378-.378.884-.586 1.42-.586c.537 0 1.042.208 1.42.586c.378.378.586.883.586 1.42c0 .537-.208 1.042-.586 1.42c-.378.378-.883.589-1.42.589z" />
                                            </svg>
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Content - Stats */}
                            <div className="bg-[#082B3B] p-8 sm:p-10 lg:p-12">
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="text-center p-4 bg-[#0A3040] rounded-2xl shadow-sm border border-[#17485B] hover:border-[#13BDF2]/60 hover:shadow-lg hover:shadow-[#13BDF2]/10 transition-all duration-300 cursor-pointer">
                                        <div className="text-3xl font-bold text-white">1.5+</div>
                                        <div className="text-xs text-gray-300">Years Experience</div>
                                    </div>
                                    <div className="text-center p-4 bg-[#0A3040] rounded-2xl shadow-sm border border-[#17485B] hover:border-[#13BDF2]/60 hover:shadow-lg hover:shadow-[#13BDF2]/10 transition-all duration-300 cursor-pointer">
                                        <div className="text-3xl font-bold text-white">20+</div>
                                        <div className="text-xs text-gray-300">Projects</div>
                                    </div>
                                    <div className="text-center p-4 bg-[#0A3040] rounded-2xl shadow-sm border border-[#17485B] hover:border-[#13BDF2]/60 hover:shadow-lg hover:shadow-[#13BDF2]/10 transition-all duration-300 cursor-pointer">
                                        <div className="text-3xl font-bold text-white">15+</div>
                                        <div className="text-xs text-gray-300">Happy Clients</div>
                                    </div>
                                    <div className="text-center p-4 bg-[#0A3040] rounded-2xl shadow-sm border border-[#17485B] hover:border-[#13BDF2]/60 hover:shadow-lg hover:shadow-[#13BDF2]/10 transition-all duration-300 cursor-pointer">
                                        <div className="text-3xl font-bold text-white">24/7</div>
                                        <div className="text-xs text-gray-300">Support</div>
                                    </div>
                                </div>

                                {/* What I Do - with Hover Effect */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white mb-4">What I Do</h3>
                                    <div className="space-y-3">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-center gap-3 p-3 bg-[#0A3040] rounded-xl border border-transparent hover:bg-[#0E4055] hover:border-[#13BDF2]/70 hover:shadow-[0_0_24px_rgba(19,189,242,0.32)] hover:text-white transition-all duration-300 group cursor-pointer"
                                        >
                                            <svg className="w-5 h-5 group-hover:text-white text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                            <span className="text-gray-300 group-hover:text-white transition">Modern UI Development</span>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-center gap-3 p-3 bg-[#0A3040] rounded-xl border border-transparent hover:bg-[#0E4055] hover:border-[#13BDF2]/70 hover:shadow-[0_0_24px_rgba(19,189,242,0.32)] hover:text-white transition-all duration-300 group cursor-pointer"
                                        >
                                            <svg className="w-5 h-5 group-hover:text-white text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-gray-300 group-hover:text-white transition">Responsive Web Design</span>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-center gap-3 p-3 bg-[#0A3040] rounded-xl border border-transparent hover:bg-[#0E4055] hover:border-[#13BDF2]/70 hover:shadow-[0_0_24px_rgba(19,189,242,0.32)] hover:text-white transition-all duration-300 group cursor-pointer"
                                        >
                                            <svg className="w-5 h-5 group-hover:text-white text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            <span className="text-gray-300 group-hover:text-white transition">Performance Optimization</span>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SKILLS SECTION */}
            <section className="py-20 sm:py-24 lg:py-28 bg-[#0A3040]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Technical Skills
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Technologies and tools I work with
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-[#052333] rounded-2xl p-6 border border-[#17485B] hover:border-[#13BDF2]/60 hover:shadow-[0_0_24px_rgba(19,189,242,0.10)] transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-white">{category.category}</h3>
                                    <span className="text-xs px-2 py-1 bg-[#0A3040] border border-[#17485B] rounded-full text-[#13BDF2]">
                                        {category.level}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 bg-[#0A3040] rounded-lg text-sm text-gray-300 border border-[#17485B]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EDUCATION SECTION - Only F.Sc and BS */}
            <section className="py-20 sm:py-24 lg:py-28 bg-[#052333]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Education
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            My academic journey and qualifications
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
                        {EDUCATION.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-[#0A3040] rounded-2xl p-6 border border-[#17485B] hover:bg-[#0E4055] hover:border-[#13BDF2]/80 hover:shadow-[0_0_30px_rgba(19,189,242,0.28)] transition-all duration-300 cursor-pointer"
                            >
                                {/* Professional Icon */}
                                <div className="w-12 h-12 bg-[#052333] border border-[#17485B] rounded-xl flex items-center justify-center text-[#13BDF2] mb-4">
                                    {idx === 0 ? (
                                        <FiBookOpen className="w-6 h-6" aria-hidden="true" />
                                    ) : (
                                        <FiFileText className="w-6 h-6" aria-hidden="true" />
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-300 mb-2">{item.year}</p>
                                <p className="text-sm font-medium text-gray-300 mb-3">{item.institution}</p>
                                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section className="py-20 sm:py-24 lg:py-28 bg-[#0A3040]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Work Experience
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            My professional journey and roles
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ x: 5 }}
                                className="bg-[#052333] rounded-2xl p-6 border border-[#17485B] hover:border-[#13BDF2]/60 hover:shadow-lg hover:shadow-[#13BDF2]/10 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex flex-wrap items-start gap-4">
                                    {exp.logo && (
                                        <img
                                            src={exp.logo}
                                            alt={exp.company}
                                            className="w-16 h-16 rounded-xl object-contain p-1.5 border border-[#17485B] bg-[#0A3040] shrink-0"
                                        />
                                    )}
                                    <div className="flex-1">
                                        <div className="flex flex-wrap justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                                <p className="text-gray-300">{exp.company}</p>
                                            </div>
                                            <span className="px-3 py-1 bg-[#0A3040] rounded-full text-sm text-gray-300">
                                                {exp.year}
                                            </span>
                                        </div>
                                        <p className="text-gray-300 mb-3">{exp.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <span key={i} className="text-xs px-2 py-1 bg-[#0A3040] rounded-full text-gray-300 border border-[#17485B]">
                                                    {achievement}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="relative overflow-hidden bg-[#052333] text-gray-300 border-t border-indigo-500/30 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                    <h1 className="text-base sm:text-lg lg:text-xl font-bold text-center sm:text-left">
                        <span className="text-white">Awais</span>{" "}
                        <span className="text-[#13BDF2]">Ijaz</span>
                    </h1>

                    <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-right">
                        © 2026 Awais. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}