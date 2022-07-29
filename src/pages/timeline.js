import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../Layout/Layout"
import TimelineSec from "../components/TimelineSec/TimelineSec"

const timeline = () => {
  return (
    <>
      <Helmet>
        <title>Timeline - Akhil S Kumar</title>
      </Helmet>
      <Layout>
        <TimelineSec />
      </Layout>
    </>
  )
}

export default timeline
