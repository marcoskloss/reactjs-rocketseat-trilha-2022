import styled from 'styled-components'

interface CardContentProps {
  topRightRounded?: boolean
}

export const Card = styled.section`
  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.875rem;
  }
`

export const CardContent = styled.div<CardContentProps>`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  border-top-right-radius: ${(props) => (props.topRightRounded ? '44px' : '0')};
`
