import React, { createContext } from 'react'
import FormContextProvider from './FormContext/FormContext'
import { ThemeContextProvider } from './theme_context/ThemeContext'

export const AppContext = createContext({})

export function AppContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <AppContext.Provider value={{}}>
      <FormContextProvider>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </FormContextProvider>
    </AppContext.Provider>
  )
}
