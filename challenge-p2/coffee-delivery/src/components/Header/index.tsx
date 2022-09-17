import { MapPin, ShoppingCart } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'
import { CartButton, HeaderContainer, LocationLabel } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Coffee Delivery" />
      <div>
        <LocationLabel>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationLabel>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
