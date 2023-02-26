import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { AppContextProvider } from './contexts/AppContex'
import Header from './Components/Header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <>
        <Header />
        <App />
      </>
    </AppContextProvider>
  </React.StrictMode>
)
