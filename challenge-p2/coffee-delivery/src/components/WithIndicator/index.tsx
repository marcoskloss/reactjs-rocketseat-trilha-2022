import { PropsWithChildren } from 'react'
import { IndicatorContainer, IndicatorValue } from './styles'

interface Props extends PropsWithChildren {
  value?: string
}

export function WithIndicator({ value, children }: Props) {
  const isIndicatorVisible = value !== '0' && !!value
  return (
    <IndicatorContainer>
      {isIndicatorVisible && <IndicatorValue>{value}</IndicatorValue>}
      {children}
    </IndicatorContainer>
  )
}
