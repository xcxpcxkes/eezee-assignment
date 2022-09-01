import React, { useState } from 'react';
import { useAppContext } from '../../context/appContext';
import { formatNumber } from '../../utils/Helper';

const OrderQty = (props) => {
  const product = props.data;

  const { qty, setQty } = useAppContext();
  const [input, setInput] = useState(0);

  function increase() {
    return setInput(input + 1);
  }

  function decrease() {
    return setInput(input - 1);
  }

  function updateCart() {
    return setQty(Number(qty) + input);
  }

  return (
    <div className="tw-col-span-1 tw-col-start-3">
      <div className="tw-bg-white tw-w-full tw-flex tw-flex-col">
        <div className="tw-text-eezee-blue tw-px-4 tw-py-2 tw-flex tw-gap-1">
          <span className="tw-text-md tw-text-start">{product.currencySymbol}</span>
          <span className="tw-text-2xl">{formatNumber(product.lowPrice)}</span>
        </div>
        <div className="tw-border tw-border-dashed tw-border-divider tw-m-4" />
        <div className="tw-flex tw-flex-row tw-px-4 tw-py-2">
          <span>Quantity: </span>
          {/* Incremental Counter */}
          <div className="tw-flex tw-flex-row tw-mx-10">
            <button
              className=" tw-bg-white tw-border tw-border-border hover:tw-gray-200 tw-px-2 tw-text-eezee-blue tw-text-center"
              onClick={() => decrease()}
            >
              -{/* <span className="tw-text-eezee-blue">-</span> */}
            </button>
            <input
              type="number"
              className="tw-text-center tw-font-semibold tw-text-md tw-items-center tw-text-grey-primary tw-outline-none tw-border tw-border-border tw-w-10"
              value={input}
            ></input>
            <button
              className=" tw-bg-white tw-border tw-border-border hover:tw-gray-200 tw-px-2 tw-text-center tw-text-eezee-blue"
              onClick={() => increase()}
            >
              +
            </button>
          </div>
        </div>

        <div className="tw-p-4 tw-text-center tw-space-y-2">
          <button
            className="tw-bg-eezee-blue tw-text-white tw-border tw-border-border tw-w-full tw-py-1"
            onClick={() => updateCart()}
          >
            Add to Cart
          </button>
          <button className="tw-bg-white tw-text-eezee-blue tw-border tw-border-border tw-w-full tw-py-1">
            Add to Favourites
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderQty;
