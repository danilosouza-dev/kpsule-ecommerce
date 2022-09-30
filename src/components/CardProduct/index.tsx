import { HeaderCard } from './HeaderCard';
import { InfoProduct } from './InfoProduct';
import { FooterCard } from './FooterCard';
import { GoalsAndSymptoms } from './GoalsAndSymptoms';
import { Goals } from './GoalsAndSymptoms/Goals';
import { Symptoms } from './GoalsAndSymptoms/Symptoms';
import { ButtonCard } from './FooterCard/ButtonCard';

import iconExclamation from '../../assets/exclamation.svg'
import iconStar from '../../assets/star.svg'
import capsule from '../../assets/capsule.svg'

import { CardProductsContainer } from './styles';
import { SkeletonCard } from '../SkeletonCard';
import { useProductAddToCart } from '../../hooks/useProductAddedToCart';

interface CardProductProps {
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

export function CardProduct({ ...product }: CardProductProps) {
  const { loading } = useProductAddToCart()

  const healthGoals = product.healthGoals.map(({ score }) => score)
  const maxHealthGoalsScore = healthGoals.reduce((a, b) => Math.max(a, b), 0)

  const symptoms = product.symptoms.map(({ score }) => score)
  const maxSymptomsScore = symptoms.reduce((a, b) => Math.max(a, b), 0)

  return (
    <CardProductsContainer>

      {loading ?

        <SkeletonCard />

        :

        <>
          <HeaderCard>
            {product.isInPack && (
              <img className="imgIcon" src={iconStar} alt="is in pack" />
            )}

            {product.hasPrecaution && (
              <img src={iconExclamation} alt="is in pack" />
            )}

            <div className='capsule-amount'>
              <img className="capsule" src={capsule} alt="is in pack" />
              <span>{product.capsuleAmount}</span>
            </div>
          </HeaderCard>

          <InfoProduct>
            <span>Brand: {product.brand}</span>
            <h1>{product.name}</h1>
            <h2>Votré compatibilité <strong>{product.score}/100</strong></h2>
          </InfoProduct>

          <GoalsAndSymptoms>
            <Goals maxHealthGoalsScore={maxHealthGoalsScore}>
              <h1>Health goals<span className="number-of-goals">{product.healthGoals.length}</span></h1>
              <h2>Améliorer les performances</h2>
            </Goals>
            <Symptoms maxSymptomsScore={maxSymptomsScore}>
              <h1>Symptoms <span className="number-of-symptoms">{product.symptoms.length}</span></h1>
              <h2>Mémorie</h2>
            </Symptoms>
          </GoalsAndSymptoms>

          <FooterCard>
            <ButtonCard
              id={product.id}
              price={product.price}
            />
          </FooterCard>
        </>
      }
    </ CardProductsContainer>
  )
}

