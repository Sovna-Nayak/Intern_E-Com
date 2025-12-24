import React from "react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 bg-clip-text text-transparent">
              Discover Your
            </span>
            <span className="block text-gray-900">Style Statement</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Explore our curated collection of premium fashion wear. From casual tees to ethnic elegance, find your perfect fit with exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Shop Now
            </button>
            <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-red-500 hover:text-red-600 transition-all">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
