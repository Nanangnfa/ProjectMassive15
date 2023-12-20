import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import Navbar from './../components/Navbar';
import Footer2 from './../components/Footer2';
import popup3 from './../assets/popup3.png';
import axios from 'axios';

const BeliSekarang = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        NamaPembeli: '',
        NoHp: '',
        Alamat: '',
        Catatan: '',
    });

    const handleShowPopup = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [id]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
        // Kirim data pembelian ke server backend
        await axios.post('http://localhost:3001/api/beli-sekarang', formData);
        handleShowPopup();
        } catch (error) {
        console.error('Error mengirim data pembelian:', error);
        // Tangani error sesuai kebutuhan
        }
    };

    return (
        <>
        <Navbar />

        <Container style={{ marginTop: '30px' }}>
            <Row>
            {/* Kotak panjang kiri*/}
            <h4>
                <b>Alamat Pengiriman</b>
            </h4>
            <Col md={8}>
                <div
                style={{
                    backgroundColor: '#F6F4F4',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    width: '100%',
                }}
                >
                <Form style={{ display: 'flex', flexDirection: 'column' }}>
                    <Form.Group controlId="NamaPembeli">
                    <Form.Label>Nama:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Masukkan Nama Anda"
                        onChange={handleChange}
                    />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="NoHp">
                    <Form.Label>No Hp:</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Masukkan Nomor Hp"
                        onChange={handleChange}
                    />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="Alamat">
                    <Form.Label>Alamat:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Contoh: Jl Ahmad Yani No 4"
                        onChange={handleChange}
                    />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="Catatan">
                    <Form.Label>Catatan:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Contoh: Tolong Dikirim Sesuai Pesanan Ya...."
                        onChange={handleChange}
                    />
                    </Form.Group>
                </Form>
                </div>
            </Col>

            {/* Kotak kanan*/}
            <Col md={4}>
            <div style={{ backgroundColor: '#F6F4F4', border: '1px solid #ccc', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '100%' }}>
                <h5><b>Rincian Pembayaran</b></h5>
                <div>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Jumlah Kilo:</span>
                        <span style={{ textAlign: 'right' }}>4</span>
                    </p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Harga Satuan:</span>
                        <span style={{ textAlign: 'right' }}>Rp. 49.999</span>
                    </p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Sub. Total:</span>
                        <span style={{ textAlign: 'right' }}>Rp. 199.996</span>
                    </p>
                    <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Metode Pembayaran:</span>
                        <span style={{ textAlign: 'right' }}><b>COD</b></span>
                    </p>
                </div>
                <br style={{ border: 'solid' }} />
                <p style={{ color: '#7B7B7B' }}><i>*Pastikan Data Yang Anda Masukkan Sudah Sesuai.</i></p>
            </div>
            <br />
                <Button
                style={{ width: '100%' }}
                variant="success"
                type="button"
                onClick={handleSubmit}
                >
                Beli Sekarang
                </Button>
            </Col>
            </Row>
        </Container>

        <Footer2 />

        {/* Popup */}
        <Modal show={showPopup} onHide={handleClosePopup} centered>
            <Modal.Body style={{ textAlign: 'center' }}>
            <h5>
                Pesananmu Berhasil Diproses, Silahkan Cek Keranjang Untuk Melihat
                Informasi Paket
            </h5>
            <img
                src={popup3}
                alt="Logo"
                style={{ width: '50%', marginBottom: '20px' }}
            />
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
            <Button
                style={{ backgroundColor: '#283849', width: '25%', border: 'none' }}
                variant="secondary"
                onClick={handleClosePopup}
            >
                Kembali
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
};

export default BeliSekarang;