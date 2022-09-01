import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../../assets/datasets/products.json'
import { IoIosArrowForward } from 'react-icons/io'
import { ProductCard } from '../index'

const OurProducts = () => {
    return (
        <div className="tw-bg-gray">
            <div className="tw-px-6 tw-pt-3 tw-mx-32 tw-mt-2 tw-space-y-2">
                <span className="tw-font-semibold tw-text-lg">Our Products</span>
                <div className="tw-flow-root">
                    <span className="tw-float-left">Trusted by the best companies in Asia</span>
                    <Link to="/all-products">
                        <div className="tw-flex tw-float-right tw-items-center tw-text-eezee-blue">
                            <span>View More</span>
                            <IoIosArrowForward />
                        </div>
                    </Link>
                </div>
                <div className="tw-grid tw-grid-cols-1 tw-gap-y-4 sm:tw-grid-cols-2 sm:tw-gap-x-6 sm:tw-gap-y-10 lg:tw-grid-cols-6 lg:tw-gap-x-8">
                    {/* to return only 12 products */}
                    {Products.map(function (d, i) {
                        return i < 12 ? <ProductCard data={d} /> : null
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurProducts
