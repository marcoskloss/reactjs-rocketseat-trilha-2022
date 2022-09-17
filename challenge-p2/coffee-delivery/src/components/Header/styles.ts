import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.75rem;
  }
`

export const LocationLabel = styled.div`
  padding: 8px;
  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme['purple-dark']};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CartButton = styled.button`
  padding: 8px;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 6px;
  border: none;
  font-size: 0;
`
