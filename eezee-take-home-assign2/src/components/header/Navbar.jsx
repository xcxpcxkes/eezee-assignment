import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/eezee-logo.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useAppContext } from '../../context/appContext'

export default function Navbar() {
    const { qty, getQty } = useAppContext()

    useEffect(() => {
        getQty()
    }, [])

    return (
        <div className="tw-bg-white">
            <section className="tw-flow-root tw-px-6 tw-pt-3 tw-mx-32 tw-mt-2">
                <div className="tw-float-left">
                    <Link to="/">
                        <img src={Logo} alt="logo" className="tw-w-[150px] tw-h-[44px]"></img>
                    </Link>
                </div>
                <div className="tw-float-right">
                    <Link to="/cart">
                        <button className="tw-items-center tw-text-center tw-w-20 tw-h-20 tw-flex tw-flex-col tw-relative">
                            <AiOutlineShoppingCart className="tw-w-3/4 tw-h-3/4" />
                            <span className="tw-absolute tw-top-0 tw-bg-eezee-blue tw-right-0 tw-rounded-xl tw-flex-none tw-w-1/3 tw-h-1/3 tw-text-white tw-text-center">
                                {qty ?? 0}
                            </span>
                            <span>Cart</span>
                        </button>
                    </Link>
                </div>
            </section>
            <div className="tw-px-6 tw-mx-32 tw-mt-2">
                <Link to="/all-brands" className="tw-pt-5 tw-text-eezee-blue">
                    View All Brands
                </Link>
            </div>
        </div>
    )
}
