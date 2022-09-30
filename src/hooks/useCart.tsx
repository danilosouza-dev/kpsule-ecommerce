import { createContext, useContext, useEffect, useState } from "react"
import { useProductAddToCart } from "./useProductAddedToCart"

interface Product {
  id: number
  name: string
  brand: string
  score: number
  price: string
  capsuleAmount: number
  isInPack: boolean
  hasPrecaution: boolean
  healthGoals: {
    score: number
  }[];
  symptoms: {
    score: number
  }[]
}

type ProductInCart = Pick<Product, "id" | "name" | "price">

interface CartProviderProps {
  children: React.ReactNode
}

interface CartContextData {
  cart: ProductInCart[]
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const { productsInCart } = useProductAddToCart()
  const [cart, setCart] = useState<ProductInCart[]>([])

  useEffect(() => {
    setCart(productsInCart)
  }, [productsInCart])

  return (
    <CartContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  return context
}
