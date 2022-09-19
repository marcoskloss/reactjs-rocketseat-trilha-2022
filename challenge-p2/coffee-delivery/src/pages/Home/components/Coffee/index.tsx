import { useCallback, useEffect, useState } from 'react'
import { ShoppingCartSimple } from 'phosphor-react'
import defaultCoffeImg from '../../../../assets/loading-coffee.svg'
import { Counter } from '../../../../components/Counter'
import {
  CoffeeContainer,
  CoffeePrice,
  CoffeePriceContainer,
  Tag,
} from './styles'

interface Props {
  data: {
    id: number
    tags: string[]
    title: string
    description: string
    price: number
    imgName: string
  }
  onAddCoffee: (id: number, amount: number) => void
}

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  minimumFractionDigits: 2,
})

export function Coffee({ data, onAddCoffee }: Props) {
  const { description, imgName, price, tags, title, id } = data

  const [imgUrl, setImgUrl] = useState(defaultCoffeImg)
  const [counter, setCounter] = useState(0)

  const formattedPrice = currencyFormatter.format(price)

  const handleChangeCounter = useCallback((value: number) => {
    setCounter(value)
  }, [])

  const handleAddCoffee = () => {
    onAddCoffee(id, counter)
  }

  useEffect(() => {
    import(`../../../../assets/${imgName}.png`)
      .then((response) => setImgUrl(response.default))
      .catch(console.error)
  }, [imgName])

  return (
    <CoffeeContainer>
      <img src={imgUrl} alt="" />
      <div>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>

      <CoffeePriceContainer>
        <CoffeePrice>
          R$ <strong>{formattedPrice}</strong>
        </CoffeePrice>
        <Counter onChangeValue={handleChangeCounter} />
        <ShoppingCartSimple
          size={22}
          weight="fill"
          aria-label={`Adicionar ${title} ao carrinho`}
          cursor="pointer"
          onClick={handleAddCoffee}
        />
      </CoffeePriceContainer>
    </CoffeeContainer>
  )
}
