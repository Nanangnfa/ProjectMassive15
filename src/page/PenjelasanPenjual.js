import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Kontenkedua from '../components/Kontenkedua';
import Footer from '../components/Footer';
import mockup1 from './../assets/mockup1.png';
import gambarpp from './../assets/gambarpp.png';
import asset1 from './../assets/asset1.png';
import asset2 from './../assets/asset2.png';
import asset3 from './../assets/asset3.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PenjelasanPenjual() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        namaToko: '',
        noHP: '',
        alamat: '',
    });

    const handleDaftarPenjualClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [id]: value,
        }));
    };

    const handleDaftarClick = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/daftar-toko', formData);
    
            if (response.status === 200) {
            // Handle successful registration, redirect to DashboardToko or perform other actions.
            handleCloseModal();
            navigate('/DashboardToko');
            } else {
                console.error('Gagal mendaftar sebagai penjual');
            }
            } catch (error) {
            console.error('Error:', error);
            }
        };

    return (
        <div>
        <Navbar />

        <div
            className='heroImagePP'
            style={{
            height: '450px',
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundSize: 'cover',
            padding: '20px',
            }}
        >
            <div style={{ width: '80%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginTop: '65px' }}>
            <div className='helo-landingpg' style={{ textAlign: 'left' }}>
                <h1 style={{ color: 'white'}}>Jual produk di IKANKUU ?</h1>
                <p style={{ color: 'white'}}>Memberikan Anda akses untuk mengelola dan memasarkan produk ikan dengan mudah, memberikan solusi yang efisien dan praktis untuk meningkatkan penjualan Anda.</p>
                <Button
                variant="primary"
                style={{ padding: '8px', cursor: 'pointer', marginTop: '20px', width: '65%', backgroundColor: '#283849', border: 'none' }}
                onClick={handleDaftarPenjualClick}
                >
                <b>Daftar Penjual</b>
                </Button>
                <Button onClick={() => navigate('/DashboardToko')} variant="primary" style={{ padding: '8px', cursor: 'pointer', marginTop: '20px', width: '65%', backgroundColor: 'white', border: '#283849' }}>
                <b style={{ color: '#353535'}}>Kunjungi Toko</b>
                </Button>
            </div>
            <div>
                <img src={mockup1} alt="Logo" style={{ width: '350px', height: 'auto' }} />
            </div>
            </div>
        </div>

        <Kontenkedua
            imageSrc={gambarpp}
            textContent={
            <>
                <h2>Keuntungan</h2>
                <br />
                <p>IKANKUU memberikan manfaat besar. Dengan akses pelanggan yang luas, sistem pembayaran yang aman, dan fitur pemasaran yang efisien, penjual dapat dengan mudah mengelola stok, memberikan dukungan pelanggan, dan menganalisis data penjualan. Dengan rangkaian fitur ini, penjual dapat mengoptimalkan kinerja bisnis ikan mereka secara efektif.</p>
            </>
            }
        />

        <div style={{ width: '80%', margin: '0 auto', marginTop: '12vh' }}>
            <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontWeight: '700', color: '#353535' }}>Langkah - Langkah Daftar Sebagai Penjual </h2>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginTop: '50px' }}>
            <div style={{ textAlign: 'center' }}>
                <img src={asset1} alt='' style={{ width: '80%' }} />
                <p className="mt-2" style={{ fontWeight: '700', color: '#353535' }}><i>Daftar Akun Sebagai Penjual</i></p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img src={asset2} alt='' style={{ width: '80%' }} />
                <p className="mt-2" style={{ fontWeight: '700', color: '#353535' }}><i>Isi Dan Submit Formulir Persyaratan</i></p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img src={asset3} alt='' style={{ width: '80%' }} />
                <p className="mt-2" style={{ fontWeight: '700', color: '#353535' }}><i>Toko Berhasil Dibuat</i></p>
            </div>
            </div>
        </div>

        <Footer />

{/* Modal Daftar Penjual (POPUP)*/}
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header>
            <h5>Daftar Sebagai Penjual</h5>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="namaToko">
                <Form.Label>Nama Toko</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Masukkan nama toko"
                    value={formData.namaToko}
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group controlId="noHP">
                <Form.Label>No HP</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Masukkan nomor HP"
                    value={formData.noHP}
                    onChange={handleChange}
                />
                </Form.Group>
                <Form.Group controlId="alamat">
                <Form.Label>Alamat</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Masukkan alamat"
                    value={formData.alamat}
                    onChange={handleChange}
                />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button
                style={{ width: '25%', border: 'none' }}
                variant="secondary"
                onClick={handleCloseModal}
            >
                Kembali
            </Button>
            <Button
                style={{ backgroundColor: '#283849', border: 'none', width: '25%' }}
                variant="primary"
                onClick={handleDaftarClick}>
                Daftar
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
}

export default PenjelasanPenjual;
