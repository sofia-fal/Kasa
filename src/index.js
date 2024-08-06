import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './index.css'
import Layout from './components/layout'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/a-propos'
import ErrorPage from './pages/errorpage'
import PageLogement from './pages/logements-page'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
      <Header />
      <Routes>
        <Route path='/Kasa' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/Kasa/a-propos' element={<About />} />
        <Route path='/Kasa/logement/:id' element={<PageLogement />} />
        <Route path='/' element={<Navigate replace to="/Kasa" />} />
      </Routes>
      </Layout>
      <Footer />
    </Router>
  </React.StrictMode>
)