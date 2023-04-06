import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Navi from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function navBar (props){
    const {setCurrentTab}= props;

    return ( <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Ozanne Alexander</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navi className="me-auto">
          <Navi.Link href="#home">Portfolio</Navi.Link>
          <Navi.Link href="#link">Work With Me!</Navi.Link>
        </Navi>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Navi;