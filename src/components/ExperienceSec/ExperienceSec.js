import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import styled from "styled-components"
import experiences from "../../data/experience"
import TitleHead from "../TitleHead/TitleHead"

const ExperienceSec = () => {
  return (
    <Experiencesecwrapper>
      <Container className="experience">
        <Row>
          <Col>
            <TitleHead text="Experiences" />
          </Col>
        </Row>
        <Contentwrapper>
          {experiences.map(experience => (
            <Row>
              <Col
                xs={"auto"}
                className="text-center flex-column d-none d-sm-flex"
              >
                <Row className="h-50">
                  <Col className="border-end">&nbsp;</Col>
                  <Col>&nbsp;</Col>
                </Row>
                <h5 className="m-2">
                  <span className="badge">&nbsp;</span>
                </h5>
                <Row className="h-50">
                  <Col className="border-end">&nbsp;</Col>
                  <Col>&nbsp;</Col>
                </Row>
              </Col>
              <Col className="py-2">
                <Card className="shadow">
                  <Card.Body>
                    <h5 className="float-end">{experience.date}</h5>
                    <h4 className="card-title">{experience.title}</h4>
                    <p className="card-text text-muted">{experience.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Contentwrapper>
      </Container>
    </Experiencesecwrapper>
  )
}

export default ExperienceSec

const Contentwrapper = styled.div`
  margin-top: 50px;
`

const Experiencesecwrapper = styled.div`
  background-color: #111111;
  font-family: "Montserrat", sans-serif;
  .experience {
    padding: 50px 50px 100px 50px;
    .badge {
      border-radius: 100%;
      border: 2px solid #15d7c8;
    }
    .card {
      background-color: #1a1a1a;
      margin-bottom: 20px;
      h4 {
        font-size: 15px;
        color: #15d7c8;
      }
      h5 {
        font-size: 15px;
        color: #fafafa;
      }
      p {
        margin-top: 20px;
        color: #818181;
      }
    }
    @media (max-width: 576px) {
      padding: 20px 20px 100px 20px;
    }
  }
`
