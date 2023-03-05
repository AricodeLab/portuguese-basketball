/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HTMLAttributes } from 'react'

import styled from 'styled-components'
interface CustomComp extends HTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
  flexDirection?: 'row' | 'column'
  type?: number
}
export const MainDiv = styled.div`
  display: flex;
  width: 80vw;
  height: 20em;
  justify-content: center;
  align-items: flex-start;
  > div {
    border-radius: 0;
  }
  > div:first-child {
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
  }
  > div:last-child {
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
  }
`
export const Content = styled.div<CustomComp>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: ${(props): string | undefined => props?.flexDirection};
  width: 10rem;
  height: 10rem;
  background-color: ${(props) => {
    switch (props.type) {
      case 1:
        return props.theme.colors.target_color
      case 2:
        return props.theme.colors.brown
      default:
        return undefined
    }
  }};
  padding: 1%;
`
