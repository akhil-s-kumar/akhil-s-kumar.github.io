import React from "react"
import styled from "styled-components"

const TitleHead = props => {
  return (
    <Titlewrapper>
      <h1>{props.text}</h1>
    </Titlewrapper>
  )
}

export default TitleHead

const Titlewrapper = styled.div`
  h1 {
    font-size: 60px;
    font-weight: 600;
    color: #fafafa;
    @media (max-width: 576px) {
      font-size: 45px;
    }
  }
`
