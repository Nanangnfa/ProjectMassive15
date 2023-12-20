import React from 'react';
import Navbar from './../components/Navbar'
import { Container, Col, Button, Nav } from 'react-bootstrap';
import logouser2 from './../assets/logouser2.png';
import { Link } from 'react-router-dom'; 

function PageLogin() {
    return (
        <>
            <Navbar/>

            <Container fluid style={{ height: '100vh', display: 'flex', backgroundColor: '#DADFF1'}}>
                {/* Bagian 30% - Background warna biru dengan teks 'Akun' dan paragraf */}
                <Col md={3} style={{ backgroundColor: '#DADFF1', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
                    <div style={{ color: 'black', marginTop: '45px' }}>
                        <h3><b>Akun</b></h3>
                        <br />
                        <h5>Pengaturan Profil</h5>
                        <Nav.Link as={Link} to="/DashboardToko"><h5>Toko Saya</h5></Nav.Link> 
                        <h5>Syarat & Ketentuan</h5>
                        <br />
                        <Nav.Link as={Link} to="/"><h5 style={{color: 'red'}}><b>Log Out</b></h5></Nav.Link>
                    </div>
                </Col>

                {/* Bagian 70% - Background warna putih dengan logo, teks, dan button */}
                <Col md={9} style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100vh' }}>
                    {/* Logo */}
                    <img src={logouser2} alt="Logo" style={{ width: '150px', height: 'auto', marginTop: '20px' }} />

                    {/* Teks */}
                    <div style={{ width: '50%', marginTop: '20px', textAlign: 'center', border: 'solid 1px', borderRadius: '8px', height: '38px' }}>
                        <p style={{marginTop: '5px'}}>Aldi Muhib</p>
                    </div>

                    <div style={{ width: '50%', marginTop: '20px', textAlign: 'center', border: 'solid 1px', borderRadius: '8px', height: '38px' }}>
                        <p style={{marginTop: '5px'}}>aldi@gmail.com</p>
                    </div>

                    {/* Button "Edit Profil" */}
                    <Button variant="primary" style={{ marginTop: '20px', border: 'none', backgroundColor: '#283849', width: '50%' }}>
                        <b>Edit Profil</b>
                    </Button>
                </Col>
            </Container>
        </>
    );
}

export default PageLogin;
