import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Order from './components/Order/Order';
const baseUrl = 'http://localhost:8000';

const App = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get(`${baseUrl}/orders`);
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  return (
    <>
      <Header />
      <section aria-labelledby='products-heading' className='mt-6 py-16 px-40'>
        {orders.length > 0 ? (
          <Order products={orders} />
        ) : (
          <h1>You dont have orders yet.</h1>
        )}
      </section>
    </>
  );
};

export default App;
