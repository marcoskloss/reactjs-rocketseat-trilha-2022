import styled from 'styled-components'

export const IndicatorContainer = styled.div`
  position: relative;
`

export const IndicatorValue = styled.div`
  position: absolute;
  top: -15%;
  right: -15%;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  border-radius: 9999px;
  padding: 0 0.25rem;
  font-size: 0.75rem;
  text-align: center;
`
