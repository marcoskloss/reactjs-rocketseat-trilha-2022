import styled from 'styled-components'

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
