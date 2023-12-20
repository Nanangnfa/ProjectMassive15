import React from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import Navbar from './../components/Navbar'
import Footer2 from './../components/Footer2'
import productb from './../assets/productb.png';

const Pembelian = () => {
  return (
    <>
      <Navbar />

      <Container style={{ marginTop: '30px' }}>
        <Row>
          {/* Kotak panjang kiri*/}
          <h4><b>Pesanan</b></h4>
          <Col md={8}>
            <div style={{ backgroundColor: '#F6F4F4', border: '1px solid #ccc', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '100%' }}>
              <h5><b>Data Produk</b></h5>
              <div>
                <p  style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Id:</span>
                <span style={{ textAlign: 'right' }}><b>#FNZ98687576</b></span>
                </p>

                <p  style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Tanggal:</span>
                <span style={{ textAlign: 'right' }}>14 Des 2023</span>
                </p>

                <p  style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Jumlah Pembayaran:</span>
                <span style={{ textAlign: 'right' }}>4</span>
                </p>

                <p  style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Harga:</span>
                <span style={{ textAlign: 'right' }}>RP. 199.996</span>
                </p>
                
                <p  style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Metode Pembayaran:</span>
                <span style={{ textAlign: 'right' }}><b>COD</b></span>
                </p>
                <p>Status: </p>
                <Form style={{ display: 'flex', flexDirection: 'column' }}>
                  <Form.Group controlId="statusForm">
                    <Form.Control as="select" defaultValue="Sedang Diproses">
                      <option value="proses">Proses</option>
                      <option value="selesai">Selesai</option>
                    </Form.Control>
                    <Button variant="primary" type="button" style={{ alignSelf: 'flex-end', marginTop: '10px', float: 'right', backgroundColor: '#283849', border: 'none' }}>
                      OK
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Col>

          {/* Kotak panjang kanan*/}
          <Col md={4}>
            <div style={{ backgroundColor: '#F6F4F4', border: '1px solid #ccc', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '100%' }}>
              <h5><b>Data Penerima</b></h5>
              <div>
              <p  style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Nama:</span>
                <span style={{ textAlign: 'right' }}>Aldi Muhib</span>
                </p>
                <p  style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>No Hp:</span>
                <span style={{ textAlign: 'right' }}>087857602316</span>
                </p>
                <p  style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Alamat:</span>
                <span style={{ textAlign: 'right', width: '50%' }}>Jl Ahmad Yani No 4</span>
                </p>
                <p  style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Catatan:</span>
                <span style={{ textAlign: 'right', width: '50%' }}>Antar sesuai pesanan</span>
                </p>
              </div>
            </div>
            <br />
            <p  style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span><b>Status Pemesanan:</b></span>
                <span style={{ textAlign: 'right', color: 'red' }}><u>Belum Diterima</u></span>
                </p>
            <p style={{ color: '#7B7B7B' }}><i>*Status akan berubah ketika user menerima barang.</i></p>
            <br />
            <Button style={{ width: '100%', border: 'none', backgroundColor: '#283849' }} variant="success" type="button">
              Pesanan Selesai
            </Button>
          </Col>
        </Row>

        {/* Kotak bawah */}
        <div style={{ width: '66%' }}>
          <Row className="mt-3">
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Foto Produk</th>
                    <th>Nama</th>
                    <th>Harga Satuan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={productb} alt="Produk 1" style={{ width: '25%', height: 'auto' }} />
                    </td>
                    <td>Ikan Lele</td>
                    <td>Rp.49.999</td>
                  </tr>
                  {/* Tambahkan baris lain sesuai kebutuhan */}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Container>

      <Footer2 />

    </>
  );
};

export default Pembelian;
