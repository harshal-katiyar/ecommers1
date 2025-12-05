import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADDED FOR NAVIGATION
import { assets, categories, trending } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { addToCart, showToast } = useAppContext();
  const navigate = useNavigate(); // ✅ NAVIGATION HOOK

  const handleAddToCart = (item) => {
    addToCart(item);
    showToast("Added to cart successfully! 🛒", "success");
  };

  return (
    <div className="w-full bg-slate-50">
      {/* HERO WITH BANNER IMAGE */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <picture>
          <source media="(max-width:768px)" srcSet={assets.main_banner_bg_sm} />
          <img
            src={assets.main_banner_bg}
            alt="Main banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto h-full px-6 md:px-10 lg:px-16 flex items-center">
          <div className="max-w-xl text-white">
            <p className="uppercase tracking-[0.25em] text-xs text-slate-200">
              Fresh • Fast • Affordable
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Find The Best Groceries
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-100/90">
              From organic veggies to instant snacks, everything you need is just a click away.
            </p>
            <div className="mt-5 flex flex-wrap gap-6 text-xs text-slate-200">
              <div>
                <p className="font-semibold">Under 30 min delivery</p>
                <p className="text-slate-200/80">In selected areas</p>
              </div>
              <div>
                <p className="font-semibold">10,000+ happy customers</p>
                <p className="text-slate-200/80">Trusted local service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
          <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
            <img src={assets.delivery_truck_icon} alt="" className="w-6 h-6" />
            <div>
              <p className="font-semibold text-slate-900">Fast Delivery</p>
              <p className="text-slate-500">Groceries in minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
            <img src={assets.leaf_icon} alt="" className="w-6 h-6" />
            <div>
              <p className="font-semibold text-slate-900">Fresh & Organic</p>
              <p className="text-slate-500">Quality checked</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
            <img src={assets.coin_icon} alt="" className="w-6 h-6" />
            <div>
              <p className="font-semibold text-slate-900">Best Prices</p>
              <p className="text-slate-500">Daily savings</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
            <img src={assets.trust_icon} alt="" className="w-6 h-6" />
            <div>
              <p className="font-semibold text-slate-900">Trusted Store</p>
              <p className="text-slate-500">Secure checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CATEGORIES - NOW FULLY CLICKABLE! */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 md:gap-5">
          {categories.map((item) => (
            <button
              key={item.path}
              style={{ backgroundColor: item.bgColor }}
              className="group flex flex-col items-center justify-between rounded-2xl px-3 py-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer w-full"
              onClick={() => navigate(`/products?category=${encodeURIComponent(item.path)}`)} // ✅ NAVIGATES TO FILTERED PRODUCTS!
            >
              <div className="w-14 h-14 rounded-full bg-white/70 flex items-center justify-center mb-2 group-hover:bg-white transition-all">
                <img src={item.image} alt={item.text} className="w-9 h-9 object-contain group-hover:scale-105 transition-transform" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 text-center group-hover:text-indigo-600 transition-colors">{item.text}</p>
            </button>
          ))}
        </div>
      </section>

      {/* TRENDING PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Trending Products</h2>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Most loved items by our customers this week.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-7">
          {trending.map((item) => (
            <div
              key={item._id}
              className="bg-white border border-slate-100 rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-3 text-sm md:text-base font-semibold text-slate-900 line-clamp-2">{item.name}</h3>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-base font-bold text-emerald-600">₹{item.offerPrice ?? item.price}</span>
                {item.offerPrice && <span className="text-xs text-slate-400 line-through">₹{item.price}</span>}
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-3 w-full rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-xs md:text-sm font-semibold py-2 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-16">
        <div className="relative rounded-3xl overflow-hidden">
          <picture>
            <source media="(max-width:768px)" srcSet={assets.bottom_banner_image_sm} />
            <img
              src={assets.bottom_banner_image}
              alt="Bottom banner"
              className="w-full h-52 md:h-64 object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-black/45 flex items-center">
            <div className="px-6 md:px-10 text-white max-w-md">
              <h3 className="text-xl md:text-2xl font-bold">Weekend Mega Savings</h3>
              <p className="mt-2 text-sm md:text-base text-slate-100/90">
                Extra discounts on fresh fruits, veggies, dairy and more. Limited time only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
