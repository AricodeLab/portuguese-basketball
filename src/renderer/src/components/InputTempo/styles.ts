/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HTMLAttributes } from 'react'

import styled, { css } from 'styled-components'

interface TriangleProps extends HTMLAttributes<HTMLButtonElement> {
  increment?: boolean
  decrement?: boolean
  bgColor?: string
}

export const Triangle = styled.div<TriangleProps>`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid ${(props): string | undefined => props.bgColor};
  transform: rotate(180deg);
  ${({ increment }) =>
    increment &&
    css`
      border-bottom-color: green;
      transform: rotate(0deg);
    `}

  ${({ decrement }) =>
    decrement &&
    css`
      border-bottom-color: red;
    `}
    :hover {
    cursor: pointer;
  }
`
interface CustomComp extends HTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
  gap?: string
  flexDirection?: 'row' | 'column'
  background?: string
}

export const Div = styled.div<CustomComp>`
  display: flex;
  flex-direction: ${(props): string | undefined => props?.flexDirection};
  width: ${(props): string | undefined => props?.width};
  height: ${(props): string | undefined => props?.height};
  gap: ${(props): string | undefined => props?.gap};
  background-color: ${(props): string | undefined => props?.background};
  justify-content: center;
`
export const Input = styled.input<CustomComp>`
  background: #e4d5c2;
  border-radius: 35px;
  margin-left: 10px;
  margin-right: 10px;
  width: 87px;
  height: 51px;
  border: 0;
  outline: 0;
  input:focus {
    outline: none !important;
  }
  text-align: center;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
export const Label = styled.label`
  margin: auto;
`
