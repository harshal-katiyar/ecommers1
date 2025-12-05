import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const { addToCart, showToast } = useAppContext();
  const navigate = useNavigate();

  // Mock product data - replace with your actual product fetching logic
  const product = {
    id: id || "1",
    name: "Premium Organic Avocado",
    description: "Freshly harvested organic avocados, perfect for guacamole, salads, or toast. Sustainably sourced from local farms.",
    price: 299,
    offerPrice: 249,
    image: [assets.add_address_iamge] // Use your product image
  };

  const handleAddToCart = () => {
    addToCart(product);
    showToast("Added to cart successfully! 🛒", "success");
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 py-10 flex flex-col md:flex-row gap-12 min-h-screen">
      {/* Product Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          <img 
            src={product.image[0]} 
            alt={product.name}
            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {product.name}
        </h1>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl font-bold text-emerald-600">
              ₹{product.offerPrice || product.price}
            </span>
            {product.offerPrice && (
              <span className="text-xl text-gray-400 line-through">
                ₹{product.price}
              </span>
            )}
          </div>
          {product.offerPrice && (
            <span className="text-emerald-600 font-medium text-sm">
              Save ₹{(product.price - product.offerPrice).toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full md:w-auto px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 mb-4 flex items-center justify-center gap-2"
        >
          🛒 Add to Cart
        </button>

        {/* Continue Shopping Button */}
        <button
          onClick={() => navigate("/products")}
          className="w-full md:w-auto px-8 py-4 border-2 border-gray-200 hover:border-indigo-300 text-gray-700 hover:text-indigo-600 text-lg font-semibold rounded-2xl hover:bg-indigo-50 transition-all duration-200"
        >
          ← Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
