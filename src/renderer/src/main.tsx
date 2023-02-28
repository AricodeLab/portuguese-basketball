import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppContextProvider } from './contexts/AppContext'
import Screens from './screens'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <AppContextProvider>
        <Screens />
      </AppContextProvider>
    </ThemeProvider>
  </React.StrictMode>
)
