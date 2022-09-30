
import { GoalsContainer } from './styles';
import iconMedal from '../../../../assets/medal.svg'

interface GoalsProps {
  maxHealthGoalsScore: number
  children: React.ReactNode
}

export function Goals({ children, maxHealthGoalsScore}: GoalsProps) {
  return (
    <GoalsContainer>
      <div>
        { children }
      </div>

      <div className={
        `health-goals-score 
        ${maxHealthGoalsScore === 100 ? "health-goals-score-full-border" : 
          maxHealthGoalsScore === 75 ? "health-goals-score-75-border" : 
          maxHealthGoalsScore === 50 ? "health-goals-score-50-border" : 
          maxHealthGoalsScore === 25 ? "health-goals-score-25-border" :
          ""
        }
        `}>
        <span className="circle-white-goals">
        <img src={iconMedal} alt="icon medal" />
        </span>
      </div>
    </ GoalsContainer>
  )
}