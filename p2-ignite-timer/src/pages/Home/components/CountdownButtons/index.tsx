import { HandPalm, Play } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export function StopCountdownButton(props: Props) {
  return (
    <S.StopCountdownButton {...props}>
      <HandPalm size={24} />
      Interromper
    </S.StopCountdownButton>
  )
}

export function StartCountdownButton(props: Props) {
  return (
    <S.StartCountdownButton {...props}>
      <Play size={24} />
      Começar
    </S.StartCountdownButton>
  )
}
