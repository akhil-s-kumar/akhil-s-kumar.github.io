import React from 'react'
import { Helmet } from "react-helmet"
import Layout from "../Layout/Layout"
import BlogSec from '../components/BlogSec/BlogSec'

const blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Akhil S Kumar</title>
      </Helmet>
      <Layout>
        <BlogSec/>
      </Layout>
    </>
  )
}

export default blog