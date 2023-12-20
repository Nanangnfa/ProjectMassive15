import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Produk from '../components/Produk';
import PageSlider from '../components/PageSlider';
import bgbelanja from './../assets/bgbelanja.png'
import mockupkecil from './../assets/mockupkecil.png'




function Belanja() {
    
    return (
        <>
        <Navbar/>
        <Hero
    height="45vh"
    background={bgbelanja}
    title="Pesan Ikan Dengan Mudah, Aman, dan Nyaman Melalui IKANKUUU"
    imgSrc={mockupkecil}
        />
<Container fluid style={{ padding: '10px 20px' }}>
        <Row>
            <Col md={6}>
            <div className='belanjateks'>
                <h5>Selamat Berbelanja 👋</h5>
                <br />
                <br />
                <h4><b>Rekomendasi Produk</b></h4>
            </div>
            </Col>
            <Col md={6} className="text-right">
            <div >
                <Form inline className='pencarian'>
                <Form.Control style={{backgroundColor: '#DADFF1', border: 'none'}} type="text" placeholder="Cari produk..." className="mr-sm-5" />
                </Form>
            </div>
            </Col>
        </Row>
    </Container>
        
        <Produk/>

        <PageSlider/>
        <Footer/>
        </>
    )
}

export default Belanja