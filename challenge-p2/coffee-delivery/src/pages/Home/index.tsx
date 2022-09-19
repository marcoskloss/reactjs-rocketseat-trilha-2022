import { Coffee } from './components/Coffee'
import { Introduction } from './components/Introduction'
import coffeeList from '../../coffees.json'
import { CoffeeGrid } from './styles'
import { useCart } from '../../hooks/cart/useCart'

export function Home() {
  const { addCoffeeToCart } = useCart()

  return (
    <main>
      <Introduction />
      <CoffeeGrid>
        <h2>Nossos cafés</h2>
        <div>
          {coffeeList.map((coffee) => (
            <Coffee
              key={coffee.id}
              data={coffee}
              onAddCoffee={addCoffeeToCart}
            />
          ))}
        </div>
      </CoffeeGrid>
    </main>
  )
}
