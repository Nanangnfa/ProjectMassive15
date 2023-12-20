import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Kontenkedua from '../components/Kontenkedua';
import LogoBesar from './../assets/LogoBesar.png';
import bgtk from './../assets/bgtk.png';
import mockup from './../assets/mockup.png';

function TentangKami() {
    return (
        <>
        <Navbar/>
        <Hero
            height="80vh"
            background={bgtk}
            title="Budidaya, Inspirasi, Jual Beli Ikan."
            imgSrc={mockup}
        />

        <Kontenkedua
                imageSrc={LogoBesar} 
                textContent={
                <>
                    <h2>IKANKUU</h2>
                    <br />
                    <p>IKANKUU, destinasi utama bagi para pecinta ikan dan pembudidaya, adalah platform online yang menyajikan pengalaman jual beli ikan air tawar terbaik. Kami bangga memberikan akses langsung ke ikan segar berkualitas tinggi dari para pembudidaya terpercaya, menjamin kualitas dan keamanan setiap produk yang Anda dapatkan.</p>
                </>
                }
            />

            <div className='tentangkami_teks' style={{marginLeft: '220px', marginRight: '150px'}}>
                <h2>Visi:</h2>
                <p>Menjadi platform terkemuka yang menghubungkan pecinta ikan, dan menjadi destinasi terpercaya untuk jual beli ikan.</p>
                <br />
                <h2>Misi:</h2>
                <li>Menyediakan platform jual beli ikan yang aman dan efisien.</li>
                <li>Mendorong pertumbuhan industri perikanan yang berkelanjutan..</li>
            </div>

        <Footer/>
        </>
    )
}

export default TentangKami