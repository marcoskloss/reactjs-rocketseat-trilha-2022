import React, { Suspense, useEffect, useState } from 'react'
import { ShoppingCartSimple } from 'phosphor-react'
import defaultCoffeImg from '../../../../assets/espresso.png'
import { Counter } from '../../../../components/Counter'
import {
  CoffeeContainer,
  CoffeePrice,
  CoffeePriceContainer,
  Tag,
} from './styles'

interface Props {
  data: {
    tags: string[]
    title: string
    description: string
    price: number
    imgName: string
  }
}

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  minimumFractionDigits: 2,
})

export function Coffee({ data }: Props) {
  const [imgUrl, setImgUrl] = useState(defaultCoffeImg)
  const { description, imgName, price, tags, title } = data

  const formattedPrice = currencyFormatter.format(price)

  useEffect(() => {
    import(`../../../../assets/${imgName}.png`)
      .then((response) => setImgUrl(response.default))
      .catch(console.error)
  }, [imgName])

  return (
    <CoffeeContainer>
      <Suspense>
        <img src={imgUrl} alt="" />
      </Suspense>
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
        <Counter />
        <ShoppingCartSimple size={22} weight="fill" />
      </CoffeePriceContainer>
    </CoffeeContainer>
  )
}
