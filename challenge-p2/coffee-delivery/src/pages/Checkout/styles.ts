import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 1.42fr 1fr;
  gap: 2rem;
`

export const Card = styled.section`
  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.875rem;
  }
`

export const CardContent = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`

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

interface InputProps {
  col?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

const colToWidth = (col: number) => `${Math.floor(col * (100 / 12))}%`

export const Input = styled.input<InputProps>`
  height: 2.625rem;
  padding: 0.625rem;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  outline-color: ${(props) => props.theme['yellow-dark']};
  width: ${(props) => (props.col ? colToWidth(props.col) : '100%')};
  border-radius: 4px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const FormGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;

  & > button {
    border: none;
    text-transform: uppercase;
    background: ${(props) => props.theme['base-button']};
    padding: 1rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-radius: 6px;
    transition: 0.1s;
  }

  & > button:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  .selected {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
