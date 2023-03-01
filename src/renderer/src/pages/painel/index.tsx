import Button from '@renderer/Components/Button'
import Container from '@renderer/Components/Container'
import { Content, Div, Row, Span, Triangle, Texto } from './styles'
import React, { useState, memo } from 'react'

function Panel(): JSX.Element {
  const [tempoJogo, setTempoJogo] = useState('Crescente')

  return (
    <Container>
      <Content>
        <Row>
          <Div flexDirection="column">
            <Div
              height="auto"
              width="auto"
              flexDirection="row"
              gap="59px"
              onClick={(): void =>
                tempoJogo == 'Crescente' ? setTempoJogo('Decrecente') : setTempoJogo('Crescente')
              }
            >
              <Texto>Tempo de jogo</Texto>
              <Span width="193px" height="51px" flexDirection="row" gap="13px">
                <h2>{tempoJogo}</h2>
                <Triangle bgColor="#6C3D18" increment={tempoJogo == 'Crescente'} />
              </Span>
            </Div>
            <Div height="auto" width="auto">
              <Texto>Tempo de jogo</Texto>
            </Div>
            <Div height="auto" width="auto">
              <Texto>Desconto de tempo 1</Texto>
            </Div>
            <Div height="auto" width="auto">
              <Texto>Desconto de tempo 2</Texto>
            </Div>
          </Div>
          <Div width="auto" flexDirection="column">
            <Div>
              <Texto>Mostrar no ecrã</Texto>
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
