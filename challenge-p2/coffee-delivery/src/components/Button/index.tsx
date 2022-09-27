import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button as StyledButton } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: ReactNode
}

export function Button({ text, icon = null, ...rest }: Props) {
  return (
    <StyledButton {...rest}>
      {icon}
      {text}
    </StyledButton>
  )
}
