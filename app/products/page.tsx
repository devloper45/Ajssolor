"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── Figma MCP asset URLs ─────────────────────────────────────── */
const ASSETS = {
  // Product card badges / brand icons
  panelBadge:    "https://www.figma.com/api/mcp/asset/d5e7da6b-f3bb-4ec4-bef6-5b6bcc7e0726",
  inverterBadge: "https://www.figma.com/api/mcp/asset/d42f1968-7cae-49ae-b9d0-78f138971b92",
  mountingBadge: "https://www.figma.com/api/mcp/asset/5bced74b-ee43-4f89-8b51-2ecd4d1ed994",
  teslaBadge:    "https://www.figma.com/api/mcp/asset/988403b7-060f-4ba5-8fb7-eb0661430818",
  // Why section icons
  tier1Icon:      "https://www.figma.com/api/mcp/asset/6ff28f72-92d0-4682-88c2-cc510520fea4",
  efficiencyIcon: "https://www.figma.com/api/mcp/asset/c687b7e9-9dc8-45f0-b49d-523705a03de0",
  warrantyIcon:   "https://www.figma.com/api/mcp/asset/846af55b-9e01-4dbf-b9c4-a3de5eddc16c",
  starRating:     "https://www.figma.com/api/mcp/asset/b9ddadca-5ab0-4c5a-8b97-7dafbda47e5c",
  arrowIcon:      "https://www.figma.com/api/mcp/asset/713e1097-003c-481b-bd57-6caf32a272f9",
  checkIcon:      "https://www.figma.com/api/mcp/asset/4f0c9737-b4e4-42b9-a924-109e1ad85594",
  sortIcon:       "https://www.figma.com/api/mcp/asset/56433ae6-3d15-4118-8e21-c523b1307cc6",
};

/* ── Data ─────────────────────────────────────────────────────── */
type Category = "All" | "Solar Panels" | "Inverters" | "Batteries" | "Accessories";

const CATEGORIES: Category[] = ["All", "Solar Panels", "Inverters", "Batteries", "Accessories"];

interface Spec { label: string; value: string }
interface Product {
  id: number;
  brand: string;
  name: string;
  category: Category;
  specs: [Spec, Spec];
  price: string;
  badge: string;
  badgeSize: { w: number; h: number };
  featured?: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    brand: "LONGi Solar",
    name: "Hi-MO 5 550W",
    category: "Solar Panels",
    specs: [
      { label: "Efficiency", value: "21.3%" },
      { label: "Warranty",   value: "12 Years" },
    ],
    price: "Rs 32,000",
    badge: ASSETS.panelBadge,
    badgeSize: { w: 38, h: 38 },
  },
  {
    id: 2,
    brand: "JA Solar",
    name: "JAM72S30 545W",
    category: "Solar Panels",
    specs: [
      { label: "Cell Tech",   value: "Mono-PERC" },
      { label: "Temp Coeff",  value: "-0.35%/°C" },
    ],
    price: "Rs 30,500",
    badge: ASSETS.panelBadge,
    badgeSize: { w: 38, h: 38 },
  },
  {
    id: 3,
    brand: "Huawei",
    name: "SUN2000-5K-MAP0",
    category: "Inverters",
    specs: [
      { label: "Power Rating",  value: "5.0 kW" },
      { label: "Connectivity",  value: "Smart WiFi" },
    ],
    price: "Rs 180,000",
    badge: ASSETS.inverterBadge,
    badgeSize: { w: 32, h: 36 },
  },
  {
    id: 4,
    brand: "Growatt",
    name: "MIN 5000TL-X",
    category: "Inverters",
    specs: [
      { label: "Phase",          value: "Single Phase" },
      { label: "Max Efficiency", value: "98.4%" },
    ],
    price: "Rs 155,000",
    badge: ASSETS.inverterBadge,
    badgeSize: { w: 32, h: 36 },
  },
  {
    id: 5,
    brand: "Tesla",
    name: "Powerwall 2",
    category: "Batteries",
    specs: [
      { label: "Usable Capacity", value: "13.5 kWh" },
      { label: "Backup",          value: "Full Home" },
    ],
    price: "Rs 1,200,000",
    badge: ASSETS.teslaBadge,
    badgeSize: { w: 29, h: 36 },
    featured: true,
  },
  {
    id: 6,
    brand: "AJS Exclusive",
    name: "Mounting Structure Kit",
    category: "Accessories",
    specs: [
      { label: "Material",    value: "Anodized Aluminum" },
      { label: "Durability",  value: "Wind Rated" },
    ],
    price: "Rs 25,000",
    badge: ASSETS.mountingBadge,
    badgeSize: { w: 27, h: 34 },
  },
];

const BRANDS = ["LONGI", "JA SOLAR", "HUAWEI", "GROWATT", "TESLA"];

const WHY_FEATURES = [
  {
    icon: ASSETS.tier1Icon,
    iconSize: { w: 22, h: 21 },
    title: "Tier-1 Global Brands",
    desc: "We only source hardware from Bloomberg Tier-1 rated manufacturers ensuring financial stability and product bankability.",
  },
  {
    icon: ASSETS.efficiencyIcon,
    iconSize: { w: 20, h: 16 },
    title: "High Efficiency & Durability",
    desc: "Products tested for Pakistani environmental conditions, from high heat to dust resistance.",
  },
  {
    icon: ASSETS.warrantyIcon,
    iconSize: { w: 19.5, h: 16 },
    title: "Long-term Warranties",
    desc: "Industry-leading performance warranties up to 25 years on selected solar module products.",
  },
];

const CTA_BULLETS = [
  "Free consultation",
  "Genuine products",
  "Warranty included",
];

/* ── ProductCard ─────────────────────────────────────────────── */
function ProductCard({ product }: { product: Product }) {
  return (
    <div className={`bg-white dark:bg-[#0f172a] border dark:border-white/10 overflow-hidden rounded-xl flex flex-col transition-shadow hover:shadow-lg ${
      product.featured
        ? "border-[#efaf0a]/20 dark:border-[#efaf0a]/40 shadow-sm"
        : "border-black/5 dark:border-white/10 shadow-sm"
    }`}>
      {/* Image area */}
      <div className="bg-[#f3f4f6] dark:bg-[#0b1220] h-[220px] sm:h-[256px] flex items-center justify-center rounded-t-xl overflow-hidden flex-shrink-0">
        <span className="text-[#9ca3af] dark:text-[#9fb2c8] text-sm font-medium">{product.brand}</span>
      </div>

      {/* Featured gold top border */}
      {product.featured && (
        <div className="h-1 bg-[#efaf0a] flex-shrink-0" />
      )}

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 sm:p-8 flex-1">
        {/* Brand + badge */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-[#006689] dark:text-[#7dd3fc] text-xs font-semibold uppercase tracking-[1.2px]">
              {product.brand}
            </span>
            <h3
              className="text-[#111827] dark:text-white text-lg sm:text-xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              {product.name}
            </h3>
          </div>
          <img
            src={product.badge}
            alt=""
            className="flex-shrink-0 object-contain"
            style={{ width: product.badgeSize.w, height: product.badgeSize.h }}
          />
        </div>

        {/* Specs */}
        <div className="flex flex-col gap-3">
          {product.specs.map((spec) => (
            <div key={spec.label} className="flex items-center justify-between">
              <span className="text-[#6b7280] dark:text-[#94a3b8] text-sm">{spec.label}</span>
              <span className="text-[#111827] dark:text-[#e2e8f0] text-sm font-semibold">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="pt-4 mt-auto">
          <p
            className="text-[#111827] dark:text-white text-2xl font-semibold"
            style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
          >
            {product.price}
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          <button className="bg-[#efaf0a] hover:bg-[#d99e09] text-[#271900] text-sm font-semibold py-3 rounded-lg transition-colors">
            Get Quote
          </button>
          <button className="bg-[#f3f4f6] dark:bg-[#101827] hover:bg-[#e5e7eb] dark:hover:bg-[#172233] text-[#111827] dark:text-[#e2e8f0] text-sm font-semibold py-3 rounded-lg transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────── */
export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-white dark:bg-[#0b0f1a] min-h-screen">

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <Image
          src="/assets/product/producthero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
          aria-hidden="true"
        />
        {/* Gradient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #f6f6f6 0%, rgba(224,224,224,0.8) 10%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none hidden dark:block"
          style={{
            background:
              "linear-gradient(90deg, #0b0f1a 0%, rgba(15,23,42,0.9) 10%, rgba(15,23,42,0) 100%)",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
          {/* Badge */}
          <div className="inline-flex items-center bg-[rgba(0,102,137,0.1)] px-4 py-1.5 rounded-full">
            <span className="text-[#006689] dark:text-[#7dd3fc] text-xs font-semibold uppercase tracking-[1.2px]">
              Premium Hardware
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-tight text-[#111827] dark:text-white"
            style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)", lineHeight: 1 }}
          >
            High-Quality Solar{" "}
            <span className="text-[#efaf0a]">Products You</span>
            <br />
            <span className="text-[#efaf0a]">Can Trust</span>
          </h1>

          {/* Sub-heading */}
          <p className="text-[#4b5563] dark:text-[#cbd5f5] text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mt-2">
            Explore premium solar panels, inverters, batteries, and accessories from top global
            brands curated for maximum efficiency.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold text-base sm:text-lg shadow-[0_20px_25px_-5px_rgba(120,53,15,0.1),0_8px_10px_-6px_rgba(120,53,15,0.1)] hover:opacity-90 transition-opacity"
              style={{
                background: "linear-gradient(135deg, #7b5800 0%, #efaf0a 100%)",
              }}
            >
              Get Expert Recommendation
            </Link>
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-[#e5e7eb] text-[#111827] font-semibold text-base sm:text-lg hover:bg-[#f9fafb] transition-colors"
            >
              Browse Products
            </a>
          </div>
        </div>
      </section>

      {/* ─── Sticky Filter Bar ─────────────────────────────────── */}
      <div
        id="products"
        className="sticky top-[73px] z-40 bg-white/80 dark:bg-[#0b0f1a]/80 backdrop-blur-md border-y border-[#f3f4f6] dark:border-white/10 px-4 sm:px-6 lg:px-8 py-3"
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          {/* Category tabs — scrollable on mobile */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide pb-0.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#efaf0a] text-[#271900] shadow-sm"
                    : "text-[#6b7280] dark:text-[#9fb2c8] hover:text-[#111827] dark:hover:text-white font-medium"
                }`}
                style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product count */}
          <div className="flex-shrink-0 flex items-center gap-2 text-[#9ca3af] dark:text-[#8fa3bf] text-sm">
            <img src={ASSETS.sortIcon} alt="" className="w-[10.5px] h-[7px]" />
            <span>{filtered.length} Products Found</span>
          </div>
        </div>
      </div>

      {/* ─── Product Grid ───────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-[#6b7280] dark:text-[#9fb2c8] py-20 text-lg">
            No products found in this category.
          </p>
        )}
      </section>

      {/* ─── Featured Brands ────────────────────────────────────── */}
      <section className="bg-[#f9fafb] dark:bg-[#0f172a] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <p className="text-[#efaf0a] text-xs font-semibold uppercase tracking-[3.6px] text-center">
            Trusted by Leading Global Solar Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 lg:gap-24 opacity-40">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="text-[#111827] dark:text-[#e2e8f0] text-xl sm:text-2xl font-bold"
                style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Our Products ───────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left — feature list */}
          <div className="flex flex-col gap-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#111827] dark:text-white leading-snug"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Engineering Excellence in{" "}
              <span className="text-[#efaf0a]">Every</span>
              <br />
              <span className="text-[#efaf0a]">Component</span>
            </h2>

            <div className="flex flex-col gap-10">
              {WHY_FEATURES.map((feat) => (
                <div key={feat.title} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgba(0,102,137,0.1)] dark:bg-[rgba(125,211,252,0.12)] rounded-full flex items-center justify-center">
                    <img
                      src={feat.icon}
                      alt=""
                      style={{ width: feat.iconSize.w, height: feat.iconSize.h }}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[#111827] dark:text-white text-lg font-semibold">
                      {feat.title}
                    </h4>
                    <p className="text-[#4b5563] dark:text-[#cbd5f5] text-base leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stat card 1 */}
            <div className="bg-[#f9fafb] dark:bg-[#0f172a] border border-[#f3f4f6] dark:border-white/10 rounded-2xl p-8 flex flex-col justify-end min-h-[250px] sm:min-h-[272px]">
              <p
                className="text-[#efaf0a] text-4xl sm:text-5xl font-semibold mb-2"
                style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
              >
                99%
              </p>
              <p className="text-[#4b5563] dark:text-[#cbd5f5] text-sm font-medium leading-relaxed">
                Compatible with local grid needs
              </p>
            </div>

            {/* Stat card 2 */}
            <div className="bg-[rgba(239,175,10,0.1)] dark:bg-[rgba(234,179,8,0.12)] rounded-2xl p-8 flex flex-col justify-end min-h-[250px] sm:min-h-[272px]">
              <div className="mb-4">
                <img src={ASSETS.starRating} alt="" className="h-7 object-contain" />
              </div>
              <p className="text-[#111827] dark:text-white text-base font-semibold">
                Expert Installation Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mini CTA ───────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-4 pb-16 sm:pb-24">
        <div className="max-w-[1024px] mx-auto rounded-3xl backdrop-blur-md bg-[rgba(73,198,255,0.1)] dark:bg-[rgba(30,58,138,0.22)] border border-[rgba(73,198,255,0.2)] dark:border-[rgba(96,165,250,0.25)] shadow-sm p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#111827] dark:text-white text-xl sm:text-2xl font-semibold">
              Not Sure Which Product is Right for You?
            </h3>
            <p className="text-[#4b5563] dark:text-[#cbd5f5] text-base leading-relaxed max-w-lg">
              Our engineers can help design the perfect system for your energy load.
            </p>
          </div>
          <Link
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-[#49c6ff] hover:bg-[#2ab5f0] text-[#00506d] font-semibold text-base px-8 py-4 rounded-xl shadow-sm transition-colors"
          >
            Get Free Consultation
            <img src={ASSETS.arrowIcon} alt="" className="w-4 h-4 object-contain" />
          </Link>
        </div>
      </section>

      {/* ─── Final CTA Banner ───────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="max-w-[1280px] mx-auto rounded-[32px] overflow-hidden bg-[#111827] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] relative min-h-[380px] sm:min-h-[420px]">
          {/* Overlay gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #030712 0%, rgba(3,7,18,0.8) 50%, rgba(3,7,18,0) 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-10 sm:p-16 lg:p-24 flex flex-col gap-8 max-w-3xl">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "var(--font-manrope, Manrope, sans-serif)" }}
            >
              Start Your Solar
              <br />
              Journey Today
            </h2>

            <p className="text-[#d1d5db] text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
              Take the first step toward energy independence with the world&apos;s most trusted
              solar hardware.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center self-start px-10 py-5 rounded-2xl text-white font-semibold text-lg sm:text-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity"
              style={{
                background: "linear-gradient(135deg, #7b5800 0%, #efaf0a 100%)",
              }}
            >
              Get My Free Quote
            </Link>

            {/* Trust bullets */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {CTA_BULLETS.map((bullet) => (
                <div key={bullet} className="flex items-center gap-2">
                  <img src={ASSETS.checkIcon} alt="" className="w-[15px] h-[15px] object-contain" />
                  <span className="text-[#9ca3af] text-sm font-medium">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
