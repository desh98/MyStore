import React, { useRef } from 'react';
import ProductItem from './ProductItem';
import productsData from '../Products.json';

const ProductList = () => {
  const productsContainerRef = useRef(null);
  const Product = productsData?.Products?.slice(0);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4" ref={productsContainerRef}>
      {Product?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
