
import { GoalsAndSymptomsContainer } from './styles';

interface GoalsAndSymptomsProps {
  children: React.ReactNode
}

export function GoalsAndSymptoms({ children }: GoalsAndSymptomsProps) {
  return (
    <GoalsAndSymptomsContainer>
      {children}
    </ GoalsAndSymptomsContainer>
  )
}