import React from 'react'
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import './HeaderCartButton.css'
const HeaderCartButton = ({onClick}) => {

  const cartCtx = useContext(CartContext);

  const numberofCartItems = cartCtx.items.reduce((currentNum, item)=>{
    return currentNum + item.amount; 
  }, 0);
  return (
    <button className='button' onClick = {onClick}>
      <span className='icon'><CartIcon/></span>
      <span>Your Cart</span>
      <span className='badge'>
        {numberofCartItems}
      </span>
    </button>
  );
}

export default HeaderCartButton