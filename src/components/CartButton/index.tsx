import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

import iconCart from "../../assets/cart.svg"

import { CartButtonContainer } from './styles';

export function CartButton() {
  const { cart } = useCart()
  const cartProgress = cart.length

  return (
    <CartButtonContainer cartProgress={cartProgress}>
      <NavLink to="/cart" title="cart">
        <span
          className="number-of-products-in-cart">
          {cart.length}
        </span>

        <span className="cart-button" >
          <img src={iconCart} alt="icon cart" />
          <span className="circle-white-cart">
          </span>
        </span>
      </NavLink>
    </ CartButtonContainer>
  )
}