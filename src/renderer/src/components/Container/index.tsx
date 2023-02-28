/* eslint-disable react/display-name */
import styled from 'styled-components'
import React from 'react'

const ContentContainer = styled.main`
  max-width: 100vw;
  margin: auto;
  height: auto;
`

export default ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <ContentContainer>{children}</ContentContainer>
}
