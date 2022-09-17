import styled from 'styled-components'

export const CounterContainer = styled.div`
  min-width: 4.5rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;

  button:first-child {
    border-radius: 6px 0 0 6px;
  }
  button:last-child {
    border-radius: 0 6px 6px 0;
  }

  button {
    background-color: transparent;
    border: none;
    flex: 1;
    transition: 0.1s;

    svg {
      height: 100%;
    }
  }

  button:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  output {
    line-height: 2.375rem;
    text-align: center;
    flex: 1;
  }
`
