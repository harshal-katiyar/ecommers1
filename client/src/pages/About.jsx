import React from "react";
import { assets } from "../assets/assets";

const stats = [
  { label: "Happy customers", value: "10,000+" },
  { label: "Cities served", value: "25" },
  { label: "Products listed", value: "1,500+" },
  { label: "Avg. rating", value: "4.8★" },
];

const values = [
  {
    icon: assets.leaf_icon,
    title: "Fresh & ethical",
    desc: "Partnering with local suppliers to keep food fresh and sustainable.",
  },
  {
    icon: assets.delivery_truck_icon,
    title: "Fast delivery",
    desc: "Smart routing ensures your order reaches you in minutes.",
  },
  {
    icon: assets.coin_icon,
    title: "Fair pricing",
    desc: "Transparent offers with everyday value on essentials.",
  },
  {
    icon: assets.trust_icon,
    title: "Trust first",
    desc: "Easy returns, secure payments, and reliable support.",
  },
];

const timeline = [
  { year: "2023", text: "Started with a small catalog and a big mission." },
  { year: "2024", text: "Expanded across multiple neighborhoods with express delivery." },
  { year: "2025", text: "Launched smart recommendations and scaled to new cities." },
];

const team = [
  { name: "Aarav", role: "Operations", avatar: assets.profile_icon },
  { name: "Meera", role: "Customer Success", avatar: assets.profile_icon },
  { name: "Kabir", role: "Merchandising", avatar: assets.profile_icon },
];

const About = () => {
  return (
    <div className="w-full bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <picture>
          <source media="(max-width:768px)" srcSet={assets.main_banner_bg_sm} />
          <img
            src={assets.main_banner_bg}
            alt="About Greencart"
            className="w-full h-[40vh] md:h-[50vh] object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 flex items-center">
          <div className="text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold">About GreenCart</h1>
            <p className="mt-3 max-w-2xl text-slate-100">
              Making quality groceries accessible, affordable, and delivered fast—while
              supporting local producers and a healthier lifestyle.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="/"
                className="px-6 py-2 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
              >
                Start Shopping
              </a>
              <a
                href="/contact"
                className="px-6 py-2 rounded-full border border-white/70 text-white hover:bg-white/10 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Stats */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="grid md:grid-cols-[1.6fr,1fr] gap-8 md:gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Our mission</h2>
            <p className="mt-3 text-slate-600">
              To simplify daily shopping through curated essentials, transparent pricing,
              and dependable delivery, so you spend less time worrying and more time living.
            </p>
            <div className="mt-6 rounded-2xl overflow-hidden">
              <img
                src={assets.bottom_banner_image}
                alt="Our operations"
                className="w-full h-56 md:h-72 object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6">
            <h3 className="text-lg font-semibold">What we’ve achieved</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-slate-50 border border-slate-100 p-4"
                >
                  <p className="text-2xl font-bold">{s.value}</p>
                  <p className="text-sm text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-12 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold">What we value</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Great e‑commerce “About” pages highlight mission, values, and trust markers to
          boost credibility and conversions. This structure mirrors effective patterns
          seen in successful stores. [web:72][web:76]
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition"
            >
              <img src={v.icon} alt="" className="w-7 h-7" />
              <h3 className="mt-3 font-semibold">{v.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story / Timeline */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-12 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold">Our story</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Sharing an authentic journey and milestones helps customers connect with your
          brand on a human level, a common best practice for high‑performing About pages. [web:72]
        </p>
        <div className="mt-6 relative pl-5">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-slate-300" />
          <div className="space-y-5">
            {timeline.map((t) => (
              <div key={t.year} className="relative">
                <div className="absolute -left-[9px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <div className="bg-white rounded-xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">{t.year}</p>
                  <p className="mt-1 font-medium">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold">Meet the team</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          People buy from people. A friendly team section adds transparency and trust,
          which top brands emphasize on their About pages. [web:72][web:76]
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-5">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-2xl border border-slate-200 p-5 text-center"
            >
              <img
                src={m.avatar}
                alt={m.name}
                className="w-20 h-20 rounded-full object-cover mx-auto"
              />
              <p className="mt-3 font-semibold">{m.name}</p>
              <p className="text-sm text-slate-500">{m.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl p-5">
          <p className="text-sm md:text-base">
            Want to partner with us or have feedback?
          </p>
          <div className="flex gap-3">
            <a
              href="/contact"
              className="px-5 py-2 rounded-full bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition"
            >
              Contact Us
            </a>
            <a
              href="/"
              className="px-5 py-2 rounded-full border border-slate-300 text-sm font-semibold hover:bg-slate-100 transition"
            >
              Back to Shop
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
