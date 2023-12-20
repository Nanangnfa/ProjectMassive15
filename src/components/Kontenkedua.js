import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mockup2 from './../assets/mockup2.png';

function CardComponent({ imageSrc, textContent }) {
    return (
        <Container style={{ marginTop: '40px', marginBottom: '40px', marginLeft:'180px'}}>
        <Row className='konten0' >
            <Col md={5} className="text-center" >
            <img
                style={{ height: '85%', width: '80%', marginTop: '35px', float: 'left' }}
                className="kontenimg"
                src={imageSrc || mockup2} // Menggunakan properti imageSrc atau fallback ke mockup2
                alt="Logo Web"
            />
            </Col>
            <Col md={7}>
            <div className='konten1' style={{ color: '#383838', marginTop: '35px' }}>
                {textContent || ( // Menggunakan properti textContent atau fallback ke teks default
                <>
                    <h2>IKANKUU</h2>
                    <br />
                    <p>
                    IKANKUU, destinasi utama bagi para pecinta ikan dan pembudidaya, adalah platform online yang menyajikan pengalaman jual beli ikan air tawar terbaik. Kami bangga memberikan akses langsung ke ikan segar berkualitas tinggi dari para pembudidaya terpercaya, menjamin kualitas dan keamanan setiap produk yang Anda dapatkan.
                    </p>
                </>
                )}
            </div>
            </Col>
        </Row>
        <br />
        </Container>
    );
}

export default CardComponent;
