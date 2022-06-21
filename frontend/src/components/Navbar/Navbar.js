import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components"
import classes from './Navbar.module.css'



const Container = styled.div`
  background-color: lightgray;
  height: 50px;
  width: 100vw;
`

const Wrapper = styled.div`
`
const Right = styled.div`
`

const Center = styled.div`
`

const Left = styled.div`
`


const Navbar = () => {
  return (
   <Container>
      <Right>

      </Right>
      <Center>

      </Center>
      <Right>
        
      </Right>



   </Container>
  )
}

export default Navbar