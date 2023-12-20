import React from 'react'
import Button from 'react-bootstrap/Button';
import Kontenkedua from '../components/Kontenkedua';
import Footer from '../components/Footer'
import mockup1 from './../assets/mockup1.png';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate =useNavigate()

    return (
        <>
        <div className='heroImageLP'
        style={{
            height: '450px',
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundSize: 'cover',
            padding: '20px',
        }}  
        >
        <div style={{ width: '80%', margin: 'auto', display: 'flex', justifyContent: 'space-between', marginTop: '65px' }}>
            <div className='helo-landingpg' style={{ textAlign: 'left' }}>
            <h1>Mengoptimalkan Produksi Ikan di Kolam Budidaya</h1>
            <p>Platform IKANKUU ini menyediakan berbagai produk ikan dengan pengalaman belanja online yang mudah dan aman.</p>
            <Button onClick={() => navigate('/Login')} variant="primary" style={{ padding: '8px', cursor: 'pointer', marginTop: '20px', width: '65%', backgroundColor: '#283849', border: 'none' }}><b>Daftar Sekarang</b></Button>
            </div>
            <div>
            <img
                src={mockup1}
                alt="Logo"
                style={{ width: '350px', height: 'auto' }}
            />
            </div>
        </div>
        </div>

        <Kontenkedua/>
        <Footer/>

        </>
        
    )
}

export default LandingPage