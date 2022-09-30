import { CheckCircle, PlusCircle } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useProductAddToCart } from '../../../../hooks/useProductAddedToCart';
import { ButtonCardContainer } from './styles';

interface ButtonCardProps {
  id: number
  price: string
}

export function ButtonCard({ id, price }: ButtonCardProps) {
  const [buttonClicked, setButtonClicked] = useState<boolean>(false)
  const { addProductToCart, productsInCart } = useProductAddToCart()

  useEffect(() => {
    const isProductInTheCart = productsInCart.find(productOne => productOne.id === id)

    if (isProductInTheCart) {
      setButtonClicked(true)
    }
    if (!isProductInTheCart) {
      setButtonClicked(false)
    }
  }, [productsInCart])

  function handleAddProductToCart() {
    addProductToCart(id)
  }

  return (
    <ButtonCardContainer onClick={handleAddProductToCart}>
      {new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      }).format(parseFloat(price))}

      {buttonClicked ? <CheckCircle size={22} color="#12b195" /> : <PlusCircle size={22} />}
    </ButtonCardContainer>
  )
}