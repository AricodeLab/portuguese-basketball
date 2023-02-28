/* eslint-disable prettier/prettier */
import React, { useCallback, memo } from 'react'
import { FiX, FiMinus, FiSquare } from 'react-icons/fi'
import { Container, WindowActions, DefaultActionButton } from './styles'

const Header: React.FC = () => {
  const handleCloseWindow = useCallback(() => {
    window.close()
  }, [])
  const handleMinimize = useCallback(() => {}, [])
  const handleMaximize = useCallback(() => {}, [])

  return (
    <Container>
      <strong>Score Board - Sports</strong>

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
