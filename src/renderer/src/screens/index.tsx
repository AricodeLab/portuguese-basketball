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
import Midias from '@renderer/pages/midias'
import Shortcuts from '@renderer/pages/shortcuts'
import Cores from '@renderer/pages/cores'

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
              <Route path="/Video/foto" element={<Midias />} />
              <Route path="/Shortcuts" element={<Shortcuts />} />
              <Route path="/Cores" element={<Cores />} />
            </Routes>
          </CurrentConnection>
        </Content>
        <FootBar />
      </Router>
    </Container>
  )
}

export default Screen
