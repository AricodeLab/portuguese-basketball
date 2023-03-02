import Container from '@renderer/components/Container'
import { Content, Div, Row, Span, Triangle, Textoh2, Textoh1 } from './styles'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { InputPainel } from '@renderer/types'
import InputTempo from '@renderer/components/InputTempo'

function Panel(): JSX.Element {
  const [tempoJogo, setTempoJogo] = useState('Crescente')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<InputPainel>()
  const onSubmit = (data): void => console.log(data)
  return (
    <Container>
      <Content onSubmit={handleSubmit(onSubmit)}>
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
              <Textoh2>Tempo de jogo</Textoh2>
              <Span width="193px" height="51px" flexDirection="row" gap="13px">
                <Textoh2>{tempoJogo}</Textoh2>
                <Triangle bgColor="#6C3D18" increment={tempoJogo == 'Crescente'} />
              </Span>
            </Div>
            <Div height="auto" width="auto">
              <Textoh2>Tempo de jogo</Textoh2>
              <InputTempo title="Minutos"></InputTempo>
            </Div>
            <Div height="auto" width="auto">
              <Textoh2>Desconto de tempo 1</Textoh2>
            </Div>
            <Div height="auto" width="auto">
              <Textoh2>Desconto de tempo 2</Textoh2>
            </Div>
          </Div>
          <Div width="auto" flexDirection="column">
            <Div>
              <Textoh2>Mostrar no ecrã</Textoh2>
            </Div>
            <Div>
              <Textoh1>Tempo de ataque </Textoh1>
            </Div>
          </Div>
        </Row>
      </Content>
    </Container>
  )
}

export default Panel
