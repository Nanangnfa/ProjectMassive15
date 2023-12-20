import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import Navbar from './../components/Navbar';
import Footer2 from './../components/Footer2';
import popup2 from './../assets/popup2.png';

const TambahProduk = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        productName: '',
        pricePerKilo: '',
        specification: '',
        description: '',
        photo: null,
    });

    const handleShowPopup = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: name === 'photo' ? files[0] : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
        const formDataToSend = new FormData();
        formDataToSend.append('productName', formData.productName);
        formDataToSend.append('pricePerKilo', formData.pricePerKilo);
        formDataToSend.append('specification', formData.specification);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('photo', formData.photo);

        const response = await fetch('http://localhost:3001/api/addProduct', {
            method: 'POST',
            body: formDataToSend,
        });

        if (response.ok) {
            console.log('Produk berhasil ditambahkan!');
            handleShowPopup();
        } else {
            console.error('Gagal menambahkan produk');
            // Tambahkan logika atau tampilkan pesan kesalahan jika perlu
        }
        } catch (error) {
        console.error('Error:', error);
        // Tambahkan logika atau tampilkan pesan kesalahan jika perlu
        }
    };

    return (
        <>
        <Navbar />

        <Container style={{ marginTop: '30px' }}>
            <Row>
            {/* Kotak panjang kiri*/}
            <h4>
                <b>Tambah Produk</b>
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
                <Form
                    style={{ display: 'flex', flexDirection: 'column' }}
                    onSubmit={handleSubmit}
                >
                    <Form.Group controlId="productName">
                    <Form.Label>Nama Produk:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nama Produk"
                        name="productName"
                        onChange={handleChange}
                    />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="pricePerKilo">
                    <Form.Label>Harga:</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Masukkan Harga Perkilo"
                        name="pricePerKilo"
                        onChange={handleChange}
                    />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="specification">
                    <Form.Label>Spesifikasi:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Spesifikasi Produk"
                        name="specification"
                        onChange={handleChange}
                    />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="description">
                    <Form.Label>Deskripsi:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Masukan Penjelasan Mengenai Produk !"
                        name="description"
                        onChange={handleChange}
                    />
                    </Form.Group>

                    {/* Button tambah produk baru dihapus */}
                </Form>
                </div>
            </Col>

            {/* Kotak panjang kanan*/}
            <Col md={4}>
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
                <h5>
                    <b>Foto Produk</b>
                </h5>
                <div>
                    <Form.Group controlId="photo">
                    <Form.Label>Foto:</Form.Label>
                    <Form.Control
                        type="file"
                        name="photo"
                        onChange={handleChange}
                    />
                    </Form.Group>
                    <br />

                    <p style={{ color: '#7B7B7B' }}>
                    <i>*Pilih foto PNG atau JPG dengan maksimal ukuran 2MB</i>
                    </p>
                </div>
            </div>

            <br />
            {/* Tombol tambah produk baru dipindahkan di sini */}
            <Button
                style={{
                    width: '100%',
                    border: 'none',
                    backgroundColor: '#283849',
                }}
                variant="success"
                type="button"
                onClick={handleSubmit}
                >
                Tambah Produk Baru
                </Button>
            </Col>
            </Row>
        </Container>

        <Footer2 />

      {/* Popup */}
        <Modal show={showPopup} onHide={handleClosePopup} centered>
            <Modal.Body style={{ textAlign: 'center' }}>
            <h5>Produk Berhasil Ditambahkan</h5>
            <img
                src={popup2}
                alt="Logo"
                style={{ width: '50%', marginBottom: '20px' }}
            />
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
            <Button
                style={{
                backgroundColor: '#283849',
                width: '25%',
                border: 'none',
                }}
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

export default TambahProduk;
