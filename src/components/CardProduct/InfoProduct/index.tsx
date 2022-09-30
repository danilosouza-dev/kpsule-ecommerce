
import imgProduct from '../../../assets/product.svg'

import { InfoProductContainer } from './styles';

interface InfoProductProps {
  children: React.ReactNode
}

export function InfoProduct({ children }: InfoProductProps) {
  return (
    <InfoProductContainer>
      <div className="title-card">
        {children}
      </div>
      <img src={imgProduct} alt="" />
    </ InfoProductContainer>
  )
}