import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../Layout/Layout"
import ExperienceSec from "../components/ExperienceSec/ExperienceSec"

const experience = () => {
  return (
    <>
      <Helmet>
        <title>Experiences - Akhil S Kumar</title>
      </Helmet>
      <Layout>
        <ExperienceSec />
      </Layout>
    </>
  )
}

export default experience
