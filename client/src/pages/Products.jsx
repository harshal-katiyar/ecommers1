import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { dummyProducts } from "../assets/assets"; // ✅ 60+ REAL PRODUCTS!

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  // ✅ USE REAL PRODUCTS FROM assets.js (60+ products with real images!)
  const allProducts = dummyProducts;

  // ✅ MATCH Home page categories exactly!
  const categories = [
    "All", 
    "Vegetables", 
    "Fruits", 
    "Dairy", 
    "Drinks", 
    "Grains", 
    "Bakery", 
    "Instant"
  ];

  // Filter products by selected category
  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="py-12 px-6 md:px-16 lg:px-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
            Fresh Groceries
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Premium quality produce delivered to your door in under 30 minutes
          </p>
          {/* ✅ SHOW CURRENT FILTER */}
          {selectedCategory !== "All" && (
            <p className="text-2xl font-semibold text-indigo-600 mt-4">
              {selectedCategory} ({filteredProducts.length} products)
            </p>
          )}
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 max-w-4xl mx-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-sm whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-indigo-500 text-white shadow-indigo-300 hover:shadow-indigo-400 transform scale-105"
                  : "bg-white text-slate-700 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <div className="text-center mb-8">
          <p className="text-slate-600 text-lg">
            Showing <span className="font-bold text-2xl text-slate-900">{filteredProducts.length}</span> 
            {selectedCategory !== "All" && ` ${selectedCategory.toLowerCase()} `}products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} /> // ✅ USE _id from real data!
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 col-span-full">
            <p className="text-2xl text-slate-500 mb-6">No {selectedCategory.toLowerCase()} products found</p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="px-8 py-3 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition-all shadow-lg hover:shadow-xl"
            >
              ← Show All Products ({allProducts.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
