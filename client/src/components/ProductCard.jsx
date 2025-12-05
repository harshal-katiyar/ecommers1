import React from "react";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { addToCart, showToast } = useAppContext();

  const handleAddToCart = () => {
    addToCart(product);
    showToast("Added to cart successfully! 🛒", "success");
  };

  return (
    <div className="border rounded-2xl p-4 shadow-sm hover:shadow-lg transition flex flex-col">
      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-50">
        <img
          src={product.image[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-3 text-sm md:text-base font-semibold text-slate-900 line-clamp-2">
        {product.name}
      </h3>

      <div className="mt-2 flex items-center gap-2">
        <span className="font-bold text-emerald-600">
          ₹{product.offerPrice ?? product.price}
        </span>
        {product.offerPrice && (
          <span className="text-xs text-slate-400 line-through">
            ₹{product.price}
          </span>
        )}
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-3 w-full rounded-full bg-indigo-500 text-white text-sm font-semibold py-2 hover:bg-indigo-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
