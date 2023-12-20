import React from 'react';
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';
import { Container, Row, Col, Button, Table, Card, Nav } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';


function DashboardToko() {
    const navigate =useNavigate()

    const productData = [
        { id: 1, name: 'Ikan Lele', image: require(`./../assets/productb.png`) },
        { id: 2, name: 'Ikan Mas', image: require(`./../assets/product2.png`) },
        { id: 3, name: 'Produk Tawes', image: require(`./../assets/product3.png`) },
        { id: 4, name: 'Produk Mujair', image: require(`./../assets/product4.png`) },
        ];

    return (
        <>
        <Navbar/>
        <Container fluid style={{ padding: '10px 20px', marginTop: '20px', width: '90%'}}> 
            <Row>
                <Col md={6}>
                    <div>
                        <h4><b>Dashboard</b></h4>
                    </div>
                </Col>
                <Col md={6} className="text-right">
                    <div style={{ float:'right' }}>
                        <h4><b>Toko Mandiri Jaya</b></h4>
                        <br />
                        <Button onClick={() => navigate('/TambahProduk')} variant="success">Tambah Produk</Button>
                    </div>
                </Col>
            </Row>

            {/* Tabel */}
            <div style={{ marginTop: '50px' }}>
                <div style={{ backgroundColor: '#283849', color: 'white', padding: '5px', textAlign: 'center', borderRadius: '10px 10px 0 0' }}>
            <h4>Kelola Pesanan</h4>
        </div>
                <Table striped bordered hover style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.5)'}}>
                    <thead>
                        <tr >
                            <th>ID</th>
                            <th>Pembeli</th>
                            <th>Tanggal</th>
                            <th>Jumlah Kilo</th>
                            <th>Sub Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Baris 1 */}
                        <tr>
                        <Nav.Link as={Link} to="/Pembelian"><td>1</td></Nav.Link> 
                            <td>Aldi Muhib</td>
                            <td>14-12-2023</td>
                            <td>4</td>
                            <td>Rp.199.996</td>
                            <td>Selesai</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        {/* 4 Card Catalog */}

        <Row style={{ marginTop: '50px' }}>
            <h4><b>Kelola Produk</b></h4>
            {productData.map((product) => (
            <Col md={3} key={product.id}>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={product.image} style={{ height: '210px' }} />
                <Card.Body style={{ backgroundColor: '#DADFF1' }}>
                    <Card.Title>{product.name}</Card.Title>
                    <Button variant="danger" style={{ border: 'none', width: '45%' }}>Hapus</Button>{' '}
                    <Button variant="primary" style={{ backgroundColor: '#283849', border: 'none', width: '45%' }}>Lihat</Button>
                </Card.Body>
                </Card>
                <br />
            </Col>
            ))}
        </Row>
        </Container>
        
        <Footer2/>
        </>
    );
}

export default DashboardToko;
