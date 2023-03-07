import { Button, InputColor } from '@renderer/components'
import CoresGrid from '../CoresGrid.interface'
import { GridRow } from './style'
const CoresBotoes = ({ title }: CoresGrid): JSX.Element => {
  return (
    <GridRow>
      <h2>{title}</h2>
      <InputColor />
      <Button type={3}>Alterar</Button>
    </GridRow>
  )
}

export default CoresBotoes
