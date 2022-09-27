import styled from 'styled-components'

export const SelectedCoffee = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const SelectedCoffeeInfo = styled.div`
  display: flex;
  flex: 1;

  & > div {
    flex: 1;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
  }
`

export const SelectedCoffeeActions = styled.div`
  display: flex;
  gap: 0.5rem;
`
