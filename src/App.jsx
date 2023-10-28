// App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';

const productsData = [
  // {
  //   id: 1,
  //   name: 'Product 1',
  //   price: 29.99,
  //   image: './assets/a1.jpg',
  // },
  // {
  //   id: 2,
  //   name: 'Product 2',
  //   price: 39.99,
  //   image: './assets/b1.jpg',
  // },
  // {
  //   id: 3,
  //   name: 'Product 3',
  //   price: 49.99,
  //   image: './assets/c1.jpg',
  // },
];

const App = () => {
  const [products, setProducts] = useState(productsData);

  return (
    <div className="min-h-screen bg-gray-100 text-white font-inter font-normal dark:bg-gray-900">
      <div className="flex flex-row">
        <div  className="flex flex-col justify-start bg-slate-600">
          <h1 className="flex font-bold text-4xl mb-8 p-24">MyStore</h1>
          <img src='./assets/ecom.png' className="w-64 h-32" />
        </div>
        <ProductList products={products} />
      </div>
    </div>
    
  );
};

export default App;
