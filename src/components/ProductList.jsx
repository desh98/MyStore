import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import productsData from '../Products.json';

const ProductItem = ({ product }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={product.src} alt={product.name} className="w-full h-48 object-cover object-center" />
      <div className="p-4 flex flex-col">
        <div className="flex justify-between mb-1">
          <h3 className="text-gray-800 font-bold text-md">{product.name}</h3>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {productsData?.Products?.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
