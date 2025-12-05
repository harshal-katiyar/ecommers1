import React from "react";
import { Link, useNavigate } from "react-router-dom";  // ← ADDED useNavigate
import { useAppContext } from "../context/AppContext";

const Cart = () => {
  const navigate = useNavigate();  // ← ADDED
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartCount, 
    clearCart, 
    user, 
    setUser,
    showToast 
  } = useAppContext();

  const totalAmount = cartItems.reduce((sum, item) => 
    sum + (item.offerPrice ?? item.price) * item.quantity, 0
  );

  const handleLogin = () => {
    setUser({ 
      name: "John Doe", 
      email: "john@example.com" 
    });
    showToast("Login successful! Welcome back! 👋", "success");
  };

  // ← NEW: Checkout handler
  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (cartCount === 0) {
    return (
      <div className="w-full bg-slate-50 min-h-[70vh]">
        <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-14">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Your Cart</h1>
          <p className="mt-1 text-sm text-slate-500">Your cart is empty</p>

          <div className="mt-10 rounded-2xl bg-white border border-dashed border-slate-300 p-8 text-center">
            <p className="text-lg font-semibold text-slate-800">No items in cart</p>
            <p className="mt-1 text-sm text-slate-500">Add some fresh groceries to get started.</p>
            <Link
              to="/products"
              className="inline-flex mt-4 px-6 py-2 rounded-full bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition"
            >
              Browse products
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 min-h-[70vh]">
      <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-14">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Your Cart</h1>
          <div className="text-right">
            <p className="text-sm text-slate-500">
              Total Items: <span className="font-semibold text-slate-900">{cartCount}</span>
            </p>
          </div>
        </div>

        {/* Cart Items */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Items List */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-6 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-slate-50">
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 text-base line-clamp-2 mb-2">
                    {item.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-bold text-emerald-600 text-lg">
                      ₹{(item.offerPrice ?? item.price).toLocaleString()}
                    </span>
                    {item.offerPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        ₹{item.price.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-slate-600 hover:text-slate-900 font-bold text-xl p-1 hover:bg-white rounded-full transition-all"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4 font-semibold text-slate-900 min-w-[2.5rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-slate-600 hover:text-slate-900 font-bold text-xl p-1 hover:bg-white rounded-full transition-all"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm font-medium px-3 py-1 rounded-lg hover:bg-red-50 transition-all"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-2xl border shadow-sm sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Items ({cartCount}):</span>
                  <span className="font-semibold">₹{totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Shipping:</span>
                  <span className="text-emerald-600 font-medium">Free</span>
                </div>
                <div className="h-px bg-slate-200" />
                <div className="flex justify-between text-xl font-bold text-slate-900">
                  <span>Total:</span>
                  <span>₹{totalAmount.toLocaleString()}</span>
                </div>
              </div>

              {user ? (
                <button 
                  onClick={handleCheckout}  // ← FIXED! NOW WORKS!
                  className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg mb-4"
                >
                  Proceed to Checkout →
                </button>
              ) : (
                <div className="text-center py-4 mb-4 bg-indigo-50 border-2 border-dashed border-indigo-200 rounded-xl">
                  <p className="text-sm text-indigo-800 font-medium mb-2">Login to checkout</p>
                  <button 
                    onClick={handleLogin}
                    className="px-6 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition"
                  >
                    Login Now
                  </button>
                </div>
              )}

              <button
                onClick={clearCart}
                className="w-full text-red-500 hover:text-red-700 font-semibold py-3 px-6 rounded-xl transition-all border border-red-200 hover:bg-red-50"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
