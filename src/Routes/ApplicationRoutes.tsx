import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage/Homepage';
import Register from '../Pages/Register/Register';
import SignIn from '../Pages/SignIn/SignIn';
import Products from '../Pages/Products/Products';
import Contact from '../Pages/Contact/Contact';
import UnknownPage from '../Pages/404/UnknownPage';

function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<UnknownPage />} />
    </Routes>
  );
}

export default ApplicationRoutes;
