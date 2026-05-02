"use client";

import { useState } from "react";
import Link from "next/link";

const solutions = [
  { label: "Residential", href: "/services" },
  { label: "Commercial",  href: "/services" },
  { label: "Industrial",  href: "/services" },
  { label: "Financing",   href: "/services" },
];

const company = [
  { label: "Process", href: "/about" },
  { label: "Support", href: "/contact" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms",   href: "#terms" },
];

function LogoMark() {
  return (
    <div className="w-9 h-9 bg-[#efaf0a] rounded-xl flex items-center justify-center shadow-md shadow-[#efaf0a]/30 shrink-0">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="4" fill="white" />
        <path
          d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4.1 4.1l1.42 1.42M14.48 14.48l1.42 1.42M4.1 15.9l1.42-1.42M14.48 5.52l1.42-1.42"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" aria-hidden="true">
      <path
        d="M1 5.5H12M8 1.5L12 5.5L8 9.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: newsletter subscription logic
    setEmail("");
  };

  return (
    <footer className="bg-[#f8fafc] dark:bg-[#0c1120]">
      {/* ── Main Grid ── */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

        {/* Column 1 – Brand */}
        <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 w-fit" aria-label="AJS Solar home">
            <LogoMark />
            <span
              className="text-[22px] font-semibold text-[#0f172a] dark:text-white tracking-tight leading-8"
              style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
            >
              AJS Solar
            </span>
          </Link>
          <p
            className="text-[#64748b] dark:text-[#9ca3af] text-[14px] leading-[22.75px]"
            style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
          >
            The Solar Curator. We bridge the gap between architectural beauty
            and energy efficiency.
          </p>
        </div>

        {/* Column 2 – Solutions */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#161b2b] dark:text-white text-[16px] font-semibold leading-6"
            style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
          >
            Solutions
          </p>
          <ul className="flex flex-col gap-4">
            {solutions.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[#64748b] dark:text-[#9ca3af] text-[14px] leading-5 hover:text-[#111827] dark:hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 – Company */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#161b2b] dark:text-white text-[16px] font-semibold leading-6"
            style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
          >
            Company
          </p>
          <ul className="flex flex-col gap-4">
            {company.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[#64748b] dark:text-[#9ca3af] text-[14px] leading-5 hover:text-[#111827] dark:hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 – Newsletter */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#161b2b] dark:text-white text-[16px] font-semibold leading-6"
            style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
          >
            Newsletter
          </p>
          <form onSubmit={handleSubscribe} className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              aria-label="Email for newsletter"
              className="flex-1 min-w-0 bg-[#faf8ff] dark:bg-[#1a2035] border border-transparent dark:border-white/10 text-[14px] text-[#111827] dark:text-white placeholder-[#6b7280] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#efaf0a]/40 transition-all"
              style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="bg-[#161b2b] dark:bg-[#1a2035] flex items-center justify-center p-3 rounded-lg hover:bg-[#1e2540] active:scale-95 transition-all shrink-0"
            >
              <ArrowIcon />
            </button>
          </form>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-[#e2e8f0] dark:border-white/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-8 flex items-center justify-center">
          <p
            className="text-[#64748b] dark:text-[#9ca3af] text-[12px] text-center leading-4"
            style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
          >
            © {new Date().getFullYear()} AJS Solar. The Solar Curator.
          </p>
        </div>
      </div>
    </footer>
  );
}
