import { Container, Box } from '@renderer/components/'
import { MainDiv, Content } from './styles'
import SonsBlock from './SonsBlock'
const ContentBlocks1: Array<string> = ['Horn', 'Buzzer', 'Fim de Tempo']
const ContentBlocks2: Array<string> = [
  'inicio do desconto de tempo',
  'Aviso de tempo limite',
  'Fim de desconto de tempo'
]
function Sons(): JSX.Element {
  return (
    <Container>
      <Box target="Alterar sons" type={1}>
        <MainDiv width="75rem" height="50vh">
          <Content>
            {ContentBlocks1.map((title) => {
              return <SonsBlock key={title} title={title} />
            })}
          </Content>
          <Content>
            {ContentBlocks2.map((title) => {
              return <SonsBlock key={title} title={title} />
            })}
          </Content>
        </MainDiv>
      </Box>
    </Container>
  )
}

export default Sons
