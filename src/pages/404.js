import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from "../Layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import ButtonComp from "../components/ButtonComp/ButtonComp"

const notFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Akhil S Kumar</title>
      </Helmet>
      <Layout>
        <Notfoundwrapper>
          <Container>
            <Row>
              <Col className="text-center">
                <h1>404</h1>
                <p>
                  Sorry, The resource request could not be found on this server
                  :(
                </p>
                <Link to="/">
                  <ButtonComp text="Go Home" />
                </Link>
              </Col>
            </Row>
          </Container>
        </Notfoundwrapper>
      </Layout>
    </>
  )
}

export default notFound

const Notfoundwrapper = styled.div`
  background-color: #111111;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  padding-top: 200px;
  h1 {
    color: #fafafa;
    font-size: 100px;
  }
  p {
    color: #fafafa;
    font-weight: 400;
  }
`
