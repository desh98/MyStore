import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductList from './components/ProductList';

const productsData = [];

const App = () => {
  const [products] = useState(productsData);

  return (
    <div className="min-h-screen bg-gray-100 text-white font-inter font-normal dark:bg-gray-900">
      <div className="flex flex-col lg:flex-row">

        <div className="lg:w-1/3 bg-slate-600 flex flex-col items-center h-screen p-8">
          <h1 className="font-bold text-4xl mb-8 p-12 mt-12">MyStore</h1>

          <motion.img
            src="/assets/ecom.png"
            className="w-64 h-auto mb-12"
            alt="Ecommerce"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

        </div>

        <div className='lg:w-2/3 p-4 md:p-24'>
          <div className="h-72 overflow-auto">
            <ProductList products={products} />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default App;
