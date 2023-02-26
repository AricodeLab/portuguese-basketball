import React from 'react'

import Header from '../Components/Header/Header'
import { Container, Content, CurrentConnection } from './styles'
import App from '@renderer/App'
const Screen: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <CurrentConnection>
          <App />
        </CurrentConnection>
      </Content>
    </Container>
  )
}

export default Screen
