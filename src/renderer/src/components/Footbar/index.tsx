import { FormContext } from '@renderer/contexts/FormContext/FormContext'
import { useContext } from 'react'
import Button from '../Button'
import { Div } from './style'

const FootBar = (): JSX.Element => {
  const { handleSubmit } = useContext(FormContext)
  return (
    <footer>
      <Div>
        <Button type={1} onClick={handleSubmit((data) => console.log(data))}>
          Salvar
        </Button>

        <Button type={1}>Atualizar</Button>
      </Div>
    </footer>
  )
}
export default FootBar
