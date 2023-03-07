import { Container, Box } from '@renderer/components/'
import { GridBox, GridContainer } from './style'
import { CoresContent1, CoresContent2, CoresContent3 } from './Data'
import CoresBotoes from './CoresBotoes'
function Cores(): JSX.Element {
  return (
    <Container>
      <></>
      <Box target={'Alterar cores'} type={1}>
        <GridContainer>
          <Box target={''} type={4}>
            {CoresContent1.map(({ title }) => {
              return <CoresBotoes key={title} title={title} />
            })}
          </Box>
          <Box target={''} type={4}>
            {CoresContent2.map(({ title }) => {
              return <CoresBotoes key={title} title={title} />
            })}
          </Box>

          <Box target={''} type={4}>
            {CoresContent3.map(({ title }) => {
              return <CoresBotoes key={title} title={title} />
            })}
          </Box>
        </GridContainer>
      </Box>
    </Container>
  )
}

export default Cores
