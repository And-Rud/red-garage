import React from "react";
import "./App.css";
import Header from "./container/Header";
import Home from "./container/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./container/About";
import Services from "./container/Services";
import Moto from "./container/Moto";
import Post1 from "./container/Post1";
import Scooters from "./container/Scooters";

function App() {
  return (
    <div className="App">
      <div className="page">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/moto" element={<Moto />} />
            <Route path="/scooters" element={<Scooters />} />
            <Route path="/post1" element={<Post1 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
