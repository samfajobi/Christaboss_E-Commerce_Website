import React from 'react'
import styled from "styled-components";



const Container = styled.div`
  background-color: blue;
  width: 100vw;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Hero = () => {
  return (
   <Container>
    ANNIVERSARY SALES NOW AVAILABLE!!!! SHOP NOW AT CHRISTABOSSWIGS
   </Container>
  )
}

export default Hero