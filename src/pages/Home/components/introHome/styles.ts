import { rgba } from 'polished'
import styled from 'styled-components'
import introBackgroundImg from '../../../../assets/intro-background.png'
import { TitleText } from '../../../../components/Typograph'

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media only screen and (max-width: 999px) {
    text-align: center;
    img {
      display: none;
    }
  }
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;

  @media only screen and (max-width: 500px) {
    font-size: 2rem;
    margin: 0 0.5rem;
  }
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media only screen and (max-width: 999px) {
    column-gap: 1.25rem;
    margin-top: 2.125rem;
    padding-left: 3rem;
  }

  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    column-gap: 1.25rem;
    margin-top: 1.125rem;
    padding-left: 2rem;
  }
`
