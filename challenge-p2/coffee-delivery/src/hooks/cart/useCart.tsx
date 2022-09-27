import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react'
import { CartItem, cartActions } from './actions'

interface CartContextData {
  addCoffeeToCart: (id: number, amount: number) => void
  decrementCoffeeAmountFromCart: (id: number) => void
  removeCoffeeItemFromCart: (id: number) => void
  cartItems: CartItem[]
}

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addCoffeeToCart = useCallback((id: number, amount: number) => {
    setCartItems((state) => cartActions.addCoffeeToCart(id, amount, state))
  }, [])

  const decrementCoffeeAmountFromCart = useCallback((id: number) => {
    setCartItems((state) =>
      cartActions.decrementCoffeeAmountFromCart(id, state),
    )
  }, [])

  const removeCoffeeItemFromCart = useCallback((id: number) => {
    setCartItems((state) => cartActions.removeCoffeeItemFromCart(id, state))
  }, [])

  return (
    <CartContext.Provider
      value={{
        addCoffeeToCart,
        decrementCoffeeAmountFromCart,
        removeCoffeeItemFromCart,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
