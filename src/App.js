import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
    <h1>Web Dev Sandbox</h1>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/profile" element={<Profile />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
