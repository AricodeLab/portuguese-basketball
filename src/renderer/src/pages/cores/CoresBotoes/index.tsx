import { Button, InputColor } from '@renderer/components'
import CoresGrid from '../CoresGrid.interface'
const CoresBotoes = ({ title }: CoresGrid): JSX.Element => {
  return (
    <>
      <h2>{title}</h2>
      <InputColor />
      <Button type={3}>Alterar</Button>
    </>
  )
}

export default CoresBotoes
