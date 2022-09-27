import styled from 'styled-components'

interface CardHeaderProps {
  color: 'yellow-dark' | 'purple'
}

export const CardHeader = styled.header<CardHeaderProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h4 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    color: ${(props) => props.theme[props.color]};
  }
`
