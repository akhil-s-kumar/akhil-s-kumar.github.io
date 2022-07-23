import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../Layout/Layout"
import HomeSec from "../components/HomeSec/HomeSec"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Akhil S Kumar</title>
      </Helmet>
      <Layout>
        <HomeSec />
      </Layout>
    </>
  )
}

export default Home
