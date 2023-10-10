import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../Layout/Layout"
import TimelineSec from "../components/TimelineSec/TimelineSec"

const timeline = () => {
  return (
    <>
      <Helmet>
        <title>Timeline - Akhil S Kumar</title>
        <meta name="description" content="Explore the captivating journey of Akhil S Kumar's career and personal milestones through an interactive timeline. From early achievements to current endeavors, delve into the story behind the evolution of this Software Engineer, Entrepreneur, and YouTuber."></meta>
      </Helmet>
      <Layout>
        <TimelineSec />
      </Layout>
    </>
  )
}

export default timeline
