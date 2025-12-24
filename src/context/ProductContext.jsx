import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {

  const initialProducts = [
    {
      id: 1,
      name: 'Premium Cotton T-Shirt',
      category: 'T-Shirts',
      price: 24.99,
      originalPrice: 34.99,
      discount: 30,
      rating: 4.5,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      description: 'Premium quality cotton t-shirt with comfortable fit',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Gray'],
      inStock: true
    },
    {
      id: 2,
      name: 'Hooded Sweatshirt',
      category: 'Hoodies',
      price: 49.99,
      originalPrice: 59.99,
      discount: 20,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      description: 'Warm and comfortable hooded sweatshirt',
      sizes: ['M', 'L', 'XL'],
      colors: ['Black', 'Blue', 'Green'],
      inStock: true
    },
    {
      id: 3,
      name: 'Slim Fit Jeans',
      category: 'Jeans',
      price: 59.99,
      originalPrice: 79.99,
      discount: 25,
      rating: 4.3,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
      description: 'Slim fit jeans with stretch fabric',
      sizes: ['28', '30', '32', '34'],
      colors: ['Blue', 'Black'],
      inStock: true
    },
    {
      id: 4,
      name: 'Traditional Kurta',
      category: 'Ethnic Wear',
      price: 39.99,
      originalPrice: 49.99,
      discount: 20,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
      description: 'Traditional Indian kurta with embroidery',
      sizes: ['S', 'M', 'L'],
      colors: ['White', 'Blue', 'Beige'],
      inStock: true
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const filterProducts = (filters) => {
  
    setFilteredProducts(products); // 暂时返回所有产品
  };

  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };

  const value = {
    products,
    filteredProducts,
    loading,
    error,
    filterProducts,
    getProductById,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};