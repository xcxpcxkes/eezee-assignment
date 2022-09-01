import React from 'react';
import { Header } from '../components';
import { ProductDetails } from './index';

const ProductPage = () => {
  return (
    <div className="tw-min-h-screen tw-bg-background tw-pb-24">
      <Header />
      <ProductDetails />
    </div>
  );
};

export default ProductPage;
