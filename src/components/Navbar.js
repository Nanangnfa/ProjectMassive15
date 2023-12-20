import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoWeb from './../assets/logoWeb.png';
import logoUser from './../assets/logoUser.png';
import { Link } from 'react-router-dom'; 

const CustomNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: '#DADFF1', height: '70px'}} variant="bold" expand="lg">
      <Container style={{ marginLeft: '100px' }}>
        <Navbar.Brand href="#home">
          <img
            src={logoWeb}
            alt="Logoweb"
            width="110px"
            height="65"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" border="solid">
            <Nav.Link as={Link} to="/Beranda"><b>Beranda</b></Nav.Link> 
            <Nav.Link as={Link} to="/Belanja"><b>Belanja</b></Nav.Link> 
            <Nav.Link as={Link} to="/DashboardToko"><b>Toko Saya</b></Nav.Link> 
            <Nav.Link as={Link} to="/TentangKami"><b>Tentang Kami</b></Nav.Link> 
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/Keranjang">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
            </Nav.Link>
            <Nav.Link as={Link} to="/PengaturanAkun">
              <img
                src={logoUser}
                alt="Logo User"
                width="35"
                height="35"
                className="d-inline-block align-top"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;