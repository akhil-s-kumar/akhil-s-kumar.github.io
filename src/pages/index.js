import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../Layout/Layout"
import HomeSec from "../components/HomeSec/HomeSec"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Akhil S Kumar</title>
        <meta name="google-site-verification" content="SiB1sgiGZYdguOERr8VVZfJ72U0DAxAqLbz9ZDo_sh8" />
      </Helmet>
      <Layout>
        <HomeSec />
      </Layout>
    </>
  )
}

export default Home
