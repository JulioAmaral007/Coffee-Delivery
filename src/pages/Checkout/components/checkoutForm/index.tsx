import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { TitleText } from '../../../../components/Typograph'
import { SectionTitle } from '../sectionTitle'
import { CheckoutFormContainer, FormSectionContainer } from './styles'
import { useTheme } from 'styled-components'
import { AddressForm } from './addressForm'
import { PaymentMethodOptions } from './paymentMethodOptions'

export function CheckoutForm() {
  const { colors } = useTheme()
  return (
    <CheckoutFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entregra. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
        />

        <PaymentMethodOptions />
      </FormSectionContainer>
    </CheckoutFormContainer>
  )
}
