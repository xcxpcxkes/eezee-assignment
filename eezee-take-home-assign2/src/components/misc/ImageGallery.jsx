import React from 'react';
import { Tab } from '@headlessui/react';
import { classNames } from '../../utils/Helper';

const ImageGallery = (props) => {
  const product = props.data;
  return (
    <>
      {/* Image gallery */}
      <Tab.Group as="div" className="tw-flex tw-flex-col-reverse">
        {/* Image selector */}
        <div className="tw-hidden tw-mt-6 tw-w-full tw-max-w-2xl tw-mx-auto sm:tw-block lg:tw-max-w-none">
          <Tab.List className="tw-flex tw-gap-3 tw-w-auto tw-justify-center tw-p-6">
            {product.images.map((image) => (
              <Tab
                key={image.id}
                className="tw-relative tw-h-24 tw-bg-white tw-flex tw-items-center tw-justify-center tw-text-sm tw-font-medium tw-uppercase tw-text-gray-900 tw-cursor-pointer hover:tw-bg-gray-50 tw-border-b tw-border-divider tw-aspect-square"
              >
                {({ selected }) => (
                  <>
                    {/* <span className="sr-only">{image.name}</span> */}
                    <span className="tw-absolute tw-inset-0 tw-overflow-hidden tw-flex tw-w-full tw-h-full">
                      <img
                        src={image.url}
                        alt=""
                        className="tw-object-center tw-flex-1 tw-object-scale-down"
                      />
                    </span>
                    <span
                      className={classNames(
                        selected ? 'tw-ring-2 tw-ring-eezee-blue' : 'tw-ring-2 tw-ring-border',
                        'tw-absolute tw-inset-0 tw-pointer-events-none tw-h-full tw-w-full'
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>

        {/* large image */}
        <Tab.Panels className="tw-w-full sm:tw-h-24 lg:tw-h-72 tw-object-center tw-border-t tw-border-divider tw-p-6">
          {product.images.map((image) => (
            <Tab.Panel key={image.url} className="tw-w-full tw-h-full tw-flex">
              <img src={image.url} alt={image.url} className="tw-object-contain tw-flex-1" />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default ImageGallery;
