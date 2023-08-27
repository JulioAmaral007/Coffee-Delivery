import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 0 1rem;

    img {
      display: none;
    }
  }
`

export const SuccessDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme.colors['base-background']};
  min-width: 32rem;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    min-width: 2rem;
    padding: 0 1rem;
  }
`
