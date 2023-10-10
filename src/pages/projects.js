import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../Layout/Layout"
import ProjectSec from "../components/ProjectSec/ProjectSec"

const projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Akhil S Kumar</title>
        <meta name="description" content="Browse through a collection of innovative and exciting projects brought to life by Akhil S Kumar, a enthusiastic Software Engineer, Entrepreneur, and YouTuber. Get inspired by the diverse range of creations, from tech ventures to creative content, and explore the impact of [Your Name]'s work in the world of technology and entertainment."></meta>
      </Helmet>
      <Layout>
        <ProjectSec />
      </Layout>
    </>
  )
}

export default projects
