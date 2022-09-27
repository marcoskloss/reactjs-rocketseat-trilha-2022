import { Minus, Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CounterContainer } from './styles'

interface Props {
  subject?: string
  minValue?: number
  maxValue?: number
  onChangeValue: (currentValue: number) => void
}
export function Counter({
  subject = 'item',
  minValue = 1,
  maxValue,
  onChangeValue,
}: Props) {
  const [counter, setCounter] = useState(1)

  function handleIncrement() {
    setCounter((state) => {
      if (maxValue !== undefined && state >= maxValue) {
        return state
      }
      return state + 1
    })
  }

  function handleDecrement() {
    setCounter((state) => {
      if (state <= minValue) {
        return state
      }
      return state - 1
    })
  }

  useEffect(() => onChangeValue(counter), [counter, onChangeValue])

  return (
    <CounterContainer>
      <button
        type="button"
        onClick={handleDecrement}
        title={`Remover mais um ${subject}`}
      >
        <Minus weight="fill" />
      </button>
      <output>{counter}</output>
      <button
        type="button"
        onClick={handleIncrement}
        title={`Adicionar mais um ${subject}`}
      >
        <Plus weight="fill" />
      </button>
    </CounterContainer>
  )
}
