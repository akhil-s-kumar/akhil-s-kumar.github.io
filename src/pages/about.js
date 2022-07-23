import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../Layout/Layout"
import AboutSec from "../components/AboutSec/AboutSec"

const about = () => {
  return (
    <>
      <Helmet>
        <title>About - Akhil S Kumar</title>
      </Helmet>
      <Layout>
        <AboutSec />
      </Layout>
    </>
  )
}

export default about
