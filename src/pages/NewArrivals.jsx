import React from "react";
import { products } from "../data/product"; // Filter for latest items
import ProductCard from "../components/ProductCard";

const NewArrivals = () => {
  // Example: Get last 10 products as new arrivals
  const latestProducts = products.slice(-10);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">New Arrivals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
