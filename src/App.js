import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EditVendor from "./components/EditVendor";
import AddVendor from "./components/AddVendor";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/vendors/:id/edit" element={<EditVendor />} />
        <Route path="/vendors/add" element={<AddVendor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
