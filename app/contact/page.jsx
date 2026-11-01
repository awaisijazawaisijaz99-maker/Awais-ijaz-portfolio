
"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiPhone,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const contactDetails = [
  {
    icon: FiMail,
    title: "Email Me",
    description: "Have a question or project in mind?",
    value: "awaisijazawaisijaz100@gmail.com",
    href: "mailto:awaisijazawaisijaz100@gmail.com",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    description: "Chat with me directly on WhatsApp",
    value: "+923117664343",
    href: "https://wa.me/923117664343",
    external: true,
  },
  {
    icon: FiMapPin,
    title: "Location",
    description: "Available for remote opportunities",
    value: "Pakistan",
  },
];

export default function ContactPage() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const formData = new FormData(formRef.current);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("user_name"),
          email: formData.get("user_email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message.");
      }

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#052333] text-white overflow-hidden">

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#13BDF2]/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full" />
      </div>

      {/* Hero */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#13BDF2]/40 bg-[#0A3040] text-[#13BDF2] text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#13BDF2] animate-pulse" />
              CONTACT ME
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
              Let's Start a{" "}
              <span className="text-[#13BDF2]">Conversation.</span>
            </h1>

            <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed">
              Have an idea, a project, or an opportunity?
              I'd love to hear from you. Let's create something
              meaningful together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">

          <div className="grid lg:grid-cols-5 gap-8 items-stretch">

            {/* Left Information */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Get in <span className="text-[#13BDF2]">Touch</span>
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  I'm always interested in hearing about new projects,
                  creative ideas and opportunities to collaborate.
                </p>
              </div>

              <div className="space-y-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const Card = item.href ? motion.a : motion.div;

                  return (
                    <Card
                      key={item.title}
                      {...(item.href
                        ? {
                            href: item.href,
                            "aria-label": `${item.title}: ${item.value}`,
                            ...(item.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {}),
                          }
                        : {})}
                      whileHover={{ x: 6, borderColor: "#13BDF2" }}
                      className={`group flex items-center gap-4 p-5 rounded-2xl bg-[#0A3040] border border-[#17485B] hover:shadow-[0_0_25px_rgba(19,189,242,0.12)] transition-all duration-300 ${
                        item.href ? "cursor-pointer" : ""
                      }`}
                    >
                      <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-[#052333] border border-[#17485B] text-[#13BDF2] group-hover:bg-[#13BDF2] group-hover:text-[#052333] transition-all duration-300">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {item.description}
                        </p>
                        <p className="text-sm text-[#13BDF2] mt-1">
                          {item.value}
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Availability */}
              <div className="mt-6 p-5 rounded-2xl bg-[#0A3040] border border-[#17485B] cursor-pointer hover:border-[#13BDF2] hover:shadow-[0_0_25px_rgba(19,189,242,0.10)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 bg-green-400 rounded-full shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                  <h3 className="font-semibold">Available for Projects</h3>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Open to freelance work, collaborations and
                  exciting frontend development opportunities.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-auto pt-8">
                <p className="text-sm text-gray-400 mb-4">
                  Connect with me
                </p>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/awaisijazawaisijaz99-maker"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#0A3040] border border-[#17485B] text-gray-300 hover:text-[#13BDF2] hover:border-[#13BDF2] hover:shadow-[0_0_15px_rgba(19,189,242,0.2)] transition-all"
                  >
                    <FiGithub size={20} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/awais-ijaz-52217b38b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#0A3040] border border-[#17485B] text-gray-300 hover:text-[#13BDF2] hover:border-[#13BDF2] hover:shadow-[0_0_15px_rgba(19,189,242,0.2)] transition-all"
                  >
                    <FiLinkedin size={20} />
                  </a>

                  <a
                    href="tel:+923117664343"
                    aria-label="Call +923117664343"
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#0A3040] border border-[#17485B] text-gray-300 hover:text-[#13BDF2] hover:border-[#13BDF2] hover:shadow-[0_0_15px_rgba(19,189,242,0.2)] transition-all"
                  >
                    <FiPhone size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-[#082B3B] border border-[#17485B] shadow-[0_20px_70px_rgba(0,0,0,0.2)]">

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    Send Me a Message
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Fill out the form below and I'll get back to you.
                  </p>
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name and Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Enter your name"
                        required
                        maxLength={100}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#052333] border border-[#17485B] text-white placeholder:text-gray-500 outline-none focus:border-[#13BDF2] focus:shadow-[0_0_15px_rgba(19,189,242,0.12)] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="your@email.com"
                        required
                        maxLength={150}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#052333] border border-[#17485B] text-white placeholder:text-gray-500 outline-none focus:border-[#13BDF2] focus:shadow-[0_0_15px_rgba(19,189,242,0.12)] transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What is this about?"
                      required
                      maxLength={150}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#052333] border border-[#17485B] text-white placeholder:text-gray-500 outline-none focus:border-[#13BDF2] focus:shadow-[0_0_15px_rgba(19,189,242,0.12)] transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Tell me about your project..."
                      required
                      maxLength={5000}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#052333] border border-[#17485B] text-white placeholder:text-gray-500 outline-none resize-none focus:border-[#13BDF2] focus:shadow-[0_0_15px_rgba(19,189,242,0.12)] transition-all"
                    />
                  </div>

                  {/* Status */}
                  {status === "success" && (
                    <div role="status" className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                      <FiCheckCircle size={19} />
                      Message sent successfully! Thank you.
                    </div>
                  )}

                  {status === "error" && (
                    <div role="alert" className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      <FiAlertCircle size={19} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#13BDF2] text-[#052333] font-bold hover:bg-[#35CEFA] hover:shadow-[0_0_25px_rgba(19,189,242,0.35)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? "Sending Message..." : "Send Message"}
                    {!loading && <FiSend size={19} />}
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    Your information will only be used to respond to your message.
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="relative border-t border-[#17485B] py-6 px-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <h3 className="font-bold text-lg">
            Awais <span className="text-[#13BDF2]">Ijaz</span>
          </h3>

          <p className="text-sm text-gray-500">
            © 2026 Awais. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
