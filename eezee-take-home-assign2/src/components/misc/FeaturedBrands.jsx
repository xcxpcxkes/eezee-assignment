import React from 'react'
import { Link } from 'react-router-dom'
import Brands from '../../assets/datasets/brands.json'
import { BrandCard } from '../index'
import { IoIosArrowForward } from 'react-icons/io'

const FeaturedBrands = () => {
    const filtered = Brands.filter((d) => {
        return d.featured === true
    })

    //   return filtered.map(function (d, i) {
    //     return i < 10 ? <BrandCard data={d} /> : null;
    //   });
    return (
        <div className="tw-bg-gray">
            <div className="tw-px-6 tw-pt-3 tw-mx-32 tw-mt-2 tw-space-y-2">
                <span className="tw-font-semibold tw-text-lg">Featured Brands</span>
                <div className="tw-flow-root">
                    <span className="tw-float-left">Browse the full catelog of brands today</span>
                    <Link to="/all-brands">
                        <div className="tw-flex tw-float-right tw-items-center tw-text-eezee-blue">
                            <span>View More</span>
                            <IoIosArrowForward />
                        </div>
                    </Link>
                </div>

                <BrandCard data={filtered} />
            </div>
        </div>
    )
}

export default FeaturedBrands
