/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface CustomComp extends HTMLAttributes<HTMLDivElement> {
  flexDirection?: 'row' | 'column'
  type?: number
}
export const Div = styled.div<CustomComp>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props): string | undefined => props?.flexDirection};
`
export const BotoesDiv = styled.div<CustomComp>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 10%;
  flex-direction: ${(props): string | undefined => props?.flexDirection};
`
export const Container = styled.div<CustomComp>`
  display: flex;
  justify-content: center;
  max-width: 1px;
`
export const Texto = styled.p`
  font-size: 0.7em;
`
