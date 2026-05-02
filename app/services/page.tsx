import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services – AJS Solar",
  description:
    "Explore AJS Solar's full range of solar energy services — residential, commercial, industrial, and agriculture solar solutions across Pakistan.",
};

/* ─── Icons ──────────────────────────────────────────────── */

function HomeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20V9l5-3v3l5-3v3l5-3v14H2z" />
      <path d="M17 20V4h5v16" />
      <rect x="5" y="14" width="3" height="6" />
      <rect x="10" y="14" width="3" height="6" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.34a1 1 0 001.66 1.1C7.5 18.37 12 16 17 8z" />
      <path d="M3.82 19.34C6 14 10 10 17 8" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="6" width="18" height="12" rx="2" />
      <path d="M23 13v-2" strokeWidth="2.5" />
      <path d="M5 10v4M9 10v4M13 10v4" />
    </svg>
  );
}

function ConsultIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9l6 6M15 9l-6 6" />
      <circle cx="9" cy="9" r="1" fill="currentColor" />
      <circle cx="15" cy="15" r="1" fill="currentColor" />
    </svg>
  );
}

function InstallIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v10M12 12l-4-4M12 12l4-4" />
      <path d="M3 17l2 2 4-4M3 7h5M16 7h5" />
      <path d="M2 20h20" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012.31 1.2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="#efaf0a" />
      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9h12M10 4l5 5-5 5" />
    </svg>
  );
}

function SunPanelIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="14" width="40" height="26" rx="2" fill="#fef3c7" stroke="#efaf0a" strokeWidth="1.5" />
      <path d="M4 22h40M4 30h40M16 14v26M32 14v26" stroke="#efaf0a" strokeWidth="1.5" />
      <path d="M24 4v6M12 6.5l3 5.2M36 6.5l-3 5.2" stroke="#efaf0a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Data ───────────────────────────────────────────────── */

const mainServices = [
  {
    icon: <HomeIcon />,
    title: "Residential Solar",
    subtitle: "For Homes",
    desc: "Empower your family with energy independence and dramatically reduce monthly electricity bills. Our residential solar systems are custom-designed to match your home's energy consumption.",
    features: ["3kW – 20kW systems", "25-year panel warranty", "Battery backup options", "Net metering eligible"],
    accent: "from-amber-50 to-yellow-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    icon: <BuildingIcon />,
    title: "Commercial Solar",
    subtitle: "For Businesses",
    desc: "Reduce your operating costs and enhance your brand's sustainability credentials. Our commercial solutions are engineered for peak performance across offices, malls, and retail spaces.",
    features: ["20kW – 500kW systems", "ROI in 3–5 years", "Remote monitoring", "NEPRA compliant"],
    accent: "from-sky-50 to-blue-50",
    border: "border-sky-200",
    iconBg: "bg-sky-100 text-sky-600",
  },
  {
    icon: <FactoryIcon />,
    title: "Industrial Solar",
    subtitle: "For Industry",
    desc: "High-capacity solar solutions built for heavy manufacturing, production plants, and industrial estates. Slash energy costs and achieve energy security at scale.",
    features: ["500kW+ systems", "Grid-tied & hybrid", "24/7 monitoring", "Custom financing"],
    accent: "from-slate-50 to-gray-50",
    border: "border-slate-200",
    iconBg: "bg-slate-100 text-slate-600",
  },
  {
    icon: <LeafIcon />,
    title: "Agriculture Solar",
    subtitle: "For Farms",
    desc: "Solar-powered irrigation and agricultural energy solutions that lower input costs for farmers. Reliable, weather-resistant systems built for outdoor field conditions.",
    features: ["Solar tube wells", "Drip irrigation power", "Off-grid capable", "Government subsidy guidance"],
    accent: "from-green-50 to-emerald-50",
    border: "border-green-200",
    iconBg: "bg-green-100 text-green-600",
  },
  {
    icon: <BatteryIcon />,
    title: "Solar Battery Storage",
    subtitle: "Energy Independence",
    desc: "Store excess solar energy for use at night or during load shedding. Our lithium battery systems ensure 24/7 power availability, completely eliminating dependency on the national grid.",
    features: ["Lithium & LiFePO4", "Up to 10-year warranty", "App-controlled", "Scalable capacity"],
    accent: "from-violet-50 to-purple-50",
    border: "border-violet-200",
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    icon: <WrenchIcon />,
    title: "O&M Services",
    subtitle: "Maintenance & Support",
    desc: "Protect your solar investment with our comprehensive operations and maintenance packages. We offer scheduled cleanings, performance audits, and rapid fault response.",
    features: ["Annual maintenance plans", "Performance audits", "Rapid response team", "Panel cleaning"],
    accent: "from-orange-50 to-rose-50",
    border: "border-orange-200",
    iconBg: "bg-orange-100 text-orange-600",
  },
];

const process = [
  {
    step: "01",
    icon: <ConsultIcon />,
    title: "Free Consultation",
    desc: "We assess your energy needs, roof condition, and site specifics to recommend the optimal system size and type.",
  },
  {
    step: "02",
    icon: <DesignIcon />,
    title: "Custom System Design",
    desc: "Our engineers design a tailor-made solar layout with precise energy yield projections and cost-saving calculations.",
  },
  {
    step: "03",
    icon: <InstallIcon />,
    title: "Professional Installation",
    desc: "Certified technicians install your system using Tier-1 components, with NEPRA grid connection handled end-to-end.",
  },
  {
    step: "04",
    icon: <SupportIcon />,
    title: "Lifetime Support",
    desc: "24/7 monitoring, annual maintenance, and a dedicated support team ensure your system performs at peak for 25+ years.",
  },
];

const whyUs = [
  "8+ years of solar expertise in Pakistan",
  "500+ successful installations nationwide",
  "Tier-1 certified panels & inverters only",
  "NEPRA & WAPDA licensed contractor",
  "In-house engineering & design team",
  "Flexible financing & easy installments",
  "Comprehensive 25-year panel warranty",
  "Real-time performance monitoring app",
];

const faqs = [
  {
    q: "How much does a residential solar system cost?",
    a: "System costs vary by size and components. A standard 5kW home system typically ranges from PKR 700,000 to PKR 950,000 including installation. We offer flexible payment plans and can arrange financing.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential installations are completed within 1–3 days. Commercial and industrial projects may take 1–4 weeks depending on system size and site requirements.",
  },
  {
    q: "Will solar work during load shedding?",
    a: "Yes — with a battery storage add-on, your home or business will have uninterrupted power during grid outages. Hybrid and off-grid systems offer complete energy independence.",
  },
  {
    q: "What is the payback period?",
    a: "Most residential systems pay back in 3–5 years through electricity bill savings. Commercial systems often achieve payback in 2–4 years due to higher energy consumption.",
  },
  {
    q: "Do you handle NEPRA and WAPDA paperwork?",
    a: "Absolutely. AJS Solar manages the entire net metering application, NEPRA licensing, and WAPDA connection process on your behalf — at no extra charge.",
  },
];

/* ─── Sub-components ─────────────────────────────────────── */

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none bg-white dark:bg-[#1e2538] hover:bg-gray-50 dark:hover:bg-[#232940] transition-colors">
        <span className="font-semibold text-[#111827] dark:text-white text-base" style={{ fontFamily: "Manrope, sans-serif" }}>
          {q}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-[#4b5563] dark:text-gray-300 group-open:bg-[#efaf0a] group-open:text-[#412d00] transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path className="group-open:hidden" d="M7 2v10M2 7h10" />
            <path className="hidden group-open:block" d="M2 7h10" />
          </svg>
        </span>
      </summary>
      <div className="px-6 pb-5 pt-1 bg-white dark:bg-[#1e2538] text-[#4b5563] dark:text-[#9ca3af] text-base leading-relaxed">
        {a}
      </div>
    </details>
  );
}

/* ─── Page ───────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-[#1a1f2f]">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#fffbeb] via-white to-[#f0fdf4] dark:from-[#1a1f2f] dark:via-[#1e2538] dark:to-[#1a1f2f]">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#efaf0a]/8 dark:bg-[#efaf0a]/5 blur-3xl translate-x-1/2 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-green-500/6 dark:bg-green-500/4 blur-3xl -translate-x-1/3 translate-y-1/4" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#4b5563] dark:text-[#9ca3af] mb-8">
            <Link href="/" className="hover:text-[#efaf0a] transition-colors">Home</Link>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[#111827] dark:text-white font-medium">Services</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#efaf0a]/12 border border-[#efaf0a]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#efaf0a]" />
                <span className="text-sm font-semibold text-[#92620a] dark:text-[#efaf0a]" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Trusted Solar Solutions
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#111827] dark:text-white leading-tight mb-6"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Powering Pakistan with <span className="text-[#efaf0a]">Clean Energy</span>
              </h1>

              <p className="text-lg text-[#4b5563] dark:text-[#9ca3af] leading-relaxed mb-8 max-w-xl">
                From rooftop residential panels to utility-scale industrial installations — AJS Solar delivers end-to-end solar solutions backed by 8+ years of expertise and 500+ successful projects.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#efaf0a] text-[#412d00] font-bold px-7 py-3.5 rounded-full shadow-lg shadow-amber-200/50 dark:shadow-amber-900/30 hover:bg-[#d99e09] transition-colors"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Get Free Quote
                  <ArrowIcon />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/15 text-[#111827] dark:text-white font-semibold px-7 py-3.5 rounded-full hover:border-gray-300 dark:hover:border-white/30 transition-colors"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right — visual */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-[380px] h-[380px]">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#efaf0a]/30 animate-spin" style={{ animationDuration: "30s" }} />
                {/* Mid ring */}
                <div className="absolute inset-8 rounded-full border border-[#efaf0a]/20" />
                {/* Center panel */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#fef9e7] to-[#fef3c7] dark:from-[#2d2400] dark:to-[#1a1600] flex items-center justify-center shadow-xl">
                  <SunPanelIcon />
                </div>
                {/* Floating stat badges */}
                <div className="absolute top-4 right-4 bg-white dark:bg-[#232940] rounded-2xl shadow-lg px-4 py-3 border border-gray-100 dark:border-white/10">
                  <p className="text-xl font-extrabold text-[#111827] dark:text-white" style={{ fontFamily: "Manrope, sans-serif" }}>500+</p>
                  <p className="text-xs text-[#4b5563] dark:text-[#9ca3af]">Installations</p>
                </div>
                <div className="absolute bottom-8 left-0 bg-white dark:bg-[#232940] rounded-2xl shadow-lg px-4 py-3 border border-gray-100 dark:border-white/10">
                  <p className="text-xl font-extrabold text-[#efaf0a]" style={{ fontFamily: "Manrope, sans-serif" }}>10MW+</p>
                  <p className="text-xs text-[#4b5563] dark:text-[#9ca3af]">Generated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────── */}
      <section className="bg-[#111827] dark:bg-[#0d1017]">
        <div className="max-w-[1280px] mx-auto px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-white/10">
          {[
            { value: "500+", label: "Installations" },
            { value: "10MW+", label: "Energy Generated" },
            { value: "98%", label: "Happy Customers" },
            { value: "8+", label: "Years Experience" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center py-2 lg:py-0">
              <span className="text-3xl font-extrabold text-[#efaf0a]" style={{ fontFamily: "Manrope, sans-serif" }}>
                {s.value}
              </span>
              <span className="text-gray-400 text-sm mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────── */}
      <section id="services" className="py-24 bg-[#f9fafb] dark:bg-[#161b2a]">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#efaf0a] mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
              What We Offer
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white mb-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Complete Solar Solutions
            </h2>
            <p className="text-[#4b5563] dark:text-[#9ca3af] text-lg max-w-2xl mx-auto">
              Whether you're a homeowner, business owner, or farmer — we have a tailored solar solution designed for your specific energy needs.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((svc) => (
              <div
                key={svc.title}
                className={`group relative bg-gradient-to-br ${svc.accent} dark:from-[#1e2538] dark:to-[#232940] border ${svc.border} dark:border-white/10 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${svc.iconBg} dark:bg-white/10 dark:text-gray-300 flex items-center justify-center mb-6`}>
                  {svc.icon}
                </div>

                {/* Badge */}
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4b5563] dark:text-[#9ca3af] mb-2 block">
                  {svc.subtitle}
                </span>

                <h3
                  className="text-xl font-extrabold text-[#111827] dark:text-white mb-3"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {svc.title}
                </h3>

                <p className="text-[#4b5563] dark:text-[#9ca3af] text-sm leading-relaxed mb-6">
                  {svc.desc}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-8">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[#374151] dark:text-gray-300">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#92620a] dark:text-[#efaf0a] hover:gap-3 transition-all"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Get a Quote
                  <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#1a1f2f]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#efaf0a] mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
              How It Works
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white mb-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Your Journey to Solar
            </h2>
            <p className="text-[#4b5563] dark:text-[#9ca3af] text-lg max-w-xl mx-auto">
              A simple, transparent 4-step process from first call to full power — handled by our team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-[#efaf0a]/30 z-0" />

            {process.map((step, idx) => (
              <div key={step.step} className="relative z-10 flex flex-col items-center text-center">
                {/* Step bubble */}
                <div className="relative w-[104px] h-[104px] mb-6">
                  <div className="absolute inset-0 rounded-full bg-[#efaf0a]/10 dark:bg-[#efaf0a]/8" />
                  <div className="absolute inset-3 rounded-full bg-white dark:bg-[#1e2538] border-2 border-[#efaf0a]/40 flex items-center justify-center text-[#efaf0a] shadow-lg shadow-amber-100/60 dark:shadow-none">
                    {step.icon}
                  </div>
                  <span
                    className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#efaf0a] text-[#412d00] text-xs font-extrabold flex items-center justify-center shadow"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {idx + 1}
                  </span>
                </div>

                <h3
                  className="text-lg font-extrabold text-[#111827] dark:text-white mb-2"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-[#111827] to-[#1e2d3d] dark:from-[#0d1017] dark:to-[#0f1a24] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#efaf0a]/10 blur-3xl" />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#efaf0a] mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
                Why AJS Solar
              </p>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Pakistan's Most Trusted Solar Partner
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                We don't just install solar panels — we build long-term energy partnerships. Every project comes with our commitment to quality, transparency, and customer satisfaction.
              </p>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#efaf0a] text-[#412d00] font-bold px-7 py-3.5 rounded-full shadow-lg shadow-amber-500/20 hover:bg-[#d99e09] transition-colors"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Start Your Solar Journey
                <ArrowIcon />
              </Link>
            </div>

            {/* Right — checklist */}
            <div className="grid sm:grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/8 hover:border-[#efaf0a]/30 transition-colors"
                >
                  <span className="shrink-0 mt-0.5">
                    <CheckIcon />
                  </span>
                  <span className="text-sm text-gray-200 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-24 bg-[#f9fafb] dark:bg-[#161b2a]">
        <div className="max-w-[860px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#efaf0a] mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
              Got Questions?
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#1a1f2f]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="relative bg-gradient-to-br from-[#efaf0a] to-[#f5c842] rounded-3xl px-8 sm:px-16 py-16 overflow-hidden text-center shadow-2xl shadow-amber-200/40 dark:shadow-amber-900/20">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 -translate-x-1/3 translate-y-1/3" />

            <div className="relative">
              <p className="text-[#412d00]/70 text-sm font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
                Ready to Switch?
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1000] mb-5 leading-tight"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Get Your Free Solar Quote Today
              </h2>
              <p className="text-[#412d00]/80 text-lg mb-10 max-w-xl mx-auto">
                Join 500+ satisfied customers saving thousands on electricity bills every month. No obligation, no pressure — just honest solar advice.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="tel:+923008402371"
                  className="inline-flex items-center gap-2.5 bg-[#1a1000] text-white font-bold px-8 py-4 rounded-full hover:bg-[#2d1e00] transition-colors shadow-lg"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012.31 1.2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call Now
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white/25 border border-white/40 text-[#1a1000] font-bold px-8 py-4 rounded-full hover:bg-white/35 transition-colors"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Request Quote Online
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
