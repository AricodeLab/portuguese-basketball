import { Button, InputCircle } from '@renderer/components'
import { BotoesDiv, Container, Div, Texto } from './styles'

type Props = {
  title: string
}
const Botoes: Array<string> = ['Play', 'Alterar', 'Padrao', 'Excluir']
const SonsBlock = ({ title }: Props): JSX.Element => {
  return (
    <Container>
      <Div>
        <InputCircle></InputCircle>
        <h4>{title}</h4>
      </Div>
      <BotoesDiv>
        {Botoes.map((name: string): JSX.Element => {
          return (
            <Button key={name} type={4}>
              <Texto>{name}</Texto>
            </Button>
          )
        })}
      </BotoesDiv>
    </Container>
  )
}

export default SonsBlock
