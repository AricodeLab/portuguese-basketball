import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../assets/index.css'
import Header from '../components/Header/index'
import Navbar from '../components/navbar'
import { Container, Content, CurrentConnection } from './styles'
import Panel from '@renderer/pages/painel'
import FootBar from '@renderer/components/Footbar'
import Equipas from '@renderer/pages/equipas'
import Monitores from '@renderer/pages/monitores'

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
              <Route path="/Monitores" element={<Monitores />} />
            </Routes>
          </CurrentConnection>
        </Content>
        <FootBar />
      </Router>
    </Container>
  )
}

export default Screen
