import { useState } from "react"; 
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

const Products = () => {
  const [filters, setFilters] = useState({
    size: "",
    color: "",
    price: 2000,
  });

  const filteredProducts = products.filter((product) => {
    return (
      (filters.size === "" || product.size === filters.size) &&
      (filters.color === "" || product.color === filters.color) &&
      product.price <= filters.price
    );
  });

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Filters */}
      <div className="md:col-span-1">
        <ProductFilter filters={filters} setFilters={setFilters} />
      </div>

      {/* Products */}
      <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
