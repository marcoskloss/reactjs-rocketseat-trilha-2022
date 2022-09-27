import styled from 'styled-components'

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;

  & > button {
    padding: 1rem;
    gap: 0.75rem;
  }

  .selected {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
