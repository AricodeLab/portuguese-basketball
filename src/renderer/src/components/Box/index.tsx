import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { ContentContainer } from '../Container/style'

interface BoxContentProps extends HTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
  children: React.ReactNode
  target?: string
}
const BoxContent = styled.div<BoxContentProps>`
  display: flex;
  width: ${(props): string | undefined => props?.width};
  height: ${(props): string | undefined => props?.height};
  background-color: ${(props): string => props.theme.colors.whitegray};
  border-radius: 35px;
  align-items: center;
  text-align: center;
  justify-content: center;
`

export const Target = styled.div`
  position: relative;
  bottom: 50%;
  /* transform: translate(-130%, -1%); */
  background: ${(props): string => props.theme.colors.target_color};
  border-radius: 35px;
  border: 0;
  padding: 1px 20px;
  z-index: 1;
  color: ${(props): string => props.theme.colors.black};

  h2 {
    font-family: Montserrat, sans-serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
`

function Box({ children, target, width, height }: BoxContentProps): JSX.Element {
  return (
    <ContentContainer>
      <BoxContent width={width} height={height}>
        <Target>{target}</Target>
        {children}
      </BoxContent>
    </ContentContainer>
  )
}

export default Box
