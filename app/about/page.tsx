import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us – AJS Solar",
  description:
    "Learn about AJS Solar's mission, vision, team, and journey in revolutionizing Pakistan's energy landscape with clean solar energy.",
};

/* ─── Icons ──────────────────────────────────────────────── */

function SunIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 0C7 0 2 4.5 0 9.5c2 5 7 9.5 14 9.5s12-4.5 14-9.5C26 4.5 21 0 14 0zm0 15.83A6.33 6.33 0 1 1 14 3.17a6.33 6.33 0 0 1 0 12.66zM14 6.33a3.17 3.17 0 1 0 0 6.34 3.17 3.17 0 0 0 0-6.34z"
        fill="currentColor"
      />
    </svg>
  );
}

function LightningBoltIcon() {
  return (
    <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L0 17h9L7 30 20 13h-9L12 0z" fill="currentColor" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M8 17.5L6 28l6-3.5 6 3.5-2-10.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M12 6l1.5 3.5L17 10l-2.5 2.5.5 3.5L12 14.5 9 16l.5-3.5L7 10l3.5-.5L12 6z" fill="currentColor" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5 0l4 9 10 1.5-7.25 7 1.75 10.5-9-4.75-9 4.75 1.75-10.5L1.5 10.5l10-1.5L16.5 0z"
        fill="currentColor"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.5 1L2 6.5v7c0 6.63 4.9 12.83 11.5 14.5C20.1 26.33 25 20.13 25 13.5v-7L13.5 1z"
        fill="currentColor"
      />
      <path d="M9 13.5l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13.5" cy="13.5" r="11.5" stroke="currentColor" strokeWidth="2" />
      <path d="M13.5 7v6.5l4.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
    </svg>
  );
}

function BoltCircleIcon() {
  return (
    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0L2 22h10l-4 18 16-24H14L14 0z" fill="currentColor" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="42" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 30V18C0 8 6.5 2 19.5 0L22 4.5C14.5 6 10.67 9 10 14h9V30H0zm23 0V18C23 8 29.5 2 42.5 0L45 4.5C37.5 6 33.67 9 33 14h9V30H23z"
        fill="#efaf0a"
        opacity="0.4"
      />
    </svg>
  );
}

/* ─── Data ───────────────────────────────────────────────── */

const timelineItems = [
  {
    year: "2016",
    title: "Company Founded",
    description:
      "AJS Solar was born with a vision to solve the energy crisis in Pakistan through sustainable engineering.",
    side: "left" as const,
    color: "#efaf0a",
  },
  {
    year: "2018",
    title: "100th Installation",
    description:
      "Rapid growth led to our 100th successful residential installation, solidifying our reputation in the market.",
    side: "right" as const,
    color: "#006689",
  },
  {
    year: "2021",
    title: "Industrial Expansion",
    description:
      "Launched our Industrial Solar division, helping factories reduce overhead and carbon footprint.",
    side: "left" as const,
    color: "#efaf0a",
  },
  {
    year: "2024",
    title: "500+ Milestones",
    description:
      "Leading the charge with over 500 installations nationwide and a dedicated team of 50+ experts.",
    side: "right" as const,
    color: "#006689",
  },
];

const team = [
  { name: "Ali Hassan",  role: "Chief Executive Officer",  initials: "AH", roleColor: "#efaf0a" },
  { name: "Ahmed Raza",  role: "Lead Systems Engineer",    initials: "AR", roleColor: "#006689" },
  { name: "Sara Khan",   role: "Director of Sales",        initials: "SK", roleColor: "#efaf0a" },
  { name: "Usman Ali",   role: "Customer Success Lead",    initials: "UA", roleColor: "#006689" },
];

const certs = [
  {
    icon: <LightningBoltIcon />,
    color: "#efaf0a",
    title: "NEPRA Licensed",
    subtitle: "Certified for Distributed Generation",
  },
  {
    icon: <AwardIcon />,
    color: "#006689",
    title: "ISO 9001",
    subtitle: "Quality Management System Certified",
  },
  {
    icon: <StarIcon />,
    color: "#efaf0a",
    title: "Tier-1 Partner",
    subtitle: "Direct Authorized Distributor",
  },
  {
    icon: <ShieldCheckIcon />,
    color: "#006689",
    title: "25-Year Warranty",
    subtitle: "Long-term Performance Guarantee",
  },
];

const testimonials = [
  {
    quote:
      '"AJS Solar transformed our energy usage. Our monthly electricity bill dropped by 70% within the first month. The team\'s professionalism is unmatched in Lahore."',
    name: "Mian Shahid",
    role: "Industrialist, Lahore",
    initials: "MS",
    initialsColor: "#efaf0a",
  },
  {
    quote:
      '"Choosing AJS was the best decision for our home. From the initial survey to the final commissioning, the process was seamless. Highly recommend their support team!"',
    name: "Ayesha Khan",
    role: "Homeowner, Islamabad",
    initials: "AK",
    initialsColor: "#006689",
  },
];

/* ─── Page ───────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-[#1a1f2f]">

      {/* ── 1. Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden min-h-[640px] flex items-center pt-20"
        style={{
          backgroundImage: "url('/assets/about_img/about_hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f2f2f2] via-[#e0e0e0]/50 to-white/10 dark:from-[#1a1f2f] dark:via-[#1a1f2f]/60 dark:to-[#1a1f2f]/10" />
        {/* Corner amber glow */}
        <div className="absolute -top-24 -right-24 size-96 bg-[rgba(123,88,0,0.1)] rounded-full blur-[60px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[904px] mx-auto px-6 py-20 flex flex-col items-center gap-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(239,175,10,0.1)] border border-[rgba(239,175,10,0.2)]">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex size-full rounded-full bg-[#efaf0a] opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-[#efaf0a]" />
            </span>
            <span
              className="text-[#efaf0a] text-xs font-semibold tracking-[1.2px] uppercase"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Our Mission in Pakistan
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-[#111827] dark:text-white font-bold text-4xl sm:text-5xl lg:text-[72px] lg:leading-[1.05] text-center"
            style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
          >
            Empowering Pakistan with{" "}
            <span className="text-[#efaf0a]">Clean Solar Energy</span>
          </h1>

          {/* Description */}
          <p
            className="text-[#525252] dark:text-gray-400 text-lg text-center max-w-[730px] leading-[1.625]"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            AJS Solar is dedicated to revolutionizing Pakistan&apos;s energy landscape. Our mission is to provide
            sustainable, affordable, and high-efficiency solar solutions for every home and business across the nation.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <Link
              href="#contact"
              className="bg-[#efaf0a] text-[#111827] font-bold text-lg px-8 py-4 rounded-xl shadow-[0_20px_25px_-5px_rgba(239,175,10,0.3),0_8px_10px_-6px_rgba(239,175,10,0.3)] hover:bg-[#d99e09] transition-colors"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Get My Free Quote
            </Link>
            <div className="bg-white dark:bg-[#232940] border border-[#e5e5e5] dark:border-white/10 rounded-xl px-6 py-4 flex items-center gap-4 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
              <div>
                <p
                  className="text-[#171717] dark:text-white font-semibold text-lg leading-tight"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  500+
                </p>
                <p
                  className="text-[#737373] dark:text-gray-400 text-xs font-semibold uppercase"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Installations
                </p>
              </div>
              <div className="w-px h-8 bg-[#e5e5e5] dark:bg-white/10" />
              <div>
                <p
                  className="text-[#171717] dark:text-white font-semibold text-lg leading-tight"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  8+ Years
                </p>
                <p
                  className="text-[#737373] dark:text-gray-400 text-xs font-semibold uppercase"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Mission & Vision ──────────────────────────────── */}
      <section className="bg-[#f9fafb] dark:bg-[#141928] px-6 py-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="bg-white dark:bg-[#1e2540] border border-[#f5f5f5] dark:border-white/10 rounded-xl p-12 flex flex-col gap-4 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
            <div className="bg-[rgba(239,175,10,0.1)] rounded-xl size-16 flex items-center justify-center text-[#efaf0a]">
              <SunIcon />
            </div>
            <h2
              className="text-[#171717] dark:text-white font-bold text-3xl pt-4"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Our Mission
            </h2>
            <p
              className="text-[#525252] dark:text-gray-400 text-lg leading-[1.625]"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              To make clean, renewable solar energy accessible and affordable for every Pakistani household and
              enterprise, driving energy independence and environmental sustainability through technical excellence.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-[#1e2540] border border-[#f5f5f5] dark:border-white/10 rounded-xl p-12 flex flex-col gap-4 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
            <div className="bg-[rgba(0,102,137,0.1)] rounded-xl size-16 flex items-center justify-center text-[#006689]">
              <EyeIcon />
            </div>
            <h2
              className="text-[#171717] dark:text-white font-bold text-3xl pt-4"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Our Vision
            </h2>
            <p
              className="text-[#525252] dark:text-gray-400 text-lg leading-[1.625]"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              To be Pakistan&apos;s leading provider of renewable energy architecture, recognized for our commitment to
              quality, innovation, and long-term customer trust in a greener future.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Our Journey (Timeline) ────────────────────────── */}
      <section className="bg-white dark:bg-[#1a1f2f] px-6 py-24">
        <div className="max-w-[896px] mx-auto flex flex-col gap-20">

          {/* Heading */}
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-[#171717] dark:text-white font-bold text-4xl text-center"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Our Journey
            </h2>
            <div className="w-20 h-1 bg-[#efaf0a] rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col gap-16 md:gap-20">
            {/* Center line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#e5e5e5] dark:bg-white/10" />

            {timelineItems.map((item) => (
              <div key={item.year} className="relative flex items-start md:items-center">
                {item.side === "left" ? (
                  <>
                    {/* Left content */}
                    <div className="flex-1 text-left md:text-right md:pr-12">
                      <p
                        className="font-extrabold text-2xl mb-1"
                        style={{ color: item.color, fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
                      >
                        {item.year}
                      </p>
                      <p
                        className="font-semibold text-xl text-[#171717] dark:text-white mb-2"
                        style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-[#525252] dark:text-gray-400 text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                    {/* Center dot (desktop) */}
                    <div
                      className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[52px] size-5 rounded-full border-4 border-white dark:border-[#1a1f2f] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] z-10"
                      style={{ backgroundColor: item.color }}
                    />
                    {/* Right spacer (desktop) */}
                    <div className="hidden md:block flex-1 pl-12" />
                  </>
                ) : (
                  <>
                    {/* Left spacer (desktop) */}
                    <div className="hidden md:block flex-1 pr-12" />
                    {/* Center dot (desktop) */}
                    <div
                      className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[52px] size-5 rounded-full border-4 border-white dark:border-[#1a1f2f] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] z-10"
                      style={{ backgroundColor: item.color }}
                    />
                    {/* Right content */}
                    <div className="flex-1 text-left md:pl-12">
                      <p
                        className="font-extrabold text-2xl mb-1"
                        style={{ color: item.color, fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
                      >
                        {item.year}
                      </p>
                      <p
                        className="font-semibold text-xl text-[#171717] dark:text-white mb-2"
                        style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-[#525252] dark:text-gray-400 text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CEO Message ──────────────────────────────────── */}
      <section className="bg-[#f9fafb] dark:bg-[#141928] px-6 py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#e5e7eb] dark:bg-[#232940]">
            <Image
              src="/assets/contact_img/ajsceov2.jpeg"
              alt="Muhammad Jawaid Iqbal Goraya, Chief Executive Officer"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-5">
            <h2
              className="text-[#171717] dark:text-white font-bold text-4xl"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              A Message from Our CEO
            </h2>
            <p
              className="text-[#525252] dark:text-gray-400 text-lg leading-[1.7]"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Welcome to J&amp;S Solar! Our commitment to providing sustainable and efficient solar energy solutions is at the heart of everything we do. We believe in harnessing the power of the sun to create a brighter, cleaner future for all. Thank you for considering J&amp;S Solar for your energy needs.
            </p>
            <div>
              <p
                className="text-[#111827] dark:text-white font-semibold text-lg"
                style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
              >
                Muhammad Jawaid Iqbal Goraya
              </p>
              <p
                className="text-[#6b7280] dark:text-gray-400 text-sm uppercase tracking-[0.18em]"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Chief Executive Officer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Certifications ────────────────────────────────── */}
      <section className="bg-white dark:bg-[#1a1f2f] px-6 py-24">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16">

          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span
                className="text-[#efaf0a] text-sm tracking-[2.8px] uppercase"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Verified Excellence
              </span>
              <h2
                className="text-[#171717] dark:text-white font-bold text-4xl"
                style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
              >
                Accredited &amp; Certified
              </h2>
            </div>
            <p
              className="text-[#525252] dark:text-gray-400 text-base leading-relaxed max-w-[384px]"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              We maintain the highest standards of quality through international certifications and local regulations.
            </p>
          </div>

          {/* Cert cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certs.map((cert) => (
              <div
                key={cert.title}
                className="bg-white dark:bg-[#1e2540] border border-[#f5f5f5] dark:border-white/10 rounded-xl p-8 flex flex-col items-center gap-2 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-2" style={{ color: cert.color }}>
                  {cert.icon}
                </div>
                <p
                  className="font-bold text-base text-[#171717] dark:text-white text-center"
                  style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
                >
                  {cert.title}
                </p>
                <p
                  className="text-[#737373] dark:text-gray-400 text-sm text-center leading-snug"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  {cert.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Why Choose AJS Solar (Bento) ──────────────────── */}
      <section className="bg-[#f9fafb] dark:bg-[#141928] px-6 py-24">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">

          <h2
            className="text-[#171717] dark:text-white font-bold text-4xl text-center"
            style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
          >
            Why Choose AJS Solar?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Large card – Installation record (spans 2 cols on lg) */}
            <div className="lg:col-span-2 bg-white dark:bg-[#1e2540] border border-[#f5f5f5] dark:border-white/10 rounded-xl p-10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] relative overflow-hidden">
              <div className="absolute bottom-0 right-0 size-64 bg-[rgba(239,175,10,0.05)] blur-[50px] rounded-full pointer-events-none" />
              <p
                className="font-extrabold text-[60px] leading-none text-[#efaf0a] opacity-10 mb-4 select-none"
                style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
              >
                500+
              </p>
              <h3
                className="font-semibold text-2xl text-[#171717] dark:text-white mb-4"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Unmatched Installation Record
              </h3>
              <p
                className="text-[#525252] dark:text-gray-400 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                We have successfully completed over 500 installations across Pakistan, ranging from small homes to large
                industrial plants.
              </p>
            </div>

            {/* 8+ Years card */}
            <div className="bg-white dark:bg-[#1e2540] border border-[#f5f5f5] dark:border-white/10 rounded-xl p-10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex flex-col gap-4">
              <div className="text-[#efaf0a]">
                <ClockIcon />
              </div>
              <h3
                className="font-semibold text-2xl text-[#171717] dark:text-white pt-2"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                8+ Years Exp.
              </h3>
              <p
                className="text-[#525252] dark:text-gray-400 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Deep technical expertise in the local energy landscape.
              </p>
            </div>

            {/* High Efficiency card */}
            <div className="bg-white dark:bg-[#1e2540] border border-[#f5f5f5] dark:border-white/10 rounded-xl p-10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex flex-col gap-4">
              <div className="text-[#006689]">
                <ZapIcon />
              </div>
              <h3
                className="font-semibold text-2xl text-[#171717] dark:text-white pt-2"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                High Efficiency
              </h3>
              <p
                className="text-[#525252] dark:text-gray-400 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Utilizing only the latest Tier-1 solar technologies for maximum output.
              </p>
            </div>

            {/* CTA card (spans 2 cols on lg) */}
            <div
              className="lg:col-span-2 rounded-xl p-10 flex flex-col sm:flex-row gap-8 items-center relative overflow-hidden shadow-[0_25px_50px_-12px_rgba(239,175,10,0.3)]"
              style={{ backgroundColor: "#efaf0a" }}
            >
              <div className="flex-1 flex flex-col gap-4">
                <h3
                  className="font-semibold text-3xl text-[#111827]"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Start Your Solar Journey Today
                </h3>
                <p
                  className="text-[rgba(17,24,39,0.8)] text-lg leading-relaxed pb-4"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Join the thousands of Pakistanis reducing their bills and saving the planet.
                </p>
                <Link
                  href="#contact"
                  className="self-start bg-[#171717] text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-[#333] transition-colors"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Get Started
                </Link>
              </div>
              <div className="bg-[rgba(255,255,255,0.2)] rounded-full size-32 flex items-center justify-center shrink-0 text-white">
                <BoltCircleIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Testimonials ──────────────────────────────────── */}
      <section className="bg-white dark:bg-[#1a1f2f] px-6 py-24">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16">

          {/* Heading */}
          <div className="flex flex-col items-center gap-3">
            <h2
              className="text-[#171717] dark:text-white font-bold text-4xl text-center"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Trusted by Hundreds Across Pakistan
            </h2>
            <p
              className="text-[#525252] dark:text-gray-400 text-base text-center"
              style={{ fontFamily: "var(--font-inter, sans-serif)" }}
            >
              Real stories from our satisfied customers.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-[#1e2540] border border-[#f5f5f5] dark:border-white/10 rounded-xl p-12 flex flex-col gap-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] relative"
              >
                {/* Decorative quote mark */}
                <div className="absolute -top-2.5 left-14">
                  <QuoteIcon />
                </div>
                {/* Quote */}
                <p
                  className="text-[#525252] dark:text-gray-400 text-xl italic leading-[1.625] pt-2"
                  style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  {t.quote}
                </p>
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-[#f5f5f5] dark:bg-[#232940] rounded-full flex items-center justify-center shrink-0">
                    <span
                      className="font-semibold text-base"
                      style={{ color: t.initialsColor, fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p
                      className="font-semibold text-base text-[#171717] dark:text-white"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-[#737373] dark:text-gray-400 text-sm"
                      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Final CTA Banner ───────────────────────────────── */}
      <section className="bg-white dark:bg-[#1a1f2f] px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(239,175,10,0.1)] blur-[60px] pointer-events-none" />
        <div
          className="relative z-10 max-w-[1126px] mx-auto rounded-[32px] px-8 md:px-16 py-16 flex flex-col items-center gap-8 shadow-[0_25px_50px_-12px_rgba(239,175,10,0.4)]"
          style={{ background: "linear-gradient(132.8deg, #7b5800 0%, #efaf0a 100%)" }}
        >
          <h2
            className="text-white font-extrabold text-4xl md:text-5xl lg:text-[60px] text-center"
            style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)", lineHeight: "1.05" }}
          >
            Ready to Switch to Solar?
          </h2>
          <p
            className="text-[rgba(255,255,255,0.9)] text-lg md:text-xl text-center max-w-[621px] leading-relaxed pb-4"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            Take the first step towards energy independence. Our experts are ready to guide you through a customized
            solar solution.
          </p>
          <Link
            href="#contact"
            className="bg-[#171717] text-white font-bold text-xl px-12 py-5 rounded-xl hover:bg-[#333] transition-colors shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
            style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
          >
            Get My Free Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
}
