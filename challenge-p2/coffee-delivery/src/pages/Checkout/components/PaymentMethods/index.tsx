import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { Button } from '../../../../components/Button'
import { CardHeader } from '../../../../components/Card/CardHeader'
import { PaymentMethods as StyledPaymentMethods } from './styles'

export function PaymentMethods() {
  return (
    <>
      <CardHeader color="purple">
        <CurrencyDollar size={22} />
        <div>
          <h4>Pagamento</h4>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </CardHeader>

      <StyledPaymentMethods>
        <Button
          type="button"
          text="Cartão de crédito"
          className="selected"
          icon={<CreditCard size={16} />}
        />
        <Button
          type="button"
          text="Cartão de débito"
          icon={<Bank size={16} />}
        />
        <Button type="button" text="Dinheiro" icon={<Money size={16} />} />
      </StyledPaymentMethods>
    </>
  )
}
