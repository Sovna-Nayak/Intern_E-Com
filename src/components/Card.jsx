import React from 'react';

const Card = ({ 
  children, 
  className = '',
  padding = 'p-6',
  hover = true,
  shadow = true,
  ...props 
}) => {
  const baseStyles = 'bg-white rounded-lg border border-gray-200';
  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-300' : '';
  const shadowClass = shadow ? 'shadow-md' : '';
  
  return (
    <div 
      className={`${baseStyles} ${padding} ${hoverClass} ${shadowClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`border-b border-gray-200 pb-4 mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardBody = ({ children, className = '', ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`border-t border-gray-200 pt-4 mt-4 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;