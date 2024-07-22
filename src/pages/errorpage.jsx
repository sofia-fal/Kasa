import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Error from '../components/error'

function ErrorPage() {
  return (
    <>
    <Layout>
      <Header />
      <Error />
    </Layout>
    <Footer />
  </>
  )
}

export default ErrorPage