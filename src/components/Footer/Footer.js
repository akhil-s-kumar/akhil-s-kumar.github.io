import React from "react"
import styled from "styled-components";
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";

function Footer() {
  return (
    <Footerwrapper>
      <Container>
        <Row className="text-center sitefooterhead">
          <Col>
            <h1>Follow Me</h1>
          </Col>
        </Row>
        <Row className="text-center sitefooterbody">
          <Col lg={12}>
            <a href="https://www.facebook.com/ImAkhilSKumar/" target="blank">
              <FaFacebook/>
            </a>
            <a href="https://www.instagram.com/_.akhil.sk._/" target="blank">
              <FaInstagram/>
            </a>
            <a href="https://twitter.com/IamAKhilSKumar/" target="blank">
              <FaTwitter/>
            </a>
            <a href="https://www.linkedin.com/in/ImAkhilSKumar/" target="blank">
              <FaLinkedin/>
            </a>
            <a href="https://github.com/Akhil-S-Kumar/" target="blank">
              <FaGithub/>
            </a>
            <a href="https://gitlab.com/IamAkhilSKumar/" target="blank">
              <FaGitlab/>
            </a>
          </Col>
          <Col lg={12}>
            <p>Designed & Built by Akhil S Kumar</p>
          </Col>
        </Row>
      </Container>
    </Footerwrapper>
  )
}

export default Footer

const Footerwrapper = styled.footer`
font-family: 'Montserrat', sans-serif;
position: initial;
bottom: 0;
width: 100%;
min-height: 25vh;
background-color: #111111;
.sitefooterhead h1 {
  color: #F9F9F9;
  font-size: 12px;
  font-weight: 500;
  padding-top: 30px;
  padding-bottom: 20px;
}
.sitefooterbody {
  a {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
    color: #A1A1A1;
    &:hover{
      color: #F9F9F9;
    transition: 0.4s;
    }
  }
  p {
    font-size: 12px;
    padding-top: 50px;
    color: #F9F9F9;
  }
  @media (max-width: 576px) {
    i {
      margin-left: 11px;
      margin-right: 11px;
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
}
@media (max-width: 576px) {
  min-height: 30vh;
}
}
`