

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
// import image from "../assets/image.png";

// const Navbar = ({ cartCount = 0, wishlistCount = 0 }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleUserClick = () => {
//     if (!user) navigate("/login");
//     else setUserMenuOpen(!userMenuOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//     window.location.reload();
//   };

//   return (
//     <header>
//       <nav className="bg-white/90 backdrop-blur shadow sticky top-0 z-50">

//         {/* 🔔 TOP BANNER */}
//         <div className="bg-pink-500 text-white text-center text-sm p-2">
//           🎉 Exclusive Launch Sale! Get 30% OFF on all new arrivals. Limited time offer.
//         </div>

//         {/* 🔹 MAIN NAVBAR */}
//         <div className="flex items-center justify-between px-4 py-3">

//           {/* LOGO */}
    
//           <Link to="/" className="text-2xl font-bold text-pink-600">
//              <img src={image} alt="FashionStyle Logo" className="h-10 md:h-12" />
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-8">

//             {/* LINKS */}
//             <Link to="/" className="hover:text-pink-600">Home</Link>
//             <Link to="/products" className="hover:text-pink-600">Products</Link>

//             {/* CATEGORIES DROPDOWN */}
//             <div className="relative group">
//               <span className="cursor-pointer hover:text-pink-600">
//                 Categories
//               </span>
//               <div className="absolute left-0 mt-2 w-44 bg-white border rounded shadow-lg
//                               opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
//                 <Link to="/category/T-Shirts" className="block px-4 py-2 hover:bg-gray-100">T-Shirts</Link>
//                 <Link to="/category/Hoodies" className="block px-4 py-2 hover:bg-gray-100">Hoodies</Link>
//                 <Link to="/category/Jeans" className="block px-4 py-2 hover:bg-gray-100">Jeans</Link>
//                 <Link to="/category/Ethnic Wear" className="block px-4 py-2 hover:bg-gray-100">Ethnic Wear</Link>
//               </div>
//             </div>

//             <Link to="/new-arrivals" className="hover:text-pink-600">New Arrivals</Link>
//             <Link to="/sale" className="hover:text-pink-600">Sale</Link>

//             {/* SEARCH */}
//             <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-72">
//               <Search className="w-4 h-4 text-gray-500" />
//               <input
//                 type="text"
//                 placeholder="Search products"
//                 className="bg-transparent ml-2 w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* RIGHT ICONS */}
//           <div className="flex items-center gap-2">

//             {/* WISHLIST */}
//             <Link to="/wishlist" className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
//               <Heart className="w-5 h-5 text-gray-600" />
//               {wishlistCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   {wishlistCount}
//                 </span>
//               )}
//             </Link>

//             {/* CART */}
//             <Link to="/cart" className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
//               <ShoppingBag className="w-5 h-5 text-gray-600" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* USER */}
//             <div className="relative">
//               <button
//                 onClick={handleUserClick}
//                 className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
//               >
//                 <User className="w-5 h-5 text-gray-600" />
//               </button>

//               {user && userMenuOpen && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-50">
//                   <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
//                     Profile
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* 📱 MOBILE MENU */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white shadow border-t px-6 py-4 space-y-2">
//           <Link to="/">Home</Link>
//           <Link to="/products">Products</Link>

//           <p className="font-semibold">Categories</p>
//           <Link to="/category/T-Shirts" className="block pl-4">T-Shirts</Link>
//           <Link to="/category/Hoodies" className="block pl-4">Hoodies</Link>
//           <Link to="/category/Jeans" className="block pl-4">Jeans</Link>
//           <Link to="/category/Ethnic Wear" className="block pl-4">Ethnic Wear</Link>

//           <Link to="/new-arrivals">New Arrivals</Link>
//           <Link to="/sale">Sale</Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;






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


          {/* <Link to="/" className="flex items-center">
            <img
              src="/Logo1.jpeg"
              alt="FashionStyle Logo"
              className="h-10 md:h-12 rounded-full"
            />
            <span className="text-xl md:text-2xl font-bold tracking-wide text-gray-900">
            Fashion<span className="text-red-500">Style</span>
          </span>
          </Link> */}

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
            </div>

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
        <div className="md:hidden bg-white shadow border-t px-6 py-4 space-y-2">

          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>

          <Link to="/categories" className="font-semibold">
            Categories
          </Link>
          <Link to="/category/T-Shirts" className="block pl-4">T-Shirts</Link>
          <Link to="/category/Hoodies" className="block pl-4">Hoodies</Link>
          <Link to="/category/Jeans" className="block pl-4">Jeans</Link>
          <Link to="/category/Ethnic Wear" className="block pl-4">Ethnic Wear</Link>

          <Link to="/new-arrivals" onClick={() => setIsMenuOpen(false)}>New Arrivals</Link>
          <Link to="/sale" onClick={() => setIsMenuOpen(false)}>Sale</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

