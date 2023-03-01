import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import Button from '../Button/index'

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

const ButtonStyled = styled(Button).attrs({ type: 3 })``

function Box({ children, target, width, height }: BoxContentProps): JSX.Element {
  return (
    <>
      <ButtonStyled>{target}</ButtonStyled>
      <BoxContent width={width} height={height}>
        {children}
      </BoxContent>
    </>
  )
}

export default Box
