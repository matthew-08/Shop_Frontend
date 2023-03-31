import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" Component={<Homepage />} />
      <Route path="/register" Component={<Register />} />
      <Route path="/signIn" Component={<SignIn />} />
      <Route path="/products" Component={<Products />} />
      <Route path="/contact" Component={<Contact />} />
      <Route path="*" Component={<UnkownPage />} />
    </Routes>
  );
}

export default ApplicationRoutes;
