import {
  CurrencyDollar,
  MapPinLine,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { useCart } from '../../hooks/cart/useCart'
import coffeeList from '../../coffees.json'
import {
  Card,
  CardContent,
  CardHeader,
  CheckoutContainer,
  FormGroup,
  FormGrid,
  Input,
  PaymentMethods,
} from './styles'

export function Checkout() {
  const { cartItems } = useCart()

  return (
    <CheckoutContainer>
      <Card>
        <h3>Complete seu pedido</h3>
        <CardContent>
          <CardHeader color="yellow-dark">
            <MapPinLine size={22} />
            <div>
              <h4>Endereço de entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CardHeader>
          <FormGrid>
            <FormGroup>
              <Input placeholder="CEP" required />
            </FormGroup>
            <FormGroup>
              <Input placeholder="Rua" required />
            </FormGroup>
            <FormGroup>
              <Input col={3} placeholder="Número" type="number" required />
              <Input col={9} placeholder="Complemento" />
            </FormGroup>
            <FormGroup>
              <Input col={3} placeholder="Bairro" required />
              <Input col={8} placeholder="Cidade" required />
              <Input col={1} placeholder="UF" required />
            </FormGroup>
          </FormGrid>
        </CardContent>
      </Card>

      <Card>
        <h3>Cafés selecionados</h3>
        <CardContent>{JSON.stringify(cartItems, null, 2)}</CardContent>
      </Card>

      <Card>
        <CardContent>
          <CardHeader color="purple">
            <CurrencyDollar size={22} />
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </CardHeader>

          <PaymentMethods>
            <button className="selected">
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </button>
            <button>
              <Bank size={16} />
              <span>Cartão de débito</span>
            </button>
            <button>
              <Money size={16} />
              <span>Dinheiro</span>
            </button>
          </PaymentMethods>
        </CardContent>
      </Card>
    </CheckoutContainer>
  )
}
