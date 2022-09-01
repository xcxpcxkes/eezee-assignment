import React from 'react'
import { Link } from 'react-router-dom'
import { formatNumber } from '../../utils/Helper'

const ProductCard = (props) => {
    const data = props.data

    function displayPrice(prod) {
        if (prod.highPrice === null) {
            return (
                <div className="tw-space-x-1">
                    <span className="tw-text-sm tw-align-top">{prod.currencySymbol}</span>
                    <span className="tw-text-lg">{formatNumber(prod.lowPrice)}</span>
                </div>
            )
        } else {
            return (
                <div className="tw-space-x-1">
                    <span className="tw-text-sm tw-align-top">{prod.currencySymbol}</span>
                    <span className="tw-text-lg">{formatNumber(prod.lowPrice)}</span>
                    <span>-</span>
                    <span className="tw-text-sm tw-align-top">{prod.currencySymbol}</span>
                    <span className="tw-text-lg">{formatNumber(prod.highPrice)}</span>
                </div>
            )
        }
    }

    function displayLabel(prod) {
        return (
            <div className="tw-grid-col-1">
                {prod.vipPriceFlag === true && (
                    <div className="tw-flex">
                        <div className="tw-bg-eezee-blue-light tw-text-eezee-blue-dark">VIP Price</div>
                    </div>
                )}
                {prod.bulkDiscountFlag === true && (
                    <div className="flex">
                        <div className="tw-bg-eezee-yellow-light tw-text-eezee-yellow-dark">Bulk Discount</div>
                    </div>
                )}
                {prod.moq != null && (
                    <div className="flex">
                        <div className="tw-bg-background tw-text-grey-base">MOQ: {prod.moq}</div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <Link to={{ pathname: `/product/${data.id}` }}>
            <div
                key={data.id}
                className="tw-bg-white tw-border tw-border-divider tw-flex tw-flex-col tw-overflow-hidden tw-h-full tw-relative tw-w-auto"
            >
                <div className="tw-aspect-square tw-bg-gray-200 tw-group-hover:tw-opacity-75 tw-relative">
                    <img
                        src={data.images[0].url}
                        alt="Image"
                        className="tw-w-full tw-h-full tw-object-scale-down sm:tw-w-full sm:tw-h-full"
                    />
                    <div className="tw-px-4 tw-absolute tw-bottom-0 tw-left-0">{displayLabel(data)}</div>
                </div>
                <div className="tw-inline-flex tw-flex-col tw-p-2 tw-space-y-2 tw-text-sm">
                    <div className="tw-text-eezee-blue tw-font-semibold ">{displayPrice(data)}</div>
                    <span className="tw-text-md tw-text-gray-base">{data.title}</span>
                    <span>{data.productCount}</span>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
