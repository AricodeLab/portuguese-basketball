/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface CustomComp extends HTMLAttributes<HTMLDivElement> {
  type?: 1 | 2 | 3
}

export const CustomBox = styled.div<CustomComp>`
  display: flex;
  background-color: ${(props) => {
    switch (props.type) {
      case 1:
        return props.theme.colors.whitegray
      case 2:
        return props.theme.colors.brown
      default:
        return props.theme.colors.orange
    }
  }};
  border-radius: ${(props) => {
    switch (props.type) {
      case 3:
        return undefined
      default:
        return '35px'
    }
  }};
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;
`

export const Target = styled.div`
  :hover {
    cursor: pointer;
  }
  position: absolute;
  top: 0;
  left: 0;
  background: ${(props): string => props.theme.colors.target_color};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  border-radius: 35px;
  border: 0;
  padding: 1px 20px;
  z-index: 1;
  color: ${(props): string => props.theme.colors.black};
`
