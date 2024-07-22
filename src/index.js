import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/a-propos' element={<About />} />
        <Route path='/logement/:id' element={<PageLogement />} />
      </Routes>
      </Layout>
      <Footer />
    </Router>
  </React.StrictMode>
)