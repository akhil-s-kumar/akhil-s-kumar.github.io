import React from "react"
import { Helmet } from "react-helmet"
import ContactSec from "../components/ContactSec/ContactSec"
import Layout from "../Layout/Layout"

const contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Akhil S Kumar</title>
      </Helmet>
      <Layout>
        <ContactSec />
      </Layout>
    </>
  )
}

export default contact
