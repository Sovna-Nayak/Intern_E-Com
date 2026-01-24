import React, { useState } from "react";
import { Star, Heart, ChevronRight, Eye, X } from "lucide-react";

const FeaturedProducts = ({ products }) => {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600">Trending this week</p>
          </div>

          {!showAllMobile && (
            <button
              onClick={() => setShowAllMobile(true)}
              className="flex items-center text-red-600 font-semibold lg:hidden"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          )}
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const hideOnMobile =
              !showAllMobile && index >= 4 ? "hidden lg:block" : "";

            return (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow
                hover:shadow-xl transition ${hideOnMobile}`}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />

                  {/* 👁 EYE ICON */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow
                    hover:bg-gray-100"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-lg font-bold mt-2">₹{product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= POPUP MODAL ================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          
          <div className="bg-white w-[90%] max-w-md rounded-2xl p-5 relative animate-scaleIn">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X />
            </button>

            {/* IMAGE (SMALL) */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <h3 className="text-xl font-bold mb-1">
              {selectedProduct.name}
            </h3>

            <p className="text-sm text-gray-500 mb-2 capitalize">
              {selectedProduct.category}
            </p>

            <div className="flex items-center gap-2 mb-3">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm">{selectedProduct.rating}</span>
            </div>

            <p className="text-lg font-bold mb-4">
              ₹{selectedProduct.price}
            </p>

            <button className="w-full py-2 bg-black text-white rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;









// import React, { useState } from "react";
// import { Star, Heart, ChevronRight, Eye } from "lucide-react";
// import { Link } from "react-router-dom";

// const FeaturedProducts = ({ products }) => {
//   const [showAllMobile, setShowAllMobile] = useState(false);

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">

//         {/* HEADER */}
//         <div className="flex justify-between items-center mb-10">
//           <div>
//             <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
//             <p className="text-gray-600">Trending this week</p>
//           </div>

//           {!showAllMobile && (
//             <button
//               onClick={() => setShowAllMobile(true)}
//               className="flex items-center text-red-600 font-semibold hover:text-red-700 lg:hidden"
//             >
//               View All <ChevronRight className="w-4 h-4 ml-1" />
//             </button>
//           )}
//         </div>

//         {/* PRODUCTS GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((product, index) => {
//             const hideOnMobile =
//               !showAllMobile && index >= 4 ? "hidden lg:block" : "";

//             return (
//               <div
//                 key={product.id}
//                 className={`group bg-white rounded-2xl overflow-hidden shadow-lg
//                 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${hideOnMobile}`}
//               >
//                 {/* IMAGE */}
//                 <div className="relative overflow-hidden">

//                   {/* IMAGE CLICK → DETAILS */}
//                   <Link to={`/product/${product.id}`}>
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-64 object-cover
//                       group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </Link>

//                   {/* QUICK LINK (CENTER) */}
//                   {/* <Link
//                     to={`/product/${product.id}`}
//                     className="absolute inset-0 flex items-center justify-center
//                     opacity-0 group-hover:opacity-100 transition-all"
//                   >
//                     <span className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold">
//                       Quick Link
//                     </span>
//                   </Link> */}

//                   {/* DISCOUNT */}
//                   {product.discount && (
//                     <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
//                       {product.discount}
//                     </div>
//                   )}

//                   {/* ICONS */}
//                   <div
//                     className="absolute top-4 right-4 flex flex-col gap-2
//                     opacity-0 group-hover:opacity-100 transition-opacity"
//                   >
//                     {/* EYE ICON */}
//                     <Link
//                       to={`/product/${product.id}`}
//                       className="bg-white p-2 rounded-full shadow-md
//                       hover:shadow-lg hover:bg-gray-100"
//                     >
//                       <Eye className="w-5 h-5 text-gray-800" />
//                     </Link>

//                     {/* HEART ICON */}
//                     <button
//                       className="bg-white p-2 rounded-full shadow-md
//                       hover:shadow-lg hover:bg-red-50 hover:text-red-600"
//                     >
//                       <Heart className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm text-gray-500 capitalize">
//                       {product.category}
//                     </span>

//                     <div className="flex items-center">
//                       <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                       <span className="ml-1 text-sm text-gray-700">
//                         {product.rating}
//                       </span>
//                     </div>
//                   </div>

//                   {/* TITLE CLICK → DETAILS */}
//                   <Link to={`/product/${product.id}`}>
//                     <h3 className="font-semibold text-lg mb-3
//                     group-hover:text-red-600">
//                       {product.name}
//                     </h3>
//                   </Link>

//                   <div className="flex items-center space-x-2 mb-6">
//                     <span className="text-xl font-bold text-gray-900">
//                       ₹{product.price}
//                     </span>

//                     {product.originalPrice && (
//                       <span className="text-sm text-gray-400 line-through">
//                         ₹{product.originalPrice}
//                       </span>
//                     )}
//                   </div>

//                   {/* ADD TO CART */}
//                   <button
//                     className="w-full py-3 bg-gradient-to-r
//                     from-gray-900 to-gray-700 text-white rounded-lg
//                     font-semibold hover:from-gray-800 hover:to-gray-600 transition-all"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;








