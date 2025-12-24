// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ShoppingCart, Heart, User, Search, LogOut } from "lucide-react";

// import { useCart } from "../context/CartContext";
// import { useWishlist } from "../context/WishlistContext";
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const { cartItems } = useCart();
//   const { wishlistItems } = useWishlist();
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const cartCount = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   const wishlistCount = wishlistItems.length;

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">

//           {/* LOGO */}
//           <Link to="/" className="text-2xl font-bold text-pink-600">
//             FashionStyle
//           </Link>

//           {/* DESKTOP SEARCH */}
//           <div className="hidden md:flex flex-1 max-w-xl mx-6 relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//             />
//           </div>

//           {/* RIGHT ICONS */}
//           <div className="flex items-center space-x-6">

//             {/* WISHLIST */}
//             <Link to="/wishlist" className="relative">
//               <Heart className="w-6 h-6 text-gray-700 hover:text-pink-600" />
//               {wishlistCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                   {wishlistCount}
//                 </span>
//               )}
//             </Link>

//             {/* CART */}
//             <Link to="/cart" className="relative">
//               <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-pink-600" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* AUTH SECTION */}
//             {user ? (
//               <div className="flex items-center space-x-3">

//                 {/* USER NAME (desktop) */}
//                 <div className="hidden md:flex items-center space-x-2">
//                   <User className="w-5 h-5 text-pink-600" />
//                   <span className="text-sm text-gray-700 font-medium">
//                     Hi, {user.name?.split(" ")[0]}
//                   </span>
//                 </div>

//                 {/* LOGOUT */}
//                 <button
//                   onClick={handleLogout}
//                   className="text-gray-700 hover:text-pink-600"
//                   title="Logout"
//                 >
//                   <LogOut className="w-5 h-5" />
//                 </button>
//               </div>
//             ) : (
//               <div className="flex items-center space-x-4">

//                 {/* LOGIN */}
//                 <Link
//                   to="/login"
//                   className="text-gray-700 hover:text-pink-600 hidden md:block"
//                 >
//                   Login
//                 </Link>

//                 {/* SIGN UP */}
//                 <Link
//                   to="/register"
//                   className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700"
//                 >
//                   Sign Up
//                 </Link>

//                 {/* MOBILE USER ICON */}
//                 <Link to="/login" className="md:hidden">
//                   <User className="w-6 h-6 text-gray-700" />
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* MOBILE SEARCH */}
//         <div className="md:hidden py-3 border-t">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//             />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";

const Navbar = ({ cartCount = 0, wishlistCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white/90 backdrop-blur shadow sticky top-0 z-50 overflow-visible">

        {/* 🔔 Top Banner */}
        <div className="bg-pink-500 text-white text-center text-sm p-2">
          🎉 Exclusive Launch Sale! Get 30% OFF on all new arrivals. Limited time offer.
        </div>

        {/* 🔹 Main Navbar */}
      <div className="flex items-center justify-between px-4 py-3">


          {/* LEFT - LOGO */}
          <h1 className="text-2xl md:text-2xl font-bold text-pink-600">
            FashionStyle
          </h1>

          {/* CENTER - MENU + SEARCH (DESKTOP) */}
          <div className="hidden md:flex items-center gap-10">

            {/* Menu */}
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-pink-600">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-pink-600">Products</Link>
              <Link to="/categories" className="text-gray-700 hover:text-pink-600">Categories</Link>
              <Link to="/new-arrivals" className="text-gray-700 hover:text-pink-600">New Arrivals</Link>
              <Link to="/sale" className="text-gray-700 hover:text-pink-600">Sale</Link>
            </div>

            {/* Search */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-72 focus-within:bg-white focus-within:shadow">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search products"
                className="bg-transparent ml-2 w-full outline-none text-sm text-gray-700"
              />
            </div>
          </div>

          {/* RIGHT - ICONS */}
          <div className="flex items-center gap-1">

            {/* Wishlist */}
            <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
              <Heart className="w-5 h-5 text-gray-600" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 ">
              <ShoppingBag className="w-5 h-5 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User */}
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
              <User className="w-5 h-5 text-gray-600" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </nav>

      {/* 📱 Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow border-t">
          <div className="px-6 py-4 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-pink-600">Home</Link>
            <Link to="/products" className="block text-gray-700 hover:text-pink-600">Products</Link>
            <Link to="/categories" className="block text-gray-700 hover:text-pink-600">Categories</Link>
            <Link to="/new-arrivals" className="block text-gray-700 hover:text-pink-600">New Arrivals</Link>
            <Link to="/sale" className="block text-gray-700 hover:text-pink-600">Sale</Link>

            {/* Mobile Search */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mt-4">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search products"
                className="bg-transparent ml-2 w-full outline-none text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
