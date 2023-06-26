import {Fragment, useState} from 'react'
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import CartProvider from './store/CartProvider';
function App() {
  const [cartShow, setCartShow] = useState(false)

  const showCartHandler = () =>{
    setCartShow(true)
  }

  const hideCartHandler = () =>{
    setCartShow(false)
  }
  return (
    <CartProvider>
      {cartShow && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
