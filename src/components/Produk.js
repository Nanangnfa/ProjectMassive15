import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Produk = () => {
    const [produkList, setProdukList] = useState([]);
    const navigate = useNavigate();
    const baseUrl = 'http://localhost:3001/uploads';

    useEffect(() => {
        // Ambil data produk dari backend saat komponen dimuat
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/products');
            if (response.status === 200) {
                setProdukList(response.data);
            } else {
                console.error('Gagal mengambil data produk');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleBeliClick = () => {
        // Menggunakan navigate untuk berpindah ke halaman /DeskripsiProduk dengan menyimpan id_produk
        navigate(`/DeskripsiProduk`);
    };

    return (
        <>
            <div className="d-flex flex-wrap justify-content-start gap-3" style={{ maxWidth: '55rem', margin: 'auto'}}>
                {produkList.map((produk) => (
                <Card key={produk.id_produk} style={{ width: '13rem', marginBottom: '15px' }}>
                    {console.log('URL Gambar:', produk.foto_produk)}
                    <div style={{ overflow: 'hidden', maxHeight: '200px' }}>
                    <Card.Img
                        variant="top"
                        src={`${baseUrl}/${produk.foto_produk}`}
                        style={{ width: '100%', height: 'auto' }}
                        className="img-fluid"
                    />
                    </div>
                    <Card.Body style={{ backgroundColor: '#DADFF1' }}>
                    <Card.Title>{produk.nm_produk}</Card.Title>
                    <div className="d-flex justify-content-between">
                        <Card.Text>Rp: {produk.harga_produk}/Kg</Card.Text>
                    </div>
                    <Button
                        variant="primary"
                        style={{
                        marginTop: '10px',
                        width: '50%',
                        backgroundColor: '#283849',
                        border: 'none',
                        float: 'right',
                        }}
                        onClick={() => handleBeliClick()}
                    >
                        Beli
                    </Button>
                    </Card.Body>
                </Card>
                ))}
            </div>
        </>
    );
};

export default Produk;
