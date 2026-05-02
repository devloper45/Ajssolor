"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Types ───────────────────────────────────────────────── */
interface Project {
  id: number;
  label: string;
  name: string;
  location: string;
  type: "Residential" | "Commercial" | "Industrial" | "Agriculture";
  capacity: string;
  before: string;
  after: string;
  savings: number; // percent
  payback: string;
  panels: string;
  inverter: string;
  battery: string | null;
  tag: string;
  gradient: string;
  year: string;
}

/* ─── Data ────────────────────────────────────────────────── */
const projects: Project[] = [
  {
    id: 1,
    label: "5 kW System",
    name: "Gulberg Residence",
    location: "Gulberg III, Lahore",
    type: "Residential",
    capacity: "5 kW",
    before: "Rs 25,000",
    after: "Rs 8,000",
    savings: 68,
    payback: "2.5 Years",
    panels: "10 × Longi 550W",
    inverter: "Huawei SUN2000-5KTL",
    battery: null,
    tag: "Completed",
    gradient: "from-orange-800 via-orange-700 to-amber-600",
    year: "2024",
  },
  {
    id: 2,
    label: "10 kW System",
    name: "Clifton Medical Clinic",
    location: "Clifton, Karachi",
    type: "Commercial",
    capacity: "10 kW",
    before: "Rs 50,000",
    after: "Rs 15,000",
    savings: 70,
    payback: "2.8 Years",
    panels: "20 × Jinko 550W",
    inverter: "SMA Sunny Boy 10.0",
    battery: "10 kWh BYD Battery",
    tag: "Completed",
    gradient: "from-slate-800 via-slate-700 to-slate-600",
    year: "2024",
  },
  {
    id: 3,
    label: "20 kW System",
    name: "DHA Factory Unit",
    location: "DHA Phase 6, Lahore",
    type: "Industrial",
    capacity: "20 kW",
    before: "Rs 1,20,000",
    after: "Rs 35,000",
    savings: 71,
    payback: "3.2 Years",
    panels: "40 × Canadian Solar 550W",
    inverter: "Fronius Symo 20.0-3-M",
    battery: null,
    tag: "Completed",
    gradient: "from-zinc-800 via-zinc-700 to-stone-600",
    year: "2023",
  },
  {
    id: 4,
    label: "15 kW System",
    name: "Faisalabad Farm Estate",
    location: "Jaranwala Road, Faisalabad",
    type: "Agriculture",
    capacity: "15 kW",
    before: "Rs 80,000",
    after: "Rs 22,000",
    savings: 73,
    payback: "3 Years",
    panels: "30 × Longi 550W",
    inverter: "Growatt SPF 15000 TL HVM",
    battery: "20 kWh Pylontech",
    tag: "Completed",
    gradient: "from-green-800 via-green-700 to-emerald-600",
    year: "2023",
  },
  {
    id: 5,
    label: "6 kW System",
    name: "F-7 Family Home",
    location: "F-7/3, Islamabad",
    type: "Residential",
    capacity: "6 kW",
    before: "Rs 30,000",
    after: "Rs 9,500",
    savings: 68,
    payback: "2.6 Years",
    panels: "12 × Jinko 550W",
    inverter: "Huawei SUN2000-6KTL",
    battery: "5 kWh LUNA2000",
    tag: "Completed",
    gradient: "from-teal-800 via-teal-700 to-cyan-600",
    year: "2024",
  },
  {
    id: 6,
    label: "30 kW System",
    name: "Mall of Multan – Retail Block",
    location: "Vehari Road, Multan",
    type: "Commercial",
    capacity: "30 kW",
    before: "Rs 2,00,000",
    after: "Rs 55,000",
    savings: 73,
    payback: "3 Years",
    panels: "60 × Canadian Solar 550W",
    inverter: "SMA Sunny Tripower 30",
    battery: null,
    tag: "Completed",
    gradient: "from-indigo-800 via-indigo-700 to-purple-700",
    year: "2023",
  },
  {
    id: 7,
    label: "8 kW System",
    name: "Bahria Town Villa",
    location: "Bahria Town, Rawalpindi",
    type: "Residential",
    capacity: "8 kW",
    before: "Rs 40,000",
    after: "Rs 12,000",
    savings: 70,
    payback: "2.7 Years",
    panels: "16 × Longi 550W",
    inverter: "Huawei SUN2000-8KTL",
    battery: "10 kWh LUNA2000",
    tag: "Completed",
    gradient: "from-rose-800 via-rose-700 to-pink-600",
    year: "2024",
  },
  {
    id: 8,
    label: "50 kW System",
    name: "Textile Mill Complex",
    location: "SITE Area, Karachi",
    type: "Industrial",
    capacity: "50 kW",
    before: "Rs 4,50,000",
    after: "Rs 1,10,000",
    savings: 76,
    payback: "3.5 Years",
    panels: "100 × Canadian Solar 550W",
    inverter: "Fronius Symo 50.0-3-M",
    battery: null,
    tag: "Completed",
    gradient: "from-cyan-800 via-cyan-700 to-sky-600",
    year: "2023",
  },
];

const FILTER_TABS = ["All", "Residential", "Commercial", "Industrial", "Agriculture"] as const;
type FilterTab = typeof FILTER_TABS[number];

/* ─── Sub-components ──────────────────────────────────────── */
function StatPill({
  label,
  value,
  color = "amber",
}: {
  label: string;
  value: string;
  color?: "amber" | "green" | "red" | "blue";
}) {
  const colors = {
    amber: "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400",
    green: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400",
    red:   "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400",
    blue:  "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
  };
  return (
    <div className={`flex flex-col gap-0.5 rounded-xl px-4 py-3 ${colors[color]}`}>
      <span className="text-[11px] font-semibold uppercase tracking-wide opacity-70">{label}</span>
      <span className="text-[15px] font-bold">{value}</span>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const barWidth = `${100 - p.savings}%`;
  return (
    <div className="group bg-white dark:bg-[#1e2a3d] border border-gray-100 dark:border-white/8 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
      {/* Photo / header */}
      <div className={`relative h-52 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Badges row */}
        <div className="absolute top-5 left-5 right-5 flex items-start justify-between gap-2">
          <span className="bg-[#efaf0a] text-[#3d2700] text-[12px] font-bold px-3 py-1 rounded-lg">
            {p.label}
          </span>
          <div className="flex gap-2">
            <span className="bg-black/30 text-white text-[11px] font-medium px-2.5 py-1 rounded-lg backdrop-blur-sm">
              {p.type}
            </span>
            <span className="bg-emerald-500/80 text-white text-[11px] font-medium px-2.5 py-1 rounded-lg backdrop-blur-sm">
              {p.tag}
            </span>
          </div>
        </div>

        {/* Name overlay */}
        <div className="absolute bottom-5 left-5 right-5">
          <p
            className="text-white font-bold text-[18px] leading-tight"
            style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
          >
            {p.name}
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <svg width="11" height="13" viewBox="0 0 12 16" fill="none" className="opacity-70">
              <path d="M6 0C3.24 0 1 2.24 1 5c0 3.94 5 11 5 11s5-7.06 5-11c0-2.76-2.24-5-5-5zm0 7.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="white"/>
            </svg>
            <p className="text-white/80 text-[13px]">{p.location}</p>
          </div>
        </div>

        {/* Year tag */}
        <div className="absolute top-5 right-5">
          {/* year is in the badges row now, skip */}
        </div>
      </div>

      {/* Stats body */}
      <div className="p-6 flex flex-col gap-4">
        {/* Savings headline */}
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-semibold text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wide">
            Monthly Savings
          </span>
          <span
            className="text-[20px] font-extrabold text-emerald-600 dark:text-emerald-400"
            style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
          >
            {p.savings}% Saved
          </span>
        </div>

        {/* Before / After pill row */}
        <div className="grid grid-cols-2 gap-2">
          <StatPill label="Before Solar" value={p.before} color="red" />
          <StatPill label="After Solar"  value={p.after}  color="blue" />
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-[12px] text-[#9ca3af] mb-1.5">
            <span>Remaining bill</span>
            <span>{barWidth}</span>
          </div>
          <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#efaf0a] to-[#f59e0b] rounded-full"
              style={{ width: barWidth }}
            />
          </div>
        </div>

        {/* Details row */}
        <div className="flex flex-wrap gap-x-5 gap-y-1.5 pt-1 border-t border-gray-100 dark:border-white/8">
          {[
            { label: "Payback", value: p.payback },
            { label: "Year", value: p.year },
            ...(p.battery ? [{ label: "Battery", value: "Included" }] : []),
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-1.5">
              <span className="text-[#9ca3af] text-[12px]">{label}:</span>
              <span className="text-[#374151] dark:text-gray-200 text-[12px] font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  const totalSaved = Math.round(
    projects.reduce((sum, p) => sum + p.savings, 0) / projects.length
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1f2f]">

      {/* ── Page Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-[#0c1120] dark:to-[#1a1f2f] pt-[68px]">
        {/* Dot-grid background */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #111827 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#efaf0a]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-8 pt-16 pb-14 flex flex-col items-center text-center gap-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] text-[#9ca3af]">
            <Link href="/" className="hover:text-[#374151] dark:hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#374151] dark:text-gray-200 font-medium">Projects</span>
          </div>

          {/* Label */}
          <span className="text-[#efaf0a] text-[13px] font-bold uppercase tracking-[1.5px]">Case Studies</span>

          {/* Heading */}
          <h1
            className="text-[2.5rem] sm:text-5xl lg:text-6xl font-extrabold text-[#111827] dark:text-white leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
          >
            Our Proven Solar<br className="hidden sm:block" /> Installations
          </h1>
          <p className="max-w-[540px] text-[#4b5563] dark:text-[#9ca3af] text-[16px] sm:text-[17px] leading-relaxed">
            Real results from real customers. Every project below shows measurable savings, verified by before-and-after bill comparisons.
          </p>

          {/* Hero stat pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {[
              { val: "500+",          desc: "Installations" },
              { val: `${totalSaved}%`, desc: "Avg. Bill Reduction" },
              { val: "2.5–3.5 yrs",   desc: "Typical Payback" },
              { val: "25 yr",          desc: "Panel Warranty" },
            ].map(({ val, desc }) => (
              <div
                key={desc}
                className="flex items-center gap-2.5 bg-white dark:bg-[#1e2a3d] border border-gray-200 dark:border-white/10 rounded-full px-5 py-2.5 shadow-sm"
              >
                <span className="text-[#efaf0a] font-extrabold text-[16px]">{val}</span>
                <span className="text-[#6b7280] dark:text-[#9ca3af] text-[13px]">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter Tabs + Grid ─────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-8 py-14 flex flex-col gap-10">

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[#9ca3af] text-[13px] font-medium mr-1 hidden sm:inline">Filter:</span>
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all active:scale-95 ${
                activeFilter === tab
                  ? "bg-[#efaf0a] text-[#3d2700] shadow-md shadow-[#efaf0a]/20"
                  : "bg-gray-100 dark:bg-[#1e2a3d] text-[#4b5563] dark:text-[#9ca3af] hover:bg-gray-200 dark:hover:bg-white/10 border border-transparent hover:border-gray-200 dark:hover:border-white/10"
              }`}
            >
              {tab}
              {tab !== "All" && (
                <span className={`ml-1.5 text-[12px] ${activeFilter === tab ? "opacity-70" : "opacity-50"}`}>
                  ({projects.filter((p) => p.type === tab).length})
                </span>
              )}
            </button>
          ))}

          {/* Count */}
          <span className="ml-auto text-[13px] text-[#9ca3af] hidden sm:inline">
            Showing <strong className="text-[#374151] dark:text-gray-200">{filtered.length}</strong> project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Cards grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <div className="py-24 flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-[#1e2a3d] rounded-2xl flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
            <p className="text-[#374151] dark:text-gray-200 font-semibold text-[17px]">No projects found</p>
            <p className="text-[#9ca3af] text-[14px]">Try a different filter category.</p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-2 text-[#efaf0a] font-semibold text-[14px] underline underline-offset-2"
            >
              Clear filter
            </button>
          </div>
        )}
      </section>

      {/* ── Process Section ────────────────────────────────── */}
      <section className="bg-[#f9fafb] dark:bg-[#141928] py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex flex-col gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-[#efaf0a] text-[13px] font-bold uppercase tracking-[1.5px]">Our Process</span>
            <h2
              className="text-[2rem] sm:text-[2.5rem] font-extrabold text-[#111827] dark:text-white"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              From Consultation to Savings
            </h2>
            <p className="max-w-[480px] text-[#4b5563] dark:text-[#9ca3af] text-[15px] leading-relaxed">
              We handle everything — survey, design, installation, and net-metering — so you can start saving without the hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Free Site Survey",
                desc: "Our engineer visits your site to assess roof area, shading, load requirements, and grid connection.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Custom Design",
                desc: "We design a system sized to your exact energy needs with a full ROI analysis and 3D layout.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Professional Install",
                desc: "Certified technicians complete the installation in 1–2 days with zero disruption to your routine.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                  </svg>
                ),
              },
              {
                step: "04",
                title: "Net Metering",
                desc: "We handle DISCO approval and net-metering so you earn credits for every unit you export to the grid.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                ),
              },
            ].map(({ step, title, desc, icon }) => (
              <div key={step} className="bg-white dark:bg-[#1e2a3d] border border-gray-100 dark:border-white/8 rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center text-[#efaf0a]">
                    {icon}
                  </div>
                  <span className="text-[#e5e7eb] dark:text-white/10 text-[2.5rem] font-extrabold leading-none select-none">
                    {step}
                  </span>
                </div>
                <div>
                  <h3
                    className="font-bold text-[#111827] dark:text-white text-[16px] mb-1.5"
                    style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#4b5563] dark:text-[#9ca3af] text-[13.5px] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────── */}
      <section className="bg-[#111827] dark:bg-[#0a0f1a] py-16">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-7">
          <div className="text-center sm:text-left">
            <p
              className="text-white text-[1.6rem] sm:text-[1.9rem] font-extrabold leading-snug"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Want results like these?
            </p>
            <p className="text-gray-400 text-[15px] mt-1">
              Get a free site survey and custom solar proposal — no commitment needed.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/#contact"
              className="bg-[#efaf0a] text-[#3d2700] font-bold text-[14px] px-8 py-3.5 rounded-full hover:bg-[#d9a008] active:scale-95 transition-all shadow-lg shadow-[#efaf0a]/20 text-center"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Get My Free Quote
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/20 text-white font-semibold text-[14px] px-8 py-3.5 rounded-full hover:border-white/50 hover:bg-white/5 active:scale-95 transition-all text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
