import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../assets/index.css'
import Header from '../Components/Header/index'
import Navbar from '../Components/Navbar'
import { Container, Content, CurrentConnection } from './styles'
import Panel from '@renderer/pages/painel'

const Screen: React.FC = () => {
  return (
    <Container>
      <Header />
      <Router>
        <Navbar />
        <Content>
          <CurrentConnection>
            <Routes>
              <Route path="/Painel" element={<Panel />} />
            </Routes>
          </CurrentConnection>
        </Content>
      </Router>
    </Container>
  )
}

export default Screen
