import { Button, InputColor } from '@renderer/components'
import CoresGrid from '../CoresGrid.interface'
import { GridRow, Texto, ButtonDiv } from './style'
import { useRef } from 'react'
import defaultTheme from '@renderer/theme'
const CoresBotoes = ({ title }: CoresGrid): JSX.Element => {
  const colorInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = (): void => {
    colorInputRef.current?.click()
  }
  return (
    <GridRow>
      <Texto>{title}</Texto>
      <InputColor ref={colorInputRef} value={defaultTheme.banners.vermelhoEscuro} />
      <ButtonDiv>
        <Button onClick={handleButtonClick} type={3}>
          Alterar
        </Button>
      </ButtonDiv>
    </GridRow>
  )
}

export default CoresBotoes
