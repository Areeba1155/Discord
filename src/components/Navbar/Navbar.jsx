import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../assets/streamnestlogo.png';

const DiscordNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="discord-navbar" fixed="top" vw-100 overflow-x-hidden>
      <Container>
        <Navbar.Brand href="#home" className="color-change d-flex align-items-center pr-5 fw-bold" style={{ fontSize: '20px' }}>
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top pt-1"
            alt="StreamNest Logo"
          />
          StreamNest
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="ml-auto login-container">
            <a 
              href="http://localhost:5173/" 
              className="login-link bg-white text-black">
              Login
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DiscordNavbar;