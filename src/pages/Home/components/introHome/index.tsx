import { IntroContainer, IntroContent, IntroTitle } from './styles'
import IntroCoffe from '../../../../assets/cafe-home.png'
import { RegularText } from '../../../../components/Typograph'

export function IntroHome() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
        </div>
        <img src={IntroCoffe} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
