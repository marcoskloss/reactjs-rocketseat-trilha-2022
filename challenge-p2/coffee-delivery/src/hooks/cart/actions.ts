export interface CartItem {
  id: number
  amount: number
}

export interface Coffee {
  id: number
  title: string
  price: number
  amount: number
}

const addCoffeeToCart = (
  id: number,
  amount: number,
  currentState: CartItem[],
) => {
  const itemAlreadyExists = currentState.find((item) => item.id === id)
  if (itemAlreadyExists) {
    return currentState.map((item) => {
      if (item.id === id) return { id, amount }
      return item
    })
  }
  return [...currentState, { id, amount }]
}

const decrementCoffeeAmountFromCart = (id: number, currentState: CartItem[]) =>
  currentState
    .map((item) => {
      if (item.id === id) return { id, amount: item.amount - 1 }
      return item
    })
    .filter((item) => item.amount <= 1)

const removeCoffeeItemFromCart = (id: number, currentState: CartItem[]) =>
  currentState.filter((item) => item.id !== id)

export const cartActions = {
  addCoffeeToCart,
  decrementCoffeeAmountFromCart,
  removeCoffeeItemFromCart,
}
