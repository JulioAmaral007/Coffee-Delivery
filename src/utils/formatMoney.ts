export function FormatMoney(value: Number) {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}
