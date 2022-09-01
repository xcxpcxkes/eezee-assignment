import React, { useContext } from 'react'
import { PriceTabs, ProductCard } from '../components'
import { PriceCurrentTabContext } from '../context/productContext'
import Products from '../assets/datasets/products.json'

const ProductsLayout = () => {
    // const { currentTab } = useContext(PriceCurrentTabContext);
    const sum = Object.keys(Products).length

    return (
        <div className="tw-px-6 tw-pt-3 tw-mx-32 tw-mt-2 tw-space-y-2">
            <div className="tw-grid tw-grid-cols-6 tw-gap-x-4">
                <div className="tw-col-start-1 tw-col-span-1">
                    <div className="tw-flex tw-flex-col">
                        <span className="tw-text-grey-base tw-text-lg tw-font-semibold">Products</span>
                        <span className="tw-text-grey-secondary">{sum} results</span>
                    </div>
                </div>
                <div className="tw-col-span-5 tw-col-start-2">
                    <PriceTabs />
                    <div className="tw-grid tw-grid-cols-1 tw-gap-y-4 sm:tw-grid-cols-2 sm:tw-gap-x-6 sm:tw-gap-y-10 lg:tw-grid-cols-6 lg:tw-gap-x-8">
                        <PriceCurrentTabContext.Consumer>
                            {(value) => {
                                const tabName = value.currentTab.name
                                return tabName === 'Relevance'
                                    ? Products.sort(function randomize(a, b) {
                                          return Math.random() - 0.5
                                      }).map((d) => (
                                          <div key={d.id} className="tw-flex">
                                              <ProductCard data={d} />
                                          </div>
                                      ))
                                    : tabName === 'Price: High to Low'
                                    ? Products.sort(function (a, b) {
                                          return b.lowPrice - a.lowPrice
                                      }).map((d) => (
                                          <div key={d.id} className="tw-flex">
                                              <ProductCard data={d} />
                                          </div>
                                      ))
                                    : Products.sort(function (a, b) {
                                          return a.lowPrice - b.lowPrice
                                      }).map((d) => (
                                          <div key={d.id} className="tw-flex">
                                              <ProductCard data={d} />
                                          </div>
                                      ))
                            }}
                        </PriceCurrentTabContext.Consumer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsLayout
