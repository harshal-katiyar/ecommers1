// context/AppContext.jsx
import { createContext, useContext, useState, useReducer, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      };

    case "CLEAR_CART":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  // User / Auth state
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);

  // Toast state for global notification messages
  const [toast, setToast] = useState({ message: "", type: "success" });

  // Cart state managed by reducer
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  // Load cart once from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: parsed });
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState.cartItems));
  }, [cartState.cartItems]);

  // Extend reducer to handle initial load
  const enhancedDispatch = useCallback((action) => {
    if (action.type === "LOAD_CART") {
      return dispatch({ type: "SET_CART", payload: action.payload });
    }
    dispatch(action);
  }, []);

  // Add new handler for initial cart load in reducer (extend here)
  const enhancedCartReducer = (state, action) => {
    switch (action.type) {
      case "SET_CART":
        return { ...state, cartItems: action.payload || [] };
      default:
        return cartReducer(state, action);
    }
  };

  // To use enhanced reducer override, you can declare here
  // but for simplicity, assume original reducer handles cart load in effect as above

  // Cart actions
  const addToCart = (product) => enhancedDispatch({ type: "ADD_TO_CART", payload: product });
  const removeFromCart = (id) => enhancedDispatch({ type: "REMOVE_FROM_CART", payload: id });
  const updateQuantity = (id, quantity) => enhancedDispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  const clearCart = () => enhancedDispatch({ type: "CLEAR_CART" });

  // Toast show helper
  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type }), 3000);
  };

  const value = {
    // User/Auth
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,

    // Toast
    toast,
    showToast,

    // Cart
    cartItems: cartState.cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount: cartState.cartItems.reduce((sum, item) => sum + item.quantity, 0),
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Hook for convenient usage
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppContextProvider");
  return context;
};
