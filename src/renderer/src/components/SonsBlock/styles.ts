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
  width: min-content;
  align-items: center;
  flex-direction: ${(props): string | undefined => props?.flexDirection};
`
export const Texto = styled.p`
  font-size: 0.7em;
  padding-left: 0%;
`
