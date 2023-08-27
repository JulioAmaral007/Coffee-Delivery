import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media only screen and (max-width: 999px) {
    flex-direction: column;
    align-items: center;
  }
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
