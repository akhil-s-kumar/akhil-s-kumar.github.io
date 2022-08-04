import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { FaBars } from "react-icons/fa"

const NavBar = () => {
  return (
    <NavBarwrapper>
      <Navbar expand="lg" fixed="top">
        <Navbar.Brand>
          <Link to="/">@IamAkhilSKumar</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav">
          <FaBars color="#FAFAFA" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto"></Nav>
          <Nav>
            <Nav.Item>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/timeline">
                Timeline
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/contact">
                Contact Me
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavBarwrapper>
  )
}

export default NavBar

const NavBarwrapper = styled.div`
  .navbar {
    position: initial;
    background-color: #111111;
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    box-shadow: 0 2.6px 2.6px 0px rgba(0, 0, 0, 0.06);
    .navbar-brand {
      a {
        text-decoration: none;
        color: #f5f5f7;
        opacity: 0.8;
        padding-left: 20px;
        font-weight: 500;
        font-size: 14px;
        &:hover {
          color: #fafafa;
          opacity: 1;
          transition: 0.3s;
        }
      }
    }
    .navbar-toggler {
      box-shadow: none;
    }
    .navbar-nav {
      padding-right: 20px;
      .nav-item {
        a {
          color: #f5f5f7;
          opacity: 0.8;
          padding-left: 30px;
          &:hover {
            color: #fafafa;
            opacity: 1;
            transition: 0.7s;
          }
        }
      }
    }
  }
`
