import React from 'react';
import { Header } from '../components';
import { PriceContextProvider } from '../context/productContext';
import { ProductsLayout } from './index';

const AllProducts = () => {
  return (
    <PriceContextProvider>
      <div className="tw-min-h-screen tw-bg-background tw-pb-24">
        <Header />
        <ProductsLayout />
      </div>
    </PriceContextProvider>
  );
};

export default AllProducts;
