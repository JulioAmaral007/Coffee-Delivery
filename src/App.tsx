import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
