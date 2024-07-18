import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../components/banner'
import LogementsMenu from '../components/logements-menu'

function Home() {
  return (
    <>
    <Layout>
      <Header />
      <Banner />
      <LogementsMenu />
    </Layout>
    <Footer />
  </>
  )
}

export default Home