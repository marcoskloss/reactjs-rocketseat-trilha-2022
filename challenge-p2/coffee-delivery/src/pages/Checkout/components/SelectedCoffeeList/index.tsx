import { Trash } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import { Button } from '../../../../components/Button'
import defaultCoffeImg from '../../../../assets/loading-coffee.svg'
import {
  SelectedCoffee,
  SelectedCoffeeActions,
  SelectedCoffeeInfo,
} from './styles'

export function SelectedCoffeeList() {
  return (
    <div>
      <SelectedCoffee>
        <img src={defaultCoffeImg} alt="coffee :)" />

        <SelectedCoffeeInfo>
          <div>
            <p>Expresso Tradicional</p>
            <SelectedCoffeeActions>
              <Counter
                onChangeValue={console.log}
                subject="Expresso Tradicional"
              />
              <Button type="button" text="Remover" icon={<Trash size={16} />} />
            </SelectedCoffeeActions>
          </div>

          <span>R$ 9,90</span>
        </SelectedCoffeeInfo>
      </SelectedCoffee>
    </div>
  )
}
