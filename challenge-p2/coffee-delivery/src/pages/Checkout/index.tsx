import { Card } from '../../components/Card'
import { CheckoutForm } from './components/CheckoutForm'
import { PaymentMethods } from './components/PaymentMethods'
import { SelectedCoffeeList } from './components/SelectedCoffeeList'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Card title="Complete seu pedido">
        <CheckoutForm />
      </Card>

      <Card title="Cafés selecionados">
        <SelectedCoffeeList />
      </Card>

      <Card>
        <PaymentMethods />
      </Card>
    </CheckoutContainer>
  )
}
