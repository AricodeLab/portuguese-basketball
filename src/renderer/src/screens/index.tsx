import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../assets/index.css'
import { Header, Navbar } from '../components/'
import {
  Panel,
  FootBar,
  Monitores,
  Midias,
  Shortcuts,
  Cores,
  BannerColor,
  Sons,
  Equipas
} from '@renderer/pages'
import { Container, Content, CurrentConnection } from './styles'

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
              <Route path="/Sons" element={<Sons />} />
              <Route path="/Banner-color" element={<BannerColor />} />
            </Routes>
          </CurrentConnection>
        </Content>
        <FootBar />
      </Router>
    </Container>
  )
}

export default Screen
