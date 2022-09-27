import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { WithIndicator } from '../WithIndicator'
import { useCart } from '../../hooks/cart/useCart'
import { CartButton, HeaderContainer, LocationLabel } from './styles'

export function Header() {
  const { cartItems } = useCart()

  const cartItemsQuantityIndicator =
    cartItems.length > 99 ? '99+' : cartItems.length.toString()

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="Coffee Delivery" />
      </Link>
      <div>
        <LocationLabel>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationLabel>
        <WithIndicator value={cartItemsQuantityIndicator}>
          <CartButton to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </WithIndicator>
      </div>
    </HeaderContainer>
  )
}
