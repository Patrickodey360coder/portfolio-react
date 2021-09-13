import React from 'react'
import styled from 'styled-components'
// import Particles from 'react-particles-js'
// import Container from 'react-bootstrap/Container'
import Particles from '../components/Particles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const HomeStyle = styled.div`
  height: 70vh;
  background: #000;
`;

const Home = ()=> {
  return (
    <HomeStyle>
      <Particles>
        <Row>
          <Col><h1 className="text-danger text-center">This is the left side</h1></Col>
        </Row>
      </Particles>
    </HomeStyle>
  )
}

export default Home