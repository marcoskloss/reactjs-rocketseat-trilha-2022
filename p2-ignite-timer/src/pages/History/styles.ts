import styled from 'styled-components'
import { ThemeType } from '../../@types/styled'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: center;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-bottom-left-radius: 8px;
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        border-bottom-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
  }
`

type StatusColor = 'yellow' | 'red' | 'green'
interface StatusProps {
  statusColor: StatusColor
}

const STATUS_COLORS: Record<StatusColor, keyof ThemeType> = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500',
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
