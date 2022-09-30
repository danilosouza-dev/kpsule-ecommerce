import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../services/api"

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

interface ProductProviderProps {
  children: React.ReactNode
}

interface ProductContextData {
  loading: boolean
  products: Product[]
  productsInCart: ProductInCart[]
  nameOfProduct: string
  cartWithoutThisProduct: ProductInCart[]
  isNewProductModalOpen: boolean
  handleCloseProductModal: () => void
  setProductsInCart: (productsInCart: ProductInCart[]) => void
  addProductToCart: (id: number) => void
}

type ProductInCart = Pick<Product, "id" | "name" | "price">

const ProductContext = createContext<ProductContextData>({} as ProductContextData)

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [productsInCart, setProductsInCart] = useState<ProductInCart[]>([])
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false)
  const [nameOfProduct, setNameOfProduct] = useState("")
  const [cartWithoutThisProduct, setCartWithoutThisProduct] = useState<ProductInCart[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data)
    })
  }, [])

  useEffect(() => {
    const get = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(get)
  })

  function handleCloseProductModal() {
    setIsNewProductModalOpen(false)
  }

  function addProductToCart(id: number) {
    const productIndex = products.findIndex(product => product.id === id)
    const productAdded = products[productIndex]
    setNameOfProduct(productAdded.name)
    const productAlreadyExists = productsInCart.find(product => product.id === id)

    if (productAlreadyExists) {
      const cartWithoutProductOne = productsInCart.filter(product => product.id !== id)
      setCartWithoutThisProduct(cartWithoutProductOne)
      setIsNewProductModalOpen(!isNewProductModalOpen)
      return
    }
    setProductsInCart([productAdded, ...productsInCart])
  }

  return (
    <ProductContext.Provider
      value={{
        loading,
        products,
        productsInCart,
        setProductsInCart,
        nameOfProduct,
        isNewProductModalOpen,
        handleCloseProductModal,
        addProductToCart,
        cartWithoutThisProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProductAddToCart() {
  const context = useContext(ProductContext)
  return context
}
