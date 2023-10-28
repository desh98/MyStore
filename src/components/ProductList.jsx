// ProductList.js
import React from 'react';
import productsData from '../Products.json';

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-12 justify-center items-center">
      {productsData?.Products?.map(product => (
        <div key={product.id} className="bg-white space-x-4 shadow-lg rounded-lg overflow-hidden w-max">
          <img src={product.src} alt={product.name} className="w-64 h-32 object-cover object-center" />
          <div className="p-4">
            <h3 className="text-gray-800 font-bold text-lg mb-1">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
