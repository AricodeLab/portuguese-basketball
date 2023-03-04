import { Container, Box } from '@renderer/components/'
import { MainDiv, Content } from './styles'
function Sons(): JSX.Element {
  return (
    <Container>
      <Box target="Alterar sons" type={1}>
        <MainDiv width="70vw" height="50vh">
          <Content></Content>

          <Content></Content>
        </MainDiv>
      </Box>
    </Container>
  )
}

export default Sons
