"use client";

import { useState } from "react";

const LOAD_OPTIONS = ["1–3 kW", "3–5 kW", "5–10 kW", "10+ kW"];
const CITIES = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta"];
const SYSTEM_TYPES = ["Residential", "Commercial", "Industrial", "Agricultural"];

/* ─── Icons ──────────────────────────────────────────────────────── */

function CheckCircleIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <circle cx="6.5" cy="6.5" r="6.5" fill="#efaf0a" fillOpacity="0.3" />
      <path d="M4 6.5L6 8.5L9 5" stroke="#efaf0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Uses currentColor — set `text-*` on the wrapper to theme this icon. */
function ChevronDownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
      <path d="M8 0C4.13 0 1 3.13 1 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5C6.62 9.5 5.5 8.38 5.5 7S6.62 4.5 8 4.5 10.5 5.62 10.5 7 9.38 9.5 8 9.5z" fill="#47c5fe" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328z" fill="#47c5fe" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
      <path d="M18 0H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z" fill="#47c5fe" />
    </svg>
  );
}

function PhoneCallIconWhite() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="white" aria-hidden="true">
      <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" aria-hidden="true">
      <circle cx="24.5" cy="24.5" r="24.5" fill="rgba(255,222,165,0.2)" />
      <path d="M26 14L17.5 26.5H25L24 35L32.5 22.5H25L26 14Z" fill="#efaf0a" stroke="#efaf0a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function ContactPage() {
  const [selectedLoad, setSelectedLoad] = useState("3–5 kW");
  const [city, setCity] = useState("Lahore");
  const [systemType, setSystemType] = useState("Residential");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
    console.log({ ...form, city, systemType, estimatedLoad: selectedLoad });
  };

  return (
    <div className="bg-[#faf8ff] dark:bg-[#0c1120]">

      {/* ─────────────────────── Hero Section ─────────────────────── */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f6f6f6, rgba(224,224,224,0.8) 50%, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none hidden dark:block"
          style={{ background: "linear-gradient(to right, rgba(12,17,32,1), rgba(22,27,43,0.9) 50%, transparent)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-[rgba(255,222,165,0.3)] dark:bg-[rgba(239,175,10,0.12)] px-3 py-1 rounded-full mb-6">
            <span
              className="text-[#7b5800] dark:text-[#efaf0a] text-[11px] sm:text-[12px] font-semibold tracking-[1.2px] uppercase"
              style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
            >
              Contact Our Experts
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-[#111827] dark:text-white text-[36px] sm:text-[52px] lg:text-[72px] font-extrabold tracking-[-1.8px] leading-[1.05] mb-5"
            style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
          >
            Get Your Free{" "}
            <span className="text-[#efaf0a]">Solar Quote</span> Today
          </h1>

          {/* Subtitle */}
          <p
            className="text-[#614500] dark:text-[rgba(255,255,255,0.6)] text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] max-w-[600px] mb-8"
            style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
          >
            Tell us about your energy needs and our experts will provide a
            customized solar solution with estimated savings.
          </p>

          {/* CTA */}
          <a
            href="#quote-form"
            className="bg-[#efaf0a] text-[#614500] font-bold text-[16px] sm:text-[18px] px-10 py-4 rounded-xl shadow-[0px_20px_25px_-5px_rgba(239,175,10,0.1),0px_8px_10px_-6px_rgba(239,175,10,0.1)] hover:bg-[#d9a008] active:scale-95 transition-all mb-6"
            style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
          >
            Request Free Quote
          </a>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
            {["No hidden charges", "Free consultation", "Fast response within 24 hours"].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <CheckCircleIcon />
                <span
                  className="text-[13px] sm:text-[14px] text-[rgba(212,196,172,0.9)] dark:text-[rgba(255,255,255,0.4)] italic font-medium"
                  style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Main Form + Info Sidebar ───────────────── */}
      <section id="quote-form" className="bg-[#f2f3ff] dark:bg-[#0a0f1a] px-4 sm:px-8 py-16 sm:py-20">
        <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* ── Left: Quote Form ── */}
          <div className="lg:col-span-7 bg-white dark:bg-[#161b2b] rounded-[32px] px-6 sm:px-10 lg:px-12 py-10 sm:py-12 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] dark:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)]">
            <h2
              className="text-[#161b2b] dark:text-white text-[26px] sm:text-[30px] font-bold leading-tight mb-8"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Request a Free Quote
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[#504533] dark:text-[#9ca3af] text-[14px] font-semibold leading-5"
                    style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-[#e3e7fd] dark:bg-[#1e2540] rounded-xl px-5 py-[18px] text-[16px] text-[#111827] dark:text-white placeholder-[#6b7280] dark:placeholder-[#4b5563] outline-none focus:ring-2 focus:ring-[#efaf0a]/40 transition-all"
                    style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-[#504533] dark:text-[#9ca3af] text-[14px] font-semibold leading-5"
                    style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="03XX-XXXXXXX"
                    className="bg-[#e3e7fd] dark:bg-[#1e2540] rounded-xl px-5 py-[18px] text-[16px] text-[#111827] dark:text-white placeholder-[#6b7280] dark:placeholder-[#4b5563] outline-none focus:ring-2 focus:ring-[#efaf0a]/40 transition-all"
                    style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                  />
                </div>
              </div>

              {/* City + System Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="city"
                    className="text-[#504533] dark:text-[#9ca3af] text-[14px] font-semibold leading-5"
                    style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                  >
                    City
                  </label>
                  <div className="relative text-[#161b2b] dark:text-white">
                    <select
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-[#e3e7fd] dark:bg-[#1e2540] rounded-xl px-5 py-4 text-[16px] text-[#161b2b] dark:text-white outline-none focus:ring-2 focus:ring-[#efaf0a]/40 appearance-none cursor-pointer transition-all dark:[color-scheme:dark]"
                      style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                    >
                      {CITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDownIcon />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="systemType"
                    className="text-[#504533] dark:text-[#9ca3af] text-[14px] font-semibold leading-5"
                    style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                  >
                    System Type
                  </label>
                  <div className="relative text-[#161b2b] dark:text-white">
                    <select
                      id="systemType"
                      value={systemType}
                      onChange={(e) => setSystemType(e.target.value)}
                      className="w-full bg-[#e3e7fd] dark:bg-[#1e2540] rounded-xl px-5 py-4 text-[16px] text-[#161b2b] dark:text-white outline-none focus:ring-2 focus:ring-[#efaf0a]/40 appearance-none cursor-pointer transition-all dark:[color-scheme:dark]"
                      style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                    >
                      {SYSTEM_TYPES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDownIcon />
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated Load chips */}
              <div className="flex flex-col gap-2">
                <span
                  className="text-[#504533] dark:text-[#9ca3af] text-[14px] font-semibold leading-5"
                  style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                >
                  Estimated Load
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {LOAD_OPTIONS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedLoad(option)}
                      className={`py-3 rounded-xl text-[14px] font-medium text-center transition-all ${
                        selectedLoad === option
                          ? "bg-[#efaf0a] text-[#614500] shadow-md shadow-[#efaf0a]/25"
                          : "bg-[#ebedff] dark:bg-[#1e2540] text-[#161b2b] dark:text-white hover:bg-[#e3e7fd] dark:hover:bg-[#252d47]"
                      }`}
                      style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-[#504533] dark:text-[#9ca3af] text-[14px] font-semibold leading-5"
                  style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your specific requirements..."
                  className="bg-[#e3e7fd] dark:bg-[#1e2540] rounded-xl px-5 py-4 text-[16px] text-[#111827] dark:text-white placeholder-[#6b7280] dark:placeholder-[#4b5563] outline-none focus:ring-2 focus:ring-[#efaf0a]/40 resize-none transition-all"
                  style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="relative w-full py-5 rounded-xl text-[#614500] text-[18px] font-semibold text-center overflow-hidden shadow-[0px_20px_25px_-5px_rgba(239,175,10,0.2),0px_8px_10px_-6px_rgba(239,175,10,0.2)] hover:opacity-90 active:scale-[0.98] transition-all"
                style={{
                  background: "linear-gradient(135deg, #7b5800 0%, #efaf0a 100%)",
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                }}
              >
                Get My Free Quote
              </button>
            </form>
          </div>

          {/* ── Right: Info Sidebar ── */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* Contact Info Card */}
            <div className="bg-[#e3e7fd] dark:bg-[#161b2b] rounded-[32px] p-8 sm:p-10 flex flex-col gap-8 border border-transparent dark:border-white/5">
              <h3
                className="text-[#161b2b] dark:text-white text-[22px] sm:text-[24px] font-bold leading-8"
                style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
              >
                Contact Information
              </h3>

              <div className="flex flex-col gap-7">
                {/* Main Office */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-[rgba(71,197,254,0.2)] dark:bg-[rgba(71,197,254,0.1)] rounded-2xl flex items-center justify-center shrink-0">
                    <MapPinIcon />
                  </div>
                  <div>
                    <p className="text-[#161b2b] dark:text-white text-[16px] font-semibold leading-6" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
                      Main Office
                    </p>
                    <p className="text-[#504533] dark:text-[#9ca3af] text-[15px] sm:text-[16px] leading-6" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
                      DHA Phase 6, Lahore, Punjab, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-[rgba(71,197,254,0.2)] dark:bg-[rgba(71,197,254,0.1)] rounded-2xl flex items-center justify-center shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-[#161b2b] dark:text-white text-[16px] font-semibold leading-6" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
                      Phone Support
                    </p>
                    <a
                      href="tel:+923008402371"
                      className="text-[#504533] dark:text-[#9ca3af] text-[15px] sm:text-[16px] leading-6 hover:text-[#efaf0a] dark:hover:text-[#efaf0a] transition-colors"
                      style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                    >
                      +92 300 8402371
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-[rgba(71,197,254,0.2)] dark:bg-[rgba(71,197,254,0.1)] rounded-2xl flex items-center justify-center shrink-0">
                    <EmailIcon />
                  </div>
                  <div>
                    <p className="text-[#161b2b] dark:text-white text-[16px] font-semibold leading-6" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
                      Email Address
                    </p>
                    <a
                      href="mailto:info@ajssolar.com"
                      className="text-[#504533] dark:text-[#9ca3af] text-[15px] sm:text-[16px] leading-6 hover:text-[#efaf0a] dark:hover:text-[#efaf0a] transition-colors"
                      style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                    >
                      info@ajssolar.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <a
                  href="tel:+923008402371"
                  className="bg-[#161b2b] dark:bg-[#0f1629] dark:border dark:border-white/10 text-[#faf8ff] font-semibold text-[15px] sm:text-[16px] flex items-center justify-center gap-2 py-4 rounded-xl hover:bg-[#1e2540] transition-colors"
                  style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                >
                  <PhoneCallIconWhite />
                  Call Now
                </a>
                <a
                  href="https://wa.me/923008402371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25d366] text-white font-semibold text-[15px] sm:text-[16px] flex items-center justify-center gap-2 py-4 rounded-xl hover:bg-[#20bc5a] transition-colors"
                  style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
                >
                  <WhatsAppIcon />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Map Card */}
            <div className="relative h-[256px] rounded-[32px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.4),0px_4px_6px_-4px_rgba(0,0,0,0.3)]">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=74.36%2C31.47%2C74.43%2C31.52&layer=mapnik&marker=31.4945%2C74.3891"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="AJS Solar office location – DHA Phase 6, Lahore"
              />
              <div
                className="absolute inset-0 flex items-end p-6 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }}
              >
                <div>
                  <p className="text-white text-[14px] font-semibold opacity-80 leading-5" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
                    Our Location
                  </p>
                  <p className="text-white text-[20px] font-semibold leading-7" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
                    Lahore, Punjab
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Quick CTA Strip ───────────────────── */}
      <section className="bg-[#7b5800] dark:bg-[#3d2900] py-8">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <BoltIcon />
            <h3
              className="text-white text-xl sm:text-2xl font-bold tracking-[-0.6px]"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Need Immediate Assistance?
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+923008402371"
              className="bg-white dark:bg-white/10 dark:hover:bg-white/20 dark:backdrop-blur-sm text-[#7b5800] dark:text-white font-semibold text-[16px] px-8 py-3 rounded-xl hover:bg-gray-50 active:scale-95 transition-all"
              style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
            >
              Direct Call
            </a>
            <a
              href="https://wa.me/923008402371"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-semibold text-[16px] px-8 py-3 rounded-xl hover:bg-white/10 active:scale-95 transition-all"
              style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
            >
              WhatsApp Live
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────── Final CTA Banner ─────────────────────── */}
      <section className="bg-[#161b2b] dark:bg-[#0a0f1a] py-24 px-4 sm:px-8">
        <div className="max-w-[896px] mx-auto flex flex-col items-center gap-8 text-center">
          <h2
            className="text-white text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold leading-tight lg:leading-[60px]"
            style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
          >
            Start Saving on Electricity Today
          </h2>
          <p
            className="text-[rgba(255,255,255,0.7)] text-[16px] sm:text-[18px] leading-[28px] max-w-[652px]"
            style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
          >
            Join thousands of homeowners and businesses who have switched to clean,
            renewable energy with AJS Solar.
          </p>
          <a
            href="#quote-form"
            className="bg-[#efaf0a] text-[#614500] font-semibold text-[18px] sm:text-[20px] px-12 py-5 rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] hover:bg-[#d9a008] active:scale-95 transition-all"
            style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
          >
            Get My Free Quote
          </a>
        </div>
      </section>

    </div>
  );
}
