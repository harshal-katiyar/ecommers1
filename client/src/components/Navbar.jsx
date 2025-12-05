// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useAppContext } from "../context/AppContext";
// import { assets } from "../assets/assets";

// const Toast = ({ message, type = "success", onClose }) => {
//   if (!message) return null;

//   return (
//     <div className={`fixed top-24 right-6 z-50 p-4 rounded-xl shadow-2xl transform transition-all duration-300 ${
//       type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
//     } max-w-sm`}>
//       <div className="flex items-center justify-between">
//         <span className="font-medium">{message}</span>
//         <button onClick={onClose} className="ml-4 text-white opacity-70 hover:opacity-100">×</button>
//       </div>
//     </div>
//   );
// };

// const LoginModal = ({ isOpen, onClose, onLogin }) => {
//   const [showSignup, setShowSignup] = useState(false);
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   if (!isOpen) return null;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (showSignup && password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     if (!email.trim()) {
//       alert("Please enter email!");
//       return;
//     }
//     onLogin(showSignup, fullName, email);
//     // Reset form
//     setFullName("");
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
//       <div
//         className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-2xl font-bold text-gray-900">
//             {showSignup ? "Create Account" : "Login"}
//           </h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 text-2xl font-bold p-1 hover:bg-gray-100 rounded-full transition"
//           >
//             ×
//           </button>
//         </div>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {showSignup && (
//             <div>
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm transition-all"
//                 required
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//               />
//             </div>
//           )}

//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm transition-all"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="relative">
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm transition-all"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           {showSignup && (
//             <div className="relative">
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm transition-all"
//                 required
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full py-3 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl transition-all duration-200 text-sm shadow-lg hover:shadow-xl"
//           >
//             {showSignup ? "Sign Up" : "Login"}
//           </button>
//         </form>

//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-600">
//             {showSignup ? "Already have an account? " : "Don't have an account? "}
//             <button
//               onClick={() => setShowSignup(!showSignup)}
//               className="text-indigo-600 font-medium hover:underline cursor-pointer"
//             >
//               {showSignup ? "Login" : "Sign up"}
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Navbar = () => {
//   const {
//     user,
//     setUser,
//     showUserLogin,
//     setShowUserLogin,
//     cartCount,
//     showToast,
//   } = useAppContext();

//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const logout = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//     setOpen(false);
//     showToast("Logged out successfully 👋", "success");
//     navigate("/");
//   };

//   const handleLogin = (isSignup, fullName, email) => {
//     if (isSignup && !fullName.trim()) {
//       showToast("Please enter full name", "error");
//       return;
//     }
//     if (!email.trim()) {
//       showToast("Please enter email", "error");
//       return;
//     }

//     setUser({
//       name: isSignup ? fullName : fullName || "User",
//       email,
//       isNew: isSignup,
//     });
//     setShowUserLogin(false);
//     showToast(isSignup ? `Welcome ${fullName}! Account created` : `Welcome back ${fullName}!`, "success");
//   };

//   return (
//     <>
//       <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative z-40">
//         {/* Logo */}
//         <NavLink to="/">
//           <img className="h-9" src={assets.logo} alt="logo" />
//         </NavLink>

//         {/* Desktop Menu */}
//         <div className="hidden sm:flex items-center gap-8">
//           <NavLink to="/" className="hover:text-indigo-600 font-medium">Home</NavLink>
//           <NavLink to="/products" className="hover:text-indigo-600 font-medium">Products</NavLink>
//           <NavLink to="/contact" className="hover:text-indigo-600 font-medium">Contact</NavLink>

//           {/* Search */}
//           <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
//             <input
//               className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
//               type="text"
//               placeholder="Search products..."
//             />
//             <img src={assets.search_icon} alt="search" className="w-4 h-4" />
//           </div>

//           {/* Cart */}
//           <NavLink to="/cart" className="relative cursor-pointer">
//             <img src={assets.nav_cart_icon} alt="cart" className="w-6 opacity-80" />
//             {cartCount > 0 && (
//               <div className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold">
//                 {cartCount}
//               </div>
//             )}
//           </NavLink>

//           {/* Login / Profile */}
//           {!user ? (
//             <button
//               onClick={() => setShowUserLogin(true)}
//               className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
//             >
//               Login
//             </button>
//           ) : (
//             <div className="relative group">
//               <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-full text-white shadow-lg cursor-pointer hover:shadow-xl transition-all">
//                 <img src={assets.profile_icon} className="w-7 h-7 rounded-full" alt="profile" />
//                 <span className="text-sm font-semibold hidden md:block">
//                   {user.name.split(' ')[0]}
//                 </span>
//               </div>

//               {/* Profile Dropdown */}
//               <ul className="hidden group-hover:block absolute top-14 right-0 mt-2 bg-white shadow-2xl border border-gray-200 py-3 w-56 rounded-2xl text-sm z-50">
//                 <li
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setOpen(false);
//                     navigate("/my-order");
//                   }}
//                   className="px-5 py-3 hover:bg-indigo-50 cursor-pointer flex items-center gap-3 rounded-xl mx-1 transition-all"
//                 >
//                   <img src={assets.order_icon || assets.cart_icon} className="w-5 h-5 opacity-70" alt="orders" />
//                   My Orders
//                 </li>
//                 <li
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     logout(); // ✅ PERFECTLY WORKING LOGOUT!
//                   }}
//                   className="px-5 py-3 hover:bg-red-50 border-t border-gray-100 cursor-pointer flex items-center gap-3 rounded-xl mx-1 transition-all text-red-600 hover:text-red-700 font-medium"
//                 >
//                   <img src={assets.remove_icon} className="w-5 h-5" alt="logout" />
//                   Logout
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition"
//           aria-label="Menu"
//         >
//           <img src={assets.menu_icon} alt="menu" className="w-7 h-7" />
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-200 z-40">
//           <div className="py-6 px-6 space-y-4">
//             <NavLink 
//               to="/" 
//               onClick={() => setOpen(false)} 
//               className="block py-3 px-4 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 font-medium"
//             >
//               Home
//             </NavLink>
//             <NavLink 
//               to="/products" 
//               onClick={() => setOpen(false)} 
//               className="block py-3 px-4 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 font-medium"
//             >
//               All Products
//             </NavLink>
//             <NavLink 
//               to="/cart" 
//               onClick={() => setOpen(false)} 
//               className="block py-3 px-4 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 font-medium"
//             >
//               Cart ({cartCount})
//             </NavLink>
//             <NavLink 
//               to="/contact" 
//               onClick={() => setOpen(false)} 
//               className="block py-3 px-4 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 font-medium"
//             >
//               Contact
//             </NavLink>

//             {!user ? (
//               <button
//                 onClick={() => {
//                   setOpen(false);
//                   setShowUserLogin(true);
//                 }}
//                 className="w-full text-left px-6 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl font-semibold transition-all shadow-lg hover:shadow-xl"
//               >
//                 Login
//               </button>
//             ) : (
//               <button
//                 onClick={() => {
//                   setOpen(false);
//                   logout(); // ✅ MOBILE LOGOUT WORKS!
//                 }}
//                 className="w-full text-left px-6 py-4 bg-red-500 hover:bg-red-600 text-white rounded-2xl font-semibold transition-all shadow-lg hover:shadow-xl"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Login/Signup Modal */}
//       <LoginModal
//         isOpen={showUserLogin}
//         onClose={() => setShowUserLogin(false)}
//         onLogin={handleLogin}
//       />

//       {/* Toast Notification */}
//       <Toast
//         message={showToast?.message || ""}
//         type={showToast?.type}
//         onClose={() => {}}
//       />
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

/* ---------------------- Toast Component ----------------------- */
const Toast = ({ message, type = "success", onClose }) => {
  if (!message) return null;

  return (
    <div
      className={`fixed top-24 right-6 z-50 p-4 rounded-xl shadow-2xl transform transition-all duration-300 ${
        type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
      } max-w-sm`}
    >
      <div className="flex items-center justify-between">
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-white opacity-70 hover:opacity-100"
        >
          ×
        </button>
      </div>
    </div>
  );
};

/* ---------------------- Login Modal ----------------------- */
const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showSignup && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!email.trim()) {
      alert("Please enter email!");
      return;
    }
    onLogin(showSignup, fullName, email);

    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {showSignup ? "Create Account" : "Login"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold p-1 hover:bg-gray-100 rounded-full transition"
          >
            ×
          </button>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {showSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {showSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}

          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl text-sm shadow-lg hover:shadow-xl transition-all"
          >
            {showSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          {showSignup ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => setShowSignup(!showSignup)}
            className="text-indigo-600 font-medium hover:underline"
          >
            {showSignup ? "Login" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
};

/* ---------------------- Navbar ----------------------- */
const Navbar = () => {
  const {
    user,
    setUser,
    showUserLogin,
    setShowUserLogin,
    cartCount,
    toast,
    showToast,
  } = useAppContext();

  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // profile dropdown
  const closeTimeoutRef = useRef(null);

  /* ---------------- Logout Function ---------------- */
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    setOpen(false);
    showToast("Logged out successfully 👋", "success");
    navigate("/");
  };

  /* ---------------- Login Handler ---------------- */
  const handleLogin = (isSignup, fullName, email) => {
    if (isSignup && !fullName.trim()) {
      showToast("Please enter full name", "error");
      return;
    }
    if (!email.trim()) {
      showToast("Please enter email", "error");
      return;
    }

    setUser({
      name: isSignup ? fullName : fullName || "User",
      email,
    });

    setShowUserLogin(false);
    showToast(
      isSignup
        ? `Welcome ${fullName}! Account created`
        : `Welcome back ${fullName}!`,
      "success"
    );
  };

  /* ---------------- Dropdown helpers (with tiny delay to avoid flicker) ---------------- */
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // small delay so moving from button -> menu won't close prematurely
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
      closeTimeoutRef.current = null;
    }, 100); // 100ms delay
  };

  const toggleDropdownOnClick = () => {
    // useful for touch devices (tap opens/closes)
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      {/* ---------------- Navbar ---------------- */}
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative z-40">
        <NavLink to="/">
          <img className="h-9" src={assets.logo} alt="logo" />
        </NavLink>

        <div className="hidden sm:flex items-center gap-8">
          <NavLink to="/" className="hover:text-indigo-600 font-medium">
            Home
          </NavLink>

          <NavLink to="/products" className="hover:text-indigo-600 font-medium">
            Products
          </NavLink>

          <NavLink to="/contact" className="hover:text-indigo-600 font-medium">
            Contact
          </NavLink>

          {/* Search */}
          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              className="py-1.5 bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products..."
            />
            <img src={assets.search_icon} alt="search" className="w-4 h-4" />
          </div>

          {/* Cart */}
          <NavLink to="/cart" className="relative cursor-pointer">
            <img
              src={assets.nav_cart_icon}
              alt="cart"
              className="w-6 opacity-80"
            />
            {cartCount > 0 && (
              <div className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </div>
            )}
          </NavLink>

          {/* Profile / Login */}
          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg"
            >
              Login
            </button>
          ) : (
            /* Use a parent that listens for mouse enter/leave */
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Profile Button (also clickable to toggle) */}
              <div
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-full text-white shadow-lg cursor-pointer select-none"
                onClick={toggleDropdownOnClick}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                <img
                  src={assets.profile_icon}
                  className="w-7 h-7 rounded-full"
                  alt="profile"
                />
                <span className="hidden md:block font-semibold">
                  {user.name.split(" ")[0]}
                </span>
              </div>

              {/* Dropdown: show/hide using state */}
              <ul
                className={`absolute right-0 mt-2 w-56 bg-white shadow-2xl border border-gray-200 rounded-2xl py-3 text-sm transform transition-all duration-150 origin-top-right ${
                  dropdownOpen
                    ? "opacity-100 pointer-events-auto scale-100"
                    : "opacity-0 pointer-events-none scale-95"
                }`}
                // Also allow mouse events on the dropdown so it doesn't close when hovered
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <li
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate("/my-order");
                  }}
                  className="px-5 py-3 hover:bg-indigo-50 cursor-pointer flex items-center gap-3 rounded-xl mx-1"
                >
                  <img
                    src={assets.order_icon || assets.cart_icon}
                    className="w-5 h-5 opacity-70"
                    alt="orders"
                  />
                  My Orders
                </li>

                <li
                  onClick={() => {
                    logout();
                  }}
                  className="px-5 py-3 hover:bg-red-50 border-t border-gray-100 cursor-pointer flex items-center gap-3 rounded-xl mx-1 text-red-600 font-medium"
                >
                  <img
                    src={assets.remove_icon}
                    className="w-5 h-5"
                    alt="logout"
                  />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <img src={assets.menu_icon} alt="menu" className="w-7 h-7" />
        </button>
      </nav>

      {/* ---------------- Mobile Dropdown ---------------- */}
      {open && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-200 z-40">
          <div className="py-6 px-6 space-y-4">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className="block py-3 px-4 hover:bg-indigo-50 rounded-xl"
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setOpen(false)}
              className="block py-3 px-4 hover:bg-indigo-50 rounded-xl"
            >
              All Products
            </NavLink>

            <NavLink
              to="/cart"
              onClick={() => setOpen(false)}
              className="block py-3 px-4 hover:bg-indigo-50 rounded-xl"
            >
              Cart ({cartCount})
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="block py-3 px-4 hover:bg-indigo-50 rounded-xl"
            >
              Contact
            </NavLink>

            {!user ? (
              <button
                onClick={() => {
                  setOpen(false);
                  setShowUserLogin(true);
                }}
                className="w-full py-4 bg-indigo-500 text-white rounded-2xl font-semibold shadow-lg"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => {
                  setOpen(false);
                  logout();
                }}
                className="w-full py-4 bg-red-500 text-white rounded-2xl font-semibold shadow-lg"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}

      {/* Login/Signup Modal */}
      <LoginModal
        isOpen={showUserLogin}
        onClose={() => setShowUserLogin(false)}
        onLogin={handleLogin}
      />

      {/* Toast */}
      <Toast
        message={toast?.message || ""}
        type={toast?.type}
        onClose={() => {}}
      />
    </>
  );
};

export default Navbar;


