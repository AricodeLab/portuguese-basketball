/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HTMLAttributes } from 'react'

import styled from 'styled-components'
interface CustomComp extends HTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
  flexDirection?: 'row' | 'column'
  type?: number
}

export const MainDiv = styled.div<CustomComp>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: ${(props): string | undefined => props?.flexDirection};
  width: ${(props): string | undefined => props?.width};
  height: ${(props): string | undefined => props?.height};
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
  border-radius: 35px;
  padding: 1%;
`
interface ContentInterface extends HTMLAttributes<HTMLDivElement> {
  type?: number
}
export const Content = styled.div<ContentInterface>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: 70%;
  background-color: ${(props) => {
    switch (props.type) {
      case 1:
        return props.theme.colors.target_color
      case 2:
        return props.theme.colors.brown
      default:
        return props.theme.colors.target_color
    }
  }};
  border-radius: 35px;
`
//  background: ${(prop): string | undefined =>prop.type == 1? 'linear-gradient(0deg, #CAAF8D, #CAAF8D), linear-gradient(0deg, #3D3131, #3D3131), linear-gradient(0deg, #3D3131, #3D3131), linear-gradient(0deg, #3D3131, #3D3131), linear-gradient(0deg, #3D3131, #3D3131), #3D3131;': undefined};
