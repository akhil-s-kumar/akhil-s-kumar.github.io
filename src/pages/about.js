import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../Layout/Layout"
import AboutSec from "../components/AboutSec/AboutSec"

const about = () => {
  return (
    <>
      <Helmet>
        <title>About - Akhil S Kumar</title>
        <meta name="description" content="Learn more about the journey and experiences of Akhil S Kumar – a passionate Software Engineer, Entrepreneur, and YouTuber. Discover the story behind the skills, projects, and insights that drive Akhil S Kumar's success in the world of technology and creative content."></meta>
      </Helmet>
      <Layout>
        <AboutSec />
      </Layout>
    </>
  )
}

export default about
