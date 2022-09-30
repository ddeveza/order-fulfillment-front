const OrderDetails = ({ product }) => {
  return (
    <div className='py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8'>
      <div className='sm:flex lg:col-span-7'>
        <div className='flex-shrink-0 w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40'>
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className='w-full h-full object-center object-cover sm:w-full sm:h-full'
          />
        </div>

        <div className='mt-6 sm:mt-0 sm:ml-6'>
          <h3 className='text-base font-medium text-gray-900'>
            <a href={product.href}>{product.name}</a>
          </h3>
          <p className='mt-2 text-sm font-medium text-gray-900'>
            ${product.price}
          </p>
          <p className='mt-3 text-sm text-gray-500'>{product.description}</p>
        </div>
      </div>

      <div className='mt-6 lg:mt-0 lg:col-span-5'>
        <dl className='grid grid-cols-2 gap-x-6 text-sm'>
          <div>
            <dt className='font-medium text-gray-900'>Delivery address</dt>
            <dd className='mt-3 text-gray-500'>
              <span className='block'>{product.address[0]}</span>
              <span className='block'>{product.address[1]}</span>
              <span className='block'>{product.address[2]}</span>
            </dd>
          </div>
          <div>
            <dt className='font-medium text-gray-900'>Shipping updates</dt>
            <dd className='mt-3 text-gray-500 space-y-3'>
              <p>{product.email}</p>
              <p>{product.phone}</p>
              <button
                type='button'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Edit
              </button>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default OrderDetails;
