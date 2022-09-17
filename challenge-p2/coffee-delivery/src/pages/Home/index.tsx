import { Coffee } from './components/Coffee'
import { Introduction } from './components/Introduction'
import coffeeList from '../../coffees.json'
import { CoffeeGrid } from './styles'

export function Home() {
  return (
    <main>
      <Introduction />
      <CoffeeGrid>
        <h2>Nossos cafés</h2>
        <div>
          {coffeeList.map((coffee) => (
            <Coffee key={coffee.title} data={coffee} />
          ))}
        </div>
      </CoffeeGrid>
    </main>
  )
}
