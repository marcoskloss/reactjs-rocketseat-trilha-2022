import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import {
  StartCountdownButton,
  StopCountdownButton,
} from './components/CountdownButtons'
import { HomeContainer } from './styles'
import { useCycle } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1),
  minutesAmount: zod.number().min(5).max(60),
})

export type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, stopCurrentCycle } = useCycle()

  const cycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: { task: '', minutesAmount: undefined },
  })

  const { handleSubmit, watch } = cycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task?.trim()

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...cycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={stopCurrentCycle} />
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled} />
        )}
      </form>
    </HomeContainer>
  )
}
