import React, { useState } from "react";
import { Star, Heart, ChevronRight } from "lucide-react";

const FeaturedProducts = ({ products }) => {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600">Trending this week</p>
          </div>

          {/* MOBILE VIEW ALL BUTTON */}
          {!showAllMobile && (
            <button
              onClick={() => setShowAllMobile(true)}
              className="flex items-center text-red-600 font-semibold hover:text-red-700 lg:hidden"
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
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${hideOnMobile}`}
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {product.discount}
                    </div>
                  )}

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg hover:bg-red-50 hover:text-red-600">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">
                      {product.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg mb-3 group-hover:text-red-600">
                    {product.name}
                  </h3>

                  <div className="flex items-center space-x-2 mb-6">
                    <span className="text-xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* ADD TO CART */}
                  <button className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-800 hover:to-gray-600 transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;






// import React, { useState } from "react";
// import { Star, Heart, ChevronRight } from "lucide-react";

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

//           {/* MOBILE VIEW ALL BUTTON */}
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
//             // Mobile → show first 4, then all after click
//             const hideOnMobile =
//               !showAllMobile && index >= 4 ? "hidden lg:block" : "";

//             return (
//               <div
//                 key={product.id}
//                 className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${hideOnMobile}`}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />

//                   {product.discount && (
//                     <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
//                       {product.discount}
//                     </div>
//                   )}

//                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                     <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg hover:bg-red-50 hover:text-red-600">
//                       <Heart className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm text-gray-500">
//                       {product.category}
//                     </span>
//                     <div className="flex items-center">
//                       <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                       <span className="ml-1 text-sm text-gray-700">
//                         {product.rating}
//                       </span>
//                     </div>
//                   </div>

//                   <h3 className="font-semibold text-lg mb-2 group-hover:text-red-600">
//                     {product.name}
//                   </h3>

//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center space-x-2">
//                       <span className="text-xl font-bold text-gray-900">
//                         {product.price}
//                       </span>
//                       {product.originalPrice && (
//                         <span className="text-sm text-gray-400 line-through">
//                           {product.originalPrice}
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-2 mb-4">
//                     {product.colors.map((color, i) => (
//                       <div
//                         key={i}
//                         className={`w-6 h-6 rounded-full border ${
//                           i === 0 ? "ring-2 ring-red-500" : ""
//                         }`}
//                       />
//                     ))}
//                   </div>

//                   <button className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-800 hover:to-gray-600 transition-all">
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


