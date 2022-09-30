import { SymptomsContainer } from './styles';
import iconBrain from "../../../../assets/brain.svg"
import goalsCircle from '../../../../assets/circle-goals.svg'

interface SymptomsProps {
  maxSymptomsScore: number
  children: React.ReactNode
  // loading: boolean
}

export function Symptoms({ children, maxSymptomsScore }: SymptomsProps) {
  return (
    <SymptomsContainer>
      <div>
        {children}
      </div>

      <div className={
          `symptoms-score 
          ${maxSymptomsScore === 100 ? "symptoms-score-full-border" :
          maxSymptomsScore === 75 ? "symptoms-score-75-border" :
          maxSymptomsScore === 50 ? "symptoms-score-50-border" :
          maxSymptomsScore === 25 ? "symptoms-score-25-border" :
          ""
        }
        `}>
        <span className="circle-white-symptoms">
          <img src={iconBrain} alt="icon brain" />
        </span>
      </div>
    </ SymptomsContainer>
  )
}

