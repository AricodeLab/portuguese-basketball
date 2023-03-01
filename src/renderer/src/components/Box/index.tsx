import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface BoxContentProps extends HTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
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

function Box({ children, target }: { children: React.ReactNode; target?: string }): JSX.Element {
  return <BoxContent>{children}</BoxContent>
}

export default Box
