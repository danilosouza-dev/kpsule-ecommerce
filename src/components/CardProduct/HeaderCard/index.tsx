import { HeaderCardContainer } from './styles';

interface HeaderCardProps {
  children: React.ReactNode
}

export function HeaderCard({ children }: HeaderCardProps) {
  return (
    <HeaderCardContainer>
      { children }
    </ HeaderCardContainer>
  )
}