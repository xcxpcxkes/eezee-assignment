import React from 'react';
import { Header, FeaturedBrands, OurProducts } from '../components';
import { banner_url } from '../constants';
import { useAppContext } from '../context/appContext';

const Home = () => {
  return (
    <div className="tw-min-h-screen tw-bg-background tw-pb-24">
      <Header />
      <div className="tw-px-6 tw-pt-3 tw-items-center tw-flex tw-mx-32 tw-mt-2 tw-space-y-2">
        <img src={banner_url} alt="banner" className="tw-object-fill tw-flex-1"></img>
      </div>

      <FeaturedBrands />
      <OurProducts />
    </div>
  );
};

export default Home;
