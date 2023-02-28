/* eslint-disable react/display-name */
import styled from 'styled-components'
import React from 'react'

const ContentContainer = styled.main`
  max-width: 100vw;
  margin: auto;
  height: auto;
  background-color: aqua;
`

const MainContainer = ({children }: Props) => {
  return <>{children}</>
}
export default MainContainer
