import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import ButtonComp from "../ButtonComp/ButtonComp"

const HomeSec = () => {
  return (
    <Homesecwrapper>
      <Container fluid>
        <Row>
          <Col className="text-center content">
            <h3>Hello! I'am Akhil S Kumar</h3>
            <h1>
              open source <span>enthusiast.</span>
            </h1>
            <p>A Constant learner for achieving New Skills!🎯</p>
            <div className="d-flex justify-content-center">
              <Link to="/contact">
                <ButtonComp text="Contact Me" />
              </Link>
              <Link to="https://drive.google.com/file/d/1M9kSwY4pGGLokm3P_rmOI6kSvBwZk9rd/view?usp=sharing" target="_blank">
                <ButtonComp text="Resume" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Homesecwrapper>
  )
}

export default HomeSec

const Homesecwrapper = styled.div`
  background-color: #111111;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  padding-top: 200px;

  .content {
    h3 {
      color: #fafafa;
      font-size: 20px;
      font-weight: 400;
    }
    h1 {
      margin: auto;
      color: #fafafa;
      font-size: 96px;
      line-height: 1;
      max-width: 48rem;
      font-weight: 600;

      span {
        background-image: linear-gradient(to right, #0d8add, #15d7c8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    p {
      margin-top: 10px;
      color: #a1a1a1;
      font-size: 18px;
    }
    button{
      margin: 10px 10px 10px 10px;
    }
    @media (max-width: 768px) {
      h3 {
        font-size: 18px;
      }
      h1 {
        font-size: 72px;
      }
      p {
        font-size: 15px;
      }
    }
    @media (max-width: 576px) {
      h3 {
        font-size: 15px;
      }
      h1 {
        font-size: 42px;
      }
      p {
        font-size: 13px;
      }
    }
  }
`