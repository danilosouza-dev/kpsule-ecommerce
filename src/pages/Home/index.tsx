import { CardProduct } from '../../components/CardProduct'
import { SkeletonTitle } from '../../components/CardProduct/SkeletonTitle'
import { NewProductModal } from '../../components/NewProductModal'
import { useProductAddToCart } from '../../hooks/useProductAddedToCart'

import { HomeContainer, TitleHome } from './styles'

export function Home() {
  const { products, loading } = useProductAddToCart()

  return (
    <>

      {
        loading ?
          <SkeletonTitle />

          :
          <TitleHome>
            <h2>Best Products</h2>
            <h3>From a base of <strong>{products.length} products</strong></h3>
          </TitleHome>
      }
      {/* <TitleHome>
        <h2>Best Products</h2>
        <h3>From a base of <strong>{products.length} products</strong></h3>
      </TitleHome> */}

      <HomeContainer>
        <NewProductModal />

        {products.map((product) => (
          <CardProduct
            key={product.id}
            {...product}
          />
        ))}
      </HomeContainer>
    </>

  )
}
