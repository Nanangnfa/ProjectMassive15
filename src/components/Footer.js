import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logofooter from './../assets/logofooter.png';

function FooterComponent() {
    return (
        <Container fluid style={{ backgroundColor: '#DADFF1', padding: '37px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '0px', marginTop: '50px' }}>
        <Row style={{marginTop: '30px'}}>
            <Col md={3} className="text-center" >
            <img 
                className="imgfooter"
                style={{ opacity: '0.9'}}
                src={logofooter}
                alt="Logo Web"
            />
            </Col>
            <Col md={4}>
            <div style={{fontWeight: '600'}}>
                <h4><b>Kontak :</b></h4>
                <br />
                <p>
                Lhokseumawe :Karawaci Office Park Blok D/36Lippo Karawaci, Aceh 15113
                </p>
                <p>
                Email : ikanku@gmail.com
                </p>
            </div>
            </Col>
            <Col md={3}>
            <div style={{fontWeight: '600'}}>
                <h4><b>Informasi :</b></h4>
                <br />
                <p>Kebijakan Privasi</p>
                <p>Syarat Dan Ketentuan</p>
                <p>Bantuan</p>
            </div>
            </Col>
        </Row>
        <Row className='teksfooter'>
            <Col md={12} className="text-left" >
            <p style={{opacity: '0.7'}}>©2023. IKANKUU. All rights Reserved</p>
            </Col>
        </Row>
        </Container>
    );
}

export default FooterComponent;
