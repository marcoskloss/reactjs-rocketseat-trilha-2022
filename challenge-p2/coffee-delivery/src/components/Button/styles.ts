import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  transition: 0.1s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
