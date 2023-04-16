import AboutUs from 'pages/AboutUs';
import ContactUs from 'pages/ContactUs';
import Home from 'pages/Home';
import ServiceRequest from 'pages/ServiceRequest';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/service_request" element={<ServiceRequest />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default AppRoutes;
