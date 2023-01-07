import { Trash } from 'phosphor-react'
import { RegularText } from '../../../../components/Typograph'
import { QuantityInput } from '../../../../components/quantityInput'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1673827200&Signature=YMW9UdOQBV5K80PbKrm~-RqQCeCdwq0oRVdbJwBUiR49~o40KjW3Lrf-SWo-Vv7hvk2P3RUbb8QP99ldgAkvaWPzFEW9l24DZWbkD9c-mE-Jh5tyszzsJLkVv8gDTT7dH2zvSOeRz6MiCo76id6vIJSIBk490EB7w7cEhQrGL9aK3W3A-YcJ~e0vHmvjCOeFq3gEVW4~AhGVCsvJIE18JC1afJxiX-a69ZobChMFA1gU3wXOoKY-b-lZ3N8ng6Sr8dU1m7Gv6DimquEybyo9xez1wjhrosduH-55JF1SqR~0Sx-Ugyx9P215G3blazqLjZg6Kjh3rJmrEDV9~D6Frw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}
