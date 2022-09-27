import { useEffect, useState } from 'react'
import { ShoppingCartSimple } from 'phosphor-react'
import defaultCoffeImg from '../../../../assets/loading-coffee.svg'
import { Counter } from '../../../../components/Counter'
import {
  AddToCartButton,
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
  const [quantity, setQuantity] = useState(0)

  const handleAddCoffee = () => onAddCoffee(id, quantity)

  const formattedPrice = currencyFormatter.format(price)

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
        <Counter onChangeValue={setQuantity} />
        <AddToCartButton
          title={`Adicionar ${quantity} ${title} ao carrinho`}
          onClick={handleAddCoffee}
        >
          <ShoppingCartSimple
            size={22}
            weight="fill"
            aria-label={`Adicionar ${title} ao carrinho`}
            cursor="pointer"
          />
        </AddToCartButton>
      </CoffeePriceContainer>
    </CoffeeContainer>
  )
}
