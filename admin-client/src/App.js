import React from "react";
import Dashboard from "./pages/Dashboard";
import CreateRequests from './pages/CreateRequests';
import RequestsList from './pages/RequestsList';
import {Navbar} from "./components";
import { Routes, Route } from "react-router-dom";
import ErrorPage from './pages/404';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact  path="/" element={<Dashboard />} />
        <Route exact  path="/service-request" element={<CreateRequests />} />
        <Route exact  path="/service-list" element={<RequestsList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
