import styled from 'styled-components'

export const OurCoffeesContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  @media only screen and (max-width: 999px) {
    margin-top: 0rem;
    padding: 0 5rem;
  }
`

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

  @media only screen and (max-width: 999px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
