import React from "react";
import "./App.css";
import { Crew, Destination, Home, Technology } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Header, Not } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<Not />} />
      </Routes>
    </div>
  );
}

export default App;
