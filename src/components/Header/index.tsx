import LogoCoffee from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={LogoCoffee} alt="" />

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, Rs
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
