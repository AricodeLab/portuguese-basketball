import { Container, InputTempo, InputRadius } from '../../components'
import { Content, Div, Row, Span, Triangle, Textoh2, Textoh1 } from './styles'
import { useState } from 'react'
// import { useForm, SubmitHandler } from 'react-hook-form'
import { radio } from '@renderer/types'

const listBuzina1: Array<radio> = [
  {
    title: 'Toque o buzina ao iniciar',
    id: 'test'
  },
  {
    title: 'Toque o buzinar quando faltar',
    id: 'test2'
  }
]
const listBuzina2: Array<radio> = [
  {
    title: 'Toque o buzina ao iniciar',
    id: 'test3'
  },
  {
    title: 'Toque o buzinar quando faltar',
    id: 'test4'
  }
]
const listEcra: Array<radio> = [
  {
    title: 'Tempo',
    id: 'test5'
  },
  {
    title: 'Logotipo',
    id: 'test6'
  }
]
function Panel(): JSX.Element {
  const [tempoJogo, setTempoJogo] = useState('Crescente')

  // const onSubmit = (data): void => console.log(data)
  return (
    <Container>
      <Content onSubmit={(): void => console.log(2)}>
        <Row>
          <Div flexDirection="column" gap="1em">
            <Div
              height="auto"
              width="auto"
              flexDirection="row"
              gap="2em"
              onClick={(): void =>
                tempoJogo == 'Crescente' ? setTempoJogo('Decrecente') : setTempoJogo('Crescente')
              }
            >
              <Textoh2>Tempo de jogo</Textoh2>
              <Span width="193px" height="51px" flexDirection="row" gap="13px">
                <Textoh2>{tempoJogo}</Textoh2>
                <Triangle bgColor="#6C3D18" increment={tempoJogo == 'Crescente'} />
              </Span>
            </Div>
            <Div height="auto" width="auto" gap="2em">
              <Textoh2>Tempo de jogo</Textoh2>
              <Div>
                <InputTempo title="Minutos"></InputTempo>
                <InputTempo title="Segundos"></InputTempo>
              </Div>
            </Div>
            <Div height="auto" width="auto">
              <Textoh2>Desconto de tempo 1</Textoh2>
              <Div>
                <InputTempo title="Minutos"></InputTempo>
                <InputTempo title="Segundos"></InputTempo>
              </Div>
            </Div>
            <Div>
              <InputRadius list={listBuzina1} name="buzina1" />
              <InputTempo title="Minutos"></InputTempo>
              <InputTempo title="Segundos"></InputTempo>
            </Div>
            <Div height="auto" width="auto" flexDirection="column">
              <Div flexDirection="row">
                <Textoh2>Desconto de tempo 2</Textoh2>
                <InputTempo title=""></InputTempo>
                <InputTempo title=""></InputTempo>
              </Div>
              <Div>
                <InputRadius list={listBuzina2} name="buzina2" />
                <Div>
                  <InputTempo title="Minutos"></InputTempo>
                  <InputTempo title="Segundos"></InputTempo>
                </Div>
              </Div>
            </Div>
          </Div>
          <Div width="auto" flexDirection="column">
            <Div>
              <Textoh1>Tempo de ataque </Textoh1>
              <InputTempo title=""></InputTempo>
            </Div>
            <Div>
              <Textoh2>Mostrar no ecrã</Textoh2>
              <InputRadius list={listEcra} name="ecra" />
            </Div>
          </Div>
        </Row>
      </Content>
    </Container>
  )
}

export default Panel
