import React from "react"
import { Helmet } from "react-helmet"
import ContactSec from "../components/ContactSec/ContactSec"
import Layout from "../Layout/Layout"

const contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Akhil S Kumar</title>
        <meta name="description" content="Connect with Akhil S Kumar – the Software Engineer, Entrepreneur, and YouTuber. Reach out to discuss collaborations, inquiries, or simply to say hello. Your feedback and questions are always welcome. Let's start a conversation today."></meta>
      </Helmet>
      <Layout>
        <ContactSec />
      </Layout>
    </>
  )
}

export default contact
