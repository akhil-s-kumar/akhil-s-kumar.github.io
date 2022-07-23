import React, { useState } from "react"
import $ from "jquery"
import { Container, Row, Col, Form } from "react-bootstrap"
import styled from "styled-components"
import TitleHead from "../TitleHead/TitleHead"
import ButtonComp from "../ButtonComp/ButtonComp"

const ContactSec = () => {
  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  })

  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const onSubmit = event => {
    event.preventDefault()
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbwvLHdmRVq1safZZmt6RaHwK2YXVu1xN0FA_3bhdw/exec",
      data: values,
      method: "post",
      success: function (response) {
        alert("Form submitted successfully 😀")
        window.location.reload()
      },
      error: function (err) {
        alert("Something Error ☹️")
      },
    })
  }

  return (
    <Contactsecwrapper>
      <Container className="contactme">
        <Row>
          <Col>
            <TitleHead text="Contact Me" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={onSubmit} autoComplete="off">
              <Form.Group className="form-group">
                <input
                  name="Name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                  value={values.Name}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Control
                  name="Email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  required
                  value={values.Email}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Control
                  name="Phone"
                  type="tel"
                  className="form-control"
                  placeholder="Mobile Number"
                  required
                  value={values.Phone}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Control
                  name="Message"
                  as={"textarea"}
                  type="textarea"
                  rows="3"
                  className="form-control"
                  placeholder="Message"
                  required
                  value={values.Message}
                  onChange={onChange}
                ></Form.Control>
              </Form.Group>
              <ButtonComp type="submit" text="Submit" />
            </Form>
          </Col>
        </Row>
      </Container>
    </Contactsecwrapper>
  )
}

export default ContactSec

const Contactsecwrapper = styled.div`
  background-color: #111111;
  font-family: "Montserrat", sans-serif;
  .contactme {
    padding: 50px 50px 100px 50px;
    form {
      margin-top: 50px;
      .form-group {
        input,
        textarea {
          box-shadow: none;
          border-radius: 10px;
          font-size: 16px;
          background-color: transparent !important;
          height: 50px;
          margin-bottom: 20px;
          color: #fafafa;
          &:focus {
            border-color: #15d7c8;
          }
        }
        textarea {
          height: 150px;
        }
      }
      button{
        width: 100%;
      }
    }
    @media (max-width: 576px) {
      padding: 20px 20px 100px 20px;
    }
  }
`
