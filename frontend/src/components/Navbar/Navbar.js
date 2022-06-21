import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components"
import classes from './Navbar.module.css'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';



const Container = styled.div`
  background-color: lightgray;
  height: 50px;
  width: 100vw;
`

const Wrapper = styled.div`
 
`
const Right = styled.div`
`

const Icons = styled.div`
`

const PhoneNo = styled.div``

const Email = styled.div``





const Left = styled.div`
  
`

const Search = styled.div``

const Cart = styled.div``

const Login = styled.div``


const Navbar = () => {
  return (
   <Container>
    <Wrapper>
      <Right>
        <Icons>
          <PhoneNo><PhoneIcon/>+235 08153382359</PhoneNo>
          <Email>< EmailOutlinedIcon />damilolafolawole@gmail.com</Email>
        </Icons>

      </Right>

      <Left>
        <Search>
        </Search>
        <Cart>
        </Cart>
        <Login>
        </Login>

      </Left>


    </Wrapper>
   </Container>
  )
}

export default Navbar