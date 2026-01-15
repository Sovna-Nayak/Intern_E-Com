

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";
// // import Breadcrumbs from "./components/Breadcrumbs";

// import Home from "./pages/Home";
// import Products from "./components/Products";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Wishlist from "./pages/Wishlist";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Category from "./pages/Category";
// import ReturnsExchanges from "./pages/ReturnsExchanges";
// import FAQ from "./pages/FAQ";                 
// import ShippingPolicy from "./pages/ShippingPolicy";
// import SizeGuide from "./pages/SizeGuide";
// function App() {
//   return (
//     <Router>
//       <ScrollToTop />   
//       <Navbar />

//       {/* <Breadcrumbs />  */}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/category/:categoryName" element={<Category />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/wishlist" element={<Wishlist />} />

//         {/* Footer pages */}
//         <Route path="/faq" element={<FAQ />} />
//         <Route path="/shipping-policy" element={<ShippingPolicy />} />
//         <Route path="/size-guide" element={<SizeGuide />} />
//         <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Products from "./components/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Category from "./pages/Category";
import ReturnsExchanges from "./pages/ReturnsExchanges";
import FAQ from "./pages/FAQ";                 
import ShippingPolicy from "./pages/ShippingPolicy";
import SizeGuide from "./pages/SizeGuide";
import NewArrivals from "./pages/NewArrivals";
import Sale from "./pages/Sale";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/sale" element={<Sale />} />

        {/* Footer pages */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/size-guide" element={<SizeGuide />} />
        <Route path="/returns-exchanges" element={<ReturnsExchanges />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
