import React from 'react'
import { Helmet } from "react-helmet"
import Layout from "../Layout/Layout"
import BlogSec from '../components/BlogSec/BlogSec'

const blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Akhil S Kumar</title>
        <meta name="description" content="Dive into a world of insights, knowledge, and inspiration on Akhil S Kumar's blog. Discover thought-provoking articles, tutorials, and insights written by this Software Engineer, Entrepreneur, and YouTuber. Stay updated with the latest trends, tips, and experiences in technology, entrepreneurship, and creative content."></meta>
      </Helmet>
      <Layout>
        <BlogSec/>
      </Layout>
    </>
  )
}

export default blog