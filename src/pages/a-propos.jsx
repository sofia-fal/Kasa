import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import { BannerAbout } from '../components/banner'
import AboutDesc from '../components/a-propos'

function About() {
  return (
    <>
      <Layout>
        <Header />
        <BannerAbout />
        <AboutDesc />
      </Layout>
      <Footer />
    </>
  )
}

export default About