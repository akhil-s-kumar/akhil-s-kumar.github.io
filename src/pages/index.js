import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../Layout/Layout"
import HomeSec from "../components/HomeSec/HomeSec"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Software Engineer, Entrepreneur, YouTuber - Akhil S Kumar</title>
        <meta name="google-site-verification" content="SiB1sgiGZYdguOERr8VVZfJ72U0DAxAqLbz9ZDo_sh8" />
        <meta name="description" content="Discover the world of a Software Engineer, Entrepreneur, and YouTuber. Explore projects, tutorials, and insights in technology and entrepreneurship."></meta>
        <meta name="keywords" content="Software Engineer, Entrepreneur, YouTuber, Technology, Startups, Tutorials, Projects, Akhil S Kumar, Software Engineer in Trivandrum, Web Developer in Trivandrum , Freelance Web Developer in Trivandrum, Freelance Web Developer in kerala"></meta>
      </Helmet>
      <Layout>
        <HomeSec />
      </Layout>
    </>
  )
}

export default Home
