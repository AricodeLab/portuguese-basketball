/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HTMLAttributes } from 'react'

import styled, { css } from 'styled-components'

export const Content = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
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
  justify-content: center;
  align-items: center;
  flex-direction: ${(props): string | undefined => props?.flexDirection};
  width: ${(props): string | undefined => props?.width};
  height: ${(props): string | undefined => props?.height};
  gap: ${(props): string | undefined => props?.gap};
  background-color: ${(props): string | undefined => props?.background};
`
export const Row = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 35vw;
`
export const Span = styled.div<CustomComp>`
  display: flex;
  width: ${(props): string | undefined => props?.width};
  height: ${(props): string | undefined => props?.height};
  background-color: ${(props): string => props.theme.colors.whitegray};
  border-radius: 35px;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: ${(props): string | undefined => props?.gap};
`

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
`

export const Textoh2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: '#161614';
`
export const Textoh1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`
export const Textoh3 = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: '#000000';
`
