import React, { useState } from 'react';
import { Container, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PageLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/login', {
                email,
                password,
            });

            if (response.status === 200) {
                setError(null);
                navigate('/Beranda');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Mohon maaf akun belum terdaftar');
        }
    };

    return (
        <div className='pg-body'>
            <Container fluid style={{ height: '100vh', display: 'flex' }}>
                {/* Bagian Kiri*/}
                <Col md={3} style={{ backgroundColor: '#DADFF1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <div style={{ fontFamily: 'Poppins, sans-serif', color: 'black' }}>
                        <h2><b>Selamat Datang!</b></h2>
                        <p>Jika Belum Mempunyai Akun 'Klik' Tombol Dibawah.</p>
                    </div>
                    <Button onClick={() => navigate('/Register')} variant="light" style={{ padding: '8px', cursor: 'pointer', marginTop: '20px', width: '180px' }}>
                        <b>Daftar</b>
                    </Button>
                </Col>

                {/* Bagian Kanan*/}
                <Col md={9} style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Form style={{ width: '50%' }} onSubmit={handleSubmit}>
                        <h3><b>Masuk Ke IKANKUU</b></h3>
                        <br />
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form.Group controlId="formLogin">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="text" placeholder="Masukkan email Anda" style={{ background: '#DADFF1' }} value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Masukkan password Anda" style={{ background: '#DADFF1' }} value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ padding: '8px', cursor: 'pointer', marginTop: '20px', width: '180px', backgroundColor: '#283849', border: 'none' }}>
                            <b>Masuk</b>
                        </Button>
                    </Form>
                </Col>
            </Container>
        </div>
    );
}

export default PageLogin;
