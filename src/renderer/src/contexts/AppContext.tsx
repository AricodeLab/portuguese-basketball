import defaultTheme from '@renderer/theme'
import React, { createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { FormProvider, useForm } from 'react-hook-form'

export const AppContext = createContext({})

export function AppContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const methods = useForm()
  const onSubmit = (data: object): void => console.log(data)
  return (
    <AppContext.Provider value={{}}>
      <FormProvider {...methods}>
        <ThemeProvider theme={defaultTheme}> {children}</ThemeProvider>
      </FormProvider>
    </AppContext.Provider>
  )
}
