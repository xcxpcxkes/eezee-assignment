import React from 'react';
import SG from 'country-flag-icons/react/3x2/SG';
import { phone_number } from '../../constants';
import { AiOutlinePhone } from 'react-icons/ai';

export default function Info() {
  return (
    <div className="tw-bg-background tw-h-[38px] tw-text-black tw-text-center tw-align-middle tw-flow-root tw-py-4 tw-text-grey-primary tw-px-6 tw-mx-32">
      <div className="tw-flex tw-flex-row">
        <div className="tw-flex tw-items-center tw-space-x-1">
          <SG title="Singapore" className="tw-w-5 tw-h-3.5" />
          <span>Singapore</span>
        </div>
        <div className="tw-flex tw-items-center tw-space-x-1 tw-pl-6">
          <AiOutlinePhone />
          <span>{phone_number}</span>
        </div>
      </div>
    </div>
  );
}
