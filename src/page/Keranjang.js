import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import Navbar from './../components/Navbar';
import Footer2 from './../components/Footer2';
import productb from './../assets/productb.png';
import popup1 from './../assets/popup1.png';

const Keranjang = () => {
    const [showModal, setShowModal] = useState(false);

    const handleDiterimaClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    return (
        <>
        <Navbar/>

        <Container style={{ width: '80%', margin: '0 auto', marginTop: '30px'}}>
        <div style={{ backgroundColor: '#283849', color: 'white', padding: '8px', textAlign: 'center', borderRadius: '10px 10px 0 0' }}>
            <h3>Daftar Pesanan</h3>
        </div>

        <Table striped bordered hover responsive style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.5)'}}>
            <thead>
            <tr>
                <th>Produk</th>
                <th>Harga</th>
                <th>Jumlah Kilo</th>
                <th>Sub Total</th>
                <th>Status</th>
                <th>Aksi</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                <img src={productb} alt="Product 1" style={{ width: '15%', marginRight: '10px' }} />
                Ikan Lele
                </td>
                <td>Rp.49.999</td>
                <td>4</td>
                <td>Rp.199.996</td>
                <td>Proses</td>
                <td>
                <Button onClick={handleDiterimaClick} variant="success" className="d-block mb-1" style={{width: '80%', height: '35px'}}><b>Diterima</b></Button>
                <Button variant="danger" className="d-block" style={{width: '80%', height: '35px'}}><b>Dibatalkan</b></Button>
                </td>
            </tr>
            </tbody>
        </Table>
        </Container>

        <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Body style={{ textAlign: 'center' }}>
                <h5>Hore..! Pesananmu Telah Sampai..!</h5>
            <img src={popup1} alt="Logo" style={{ width: '50%', marginBottom: '20px' }} />
            <Form>
                <Form.Group controlId="formUlasan">
                <Form.Control as="textarea" rows={2} placeholder="Tulis ulasan Anda..." />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button style={{width: '25%', border: 'none'}} variant="secondary" onClick={handleCloseModal}>
                Kembali
            </Button>
            <Button style={{backgroundColor: '#283849', border: 'none', width: '25%'}} variant="primary" onClick={handleCloseModal} >
                Kirim
            </Button>
            </Modal.Footer>
        </Modal>

        <Footer2/>
        </>
    );
};

export default Keranjang;
