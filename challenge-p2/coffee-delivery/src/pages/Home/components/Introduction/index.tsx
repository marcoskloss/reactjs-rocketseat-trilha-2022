import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import {
  IntroContainer,
  LeftSection,
  RightSection,
  BenefitsContainer,
  Benefit,
} from './styles'
import coffeeHeroImg from '../../../../assets/coffee-hero.svg'

export function Introduction() {
  return (
    <main>
      <IntroContainer>
        <LeftSection>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com a Coffee Delivery você recebe o seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <BenefitsContainer>
            <Benefit color="yellow-dark">
              <ShoppingCart size={18} weight="fill" color="white" />
              <span>Compra simples e segura</span>
            </Benefit>
            <Benefit color="base-text">
              <Package size={18} weight="fill" color="white" />
              <span>Embalagem mantém o café intacto</span>
            </Benefit>
            <Benefit color="yellow">
              <Timer size={18} weight="fill" color="white" />
              <span>Entrega rápida e rastreada</span>
            </Benefit>
            <Benefit color="purple">
              <Coffee size={18} weight="fill" color="white" />
              <span>O café chega fresquinho até você</span>
            </Benefit>
          </BenefitsContainer>
        </LeftSection>

        <RightSection>
          <img src={coffeeHeroImg} alt="" />
        </RightSection>
      </IntroContainer>
    </main>
  )
}
