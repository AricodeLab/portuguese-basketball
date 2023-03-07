import React, { createContext } from 'react'

export const FormContext = createContext({})

function FormContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <FormContext.Provider value={{}}>{children}</FormContext.Provider>
    </>
  )
}

export default FormContextProvider
