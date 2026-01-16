"use client";

import { useState } from "react";
import { Mail, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* iOS-style Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 ios-nav">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl icon-gradient-blue flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gradient">ColorQRCode</h1>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/tools/color-palette" className="text-sm font-medium hover:text-[var(--ios-blue)] transition-colors">
                Color Palette
              </Link>
              <Link href="/tools/qr-generator" className="text-sm font-medium hover:text-[var(--ios-blue)] transition-colors">
                QR Generator
              </Link>
              <Link href="/guides" className="text-sm font-medium hover:text-[var(--ios-blue)] transition-colors">
                Guides
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12 animate-fadeInUp">
            <div className="w-20 h-20 rounded-3xl icon-gradient-blue flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white" style={{ letterSpacing: "-0.02em" }}>
              Contact Us
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {submitted ? (
            <div className="glass-card p-12 text-center animate-fadeInScale">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Message Sent!</h2>
              <p className="text-white/80">Thank you for contacting us. We'll get back to you soon.</p>
            </div>
          ) : (
            <div className="glass-card p-8 md:p-12 animate-fadeInScale">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="glass-input w-full px-5 py-4 rounded-2xl text-white placeholder-white/40"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="glass-input w-full px-5 py-4 rounded-2xl text-white placeholder-white/40"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-white mb-3">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="glass-input w-full px-5 py-4 rounded-2xl text-white"
                  >
                    <option value="general" className="bg-gray-900">General Inquiry</option>
                    <option value="feedback" className="bg-gray-900">Feedback</option>
                    <option value="bug" className="bg-gray-900">Bug Report</option>
                    <option value="feature" className="bg-gray-900">Feature Request</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="glass-input w-full px-5 py-4 rounded-2xl text-white placeholder-white/40 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full button-primary px-8 py-4 rounded-2xl font-semibold text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          )}

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 animate-fadeInScale stagger-1">
              <h3 className="font-bold text-lg mb-3 text-white">Other Ways to Reach Us</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[var(--ios-blue)]" />
                  <a href="mailto:contact@colorqrcode.com" className="text-[var(--ios-blue)] hover:underline">
                    contact@colorqrcode.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 animate-fadeInScale stagger-2">
              <h3 className="font-bold text-lg mb-3 text-white">Response Time</h3>
              <p className="text-white/70">
                We typically respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-white/60 mb-6">© 2025 ColorQRCode Tools. Beautiful design tools for everyone.</p>
            <div className="flex justify-center gap-4">
              <Link href="/privacy" className="glass-button px-4 py-2 rounded-xl text-sm font-medium text-white">Privacy</Link>
              <Link href="/terms" className="glass-button px-4 py-2 rounded-xl text-sm font-medium text-white">Terms</Link>
              <Link href="/contact" className="glass-button px-4 py-2 rounded-xl text-sm font-medium text-white">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
