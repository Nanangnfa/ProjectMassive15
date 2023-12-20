import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import grup from './../assets/grup.png';
import grup1 from './../assets/grup1.png';
import { useNavigate } from 'react-router-dom';

function CardComponent() {
    const navigate =useNavigate()
    return (
        <Container style={{ marginTop: '40px', marginBottom: '40px', marginLeft:'180px'}}>
        <Row className='konten0' >
            <Col md={7}>
            <div className='konten1' style={{ color: '#383838'}}>
                <h2>Jual produk di IKANKUU..?</h2>
                <br />
                <p>
                Memberikan Anda akses untuk mengelola dan memasarkan produk ikan dengan mudah, memberikan solusi yang efisien dan praktis untuk meningkatkan penjualan Anda. Dengan fitur-fitur inovatif kami, mari jadikan pengalaman berbisnis ikan Anda lebih mudah dan efektif.
                </p>
                <br />
                <Button onClick={() => navigate('/PenjelasanPenjual')} variant="primary" style={{ marginTop: '20px', backgroundColor: '#283849', border: 'none' }}><b>Selengkapnya</b></Button>
            </div>
            </Col>
            <Col md={5} className="text-center" >
            <img  style={{height: '100%', width: '72%'}}
                className="kontenimg"
                src={grup}
                alt="Logo Web"
            />
            </Col>
        </Row>
        <br />

        {/* kedua */}

        <Row className='konten0' >
            <Col md={5} className="text-center" >
            <img  style={{height: '90%', width: '77%', marginTop: '35px', float: 'left'}}
                className="kontenimg"
                src={grup1}
                alt="Logo Web"
            />
            </Col>
            <Col md={7}>
            <div className='konten1' style={{ color: '#383838', marginTop: '35px'}}>
                <h2>Tujuan Kami</h2>
                <br />
                <p>
                Tujuan utama dari IKANKUU adalah menyediakan tidak hanya pengalaman belanja yang efisien untuk pembeli ikan, tetapi juga memberikan wawasan tambahan dan informasi berharga kepada para pembudidaya ikan melalui artikel-artikel informatif, sehingga mendukung pertumbuhan dan peningkatan pengetahuan dalam industri ini.                </p>
            </div>
            </Col>
        </Row>


        </Container>
    );
}

export default CardComponent;
