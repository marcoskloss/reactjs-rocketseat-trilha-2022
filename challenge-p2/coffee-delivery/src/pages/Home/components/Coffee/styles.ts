import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;

  img {
    margin-bottom: 0.75rem;
    margin-top: -2.5rem;
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
    margin-bottom: 2rem;
  }
`

export const Tag = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.25rem 0.5rem;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 1.3;
  color: ${(props) => props.theme['yellow-dark']};
  text-transform: uppercase;
  border-radius: 999px;
`

export const CoffeePriceContainer = styled.div`
  display: flex;
  align-items: center;

  & > svg {
  }
`
export const CoffeePrice = styled.span`
  font-size: 0.875rem;
  line-height: 1.3;
  margin-right: 1.25rem;
  text-overflow: ellipsis;

  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
  }
`

export const AddToCartButton = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  margin-left: 0.5rem;
  border: none;
  font-size: 0;
  height: 100%;
  padding: 0 0.5rem;

  &:active {
    background: ${(props) => props.theme.purple};
  }
`
