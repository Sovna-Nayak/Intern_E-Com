import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const productsData = [
  {
    id: 1,
    name: "Men Printed T-Shirt",
    category: "Men",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 2,
    name: "Women Summer Dress",
    category: "Women",
    price: 1499,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: 3,
    name: "Stylish Hoodie",
    category: "Men",
    price: 1999,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
  },
  {
    id: 4,
    name: "Ethnic Kurti",
    category: "Women",
    price: 1299,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
  },
  {
    id: 5,
    name: "Leather Handbag",
    category: "Accessories",
    price: 2499,
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c",
  },
  {
    id: 6,
    name: "Casual Sneakers",
    category: "Footwear",
    price: 2999,
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1",
  },
];

const categories = ["All", "Men", "Women", "Accessories", "Footwear"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");

  const filteredProducts = productsData
    .filter(
      (product) =>
        selectedCategory === "All" ||
        product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500 mt-1">
            Explore our latest fashion collections
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* FILTER SIDEBAR */}
        <aside className="bg-white rounded-xl shadow p-5 h-fit">
          <h2 className="font-semibold text-lg mb-4">Filters</h2>

          {/* Category Filter */}
          <div>
            <h3 className="font-medium mb-2">Category</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm
                    ${
                      selectedCategory === cat
                        ? "bg-pink-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="mt-6">
            <h3 className="font-medium mb-2">Sort by Price</h3>
            <select
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm"
            >
              <option value="">Default</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
        </aside>

        {/* PRODUCTS GRID */}
        <section className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500">
              No products found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Products;
