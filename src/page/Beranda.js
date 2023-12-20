import React from 'react';
import Hero from '../components/Hero';
import Konten from '../components/Konten';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Rectangle from './../assets/Rectangle.png';
import mockup from './../assets/mockup.png';

function Beranda() {
    return (
        <>
            <Navbar />
            <Hero
                height="87vh"
                background={Rectangle}
                title="Mengoptimalkan Produksi Ikan di Kolam Budidaya"
                description="Platform IKANKUU ini menyediakan berbagai produk ikan dengan pengalaman belanja online yang mudah dan aman."
                imgSrc={mockup}
            />

            <Konten />
            <Footer />
        </>
    );
}

export default Beranda;
