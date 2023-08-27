import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { useCart } from '../../hooks/useCart'
import { CheckoutForm } from './components/checkoutForm'
import { SelectedCoffees } from './components/selectedCoffees'
import { CheckoutContainer } from './styles'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof checkoutFormValidationSchema>

type CheckoutFormData = OrderData

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })

  const { handleSubmit } = checkoutForm

  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleSuccess(data: CheckoutFormData) {
    navigate('/success', { state: data })
    cleanCart()
  }

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutContainer
        className="container"
        onSubmit={handleSubmit(handleSuccess)}
      >
        <CheckoutForm />

        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  )
}
