import React, { createContext } from 'react'
import { useForm } from 'react-hook-form'

interface FormContextData {
  register: ReturnType<typeof useForm>['register']
  handleSubmit: ReturnType<typeof useForm>['handleSubmit']
}

export const FormContext = createContext({} as FormContextData)

function FormContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { register, handleSubmit } = useForm()
  return (
    <>
      <FormContext.Provider value={{ register, handleSubmit }}>{children}</FormContext.Provider>
    </>
  )
}

export default FormContextProvider
