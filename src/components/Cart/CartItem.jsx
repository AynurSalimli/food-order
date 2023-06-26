import   "./CartItem.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="cart-item">
      <div>
        <h2>{props.name}</h2>
        <div className='item-summary'>
          <span className='item-price'>{price}</span>
          <span className='item-amount'>x {props.amount}</span>
        </div>
      </div>
      <div className='item-actions'>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
