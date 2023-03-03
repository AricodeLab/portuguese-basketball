import { Button } from '../../Components/'
import { Div, Header } from './style'

function Form(): JSX.Element {
  return (
    <Div>
      <Header>
        <Button type={3}>Salvar</Button>
        <Button type={3}>Importar</Button>
      </Header>
      <div>
        <h1>logo</h1>
        
      </div>
    </Div>
  )
}

export default Form
