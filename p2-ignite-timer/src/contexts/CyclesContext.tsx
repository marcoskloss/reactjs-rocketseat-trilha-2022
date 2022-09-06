import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
  useState,
} from 'react'
import {
  addNewCycleAction,
  finishCurrentCycleAction,
  stopCurrentCycleAction,
} from '../reducers/cycles/actions'
import { Cycle, cyclesReducer, INITIAL_STATE } from '../reducers/cycles/reducer'

type CreateNewCycleParam = Omit<Cycle, 'id' | 'startDate'>

export interface CyclesContextData {
  activeCycle?: Cycle
  activeCycleId: string | null
  amountSecondsPassed: number
  cycles: Cycle[]
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateNewCycleParam) => Cycle
  stopCurrentCycle: () => void
}

const CyclesContext = createContext({} as CyclesContextData)

export function CyclesContextProvider({ children }: PropsWithChildren) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, INITIAL_STATE)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((c) => c.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch(finishCurrentCycleAction())
  }

  function createNewCycle(data: CreateNewCycleParam): Cycle {
    const startDate = new Date()
    const newCycle: Cycle = {
      id: String(startDate.getTime()),
      startDate,
      ...data,
    }
    dispatch(addNewCycleAction(newCycle))
    return newCycle
  }

  function stopCurrentCycle() {
    dispatch(stopCurrentCycleAction())
    setAmountSecondsPassed(0)
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        stopCurrentCycle,
        cycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

export function useCycle() {
  return useContext(CyclesContext)
}
