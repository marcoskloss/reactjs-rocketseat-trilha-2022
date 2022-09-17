import styled from 'styled-components'

export const CoffeeGrid = styled.section`
  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  & > div {
    margin-top: 3.375rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-bottom: 1.5rem;
  }
`
