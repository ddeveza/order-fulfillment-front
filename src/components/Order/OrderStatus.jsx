import classNames from 'classnames';

const OrderStatus = ({ product }) => {
  return (
    <div className='border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8'>
      <h4 className='sr-only'>Status</h4>
      <p className='text-sm font-medium text-gray-900'>
        {product.status} on{' '}
        <time dateTime={product.datetime}>{product.date}</time>
      </p>
      <div className='mt-6' aria-hidden='true'>
        <div className='bg-gray-200 rounded-full overflow-hidden'>
          <div
            className='h-2 bg-indigo-600 rounded-full'
            style={
              product.step > 2
                ? { width: '100%' }
                : {
                    width: `calc((${product.step} * 2 + 1) / 8 * 100%)`,
                  }
            }
          />
        </div>
        <div className='hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6'>
          <div className='text-indigo-600'>Unfulfilled</div>
          <div
            className={classNames(
              product.step > 0 ? 'text-indigo-600' : '',
              'text-center'
            )}
          >
            Fulfilled
          </div>
          <div
            className={classNames(
              product.step > 1 ? 'text-indigo-600' : '',
              'text-center'
            )}
          >
            Scheduled
          </div>
          <div
            className={classNames(
              product.step > 2 ? 'text-indigo-600' : '',
              'text-right'
            )}
          >
            Shipped
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
