import skeletonTitlepage from '../../../assets/skeleton-title-page.svg'
import skeletonTitlepageBlue from '../../../assets/skeleton-title-page-blue.svg'

import { SkeletonTitleContainer } from './styles';

export function SkeletonTitle() {
  return (
      <SkeletonTitleContainer>
        <div>
          <img src={skeletonTitlepage} alt="" />
        </div>

        <img src={skeletonTitlepage} alt="" />
        <img className="title-blue" src={skeletonTitlepageBlue} alt="" />
      </ SkeletonTitleContainer>
  )
}