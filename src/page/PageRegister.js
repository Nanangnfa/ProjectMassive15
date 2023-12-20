import React, { useState } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PageRegister = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        password: '',
    });
    const [foto, setFoto] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFotoChange = (event) => {
        const file = event.target.files[0];
        setFoto(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.nama || !formData.email || !formData.password || !foto) {
            alert('Mohon lengkapi semua data');
            return; // Proses berhenti jika ada form kosong
        }

        try {
            const formDataDenganFoto = new FormData();
            formDataDenganFoto.append('nama', formData.nama);
            formDataDenganFoto.append('email', formData.email);
            formDataDenganFoto.append('password', formData.password);
            formDataDenganFoto.append('foto', foto);

            const response = await axios.post('http://localhost:3001/register', formDataDenganFoto, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                console.log('Pendaftaran berhasil!');
                navigate('/Beranda');
            } else {
                console.error('Gagal mendaftar');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='pg-body'>
            <Container fluid style={{ height: '100vh', display: 'flex' }}>
                {/* Bagian Kiri */}
                <Col md={3} style={{ backgroundColor: '#DADFF1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <div style={{ fontFamily: 'Poppins, sans-serif', color: 'black' }}>
                        <h2><b>Halo, Selamat Datang</b></h2>
                        <p>Jika Sudah Memiliki Akun 'Klik' Tombol Dibawah.</p>
                    </div>
                    <Button
                        onClick={() => navigate('/Login')}
                        variant="light"
                        style={{ padding: '8px', cursor: 'pointer', marginTop: '20px', width: '180px' }}
                    >
                        <b>Masuk</b>
                    </Button>
                </Col>

                {/* Bagian Kanan */}
                <Col md={9} style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Form style={{ width: '50%' }} onSubmit={handleSubmit}>
                        <h3><b>Buat Akun</b></h3>
                        <br />

                        <Form.Group controlId="formFoto">
                            <Form.Label>Foto:</Form.Label>
                            <Form.Control
                                type="file"
                                style={{ background: '#DADFF1' }}
                                accept="image/*"
                                onChange={handleFotoChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formNama">
                            <Form.Label>Nama:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Masukkan nama Anda"
                                style={{ background: '#DADFF1' }}
                                name="nama"
                                value={formData.nama}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Masukkan email Anda"
                                style={{ background: '#DADFF1' }}
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Masukkan password Anda"
                                style={{ background: '#DADFF1' }}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            style={{ padding: '8px', cursor: 'pointer', marginTop: '20px', width: '180px', backgroundColor: '#283849', border: 'none' }}
                        >
                            <b>Konfirmasi</b>
                        </Button>
                    </Form>
                </Col>
            </Container>
        </div>
    );
}

export default PageRegister;
