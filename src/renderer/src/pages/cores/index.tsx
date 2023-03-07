import { Container, Box } from '@renderer/components/'
import { GridBox, GridContainer, GridRow } from './style'
import { CoresContent1, CoresContent2, CoresContent3 } from './Data'
import CoresBotoes from './CoresBotoes'
function Cores(): JSX.Element {
  return (
    <Container>
      <Box target={'Alterar cores'} type={1}>
        <GridContainer>
          <GridBox>
            <Box target={''} type={2}>
              {CoresContent1.map(({ title }) => {
                return <CoresBotoes key={title} title={title} />
              })}
            </Box>
          </GridBox>
          <GridBox>
            <GridRow>
              {CoresContent2.map(({ title }) => {
                return <CoresBotoes key={title} title={title} />
              })}
            </GridRow>
          </GridBox>
          <GridBox>
            <GridRow>
              {CoresContent1.map(({ title }) => {
                return <CoresBotoes key={title} title={title} />
              })}
            </GridRow>
          </GridBox>
        </GridContainer>
      </Box>
    </Container>
  )
}

export default Cores
