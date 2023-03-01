import Button from '../Button'
import { Div } from './style'

const FootBar = (): JSX.Element => {
  return (
    <footer>
      <Div>
        <Button type={1}>Salvar</Button>
        <Button type={1}>Atualizar</Button>
      </Div>
    </footer>
  )
}
export default FootBar
