import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import ShowPage from "./pages/Show/ShowPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shows/:id" element={<ShowPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
