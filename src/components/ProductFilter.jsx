import React from "react";
import { Filter, X } from "lucide-react";

const ProductFilter = ({ filters, setFilters }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["Red", "Blue", "Black", "White"];

  const handleClear = () => {
    setFilters({
      size: "",
      color: "",
      price: 2000,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Filter size={18} /> Filters
        </h3>
        <button
          onClick={handleClear}
          className="text-sm text-red-500 flex items-center gap-1"
        >
          <X size={14} /> Clear
        </button>
      </div>

      {/* PRICE */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Max Price</h4>
        <input
          type="range"
          min="500"
          max="5000"
          step="100"
          value={filters.price}
          onChange={(e) =>
            setFilters({ ...filters, price: Number(e.target.value) })
          }
          className="w-full"
        />
        <p className="text-sm mt-1">Up to ₹{filters.price}</p>
      </div>

      {/* SIZE */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Size</h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setFilters({ ...filters, size })}
              className={`px-3 py-1 border rounded ${
                filters.size === size
                  ? "bg-black text-white"
                  : "hover:border-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* COLOR */}
      <div>
        <h4 className="font-medium mb-2">Color</h4>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setFilters({ ...filters, color })}
              className={`w-8 h-8 rounded-full border-2 ${
                filters.color === color ? "border-black" : "border-gray-300"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;







// import React, { useState } from 'react';
// import { Filter, X } from 'lucide-react';

// const ProductFilter = ({ categories, onFilterChange }) => {
//   const [priceRange, setPriceRange] = useState([0, 500]);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);

//   const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
//   const colors = ['Red', 'Blue', 'Black', 'White', 'Green', 'Gray'];

//   const handleCategoryToggle = (category) => {
//     const updated = selectedCategories.includes(category)
//       ? selectedCategories.filter(c => c !== category)
//       : [...selectedCategories, category];
    
//     setSelectedCategories(updated);
//     onFilterChange({ categories: updated });
//   };

//   const handleSizeToggle = (size) => {
//     const updated = selectedSizes.includes(size)
//       ? selectedSizes.filter(s => s !== size)
//       : [...selectedSizes, size];
    
//     setSelectedSizes(updated);
//     onFilterChange({ sizes: updated });
//   };

//   const handleColorToggle = (color) => {
//     const updated = selectedColors.includes(color)
//       ? selectedColors.filter(c => c !== color)
//       : [...selectedColors, color];
    
//     setSelectedColors(updated);
//     onFilterChange({ colors: updated });
//   };

//   const handlePriceChange = (min, max) => {
//     setPriceRange([min, max]);
//     onFilterChange({ priceRange: [min, max] });
//   };

//   const clearFilters = () => {
//     setSelectedCategories([]);
//     setSelectedSizes([]);
//     setSelectedColors([]);
//     setPriceRange([0, 500]);
//     onFilterChange({
//       categories: [],
//       sizes: [],
//       colors: [],
//       priceRange: [0, 500]
//     });
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="text-lg font-semibold flex items-center">
//           <Filter className="w-5 h-5 mr-2" />
//           Filters
//         </h3>
//         <button
//           onClick={clearFilters}
//           className="text-sm text-primary-600 hover:text-primary-700 flex items-center"
//         >
//           <X className="w-4 h-4 mr-1" />
//           Clear all
//         </button>
//       </div>

//       {/* Price Range */}
//       <div className="mb-6">
//         <h4 className="font-medium mb-3">Price Range</h4>
//         <div className="space-y-2">
//           <div className="flex justify-between">
//             <span>${priceRange[0]}</span>
//             <span>${priceRange[1]}</span>
//           </div>
//           <input
//             type="range"
//             min="0"
//             max="500"
//             value={priceRange[0]}
//             onChange={(e) => handlePriceChange(parseInt(e.target.value), priceRange[1])}
//             className="w-full"
//           />
//           <input
//             type="range"
//             min="0"
//             max="500"
//             value={priceRange[1]}
//             onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
//             className="w-full"
//           />
//         </div>
//       </div>

//       {/* Categories */}
//       <div className="mb-6">
//         <h4 className="font-medium mb-3">Categories</h4>
//         <div className="space-y-2">
//           {categories.map((category) => (
//             <label key={category} className="flex items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCategoryToggle(category)}
//                 className="rounded text-primary-600 focus:ring-primary-500"
//               />
//               <span className="ml-2 text-gray-700">{category}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Sizes */}
//       <div className="mb-6">
//         <h4 className="font-medium mb-3">Sizes</h4>
//         <div className="flex flex-wrap gap-2">
//           {sizes.map((size) => (
//             <button
//               key={size}
//               onClick={() => handleSizeToggle(size)}
//               className={`px-3 py-1 rounded border ${
//                 selectedSizes.includes(size)
//                   ? 'bg-primary-600 text-white border-primary-600'
//                   : 'border-gray-300 hover:border-primary-600'
//               }`}
//             >
//               {size}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Colors */}
//       <div className="mb-6">
//         <h4 className="font-medium mb-3">Colors</h4>
//         <div className="flex flex-wrap gap-2">
//           {colors.map((color) => (
//             <button
//               key={color}
//               onClick={() => handleColorToggle(color)}
//               className={`w-8 h-8 rounded-full border-2 ${
//                 selectedColors.includes(color)
//                   ? 'border-primary-600'
//                   : 'border-gray-300'
//               }`}
//               style={{ backgroundColor: color.toLowerCase() }}
//               title={color}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductFilter;