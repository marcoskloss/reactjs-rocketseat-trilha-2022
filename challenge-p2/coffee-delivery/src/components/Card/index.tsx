import { PropsWithChildren } from 'react'
import { CardContent, Card as StyledCard } from './styles'

interface Props extends PropsWithChildren {
  title?: string
  topRightRounded?: boolean
}

export function Card({ title, topRightRounded, children }: Props) {
  return (
    <StyledCard>
      {title && <h3>{title}</h3>}
      <CardContent topRightRounded={topRightRounded}>{children}</CardContent>
    </StyledCard>
  )
}
