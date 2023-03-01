import Button from '../Button'
import { Div } from './style'

const FootBar = (): JSX.Element => {
  return (
    <footer>
      <Div>
        <Button isprimaly>Salvar</Button>
        <Button isprimaly>Atualizar</Button>
      </Div>
    </footer>
  )
}
export default FootBar
