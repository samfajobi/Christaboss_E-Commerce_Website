import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const H1 = styled.h1`
  

`

const LogoNav = () => {
  return (
    <Container>
        <H1>CHRISTABOSS</H1>
    </Container>
   
  )
}

export default LogoNav