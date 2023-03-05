import { Button, InputCircle } from '@renderer/components'
import { BotoesDiv, Container, Div, DivInput, DivTitle, Texto, Title } from './styles'

type Props = {
  title: string
}
const Botoes: Array<string> = ['Play', 'Alterar', 'Padrao', 'Excluir']

// TODO logica ,  melhorar o css do tamanho do input pq ele nao ta responsivo e os css dos botoes
const SonsBlock = ({ title }: Props): JSX.Element => {
  return (
    <Container>
      <DivTitle>
        <Title>{title}</Title>
      </DivTitle>
      <Div>
        <DivInput>
          <InputCircle></InputCircle>
        </DivInput>

        <BotoesDiv>
          {Botoes.map((name: string): JSX.Element => {
            return (
              <Button key={name} type={4}>
                <Texto>{name}</Texto>
              </Button>
            )
          })}
        </BotoesDiv>
      </Div>
    </Container>
  )
}

export default SonsBlock
