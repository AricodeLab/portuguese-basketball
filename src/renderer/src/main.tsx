import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppContextProvider } from './contexts/AppContext'
import Screens from './screens'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <Screens />
    </AppContextProvider>
  </React.StrictMode>
)
