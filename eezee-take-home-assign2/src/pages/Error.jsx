import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="tw-bg-white tw-min-h-screen tw-px-4 tw-py-16 sm:tw-px-6 sm:tw-py-24 md:tw-grid md:tw-place-items-center lg:tw-px-8">
      <div className="tw-max-w-max tw-mx-auto">
        <main className="sm:tw-flex">
          <p className="tw-text-4xl tw-font-extrabold tw-text-indigo-600 sm:tw-ext-5xl">404</p>
          <div className="sm:tw-ml-6">
            <div className="sm:tw-border-l sm:tw-border-gray-200 sm:tw-pl-6">
              <h1 className="tw-text-4xl tw-font-extrabold tw-text-gray-900 tw-tracking-tight sm:tw-text-5xl">
                Page not found
              </h1>
              <p className="tw-mt-1 tw-text-base tw-text-gray-500">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="tw-mt-10 tw-flex tw-space-x-3 sm:tw-border-l sm:tw-border-transparent sm:tw-pl-6">
              <Link to="/">
                <a
                  href="#"
                  className="tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-border tw-border-transparent tw-text-sm tw-font-medium tw-rounded-md tw-shadow-sm tw-text-white tw-bg-indigo-600 hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500"
                >
                  Go back to Home
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
