import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import image from "../assets/image.png";

const Navbar = ({ cartCount = 0, wishlistCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleUserClick = () => {
    if (!user) navigate("/login");
    else setUserMenuOpen(!userMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <header>
      <nav className="bg-white/90 backdrop-blur shadow sticky top-0 z-50">

        {/* 🔔 TOP BANNER */}
        <div className="bg-pink-500 text-white text-center text-sm p-2">
          🎉 Exclusive Launch Sale! Get 30% OFF on all new arrivals. Limited time offer.
        </div>

        {/* 🔹 MAIN NAVBAR */}
        <div className="flex items-center justify-between px-4 py-3">

          {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/Logo1.jpeg"
                alt="FashionStyle Logo"
                className="h-10 md:h-12 rounded-full"
              />

              <span className="text-xl md:text-2xl font-bold tracking-wide text-gray-900">
                Fashion{" "}
                <span className="text-red-500">Style</span>
              </span>
            </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">

            <Link to="/" className="hover:text-pink-600 font-medium">
              Home
            </Link>

            <Link to="/products" className="hover:text-pink-600 font-medium">
              Products
            </Link>

        

            {/* ✅ CATEGORIES (CLICK + HOVER) */}
            <div className="relative group">
               
                <span className="hover:text-pink-600 font-medium cursor-pointer">
                  Categories
                </span>

                {/* Dropdown */}
                <div
                  className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                >
                  <Link to="/category/T-Shirts" className="block px-4 py-2 hover:bg-gray-100">
                    T-Shirts
                  </Link>

                  <Link to="/category/Hoodies" className="block px-4 py-2 hover:bg-gray-100">
                    Hoodies
                  </Link>

                  <Link to="/category/Jeans" className="block px-4 py-2 hover:bg-gray-100">
                    Jeans
                  </Link>

                  <Link to="/category/Ethnic Wear" className="block px-4 py-2 hover:bg-gray-100">
                    Ethnic Wear
                  </Link>
                </div>
              </div>

            {/* <div className="relative group">
              <Link
                to="/categories"
                className="hover:text-pink-600 font-medium"
              >
                Categories
              </Link>

              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg
                              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/category/T-Shirts" className="block px-4 py-2 hover:bg-gray-100">
                  T-Shirts
                </Link>
                <Link to="/category/Hoodies" className="block px-4 py-2 hover:bg-gray-100">
                  Hoodies
                </Link>
                <Link to="/category/Jeans" className="block px-4 py-2 hover:bg-gray-100">
                  Jeans
                </Link>
                <Link to="/category/Ethnic Wear" className="block px-4 py-2 hover:bg-gray-100">
                  Ethnic Wear
                </Link>
              </div>
            </div> */}

            <Link to="/new-arrivals" className="hover:text-pink-600 font-medium">
              New Arrivals
            </Link>

            <Link to="/sale" className="hover:text-pink-600 font-medium">
              Sale
            </Link>

            {/* SEARCH */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-72">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search products"
                className="bg-transparent ml-2 w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-2">

            {/* WISHLIST */}
            <Link to="/wishlist" className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
              <Heart className="w-5 h-5 text-gray-600" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* CART */}
            <Link to="/cart" className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
              <ShoppingBag className="w-5 h-5 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* USER */}
            <div className="relative">
              <button
                onClick={handleUserClick}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <User className="w-5 h-5 text-gray-600" />
              </button>

              {user && userMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-50">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

     {/* 📱 MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/30">
            <div className="absolute right-0 top-0 w-64 h-full bg-white shadow-lg flex flex-col">
              
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-bold text-gray-900">
                  Fashion <span className="text-red-500">Style</span>
                </h2>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* Menu Links */}
              <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                <Link
                  to="/"
                  className="block text-gray-800 hover:text-pink-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="/products"
                  className="block text-gray-800 hover:text-pink-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>

                {/* Collapsible Categories */}
                <details className="group">
                  <summary className="cursor-pointer flex justify-between items-center text-gray-800 font-semibold hover:text-pink-600 py-1">
                    Categories
                  </summary>
                  <div className="ml-4 mt-2 flex flex-col space-y-2">
                    <Link
                      to="/category/T-Shirts"
                      className="text-gray-700 hover:text-pink-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      T-Shirts
                    </Link>
                    <Link
                      to="/category/Hoodies"
                      className="text-gray-700 hover:text-pink-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hoodies
                    </Link>
                    <Link
                      to="/category/Jeans"
                      className="text-gray-700 hover:text-pink-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Jeans
                    </Link>
                    <Link
                      to="/category/Ethnic Wear"
                      className="text-gray-700 hover:text-pink-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Ethnic Wear
                    </Link>
                  </div>
                </details>

                <Link
                  to="/new-arrivals"
                  className="block text-gray-800 hover:text-pink-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  New Arrivals
                </Link>
                <Link
                  to="/sale"
                  className="block text-gray-800 hover:text-pink-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sale
                </Link>
              </nav>
            </div>
          </div>
    )}

    </header>
  );
};

export default Navbar;

