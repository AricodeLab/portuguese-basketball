import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../assets/index.css'
import Header from '../Components/Header/index'
import Navbar from '../Components/Navbar'
import { Container, Content, CurrentConnection } from './styles'
import Panel from '@renderer/pages/painel'
import FootBar from '@renderer/Components/Footbar'
import Equipas from '@renderer/pages/equipas'

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
              <Route path="/Equipas" element={<Equipas />} />
            </Routes>
          </CurrentConnection>
        </Content>
        <FootBar />
      </Router>
    </Container>
  )
}

export default Screen
