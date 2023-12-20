import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PengaturanAkun from './page/PengaturanAkun'
import Beranda from './page/Beranda'
import Belanja from './page/Belanja'
import DashboardToko from './page/DashboardToko'
import TentangKami from './page/TentangKami'
import PageLogin from './page/PageLogin'
import PageRegister from './page/PageRegister'
import LandingPage from './page/LandingPage'
import PenjelasanPenjual from './page/PenjelasanPenjual'
import Keranjang from './page/Keranjang'
import Pembelian from './page/Pembelian'
import TambahProduk from './page/TambahProduk'
import BeliSekarang from './page/BeliSekarang'
import DeskripsiProduk from './page/DeskripsiProduk'

function App() {
    return (
        <div>
                <Router>
                    <Routes>
                        <Route path='/' element={<LandingPage/>} /> 
                        <Route path='/Login' element={<PageLogin/>} /> 
                        <Route path='/Register' element={<PageRegister/>} /> 
                        <Route path='/Beranda' element={<Beranda/>} /> 
                        <Route path='/Belanja' element={<Belanja/>} /> 
                        <Route path='/DashboardToko' element={<DashboardToko/>} /> 
                        <Route path='/TentangKami' element={<TentangKami/>} /> 
                        <Route path='/PengaturanAkun' element={<PengaturanAkun/>} /> 
                        <Route path='/Keranjang' element={<Keranjang/>} /> 
                        <Route path='/PenjelasanPenjual' element={<PenjelasanPenjual/>} /> 
                        <Route path='/Pembelian' element={<Pembelian/>} /> 
                        <Route path='/TambahProduk' element={<TambahProduk/>} /> 
                        <Route path='/BeliSekarang' element={<BeliSekarang/>} /> 
                        <Route path='/DeskripsiProduk' element={<DeskripsiProduk/>} /> 
                    </Routes>
                </Router>
        </div>
    )
}

export default App