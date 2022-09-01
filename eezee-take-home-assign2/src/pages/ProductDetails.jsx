import React from 'react'
import { ImageGallery, OrderQty } from '../components'
import { useParams } from 'react-router-dom'
import Products from '../assets/datasets/products.json'
import { capitaliseFirstLetter } from '../utils/Helper'

const ProductDetails = () => {
    const { prod_id } = useParams()

    const product = Object.values(Products).find((e) => e.id === prod_id)

    return (
        <div className="tw-px-6 tw-pt-3 tw-mx-32 tw-mt-2 tw-space-y-2">
            <div className="tw-grid tw-grid-cols-3 tw-gap-x-4">
                <div className="tw-col-start-1 tw-col-span-2 tw-bg-white tw-p-4">
                    <span className="tw-text-2xl tw-font-semibold">{product.title}</span>
                    {/* Product metadata  */}
                    <div className="tw-flex tw-flex-row tw-h-20 tw-mt-1">
                        <img src={product.metadata.brandImage} className="tw-object-scale-down" />
                        <div className="tw-flex tw-flex-col tw-px-4 tw-justify-evenly">
                            <div className="tw-space-x-2">
                                <span className="tw-text-grey-primary">Model:</span>
                                <span className="tw-text-eezee-blue">{product.metadata.model}</span>
                            </div>
                            <div className="tw-space-x-2">
                                <span className="tw-text-grey-primary">Brand:</span>
                                <span className="tw-text-eezee-blue">
                                    {capitaliseFirstLetter(product.metadata.brand)}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Image gallery */}
                    <div className="tw-border-t tw-border-b tw-border-divider tw-mt-5">
                        {/* <BigProductCard data={product} /> */}
                        {<ImageGallery data={product} />}
                    </div>
                    {/* Description */}
                    <div className="tw-space-y-2">
                        <div className="tw-flex tw-flex-col tw-space-y-1">
                            <span className="tw-text-2xl tw-font-semibold">Product Description</span>
                            <span className="tw-font-medium">Specification</span>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
                    </div>
                </div>
                {/* Order qty */}
                <OrderQty data={product} />
            </div>
        </div>
    )
}

export default ProductDetails
