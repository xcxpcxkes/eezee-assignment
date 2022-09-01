import React from 'react';
import NoImage from '../../assets/images/no-image.png';

const BrandCard = ({ data }) => {
  return (
    <div className="tw-grid tw-grid-cols-1 tw-gap-y-4 sm:tw-grid-cols-2 sm:tw-gap-x-6 sm:tw-gap-y-10 lg:tw-grid-cols-6 lg:tw-gap-x-8">
      {data.map((brand) => (
        <div
          key={brand.id}
          className="tw-group tw-bg-white tw-border tw-border-border tw-flex tw-flex-col tw-overflow-hidden"
        >
          <div className="tw-aspect-square tw-bg-gray-200 tw-group-hover:tw-opacity-75 tw-p-2 tw-align-center tw-flex">
            <img
              src={brand.image.url ? brand.image.url : NoImage}
              alt="Image"
              className="tw-w-auto tw-h-auto tw-object-scale-down tw-object-center"
            />
          </div>
          <div className="tw-p-1 tw-space-y-2 tw-flex tw-flex-col tw-text-center tw-shrink">
            <h3 className="tw-text-md tw-font-semibold tw-text-gray-900">{brand.name}</h3>
            <span>{brand.productCount} Products</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandCard;
