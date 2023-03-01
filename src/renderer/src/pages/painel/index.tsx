import Button from '@renderer/Components/Button'
import Container from '@renderer/Components/Container'
import { Content, Div, Row, Span, Triangle } from './styles'
function Panel(): JSX.Element {
  return (
    <Container>
      <Content>
        <Row>
          <Div flexDirection="column">
            <Div height="auto" width="auto" flexDirection="row" gap="59px">
              <h1>Tempo de jogo</h1>
              <Span width="193px" height="51px" flexDirection="row" gap="13px">
                <h2>Crescente</h2>
                <Triangle bgColor="#6C3D18" />
              </Span>
            </Div>
            <Div height="auto" width="auto">
              <h1>Tempo de jogo</h1>
            </Div>
            <Div height="auto" width="auto">
              <h1>Desconto de tempo 1</h1>
            </Div>
            <Div height="auto" width="auto">
              <h1>Desconto de tempo 2</h1>
            </Div>
          </Div>
          <Div width="auto" flexDirection="column">
            <Div>
              <h1>Mostrar no ecrã</h1>
            </Div>
            <Div>
              <h1>Tempo de ataque </h1>
            </Div>
          </Div>
        </Row>
      </Content>
    </Container>
  )
}

export default Panel
