import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../Layout/Layout"
import styled from "styled-components"
import blogs from "../../data/blog"
import { Container, Row, Col, Card, Image } from "react-bootstrap"

const BlogDetailed = ({ children }) => {
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  const slug = url.split("/").filter(function (el) {
    return el !== ""
  })
  const slugtext = slug[slug.length - 1]
  const blog = blogs.find(blog => blog.slug === slugtext)
  return blog? (
    <>
      <Helmet>
        <title>{blog.title} Blog - Akhil S Kumar</title>
      </Helmet>
      <Layout>
        <Blogdetailedwrapper>
          <Container className="blogDetailed">
            <Row>
              <Col lg={8}>
                <Card>
                  <Image rounded fluid src={blog.image}></Image>
                  <Card.Body>
                    <div className="d-flex flex-row align-items-center autanddate">
                      <Image
                        fluid
                        height={40}
                        width={40}
                        roundedCircle={true}
                        thumbnail={true}
                        src="https://avatars.githubusercontent.com/u/54428228?v=4"
                      ></Image>
                      <h3>Akhil S Kumar</h3>
                      <h3>• Posted on {blog.date}</h3>
                    </div>
                    <div className="title">
                      <h1>{blog.title}</h1>
                    </div>
                    <div className="category">
                      <h5>#{blog.category}</h5>
                    </div>
                    <div className="mdx">{children}</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4}></Col>
            </Row>
          </Container>
        </Blogdetailedwrapper>
      </Layout>
    </>
  ):(
    <>
     <p>Some error has occured!</p>
    </>
  )
}

export default BlogDetailed

const Blogdetailedwrapper = styled.div`
  background-color: #111111;
  font-family: "Montserrat", sans-serif;
  .blogDetailed {
    padding-top: 20px;
    padding-bottom: 80px;
    .card {
      background-color: #1a1a1a;
      border-radius: 10px;
      @media (max-width: 576px) {
        margin: 0px 2px 100px 2px;
      }
      .card-body {
        margin: 10px 50px 10px 50px;
        @media (max-width: 576px) {
          margin: 10px 0px 10px 0px;
        }
        .autanddate {
          h3 {
            margin-left: 10px;
            font-size: 15px;
            color: #fafafa;
            @media (max-width: 576px) {
              font-size: 12px;
            }
          }
        }
        .title {
          margin-top: 30px;
          h1 {
            font-size: 45px;
            font-weight: 600;
            color: #fafafa;
            @media (max-width: 576px) {
              font-size: 35px;
            }
          }
        }
        .category {
          margin: 20px 0px 40px 0px;
          h5 {
            background-image: linear-gradient(to right, #0d8add, #15d7c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 15px;
          }
        }
        .mdx {
          color: #fafafa;
          pre{
            background-color: #111111;
            padding-left: 15px;
            border-radius: 10px
          }
          p{
            font-size: 1.125rem;
          }
          h2{
            margin: 30px 0px 15px 0px;
          }
        }
      }
    }
  }
`
