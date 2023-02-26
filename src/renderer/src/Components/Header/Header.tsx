import React, { useCallback, useMemo, memo } from 'react'
import { FiX, FiMinus, FiMaximize2, FiSquare } from 'react-icons/fi'

import { Container, WindowActions, DefaultActionButton } from './styles'

// close app

const Header: React.FC = () => {
  // implementar as funcoes
  const handleCloseWindow = useCallback(() => {}, [])
  const handleMinimize = useCallback(() => {}, [])
  const handleMaximize = useCallback(() => {}, [])

  return (
    <Container>
      <strong>Rocket Redis</strong>

      <WindowActions position="right">
        <DefaultActionButton onClick={handleMinimize}>
          <FiMinus />
        </DefaultActionButton>
        <DefaultActionButton onClick={handleMaximize}>
          <FiSquare />
        </DefaultActionButton>
        <DefaultActionButton onClick={handleCloseWindow}>
          <FiX />
        </DefaultActionButton>
      </WindowActions>
    </Container>
  )
}

export default memo(Header)
