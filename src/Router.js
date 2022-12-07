import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './routerLayout/MainLayout';
import Main from './pages/Main/Main';
import Signin from './pages/Signin/Signin';
import Kakao from './pages/Signin/Kakao';
import Signup from './pages/Signup/Signup';
import Productdetail from './pages/Productdetail/Productdetail';
import Payment from './pages/Payment/Payment';
import Projectupload from './pages/Projectupload/Projectupload';
import Paymentsuccess from './pages/Payment/PaymentComponents/PaymentPage/PaymentScreen/Paymentsuccess';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/productdetail/:id" element={<Productdetail />} />
          <Route path="/projectupload" element={<Projectupload />} />
        </Route>
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user/signin" element={<Kakao />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productdetail" element={<Productdetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/projectupload" element={<Projectupload />} />
        <Route path="/paymentsuccess" element={<Paymentsuccess />} />
      </Routes>
    </BrowserRouter>
  );
}
