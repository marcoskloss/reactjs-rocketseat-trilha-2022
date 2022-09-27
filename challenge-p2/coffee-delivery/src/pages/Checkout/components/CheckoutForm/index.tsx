import { MapPinLine } from 'phosphor-react'
import { CardHeader } from '../../../../components/Card/CardHeader'
import { FormGrid, FormGroup, Input } from './styles'

export function CheckoutForm() {
  return (
    <>
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
    </>
  )
}
