import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Table } from "react-bootstrap"
import styled from "styled-components"
import TitleHead from "../TitleHead/TitleHead"
import ButtonComp from "../ButtonComp/ButtonComp"

const AboutSec = () => {
  return (
    <Aboutsecwrapper>
      <Container className="aboutme">
        <Row>
          <Col>
            <TitleHead text="About Me" />
          </Col>
        </Row>
        <Row className="content">
          <Col lg={6}>
            <h3>Open Source Developer</h3>
            <h2>AKHIL S KUMAR</h2>
            <p>
              Hello! I'm Akhil S Kumar a open source enthusiast at Amrita
              University, Amritapuri.
            </p>
            <p className="text-justify">
              Currently I'm pursuing my B.Tech degree in Electronics and
              Computer Engineering, Founder &amp; CTO of two platforms namely
              Apni Career &amp; Join Indian Forces. Most importantly trying to
              specialize in Machine Learning &amp; Deep Learning.
            </p>
            <p>
              Here are a few technologies I've been working with and specilized
            </p>
            <Table borderless>
              <tbody>
                <tr>
                  <td>
                    <span>&gt;</span> React
                  </td>
                  <td>
                    <span>&gt;</span> GraphQL API
                  </td>
                  <td>
                    <span>&gt;</span> Django
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>&gt;</span> Python
                  </td>
                  <td>
                    <span>&gt;</span> JavaScript
                  </td>
                  <td>
                    <span>&gt;</span> C
                  </td>
                </tr>
              </tbody>
            </Table>
            <Link to="/contact">
              <ButtonComp text="Hire Me"></ButtonComp>
            </Link>
          </Col>
        </Row>
      </Container>
    </Aboutsecwrapper>
  )
}

export default AboutSec

const Aboutsecwrapper = styled.div`
  background-color: #111111;
  font-family: "Montserrat", sans-serif;
  .aboutme {
    padding: 50px 50px 100px 50px;
    .content {
      margin-top: 50px;
      h2 {
        color: #fafafa;
        font-size: 26px;
        font-weight: 900;
        padding-bottom: 10px;
      }
      h3 {
        color: #15d7c8;
        font-size: 16px;
        font-weight: 500;
        padding-bottom: 4px;
      }
      p {
        padding-top: 5px;
        font-size: 15px;
        color: #fafafa;
      }
      td {
        font-size: 14px;
        color: #ffffff;
      }
      span {
        color: #15d7c8;
      }
    }
    @media (max-width: 576px) {
      padding: 20px 20px 100px 20px;
    }
  }
`
