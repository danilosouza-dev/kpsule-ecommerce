import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { CartProvider } from '../../hooks/useCart'
import { ProductProvider } from '../../hooks/useProductAddedToCart'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <ProductProvider>
        <CartProvider>
          <Header />
          <Outlet />
        </CartProvider>
      </ProductProvider>
    </LayoutContainer>
  )
}