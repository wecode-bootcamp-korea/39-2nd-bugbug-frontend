import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Productdetail from './pages/Productdetail/Productdetail';
import Payment from './pages/Payment/Payment';
import Projectupload from './pages/Projectupload/Projectupload';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productdetail/:id" element={<Productdetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/projectupload" element={<Projectupload />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
