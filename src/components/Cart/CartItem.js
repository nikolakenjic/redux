import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../../redux-store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = ({ id, title, quantity, totalPrice, price }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      cartSliceActions.addItem({
        id,
        title,
        price,
      })
    );
  };

  const removeItemFromCart = () => {
    dispatch(cartSliceActions.removeItem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCart}>-</button>
          <button onClick={addItemToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
