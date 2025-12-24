import React from "react";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import FeaturedProducts from "../components/FeaturedProducts";
import FeaturesSection from "../components/FeaturesSection";
import Newsletter from "../components/Newsletter";


import { products } from "../data/product";
import { categories } from "../data/categories";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <CategoriesSection categories={categories} />
      <FeaturedProducts products={products} />
      <FeaturesSection />
      <Newsletter />
  
    </div>
  );
};

export default Home;
