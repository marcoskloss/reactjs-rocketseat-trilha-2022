import { createContext, PropsWithChildren, useContext, useState } from 'react'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

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
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        }
        return cycle
      }),
    )
  }

  function createNewCycle(data: CreateNewCycleParam): Cycle {
    const startDate = new Date()
    const newCycle: Cycle = {
      id: String(startDate.getTime()),
      startDate,
      ...data,
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)
    return newCycle
  }

  function stopCurrentCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        }
        return cycle
      }),
    )

    setActiveCycleId(null)
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
