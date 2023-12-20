import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import leleDeskrip from './../assets/leleDeskrip.png';
import ulasan from './../assets/ulasan.png';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import axios from 'axios';

const DeskripsiProduk = () => {
    

    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [tokoInfo, setTokoInfo] = useState({});

    useEffect(() => {
        const idToko = '1';

        
        axios.get(`http://localhost:3001/api/toko/${idToko}`)
        .then(response => setTokoInfo(response.data))
        .catch(error => console.error('Error:', error));
    }, []);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };

    return (

        <>
        <Navbar/>

        <Container style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
        <Row>
            {/* Kotak 50% Sisi Kiri */}
            <Col md={6}>
            <Image src={leleDeskrip} alt="Product" fluid style={{ width: '65%', height: 'auto' }} />
            <div style={{ marginTop: '10px' }}><h4><b>Informasi Toko</b></h4></div>
            <li>{tokoInfo.nm_toko}</li>
            <li>Alamat: {tokoInfo.alamat_toko}</li>
            <li>Kontak: {tokoInfo.no_hp}</li>
            </Col>

            {/* Kotak 50% Sisi Kanan */}
            <Col md={6}>
            <div style={{ marginBottom: '10px' }}><h4><b>Ikan Lele</b></h4></div>
            <div style={{ marginBottom: '10px' }}><h4><b>Rp 49.999/Kg</b></h4></div>
            <div style={{ marginBottom: '10px' }}>
                <br />
                <h6>Spesifikasi :</h6>
                <ul>
                <li>Berat: 1.5 kg per ekor</li>
                <li>Ukuran: Panjang 30 cm, Tinggi 15 cm</li>
                <li>Jenis: Lele Sangkuriang</li>
                <li>Kondisi: Segar, hasil budi daya terbaik</li>
                </ul>
            </div>

            <div style={{ marginBottom: '10px' }}><h6>Deskripsi Produk :</h6></div>
                <p>Lele Super Jumbo kami menawarkan pengalaman kuliner yang istimewa. Dengan berat 1.5 kg per ekor, ikan lele ini memiliki daging yang lezat dan tekstur yang kenyal.  Segar dan siap olah, Lele Super Jumbo menjadi pilihan sempurna untuk hidangan lezat keluarga Anda.</p>

                <div style={{ marginBottom: '10px' }}>
                <h6>Info Pengiriman :</h6>
                <ul>
                <li>Toko buka jam 08.00 - 16.00</li>
                <li>Waktu Pengiriman: 3-5 jam kerja</li>
                </ul>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <Button variant="outline-secondary" style={{ marginRight: '10px', width: '30%' }} onClick={handleDecrement}>-</Button>
                <button variant="outline-secondary" style={{ width: '36%', borderRadius: '15px', height: '40px', border: '1px solid grey' }}><b>{quantity}</b></button>
                <Button variant="outline-secondary" style={{ marginLeft: '10px',  width: '30%' }} onClick={handleIncrement}>+</Button>
            </div>
            <Button onClick={() => navigate('/BeliSekarang')} style={{width: '100%'}} variant="success"><b>Checkout</b></Button>
            </Col>
        </Row>
        <br />
            <div style={{border: '1px solid'}}></div>
            <br />


        {/* Ulasan Pembeli */}
            <h4><b>Ulasan Pembeli</b></h4>
        <Row style={{ marginTop: '20px' }}>
            <Col >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src={ulasan} alt="User Avatar" roundedCircle style={{ width: '70px', height: 'auto', marginRight: '10px' }} />
            <div><b>Udin Saleh</b>
                <p>IKANKUU luar biasa! Lele jumbo yang saya beli segar banget, pelayanan ramah, dan panduannya bantu banget. Hidangan lele gorengnya? Sempurna! 👌</p>
            </div>
            </div>
            </Col>
        </Row>
        
        </Container>

        <Footer/>

        </>
    );
};

export default DeskripsiProduk;
