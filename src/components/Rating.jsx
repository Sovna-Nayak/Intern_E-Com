import React from 'react';
import { Star, StarHalf } from 'lucide-react';

const Rating = ({ rating, maxRating = 5, showText = true, size = 'md', className = '' }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <Star 
            key={`full-${i}`} 
            className={`${sizeClasses[size]} text-yellow-400 fill-current`}
          />
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <StarHalf 
            className={`${sizeClasses[size]} text-yellow-400 fill-current`}
          />
        )}
        
        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <Star 
            key={`empty-${i}`} 
            className={`${sizeClasses[size]} text-gray-300`}
          />
        ))}
      </div>
      
      {showText && (
        <span className="ml-2 text-sm text-gray-600">
          {rating.toFixed(1)} ({maxRating})
        </span>
      )}
    </div>
  );
};

export default Rating;