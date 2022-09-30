import { useCart } from '../../hooks/useCart';
import { CartContainer } from './styles';

export function Cart() {
  const { cart } = useCart()
  console.log(cart);

  return (
    <CartContainer>
      <h1>Cart page</h1>
      {cart.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
        </div>
      ))}
    </CartContainer>
  )
}