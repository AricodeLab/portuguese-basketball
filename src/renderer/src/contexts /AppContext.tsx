import React, { createContext } from 'react'
import { ThemeContextProvider } from './theme_context /ThemeContext'

export const AppContext = createContext({})

export function AppContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <AppContext.Provider value={{}}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </AppContext.Provider>
  )
}
