import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleWishlistToggle}
            className={`p-2 rounded-full ${
              inWishlist
                ? "bg-red-100 text-red-600"
                : "bg-white text-gray-600"
            } shadow-md`}
          >
            <Heart className={`w-5 h-5 ${inWishlist ? "fill-current" : ""}`} />
          </button>

          <Link
            to={`/product/${product.id}`}
            className="p-2 bg-white text-gray-600 rounded-full shadow-md"
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>

        {/* Add to Cart */}
        <div className="absolute bottom-0 left-0 right-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
          <button
            onClick={() => addToCart(product, 1)}
            className="w-full bg-black text-white py-2 rounded flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-800 hover:text-pink-600 mb-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 mb-2">{product.category}</p>

        <div className="flex items-center justify-between mb-2">
          <Rating rating={product.rating} />
          <span className="text-sm text-gray-500">
            {product.reviews} reviews
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>

          <div className="flex gap-1">
            {product.sizes?.map((size) => (
              <span
                key={size}
                className="text-xs px-2 py-1 border rounded"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;






// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { ShoppingCart, Heart, Eye } from 'lucide-react';
// import { CartContext } from '../../context/CartContext';
// import { WishlistContext } from '../../context/WishlistContext';
// import Rating from '../common/Rating';

// const ProductCard = ({ product }) => {
//   const { addToCart } = useContext(CartContext);
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);
  
//   const inWishlist = isInWishlist(product.id);

//   const handleWishlistToggle = () => {
//     if (inWishlist) {
//       removeFromWishlist(product.id);
//     } else {
//       addToWishlist(product);
//     }
//   };

//   const handleAddToCart = () => {
//     addToCart(product);
//   };

//   return (
//     <div className="card group">
//       <div className="relative overflow-hidden">
//         {/* Product Image */}
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//         />
        
//         {/* Action Buttons */}
//         <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <button
//             onClick={handleWishlistToggle}
//             className={`p-2 rounded-full ${inWishlist ? 'bg-red-100 text-red-600' : 'bg-white text-gray-600'} shadow-md hover:shadow-lg`}
//           >
//             <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
//           </button>
//           <Link
//             to={`/product/${product.id}`}
//             className="p-2 bg-white text-gray-600 rounded-full shadow-md hover:shadow-lg"
//           >
//             <Eye className="w-5 h-5" />
//           </Link>
//         </div>

//         {/* Quick Add to Cart */}
//         <div className="absolute bottom-0 left-0 right-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
//           <button
//             onClick={handleAddToCart}
//             className="btn-primary w-full flex items-center justify-center space-x-2"
//           >
//             <ShoppingCart className="w-4 h-4" />
//             <span>Add to Cart</span>
//           </button>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="p-4">
//         <Link to={`/product/${product.id}`}>
//           <h3 className="font-medium text-gray-800 hover:text-primary-600 transition-colors mb-1">
//             {product.name}
//           </h3>
//         </Link>
        
//         <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        
//         <div className="flex items-center justify-between mb-2">
//           <Rating rating={product.rating} />
//           <span className="text-sm text-gray-500">{product.reviews} reviews</span>
//         </div>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <span className="text-lg font-bold text-gray-900">${product.price}</span>
//             {product.originalPrice && (
//               <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
//             )}
//             {product.discount && (
//               <span className="text-sm font-medium text-green-600">{product.discount}% off</span>
//             )}
//           </div>
          
//           <div className="flex space-x-1">
//             {product.sizes?.map(size => (
//               <span key={size} className="text-xs px-2 py-1 border border-gray-300 rounded">
//                 {size}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;