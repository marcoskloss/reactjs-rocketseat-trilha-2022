import styled from 'styled-components'

export const IntroContainer = styled.section`
  padding: 5.875rem 0 6.75rem;
  display: grid;
  grid-template-columns: calc(59.5% - 1.75rem) calc(40.5% - 1.75rem);
  gap: 3.5rem;
`

export const LeftSection = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const BenefitsContainer = styled.div`
  display: grid;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
  grid-template-columns: auto auto;
  margin-top: 4.125rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  span {
    line-height: 1.3;
  }
`

interface BackgroundColorProps {
  color: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}
export const Benefit = styled.div<BackgroundColorProps>`
  svg {
    box-sizing: content-box;
    padding: 4px;
    border-radius: 9999px;
    background-color: ${(props) => props.theme[props.color]};
  }
`

export const RightSection = styled.div`
  img {
    width: 100%;
  }
`
