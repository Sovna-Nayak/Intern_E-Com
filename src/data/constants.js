// Application Constants

export const APP_NAME = 'FashionStore';
export const APP_DESCRIPTION = 'Your one-stop destination for trendy and affordable fashion';

// API Endpoints
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.fashionstore.com';
export const API_ENDPOINTS = {
  PRODUCTS: '/products',
  CATEGORIES: '/categories',
  ORDERS: '/orders',
  USERS: '/users',
};

// Product Categories
export const CATEGORIES = [
  { id: 'tshirts', name: 'T-Shirts', icon: '👕' },
  { id: 'hoodies', name: 'Hoodies', icon: '🧥' },
  { id: 'jeans', name: 'Jeans', icon: '👖' },
  { id: 'ethnic', name: 'Ethnic Wear', icon: '👘' },
  { id: 'jackets', name: 'Jackets', icon: '🧥' },
  { id: 'shirts', name: 'Shirts', icon: '👔' },
  { id: 'shorts', name: 'Shorts', icon: '🩳' },
  { id: 'accessories', name: 'Accessories', icon: '👓' },
];

// Product Sizes
export const SIZES = {
  CLOTHING: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  SHOES: ['6', '7', '8', '9', '10', '11', '12'],
  JEANS: ['28', '30', '32', '34', '36', '38', '40'],
};

// Product Colors
export const COLORS = [
  { name: 'Red', value: '#DC2626', hex: 'dc2626' },
  { name: 'Blue', value: '#2563EB', hex: '2563eb' },
  { name: 'Green', value: '#16A34A', hex: '16a34a' },
  { name: 'Black', value: '#000000', hex: '000000' },
  { name: 'White', value: '#FFFFFF', hex: 'ffffff' },
  { name: 'Gray', value: '#6B7280', hex: '6b7280' },
  { name: 'Yellow', value: '#FBBF24', hex: 'fbbf24' },
  { name: 'Purple', value: '#9333EA', hex: '9333ea' },
  { name: 'Pink', value: '#DB2777', hex: 'db2777' },
  { name: 'Orange', value: '#F97316', hex: 'f97316' },
  { name: 'Brown', value: '#92400E', hex: '92400e' },
  { name: 'Beige', value: '#D6D3D1', hex: 'd6d3d1' },
];

// Price Ranges
export const PRICE_RANGES = [
  { label: 'Under $25', min: 0, max: 25 },
  { label: '$25 - $50', min: 25, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: 'Over $200', min: 200, max: 1000 },
];

// Sorting Options
export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'popular', label: 'Most Popular' },
];

// Shipping Options
export const SHIPPING_OPTIONS = [
  { id: 'standard', name: 'Standard Shipping', price: 4.99, days: '5-7 business days' },
  { id: 'express', name: 'Express Shipping', price: 9.99, days: '2-3 business days' },
  { id: 'overnight', name: 'Overnight Shipping', price: 19.99, days: '1 business day' },
  { id: 'free', name: 'Free Shipping', price: 0, days: '7-10 business days', minOrder: 50 },
];

// Payment Methods
export const PAYMENT_METHODS = [
  { id: 'credit-card', name: 'Credit/Debit Card', icon: '💳' },
  { id: 'paypal', name: 'PayPal', icon: '🔵' },
  { id: 'apple-pay', name: 'Apple Pay', icon: '🍎' },
  { id: 'google-pay', name: 'Google Pay', icon: 'G' },
];

// Countries
export const COUNTRIES = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'AU', name: 'Australia' },
  { code: 'IN', name: 'India' },
  // Add more countries as needed
];

// Social Media Links
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/fashionstore',
  TWITTER: 'https://twitter.com/fashionstore',
  INSTAGRAM: 'https://instagram.com/fashionstore',
  PINTEREST: 'https://pinterest.com/fashionstore',
  YOUTUBE: 'https://youtube.com/fashionstore',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  CART: 'fashionstore_cart',
  WISHLIST: 'fashionstore_wishlist',
  USER: 'fashionstore_user',
  THEME: 'fashionstore_theme',
  RECENT_VIEWS: 'fashionstore_recent_views',
};

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
};

// Animation Durations
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
};

// Validation Constants
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  ZIPCODE_REGEX: /^\d{5}(-\d{4})?$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 20,
};

// Error Messages
export const ERROR_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters',
  PASSWORDS_DONT_MATCH: 'Passwords do not match',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  PRODUCT_NOT_FOUND: 'Product not found',
  CART_EMPTY: 'Your cart is empty',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  ORDER_PLACED: 'Order placed successfully!',
  ADDED_TO_CART: 'Added to cart',
  ADDED_TO_WISHLIST: 'Added to wishlist',
  REMOVED_FROM_CART: 'Removed from cart',
  REMOVED_FROM_WISHLIST: 'Removed from wishlist',
  PROFILE_UPDATED: 'Profile updated successfully',
  PASSWORD_CHANGED: 'Password changed successfully',
};

// Feature Flags
export const FEATURES = {
  VIRTUAL_TRY_ON: true,
  PRODUCT_REVIEWS: true,
  WISHLIST: true,
  COMPARE_PRODUCTS: true,
  QUICK_VIEW: true,
  GUEST_CHECKOUT: true,
  MULTI_CURRENCY: false,
  MULTI_LANGUAGE: false,
};

// Theme Colors
export const THEME = {
  PRIMARY: '#ef4444',
  SECONDARY: '#6b7280',
  SUCCESS: '#10b981',
  WARNING: '#f59e0b',
  ERROR: '#ef4444',
  INFO: '#3b82f6',
  BACKGROUND: '#f9fafb',
  SURFACE: '#ffffff',
  TEXT_PRIMARY: '#111827',
  TEXT_SECONDARY: '#6b7280',
  BORDER: '#e5e7eb',
};

export default {
  APP_NAME,
  APP_DESCRIPTION,
  CATEGORIES,
  SIZES,
  COLORS,
  PRICE_RANGES,
  SORT_OPTIONS,
  SHIPPING_OPTIONS,
  PAYMENT_METHODS,
  COUNTRIES,
  SOCIAL_LINKS,
  STORAGE_KEYS,
  BREAKPOINTS,
  ANIMATION,
  VALIDATION,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  FEATURES,
  THEME,
};