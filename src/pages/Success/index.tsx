import { RegularText, TitleText } from '../../components/Typograph'
import { SuccessContainer, SuccessDetailsContainer } from './styles'
import coffeeSuccess from '../../assets/moto-delivery.svg'
import { InfoWithIcon } from '../../components/infoWithIcon'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Success() {
  const { colors } = useTheme()

  return (
    <SuccessContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <SuccessDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Timer weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </SuccessDetailsContainer>
        <img src={coffeeSuccess} alt="" />
      </section>
    </SuccessContainer>
  )
}
