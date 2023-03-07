import { Button, InputColor } from '@renderer/components'
import CoresGrid from '../CoresGrid.interface'
import { GridRow, Texto } from './style'
import { useRef } from 'react'
const CoresBotoes = ({ title }: CoresGrid): JSX.Element => {
  const colorInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = (): void => {
    colorInputRef.current?.click()
  }
  return (
    <GridRow>
      <Texto>{title}</Texto>
      <InputColor ref={colorInputRef} />
      <Button onClick={handleButtonClick} type={3}>
        Alterar
      </Button>
    </GridRow>
  )
}

export default CoresBotoes
