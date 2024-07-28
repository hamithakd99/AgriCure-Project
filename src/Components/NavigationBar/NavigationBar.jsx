import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import './NavigationBar.css'
import logo from "../../assets/AgriCure-Logo-New.png";
import { useState } from "react";
import { Link } from 'react-router-dom';

function NavigationBar() {

  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (lang)=>{
    setLanguage(lang)
  }
  const languages = ['English', 'Sinhala', 'Tamil'];
  
  return (
    <>
      <Container>
        <Navbar expand="lg" className="position-absolute top-0 start-50 translate-middle-x px-5  mb-3 mt-3 rounded-pill border border-success shadow-lg">
          {/* remove border border-success */}
          <Navbar.Brand href="#"><img
              src={logo}
              width="150px"
              height="auto"
              className="d-inline-block align-center"
              alt="AgriCure Logo"
            />
            </Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                AgirCure
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3 gap-3">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/news">News</Nav.Link>
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                <NavDropdown
                  title={language}
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  {
                    languages.filter(d => d !== language).map(lang => 
                      <NavDropdown.Item  key={lang} href="#action4" onClick={()=>{
                        handleLanguageChange(lang)
                      }}>{lang}</NavDropdown.Item>
                    )
                  }
                  {/* <NavDropdown.Item href="#action3" onClick={()=>{
                    handleLanguageChange('Sinhala')
                  }}>Sinhala</NavDropdown.Item>
                  <NavDropdown.Item href="#action4" onClick={()=>{
                    handleLanguageChange('Tamil')
                  }}>Tamil</NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Button variant="outline-success" className="ms-auto">
            Login
          </Button>
          <Navbar.Toggle
            className=""
            aria-controls={`offcanvasNavbar-expand-md`}
          />
        </Navbar>
      </Container>
    </>
  );
}

export default NavigationBar;
