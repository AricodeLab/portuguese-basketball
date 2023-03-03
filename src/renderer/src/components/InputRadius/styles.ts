import styled from 'styled-components'
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HTMLAttributes } from 'react'

interface CustomComp extends HTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
  gap?: string
  flexDirection?: 'row' | 'column'
  background?: string
}
export const Input = styled.input``
export const Label = styled.label``
export const Div = styled.div<CustomComp>`
  display: flex;
  flex-direction: ${(props): string | undefined => props?.flexDirection};
  width: ${(props): string | undefined => props?.width};
  height: ${(props): string | undefined => props?.height};
  gap: ${(props): string | undefined => props?.gap};
  background-color: ${(props): string | undefined => props?.background};
`
