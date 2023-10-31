import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProductItem = ({ product }) => {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (product.src && product.src.length > 1) {
      interval = setInterval(() => {
        setHoveredImageIndex((prevIndex) => (prevIndex + 1) % product.src.length);
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [product.src]);

  useEffect(() => {
    if (hoveredImageIndex === 2) {
      setHoveredImageIndex(0);
    }
  }, [hoveredImageIndex]);

  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={product.src && product.src.length > 0 ? product.src[hoveredImageIndex] : ''}
        alt={product.name}
        className="w-full h-24 object-cover object-center"
      />
      <div className="p-2 flex flex-col">
        <div className="flex justify-between mb-1">
          <h3 className="text-gray-800 font-bold text-xs">{product.name}</h3>
          <p className="text-gray-600 text-xs">LKR {product.price.toFixed(2)}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductItem;
