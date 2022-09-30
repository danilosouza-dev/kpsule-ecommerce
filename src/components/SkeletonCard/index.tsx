import headerItem from '../../assets/skeleton-card-header-item.svg'
import headerCapsule from '../../assets/skeleton-header-capsule.svg'
import title from '../../assets/skeleton-card-title.svg'
import circleProduct from '../../assets/circle-img-product.svg'
import goalsTitle from '../../assets/goals-title.svg'
import goalsCircle from '../../assets/circle-goals.svg'
import button from '../../assets/button-skeleton.svg'

import { SkeletonContainer } from './styles'

export function SkeletonCard() {
  return (
    <SkeletonContainer>
      <div className="header">
        <img className="imgIcon" src={headerItem} alt="is in pack" />

        <img src={headerItem} alt="is in pack" />

        <div className='capsule-amount'>
          <img className="capsule" src={headerCapsule} alt="is in pack" />
        </div>
      </div>

      <div className="info-product">
        <div className="title-card">
          <img src={title} alt="" />
          <img src={title} alt="" />
        </div>

        <img src={circleProduct} alt="" />
      </div>

      <div className="goals-and-symptoms">
        <div className="goals">
          <div>
            <img src={goalsTitle} alt="" />
          </div>

          <img className="goals-circle" src={goalsCircle} alt="" />
        </div>

        <div className="goals">
          <div>
            <img src={goalsTitle} alt="" />
          </div>

          <img src={goalsCircle} alt="" />
        </div>
      </div>

      <div className="footer">
        <img src={button} alt="" />
      </div>
    </SkeletonContainer>
  )
}