import React from 'react';
import Brands from '../assets/datasets/brands.json';
import { BrandCard, Header } from '../components';

const AllBrands = () => {
  const group = {};

  for (const [k, v] of Object.entries(Brands)) {
    const brand_name = v.name.charAt(0);

    const value = {
      id: v.id,
      name: v.name,
      productCount: v.productCount ?? null,
      featured: v.featured ?? null,
      image: v.image ?? 0
    };

    if (group[brand_name]) {
      group[brand_name]['data'].push(value);
    } else group[brand_name] = { brand_name, ['data']: [value] };
  }

  const filtered = Object.values(group).sort(function (a, b) {
    return compareStrings(a.brand_name, b.brand_name);
  });

  function compareStrings(a, b) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();

    return a < b ? -1 : a > b ? 1 : 0;
  }

  return (
    <div className="tw-bg-background tw-pb-24">
      <Header />

      <div className="tw-px-6 tw-pt-3 tw-mx-32 tw-mt-2 tw-space-y-2">
        {filtered.map((brand) => (
          <div key={brand.brand_name} className="tw-flex tw-flex-col tw-p-2">
            <div className="tw-border tw-border-divider tw-bg-divider tw-text-grey-base tw-p-4 tw-w-24 tw-h-12 tw-text-center tw-font-medium">
              {brand.brand_name}
            </div>
            <BrandCard data={brand.data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBrands;
