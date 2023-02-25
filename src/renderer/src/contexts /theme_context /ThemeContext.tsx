import React, { createContext, useState } from 'react'

interface ThemeContextProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export function ThemeContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const toggleTheme = (): void => {
    //ainda pra implementar
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
    </>
  )
}
