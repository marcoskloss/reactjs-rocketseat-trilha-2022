import { createContext, PropsWithChildren, useState } from 'react'

interface CartItem {
  title: string
  price: number
  amount: number
}

const CartContext = createContext({} as any)

export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState([])

  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}
