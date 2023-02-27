import { useEffect } from 'react';
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from '../redux/cart/cartSlice';

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
