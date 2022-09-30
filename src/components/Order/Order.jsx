import OrderDetails from './OrderDetails';
import OrderStatus from './OrderStatus';

const Order = ({ products }) => {
  return (
    <>
      <h2 id='products-heading' className='sr-only'>
        Products purchased
      </h2>

      <div className='space-y-8'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg'
          >
            <OrderDetails product={product} />
            <OrderStatus product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Order;
