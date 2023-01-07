import { CheckoutForm } from './components/checkoutForm'
import { SelectedCoffees } from './components/selectedCoffees'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <CheckoutForm />

      <SelectedCoffees />
    </CheckoutContainer>
  )
}
