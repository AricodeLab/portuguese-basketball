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
  flex: 1;
`
export const DivTitle = styled.div<CustomComp>`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: ${(props): string | undefined => props?.flexDirection};
  flex: 1;
`
export const BotoesDiv = styled.div<CustomComp>`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 50%;
  flex-direction: ${(props): string | undefined => props?.flexDirection};
  flex: 2;
`
export const DivInput = styled.div<CustomComp>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props): string | undefined => props?.flexDirection};
  flex: 1;
`
export const Container = styled.div<CustomComp>`
  display: flex;
  justify-content: space-evenly;
  justify-items: flex-start;
  flex-direction: column;
`
export const Texto = styled.p`
  font-size: 0.7em;
`
export const Title = styled.h4`
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  font-size: 1em;
`
