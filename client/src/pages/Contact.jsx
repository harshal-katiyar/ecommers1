import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="w-full bg-slate-50 text-slate-900">
      {/* Hero / Heading */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-14">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-500">
            Contact
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold">
            We’re here to help
          </h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600">
            Have a question about your order, delivery, or products? 
            Reach out and the GreenCart team will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-14">
        <div className="grid md:grid-cols-[1.3fr,1fr] gap-8 md:gap-12 items-start">
          {/* Contact form */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-semibold">
              Send us a message
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Fill out the form and we’ll get back to you within a few hours.
            </p>

            <form className="mt-5 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Eg. Order issue, product enquiry…"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-slate-50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-600 transition"
              >
                Send Message
                <img
                  src={assets.white_arrow_icon}
                  alt=""
                  className="w-4 h-4"
                />
              </button>
            </form>
          </div>

          {/* Contact details / card */}
          <aside className="space-y-4">
            <div className="bg-slate-900 text-slate-50 rounded-2xl p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src={assets.logo} alt="GreenCart" className="h-8" />
                <p className="text-sm text-slate-200">
                  Support that actually cares about your order.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-[0.18em]">
                    Customer support
                  </p>
                  <p className="mt-1">support@greencart.com</p>
                  <p className="text-slate-300">+91-98765-43210</p>
                </div>

                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-[0.18em]">
                    Working hours
                  </p>
                  <p className="mt-1">Everyday, 8:00 AM – 10:00 PM</p>
                </div>

                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-[0.18em]">
                    Store address
                  </p>
                  <p className="mt-1">
                    GreenCart HQ, Main Street,<br />Your City, India.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700 flex flex-wrap gap-3 text-xs">
                <span className="px-3 py-1 rounded-full bg-slate-800">
                  WhatsApp support
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800">
                  Track orders
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 text-sm">
              <p className="font-semibold">Need quick help?</p>
              <p className="mt-1 text-slate-600">
                Check FAQs, order tracking, and refund policies on the Help page
                before you write to us.
              </p>
              <button className="mt-3 text-indigo-600 text-sm font-semibold hover:text-indigo-700">
                Go to Help Center →
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Contact;
