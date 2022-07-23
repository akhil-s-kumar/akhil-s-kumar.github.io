import React from "react"
import { Button } from "react-bootstrap"
import styled from "styled-components"

const ButtonComp = (props) => {
  return (
    <Buttonwrapper>
      <Button type={props.type}>{props.text}</Button>
    </Buttonwrapper>
  )
}

export default ButtonComp

const Buttonwrapper = styled.div`
button{
  color: #FAFAFA;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  font-weight: 600;
  border: none;
  box-shadow: none !important;
  background-image: linear-gradient(to right, #0D8ADD,#15D7C8);
}
`;
