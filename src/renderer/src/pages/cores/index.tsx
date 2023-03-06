import React from 'react'
import { Container, Box } from '@renderer/components/'
import { GridBox, GridContainer, GridRow } from './style'
function Cores(): JSX.Element {
  return (
    <Container>
      <Box target={'Alterar cores'} type={1}>
        <GridContainer>
          <GridBox>
            <Box target={''} type={2}>
              <GridRow></GridRow>
            </Box>
          </GridBox>
          <GridBox>
            <GridRow></GridRow>
          </GridBox>
          <GridBox>
            <GridRow></GridRow>
          </GridBox>
        </GridContainer>
      </Box>
    </Container>
  )
}

export default Cores
