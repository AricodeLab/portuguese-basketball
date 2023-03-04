import Button from '../Button'
import { Div, Texto } from './styles'
type Props = {
  title: string
}
const Botoes: Array<string> = ['Play', 'Alterar', 'Padrao', 'Excluir']
const SonsBlock = ({ title }: Props): JSX.Element => {
  return (
    <Div>
      <Div>
        <h4>{title}</h4>
      </Div>
      <Div>
        {Botoes.map((name: string): JSX.Element => {
          return (
            <Button key={name} type={4}>
              <Texto>{name}</Texto>
            </Button>
          )
        })}
      </Div>
    </Div>
  )
}

export default SonsBlock
