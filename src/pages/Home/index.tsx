import { IntroHome } from './components/introHome'
import { OurCoffees } from './components/ourCoffees'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <IntroHome />
      <OurCoffees />
    </HomeContainer>
  )
}
