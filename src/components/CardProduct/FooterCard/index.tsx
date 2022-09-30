import { FooterCardContainer } from './styles';

interface FooterCardProps {
  children: React.ReactNode
}

export function FooterCard({ children }: FooterCardProps) {
  return (
      <FooterCardContainer>
        { children}
      </ FooterCardContainer>
  )
}