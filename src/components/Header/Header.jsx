const Header = () => {
  return (
    <div className='bg-white py-6 px-10 border-b border-gray-200 sm:flex sm:items-center sm:justify-between drop-shadow-sm'>
      <h3 className='text-2xl leading-6 font-medium text-gray-900'>
        Product Orders
      </h3>
      <div className='mt-3 flex sm:mt-0 sm:ml-4'>
        <button
          type='button'
          className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Header;
