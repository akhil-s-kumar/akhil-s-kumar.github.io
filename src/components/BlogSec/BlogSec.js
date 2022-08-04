import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"
import styled from "styled-components"
import TitleHead from "../TitleHead/TitleHead"
import blogs from "../../data/blog"

const BlogSec = () => {
  return (
    <Blogsecwrapper>
      <Container className="blog">
        <Row>
          <Col>
            <TitleHead text="Blog" />
          </Col>
        </Row>
        <Row className="mainContent">
          <Col lg={7} className="latestPost">
            <div className="img-zoom">
              <Image fluid rounded={true} src={blogs[0].image}></Image>
            </div>
            <h5>{blogs[0].category}</h5>
            <Link to={`/blog/${blogs[0].slug}`}>
              <h1>{blogs[0].title}</h1>
            </Link>
            <p>{blogs[0].description.slice(0, 130)+'...'}</p>
            <div className="d-flex flex-row align-items-center">
              <Image
                fluid
                height={40}
                width={40}
                roundedCircle={true}
                thumbnail={true}
                src="https://avatars.githubusercontent.com/u/54428228?v=4"
              ></Image>
              <h3>Akhil S Kumar</h3>
              <h3>{blogs[0].date}</h3>
            </div>
          </Col>
          <Col lg={5}>
            {blogs.map((blog, i) => {
              return blog.featured ? (
                <div id={i} className="d-flex flex-row featuredPost">
                  <div className="img-zoom col-5">
                    <Image
                      fluid={true}
                      width={500}
                      height={500}
                      rounded={true}
                      src={blog.image}
                    ></Image>
                  </div>
                  <div className="featuredDetails col-7">
                    <h5>{blog.category}</h5>
                    <Link to={`/blog/${blog.slug}`}>
                      <h1>{blog.title}</h1>
                    </Link>
                    <p>{blog.description.slice(0, 80)+'...'}</p>
                    <h3>Akhil S Kumar</h3>
                    <h3>{blog.date}</h3>
                  </div>
                  <br />
                </div>
              ) : (
                <></>
              )
            })}
          </Col>
        </Row>
        <hr />
        <Row className="mainContent">
          {blogs.slice(1).map((blog, j) => {
            return (
              <Col id={j} lg={6} className="previousPost">
                <div className="img-zoom">
                  <Image fluid rounded={true} src={blog.image}></Image>
                </div>
                <h5>{blog.category}</h5>
                <Link to={`/blog/${blog.slug}`}>
                  <h1>{blog.title}</h1>
                </Link>
                <p>{blog.description.slice(0, 130)+'...'}</p>
                <div className="d-flex flex-row align-items-center">
                  <Image
                    fluid
                    height={40}
                    width={40}
                    roundedCircle={true}
                    thumbnail={true}
                    src="https://avatars.githubusercontent.com/u/54428228?v=4"
                  ></Image>
                  <h3>Akhil S Kumar</h3>
                  <h3>{blog.date}</h3>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </Blogsecwrapper>
  )
}

export default BlogSec

const Blogsecwrapper = styled.div`
  background-color: #111111;
  font-family: "Montserrat", sans-serif;
  .blog {
    padding: 50px 50px 100px 50px;
    @media (max-width: 576px) {
      padding: 20px 20px 100px 20px;
    }
    hr {
      color: #fafafa;
    }
    .mainContent {
      margin-top: 50px;
      margin-bottom: 30px;
      .img-zoom {
        height: max-content;
        overflow: hidden;
        img {
          transition: 0.5s all ease-in-out;
          &:hover {
            transform: scale(1.5);
          }
        }
      }
      h5 {
        background-image: linear-gradient(to right, #0d8add, #15d7c8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-top: 10px;
        font-size: 15px;
        line-height: 20px;
      }
      h1 {
        color: #fafafa;
        font-size: 38px;
        font-weight: 600;
      }
      p {
        color: #fafafa;
        font-size: 15px;
        opacity: 0.8;
      }
      h3 {
        color: #fafafa;
        font-size: 14px;
        padding: 0px 0px 0px 15px;
      }
      a{
        text-decoration: none;
      }
      .featuredPost {
        padding: 0px 0px 50px 0px;
        @media (max-width: 992px) {
          padding: 50px 0px 10px 0px;
        }
        .featuredDetails {
          margin-left: 20px;
          h5 {
            margin-top: 0px;
            font-size: 15px;
          }
          h1 {
            font-size: 18px;
            line-height: 23px;
          }
          p {
            font-size: 12px;
          }
          h3 {
            font-size: 12px;
            padding: 0px 0px 0px 0px;
          }
        }
      }
      .previousPost {
        margin-bottom: 50px;
      }
    }
  }
`
