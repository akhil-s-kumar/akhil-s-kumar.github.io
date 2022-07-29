import React from "react"
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import projects from "../../data/projects"
import TitleHead from '../TitleHead/TitleHead';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectSec = () => {
  return (
    <Projectswrapper>
      <Container className="project">
        <Row>
          <Col>
            <TitleHead text="Projects"/>
          </Col>
        </Row>
        <Row>
          {projects.map((project,i) => (
            <Col lg={6} key={i}>
              <Card className="shadow">
                <Card.Body>
                  <div className="featandLink d-flex justify-content-between">
                    <p>Featured Project</p>
                    <div className="links">
                      <a rel="noreferrer" href={project.sourceLink} target="_blank"> <FaGithub/></a>
                      <a rel="noreferrer" href={project.liveLink} target="_blank"><FaExternalLinkAlt/> </a>
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>
                    {project.description}
                  </p>
                  {project.techStacks.map((stack,j) => (
                    <span key={j} className="badge rounded-pill">{stack.stack}</span>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Projectswrapper>
  )
}

export default ProjectSec

const Projectswrapper = styled.div`
background-color: #111111;
font-family: "Montserrat", sans-serif;
.project {
  padding: 50px 50px 100px 50px;
  .card {
    background-color: #1a1a1a;
    border: none;
    border-radius: 15px;
    margin-top: 50px;
    .featandLink {
      margin-bottom: -10px;
      p {
        font-size: 15px;
        color: #15D7C8;
        font-weight: 500;
      }
      .links svg {
        margin-right: 15px;
        color: #fafafa;
        &:hover{
          color: #15D7C8;
          transition: 0.3s;
          cursor: pointer;
        }
      }
    }
    h3 {
      color: #fafafa;
      font-size: 24px;
      font-weight: 600;
      padding-bottom: 10px;
    }
    p {
      color: #818181;
    }
    span {
      background-color: #15D7C8;
      color: #FAFAFA;
      margin-right: 5px;
      margin-left: 5px;
    }
  }
  @media (max-width: 576px) {
    padding: 20px 20px 100px 20px;
  }
}
`;