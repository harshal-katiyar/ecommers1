import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const OrderSuccess = () => {
  const { showToast } = useAppContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-indigo-50 py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="w-24 h-24 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          Order Placed!
        </h1>
        
        <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
          Thank you for your order. We'll deliver your groceries within 30 minutes!
        </p>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Order Details</h3>
          <div className="text-left space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Order ID:</span>
              <span className="font-semibold">#GRN-2025-001</span>
            </div>
            <div className="flex justify-between">
              <span>Est. Delivery:</span>
              <span className="text-emerald-600 font-semibold">25-30 mins</span>
            </div>
            <div className="flex justify-between">
              <span>Payment:</span>
              <span>Cash on Delivery</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="flex-1 px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-2xl shadow-lg transition-all text-center"
          >
            Continue Shopping
          </Link>
          <Link
            to="/my-orders"
            className="flex-1 px-8 py-4 border-2 border-slate-200 hover:border-indigo-300 text-slate-900 font-semibold rounded-2xl hover:bg-indigo-50 transition-all text-center"
          >
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
