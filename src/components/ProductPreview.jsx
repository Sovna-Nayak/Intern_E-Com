import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const ProductPreview = ({ product, isOpen, onClose, onTryOn }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  if (!isOpen) return null;

  const productImages = [
    product.image,
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=400&h=400&fit=crop',
  ];

  const handleTryOn = () => {
    if (onTryOn) {
      onTryOn({
        ...product,
        size: selectedSize,
        color: selectedColor
      });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold">Product Preview</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={productImages[currentImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-2">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    currentImageIndex === index 
                      ? 'border-primary-600' 
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Try-On Feature */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Virtual Try-On</h4>
              <div className="relative bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-32 h-48 mx-auto bg-gray-300 rounded-lg mb-4 relative">
                      {/* Model placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-36 bg-gray-200 rounded"></div>
                      </div>
                      
                      {/* Overlay product image on model */}
                      {selectedColor && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-50">
                          <div 
                            className="w-20 h-32 rounded"
                            style={{ backgroundColor: selectedColor.toLowerCase() }}
                          ></div>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={handleTryOn}
                      className="btn-primary"
                      disabled={!selectedColor}
                    >
                      Try This On
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.category}</p>
            
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.discount && (
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Description</h4>
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Select Size</h4>
              <div className="flex flex-wrap gap-2">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedSize === size
                        ? 'border-primary-600 bg-primary-50 text-primary-600'
                        : 'border-gray-300 hover:border-primary-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Select Color</h4>
              <div className="flex flex-wrap gap-3">
                {product.colors?.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`flex flex-col items-center ${
                      selectedColor === color ? 'ring-2 ring-primary-600' : ''
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-full border-2 border-gray-200"
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                    <span className="text-xs mt-1">{color}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="inline-flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  In Stock
                </div>
              ) : (
                <div className="inline-flex items-center text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                  Out of Stock
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="btn-primary flex-grow">
                Add to Cart
              </button>
              <button className="btn-secondary">
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;