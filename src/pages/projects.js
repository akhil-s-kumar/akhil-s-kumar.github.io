import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../Layout/Layout"
import ProjectSec from "../components/ProjectSec/ProjectSec"

const projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Akhil S Kumar</title>
      </Helmet>
      <Layout>
        <ProjectSec />
      </Layout>
    </>
  )
}

export default projects
