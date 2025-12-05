import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Checkout = () => {
  const { cartItems, cartCount, totalAmount: cartTotal, clearCart, user, showToast } = useAppContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "cod"
  });
  const [loading, setLoading] = useState(false);

  const totalAmount = cartItems.reduce((sum, item) => 
    sum + (item.offerPrice ?? item.price) * item.quantity, 0
  );

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Mock order success
      clearCart();
      showToast("Order placed successfully! 🎉 Delivery in 30 mins", "success");
      navigate("/order-success");  // Go to success page
      setLoading(false);
    }, 2000);
  };

  if (cartCount === 0) {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Nothing to checkout</h1>
          <Link to="/products" className="inline-flex px-6 py-3 bg-indigo-500 text-white rounded-xl font-semibold hover:bg-indigo-600">
            Continue Shopping →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Checkout</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="Email"
                      className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 md:col-span-2"
                      required
                    />
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Delivery Address</h3>
                  <div className="space-y-4">
                    <input
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="House No, Street, Landmark"
                      className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                      <input
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        type="number"
                        placeholder="PIN Code"
                        className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <label className="flex items-center p-4 border border-slate-200 rounded-xl hover:border-indigo-400 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === "cod"}
                        onChange={handleInputChange}
                        className="mr-3 text-indigo-600"
                        required
                      />
                      <span>COD</span>
                    </label>
                    <label className="flex items-center p-4 border border-slate-200 rounded-xl hover:border-indigo-400 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === "card"}
                        onChange={handleInputChange}
                        className="mr-3 text-indigo-600"
                      />
                      <span>Card</span>
                    </label>
                    <label className="flex items-center p-4 border border-slate-200 rounded-xl hover:border-indigo-400 cursor-pointer md:col-span-1">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={formData.paymentMethod === "upi"}
                        onChange={handleInputChange}
                        className="mr-3 text-indigo-600"
                      />
                      <span>UPI</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all text-lg"
                >
                  {loading ? "Processing..." : `Place Order (₹${totalAmount.toLocaleString()})`}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between py-2 border-b border-slate-100 last:border-b-0">
                    <span className="text-sm">{item.name}</span>
                    <span className="font-semibold">₹{((item.offerPrice ?? item.price) * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <div className="h-px bg-slate-200 my-4" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>₹{totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <Link
                to="/cart"
                className="block w-full text-center py-3 px-4 border border-slate-200 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition mb-4"
              >
                ← Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
