import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const H1 = styled.h1`
   font-size: 45px;
   font-weight: 150;
  

`

const LogoNav = () => {
  return (
    <Container>
        <H1>CHRISTABOSS</H1>
    </Container>
   
  )
}

export default LogoNav