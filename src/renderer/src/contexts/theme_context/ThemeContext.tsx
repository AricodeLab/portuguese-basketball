import React, { createContext, useEffect, useState } from 'react'
import { ipcRenderer } from 'electron'
interface ThemeContextProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export function ThemeContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  useEffect(() => {
    ipcRenderer.on('apply-theme', (event, theme) => {
      setTheme(theme)
    })
  }, [])

  const toggleTheme = (): void => {
    ipcRenderer.send('toggle-theme')
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
    </>
  )
}
