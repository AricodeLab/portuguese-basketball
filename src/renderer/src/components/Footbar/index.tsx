import Button from '../Button'
import { Div } from './style'
import { useFormContext } from 'react-hook-form'
const FootBar = (): JSX.Element => {
  const { handleSubmit } = useFormContext()
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
