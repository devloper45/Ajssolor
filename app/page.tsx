"use client";

import { useState } from "react";
import Image from "next/image";
import { BatteryCharging, Leaf, PiggyBank } from "lucide-react";

/* ─── Asset URLs ──────────────────────────────────────────── */
const ASSETS = {
  iconSaveMore:    <PiggyBank className="size-6 text-[#efaf0a]" />,
  iconLoadShed:    <BatteryCharging className="size-6 text-[#2563eb]" />,
  iconEco:         <Leaf className="size-6 text-[#16a34a]" />,
  iconMaintenance: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#49C6FF] dark:text-[#D4C4AC]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>
,
};

/* ─── Data ────────────────────────────────────────────────── */
const features = [
  {
    icon: ASSETS.iconSaveMore,
    bg: "bg-amber-50 dark:bg-amber-900/20",
    color: "text-amber-600",
    title: "Save More Every Month",
    desc: "Dramatically reduce your monthly utility bills and hedge against rising energy costs for decades to come.",
  },
  {
    icon: ASSETS.iconLoadShed,
    bg: "bg-blue-50 dark:bg-blue-900/20",
    color: "text-blue-600",
    title: "No More Load Shedding",
    desc: "Reliable battery backup systems ensure your lights stay on even when the national grid goes dark.",
  },
  {
    icon: ASSETS.iconEco,
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    color: "text-emerald-600",
    title: "Eco-Friendly Energy",
    desc: "Reduce your carbon footprint and contribute to a cleaner, greener Pakistan with sustainable power.",
  },
  {
    icon: ASSETS.iconMaintenance,
    bg: "bg-purple-50 dark:bg-purple-900/20",
    color: "text-purple-600",
    title: "Low Maintenance",
    desc: "Our Tier-1 solar components are built to last 25+ years with minimal maintenance required.",
  },
];

const stats = [
  { value: "500+",  label: "Installations",       sub: "across Pakistan" },
  { value: "10MW+", label: "Energy Generated",     sub: "and counting" },
  { value: "98%",   label: "Happy Customers",      sub: "satisfaction rate" },
  { value: "8+",    label: "Years Experience",     sub: "in solar industry" },
];

const services = [
  {
    title: "Residential Solar",
    category: "Home",
    desc: "Empower your family with energy independence and near-zero electricity bills.",
    size: "large",
    gradient: "from-orange-900 via-orange-800 to-amber-700",
    image: "/assets/home/residentail_services.jpg",
  },
  {
    title: "Commercial Solar",
    category: "Business",
    desc: "Reduce operational costs and boost your business's green credentials.",
    size: "small",
    gradient: "from-slate-800 via-slate-700 to-slate-600",
    image: "/assets/home/comercial_services.jpg",
  },
  {
    title: "Industrial Solar",
    category: "Industry",
    desc: "High-capacity energy solutions for heavy manufacturing and production plants.",
    size: "small",
    gradient: "from-zinc-800 via-zinc-700 to-stone-600",
    image: "/assets/home/industrial_services.jpg",
  },
  {
    title: "Agriculture Solar",
    category: "Farming",
    desc: "Solar-powered irrigation and farming solutions for a sustainable future.",
    size: "large",
    gradient: "from-green-900 via-green-800 to-emerald-700",
    image: "/assets/home/agricultural_services.jpg",
  },
];

const projects = [
  {
    label: "5 kW System",
    name: "Lahore Residence",
    location: "Gulberg, Lahore",
    type: "Residential",
    image: "/assets/home/proven_result_lahore_home.png",
    before: "Rs 25,000 / mo",
    after:  "Rs 8,000 / mo",
    savings: "68% Saved",
    barWidth: "32%",
    tag: "Case Study",
  },
  {
    label: "10 kW System",
    name: "Karachi Medical Clinic",
    location: "Clifton, Karachi",
    type: "Commercial",
    image: "/assets/home/proven_result_karachi_clinic.png",
    before: "Rs 50,000 / mo",
    after:  "Rs 15,000 / mo",
    savings: "70% Saved",
    barWidth: "30%",
    tag: "Case Study",
  },
];

const pricingTiers = [
  {
    name: "3 kW System",
    price: "Rs. 15,000",
    period: "/ mo savings",
    badge: null,
    features: ["2–3 yr payback", "Perfect for small homes", "Tier-1 Panels included"],
    featured: false,
  },
  {
    name: "6 kW System",
    price: "Rs. 36,000",
    period: "/ mo savings",
    badge: "Most Popular",
    features: ["2–3 yr payback", "Ideal for medium homes", "Hybrid Battery Ready"],
    featured: true,
  },
  {
    name: "10 kW System",
    price: "Rs. 60,000",
    period: "/ mo savings",
    badge: null,
    features: ["3 yr payback", "Offices & Villas", "Hybrid Battery Ready"],
    featured: false,
  },
  {
    name: "20 kW System",
    price: "Rs. 1,00,000",
    period: "/ mo savings",
    badge: null,
    features: ["3–4 yr payback", "Industrial & Farms", "Full Off-Grid Option"],
    featured: false,
  },
];

const testimonials = [
  {
    stars: 5,
    quote: "AJS Solar reduced our electricity bill from Rs 35,000 to just Rs 6,000 per month. The installation was quick and professional.",
    name: "Ahmed Raza",
    location: "Lahore",
    initial: "A",
  },
  {
    stars: 5,
    quote: "Our clinic hasn't faced load shedding in months. The battery backup is exceptional and the ROI is far better than expected.",
    name: "Dr. Fatima Noor",
    location: "Karachi",
    initial: "F",
  },
  {
    stars: 5,
    quote: "From consultation to installation the team was professional and knowledgeable. Our factory energy costs dropped by 65%.",
    name: "Zubair Khan",
    location: "Faisalabad",
    initial: "Z",
  },
];

const faqs = [
  {
    q: "How much does a typical 5kW solar system cost?",
    a: "A high-quality 5kW system ranges between Rs 800,000 to Rs 1,100,000 including installation and net-metering support.",
  },
  {
    q: "Does solar work during load shedding?",
    a: "Yes! With our hybrid solar systems and battery backup, your home or business stays powered even during grid failures.",
  },
  {
    q: "What is the ROI and payback period?",
    a: "Most residential customers see a payback period of 2–3 years. After payback you enjoy essentially free electricity for 20+ years.",
  },
];

/* ─── Sub-components ──────────────────────────────────────── */
function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 16 16" fill="#efaf0a">
          <path d="M8 1l1.854 3.753 4.146.603-3 2.926.708 4.131L8 10.347l-3.708 1.966L5 7.282 2 4.356l4.146-.603z" />
        </svg>
      ))}
    </div>
  );
}

function CheckIcon({ dark }: { dark?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx="8" cy="8" r="8" fill={dark ? "#efaf0a" : "#f0fdf4"} />
      <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke={dark ? "#3d2700" : "#16a34a"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl overflow-hidden transition-colors ${open ? "border-[#efaf0a]/50 bg-amber-50/50 dark:bg-amber-900/10" : "border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a2035]"}`}>
      <button
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-[#111827] dark:text-white text-[16px] leading-snug">{q}</span>
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${open ? "bg-[#efaf0a] text-[#3d2700] rotate-180" : "bg-gray-100 dark:bg-white/10 text-[#6b7280] dark:text-gray-400"}`}>
          <svg width="11" height="7" viewBox="0 0 12 8" fill="none">
            <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="px-6 pb-5 text-[#4b5563] dark:text-[#9ca3af] text-[15px] leading-relaxed border-t border-gray-100 dark:border-white/10 pt-4">
          {a}
        </p>
      )}
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────────────── */
export default function HomePage() {
  const [form, setForm] = useState({ name: "", phone: "", city: "Lahore", bill: "" });
  const whatsappNumber = "923008402371";

  const handleWhatsAppSubmit = () => {
    const message = [
      "AJS Solar Consultation Request",
      `Name: ${form.name.trim() || "N/A"}`,
      `Phone: ${form.phone.trim() || "N/A"}`,
      `City: ${form.city.trim() || "N/A"}`,
      `Monthly Bill: ${form.bill.trim() || "N/A"}`,
    ].join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white dark:from-[#0c1120] dark:via-[#0f1728] dark:to-[#1a1f2f] pt-[68px]">
        <Image
          src="/assets/home/home_hero.webp"
          alt="Home Hero"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/10 dark:from-[#0c1120]/85 dark:via-[#0c1120]/45 dark:to-[#0c1120]/5" />
        {/* Subtle radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#efaf0a]/6 dark:bg-[#efaf0a]/5 rounded-full blur-3xl pointer-events-none" />
        {/* Grid dots pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #111827 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center gap-7 py-20">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/25 border border-amber-200 dark:border-amber-700/40 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#efaf0a]" />
            <span className="text-amber-700 dark:text-amber-400 text-[13px] font-semibold tracking-wide">
              Pakistan&apos;s #1 Rated Solar Company
            </span>
            <div className="flex gap-0.5 ml-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="10" height="10" viewBox="0 0 16 16" fill="#efaf0a">
                  <path d="M8 1l1.854 3.753 4.146.603-3 2.926.708 4.131L8 10.347l-3.708 1.966L5 7.282 2 4.356l4.146-.603z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Heading */}
          <h1
            className="text-[2.75rem] sm:text-6xl lg:text-7xl font-extrabold text-[#111827] dark:text-white leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
          >
            Cut Your Electricity Bill<br />
            by Up to{" "}
            <span className="relative inline-block">
              <span className="text-[#efaf0a]">70%</span>
              <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-[#efaf0a]/30 rounded-full" />
            </span>
            {" "}with Solar
          </h1>

          {/* Subtext */}
          <p className="max-w-[560px] text-[#4b5563] dark:text-[#9ca3af] text-[17px] sm:text-lg leading-relaxed">
            Harness the power of the sun to achieve energy independence. Premium installations with Tier-1 solar panels and guaranteed long-term savings.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 items-center">
            <a
              href="#contact"
              className="bg-[#efaf0a] text-[#3d2700] font-bold text-[16px] px-8 py-4 rounded-full shadow-xl shadow-[#efaf0a]/25 hover:bg-[#d9a008] hover:-translate-y-0.5 active:scale-95 transition-all"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Get My Free Solar Estimate
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-[#374151] dark:text-gray-200 font-semibold text-[16px] px-8 py-4 rounded-full hover:border-[#111827] dark:hover:border-gray-300 hover:text-[#111827] dark:hover:text-white transition-colors"
            >
              View Our Projects
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[13px] text-[#6b7280] dark:text-gray-500 pt-2">
            {["✓ No deposit needed", "✓ Free site assessment", "✓ 25-year panel warranty"].map((t) => (
              <span key={t} className="flex items-center">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────── */}
      <section className="bg-[#111827] dark:bg-[#0a0f1a]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 px-6 first:pl-0 last:pr-0 text-center">
              <span
                className="text-[2.25rem] font-extrabold text-[#efaf0a] leading-none"
                style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
              >
                {s.value}
              </span>
              <span className="text-white text-[14px] font-semibold mt-0.5">{s.label}</span>
              <span className="text-gray-400 text-[12px]">{s.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Solar ─────────────────────────────── */}
      <section className="bg-white dark:bg-[#1a1f2f] py-24">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex flex-col gap-14">
          {/* Header */}
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-[#efaf0a] text-[13px] font-bold uppercase tracking-[1.5px]">Benefits</span>
            <h2
              className="text-[2.25rem] sm:text-5xl font-extrabold text-[#111827] dark:text-white leading-tight"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Why Choose Solar?
            </h2>
            <p className="max-w-[500px] text-[#4b5563] dark:text-[#9ca3af] text-[16px] leading-relaxed">
              Investing in solar energy is a smart move for both your finances and the environment.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group bg-[#f9fafb] dark:bg-[#1e2a3d] border border-gray-100 dark:border-white/8 rounded-2xl p-7 flex flex-col gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center`}>
                  {typeof f.icon === "string" ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={f.icon} alt="" width={24} height={24} loading="lazy" />
                    </>
                  ) : (
                    f.icon
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[#9ca3af] text-[12px] font-bold uppercase tracking-[1px]">
                    0{i + 1}
                  </span>
                  <h3
                    className="font-bold text-[#111827] dark:text-white text-[18px] leading-snug"
                    style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-[#4b5563] dark:text-[#9ca3af] text-[14px] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section id="services" className="bg-[#f9fafb] dark:bg-[#141928] py-24">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex flex-col gap-14">
          {/* Header */}
          <div className="flex flex-col items-center gap-3 text-center max-w-xl mx-auto">
            <span className="text-[#efaf0a] text-[13px] font-bold uppercase tracking-[1.5px]">What We Offer</span>
            <h2
              className="text-[2.25rem] sm:text-[2.75rem] font-extrabold text-[#111827] dark:text-white"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Our Solar Services
            </h2>
            <p className="text-[#4b5563] dark:text-[#9ca3af] text-[15px] leading-relaxed">
              Comprehensive energy solutions tailored to every scale — from cozy homes to massive industrial plants.
            </p>
          </div>

          {/* Bento grid */}
          <div className="flex flex-col gap-4">
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className={`relative h-80 lg:h-96 lg:flex-[2] rounded-3xl overflow-hidden bg-gradient-to-br ${services[0].gradient}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={services[0].image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/15 text-white text-[12px] font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {services[0].category}
                  </span>
                </div>
                <div className="absolute bottom-7 left-7 right-7 flex flex-col gap-3">
                  <h3 className="text-white text-[22px] font-bold leading-snug"
                    style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}>
                    {services[0].title}
                  </h3>
                  <p className="text-white/70 text-[14px] leading-relaxed">{services[0].desc}</p>
                  <button className="self-start bg-[#efaf0a] text-[#3d2700] font-semibold text-[13px] px-5 py-2 rounded-full hover:bg-[#d9a008] transition-colors mt-1">
                    Get Quote →
                  </button>
                </div>
              </div>
              <div className={`relative h-80 lg:h-96 lg:flex-1 rounded-3xl overflow-hidden bg-gradient-to-br ${services[1].gradient}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={services[1].image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/15 text-white text-[12px] font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {services[1].category}
                  </span>
                </div>
                <div className="absolute bottom-7 left-7 right-7 flex flex-col gap-3">
                  <h3 className="text-white text-[22px] font-bold leading-snug"
                    style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}>
                    {services[1].title}
                  </h3>
                  <p className="text-white/70 text-[14px] leading-relaxed">{services[1].desc}</p>
                  <button className="self-start bg-[#efaf0a] text-[#3d2700] font-semibold text-[13px] px-5 py-2 rounded-full hover:bg-[#d9a008] transition-colors mt-1">
                    Get Quote →
                  </button>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className={`relative h-60 lg:flex-1 rounded-3xl overflow-hidden bg-gradient-to-br ${services[2].gradient}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={services[2].image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/15 text-white text-[12px] font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {services[2].category}
                  </span>
                </div>
                <div className="absolute bottom-7 left-7 right-7 flex flex-col gap-2">
                  <h3 className="text-white text-[20px] font-bold"
                    style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}>
                    {services[2].title}
                  </h3>
                  <p className="text-white/70 text-[13px] leading-relaxed">{services[2].desc}</p>
                </div>
              </div>
              <div className={`relative h-60 lg:flex-[2] rounded-3xl overflow-hidden bg-gradient-to-br ${services[3].gradient}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={services[3].image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/15 text-white text-[12px] font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {services[3].category}
                  </span>
                </div>
                <div className="absolute bottom-7 left-7 right-7 flex flex-col gap-2">
                  <h3 className="text-white text-[20px] font-bold"
                    style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}>
                    {services[3].title}
                  </h3>
                  <p className="text-white/70 text-[13px] leading-relaxed">{services[3].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proven Results / Projects ────────────────────── */}
      <section id="projects" className="bg-white dark:bg-[#1a1f2f] py-24">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex flex-col gap-14">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-md">
              <span className="text-[#efaf0a] text-[13px] font-bold uppercase tracking-[1.5px]">Our Work</span>
              <h2
                className="text-[2.25rem] sm:text-[2.75rem] font-extrabold text-[#111827] dark:text-white leading-tight"
                style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
              >
                Proven Results
              </h2>
              <p className="text-[#4b5563] dark:text-[#9ca3af] text-[15px] leading-relaxed">
                Actual data from recent installations across Pakistan showing real-world savings.
              </p>
            </div>
            <button className="shrink-0 flex items-center gap-2 border-2 border-[#111827] dark:border-gray-500 text-[#111827] dark:text-white font-semibold text-[14px] px-6 py-3 rounded-full hover:bg-[#111827] hover:text-white dark:hover:bg-white dark:hover:text-[#111827] transition-colors">
              View All Projects
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <div key={p.name} className="bg-[#f9fafb] dark:bg-[#1e2a3d] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/8 shadow-sm hover:shadow-lg transition-shadow">
                {/* Photo area */}
                <div className="relative h-[220px] bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-5 left-5 flex gap-2">
                    <span className="bg-[#efaf0a] text-[#3d2700] text-[12px] font-bold px-3 py-1 rounded-lg">
                      {p.label}
                    </span>
                    <span className="bg-black/30 text-white text-[12px] font-medium px-3 py-1 rounded-lg backdrop-blur-sm">
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5">
                    <p className="text-white font-bold text-[18px]">{p.name}</p>
                    <p className="text-white/70 text-[13px]">{p.location}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="p-7 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wide">{p.type}</span>
                    <span className="text-[#16a34a] dark:text-emerald-400 font-bold text-[16px]">{p.savings}</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-[14px]">
                      <span className="text-[#6b7280] dark:text-[#9ca3af]">Before Solar</span>
                      <span className="font-semibold text-[#ef4444]">{p.before}</span>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <span className="text-[#6b7280] dark:text-[#9ca3af]">After Solar</span>
                      <span className="font-semibold text-[#2563eb]">{p.after}</span>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-1">
                      <div className="h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#efaf0a] to-[#f59e0b] rounded-full transition-all"
                          style={{ width: p.barWidth }}
                        />
                      </div>
                      <p className="text-right text-[12px] text-[#6b7280] dark:text-[#9ca3af] mt-1.5">Current bill after solar</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Tiers ────────────────────────────────── */}
      <section className="bg-[#f9fafb] dark:bg-[#141928] py-24">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex flex-col gap-14">
          {/* Header */}
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-[#efaf0a] text-[13px] font-bold uppercase tracking-[1.5px]">Pricing</span>
            <h2
              className="text-[2.25rem] sm:text-5xl font-extrabold text-[#111827] dark:text-white"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Pick Your Saving Plan
            </h2>
            <p className="text-[#4b5563] dark:text-[#9ca3af] text-[16px] max-w-[500px]">
              Detailed ROI analysis for our most popular installation sizes.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-7 flex flex-col gap-4 border transition-shadow hover:shadow-xl ${
                  tier.featured
                    ? "bg-[#111827] border-[#111827] shadow-2xl shadow-black/20 scale-[1.02]"
                    : "bg-white dark:bg-[#1e2a3d] border-gray-200 dark:border-white/10"
                }`}
              >
                {/* Most popular badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#efaf0a] text-[#3d2700] text-[12px] font-bold px-4 py-1 rounded-full whitespace-nowrap">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3
                    className={`text-[18px] font-bold ${tier.featured ? "text-white" : "text-[#111827] dark:text-white"}`}
                    style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
                  >
                    {tier.name}
                  </h3>
                </div>

                <div className="flex flex-col gap-0">
                  <span className="text-[2rem] font-extrabold text-[#efaf0a] leading-none">{tier.price}</span>
                  <span className={`text-[13px] mt-1 ${tier.featured ? "text-gray-400" : "text-[#6b7280] dark:text-[#9ca3af]"}`}>
                    {tier.period}
                  </span>
                </div>

                {/* Divider */}
                <div className={`h-px ${tier.featured ? "bg-white/10" : "bg-gray-100 dark:bg-white/10"}`} />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5">
                      <CheckIcon dark={tier.featured} />
                      <span className={`text-[14px] ${tier.featured ? "text-gray-300" : "text-[#4b5563] dark:text-[#9ca3af]"}`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-2 w-full py-3 rounded-full font-bold text-[14px] transition-all active:scale-95 ${
                    tier.featured
                      ? "bg-[#efaf0a] text-[#3d2700] hover:bg-[#d9a008] shadow-lg shadow-[#efaf0a]/25"
                      : "border-2 border-[#efaf0a] text-[#efaf0a] hover:bg-[#efaf0a] hover:text-[#3d2700]"
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="bg-white dark:bg-[#1a1f2f] py-24">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex flex-col gap-14">
          {/* Header */}
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-[#efaf0a] text-[13px] font-bold uppercase tracking-[1.5px]">Reviews</span>
            <h2
              className="text-[2.25rem] sm:text-5xl font-extrabold text-[#111827] dark:text-white"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              What Our Clients Say
            </h2>
            <p className="text-[#4b5563] dark:text-[#9ca3af] text-[16px] max-w-[500px]">
              Real stories from homeowners and businesses across Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#f9fafb] dark:bg-[#1e2a3d] border border-gray-100 dark:border-white/8 rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Large quote mark */}
                <div className="absolute top-4 right-6 text-[80px] leading-none text-gray-100 dark:text-white/5 font-serif select-none pointer-events-none">
                  &ldquo;
                </div>

                <StarRating count={t.stars} />
                <p className="text-[#374151] dark:text-[#d1d5db] text-[15px] leading-relaxed flex-1 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-1 border-t border-gray-100 dark:border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#efaf0a] flex items-center justify-center text-[#3d2700] font-bold text-[16px] shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-[#111827] dark:text-white text-[15px]">{t.name}</p>
                    <p className="text-[#6b7280] dark:text-[#9ca3af] text-[13px]">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] dark:bg-[#141928] py-24">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 flex flex-col gap-8">
          {/* Header */}
          <div className="text-center flex flex-col gap-3">
            <span className="text-[#efaf0a] text-[13px] font-bold uppercase tracking-[1.5px]">FAQ</span>
            <h2
              className="text-[2rem] sm:text-[2.5rem] font-extrabold text-[#111827] dark:text-white"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 mt-2">
            <p className="text-[#4b5563] dark:text-[#9ca3af] text-[15px]">Still have questions?</p>
            <a
              href="#contact"
              className="border-2 border-[#111827] dark:border-gray-400 text-[#111827] dark:text-gray-200 font-semibold text-[15px] px-8 py-3.5 rounded-full hover:bg-[#111827] dark:hover:bg-white hover:text-white dark:hover:text-[#111827] transition-colors"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA / Contact Form ───────────────────────────── */}
      <section id="contact" className="bg-white dark:bg-[#1a1f2f] py-24">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="bg-gradient-to-br from-[#efaf0a] to-[#f59e0b] rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

              {/* Left – Text / Info */}
              <div className="flex flex-col gap-7 px-8 sm:px-12 py-12 lg:py-14">
                <div>
                  <p className="text-[#3d2700]/70 text-[13px] font-bold uppercase tracking-[1.5px] mb-3">Free Consultation</p>
                  <h2
                    className="text-[1.9rem] sm:text-[2.25rem] font-extrabold text-[#111827] leading-snug"
                    style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
                  >
                    Ready to Save? Get a Free Solar Consultation
                  </h2>
                  <p className="text-[#3d2700]/80 text-[15px] leading-relaxed mt-3">
                    Our experts will analyze your bills and provide a customized solar proposal within 24 hours.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <a
                    href="tel:+923008402371"
                    className="flex items-center gap-4 bg-white/25 rounded-2xl p-4 hover:bg-white/35 transition-colors"
                  >
                    <div className="w-10 h-10 bg-white/40 rounded-xl flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" className="text-[#3d2700]">
                        <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#3d2700]/70 text-[12px] font-semibold uppercase tracking-wide">Call Us</p>
                      <p className="text-[#111827] font-bold text-[16px]">+92 300 8402371</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/923008402371"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white/25 rounded-2xl p-4 hover:bg-white/35 transition-colors"
                  >
                    <div className="w-10 h-10 bg-white/40 rounded-xl flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#3d2700]">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M5.077 0a5.077 5.077 0 00-5.077 5.077c0 .896.234 1.736.642 2.467L.046 12l4.571-1.197a10.124 10.124 0 002.512.317h.002C12.044 11.12 16 7.163 16 2.255 16 1.008 14.993 0 13.745 0H5.077zM12 22.286A10.286 10.286 0 001.714 12 10.286 10.286 0 0012 1.714 10.286 10.286 0 0122.286 12 10.286 10.286 0 0112 22.286zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#3d2700]/70 text-[12px] font-semibold uppercase tracking-wide">WhatsApp</p>
                      <p className="text-[#111827] font-bold text-[16px]">+92 300 8402371</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right – Form */}
              <div className="bg-white dark:bg-[#1e2a3d] px-8 sm:px-10 py-12 lg:py-14 flex flex-col gap-5 rounded-3xl lg:rounded-l-none lg:rounded-r-3xl shadow-xl">
                <div>
                  <h3
                    className="text-[20px] font-bold text-[#111827] dark:text-white"
                    style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
                  >
                    Get Your Free Estimate
                  </h3>
                  <p className="text-[#6b7280] dark:text-[#9ca3af] text-[14px] mt-1">
                    We&apos;ll respond within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-[#374151] dark:text-gray-300">Full Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="h-11 border border-gray-200 dark:border-white/15 dark:bg-[#141928] dark:text-white dark:placeholder-gray-500 rounded-xl px-4 text-[14px] text-[#111827] focus:outline-none focus:border-[#efaf0a] focus:ring-2 focus:ring-[#efaf0a]/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-[#374151] dark:text-gray-300">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="h-11 border border-gray-200 dark:border-white/15 dark:bg-[#141928] dark:text-white dark:placeholder-gray-500 rounded-xl px-4 text-[14px] text-[#111827] focus:outline-none focus:border-[#efaf0a] focus:ring-2 focus:ring-[#efaf0a]/20 transition-all"
                      placeholder="+92 300 0000000"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-[#374151] dark:text-gray-300">City</label>
                  <select
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="h-11 border border-gray-200 dark:border-white/15 dark:bg-[#141928] dark:text-white rounded-xl px-4 text-[14px] text-[#111827] focus:outline-none focus:border-[#efaf0a] focus:ring-2 focus:ring-[#efaf0a]/20 transition-all bg-white"
                  >
                    {["Lahore", "Karachi", "Islamabad", "Faisalabad", "Rawalpindi", "Multan", "Peshawar", "Quetta"].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-[#374151] dark:text-gray-300">Monthly Electricity Bill (Rs.)</label>
                  <input
                    type="text"
                    value={form.bill}
                    onChange={(e) => setForm({ ...form, bill: e.target.value })}
                    className="h-11 border border-gray-200 dark:border-white/15 dark:bg-[#141928] dark:text-white dark:placeholder-gray-500 rounded-xl px-4 text-[14px] text-[#111827] focus:outline-none focus:border-[#efaf0a] focus:ring-2 focus:ring-[#efaf0a]/20 transition-all"
                    placeholder="e.g. 25,000"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full bg-[#111827] dark:bg-[#efaf0a] text-white dark:text-[#3d2700] font-bold text-[15px] py-3.5 rounded-xl shadow-lg hover:bg-[#1f2937] dark:hover:bg-[#d9a008] active:scale-[0.98] transition-all mt-1"
                >
                  Get Free Consultation →
                </button>

                <p className="text-[#9ca3af] text-[12px] text-center">
                  No commitment. Free assessment. Guaranteed response within 24h.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
