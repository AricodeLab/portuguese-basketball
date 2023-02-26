import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { AppContextProvider } from './contexts/AppContext'
import Header from './Components/Header/Header'
import Screen from './screen'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <AppContextProvider>
        <Screen />
      </AppContextProvider>
    </ThemeProvider>
  </React.StrictMode>
)
