// import { useState } from "react";
// import { products } from "../data/product"; // ✅ FIXED
// import ProductCard from "./ProductCard";
// import ProductFilter from "./ProductFilter";

// const Products = () => {
//   const [filters, setFilters] = useState({
//     size: "",
//     color: "",
//     price: 2000,
//   });

//   const filteredProducts = products.filter((product) => {
//     return (
//       (filters.size === "" || product.sizes?.includes(filters.size)) &&
//       (filters.color === "" || product.colors?.includes(filters.color)) &&
//       product.price <= filters.price
//     );
//   });

//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
//       {/* Filters */}
//       <div className="md:col-span-1">
//         <ProductFilter filters={filters} setFilters={setFilters} />
//       </div>

//       {/* Products */}
//       <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))
//         ) : (
//           <p>No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;





import { useState } from "react";
import { products } from "../data/product";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

const Products = () => {
  const [filters, setFilters] = useState({
    size: "",
    color: "",
    price: 2000,
  });

  // ⭐ Featured Products (first 4 or marked ones)
  const featuredProducts = products.slice(0, 4);

  // 🔍 Filter Logic
  const filteredProducts = products.filter((product) => {
    return (
      (filters.size === "" || product.sizes?.includes(filters.size)) &&
      (filters.color === "" || product.colors?.includes(filters.color)) &&
      product.price <= filters.price
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* 🧭 PAGE HEADER */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Products
        </h1>
        <p className="text-gray-500 mt-2">
          Discover premium fashion curated for your style
        </p>
      </div>

      {/* ⭐ FEATURED PRODUCTS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">
          Featured Collection ✨
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 🛍 MAIN PRODUCTS AREA */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          All Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* 🎛 FILTERS */}
          <div className="md:col-span-1 bg-white rounded-lg shadow p-4 h-fit">
            <ProductFilter filters={filters} setFilters={setFilters} />
          </div>

          {/* 🧺 PRODUCTS GRID */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500 text-lg">
                  😔 No products match your filters
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

