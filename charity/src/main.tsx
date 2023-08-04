// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import Favorite from "./components/Favorite.tsx";
import About from "./components/About.tsx";
import News from "./components/News.tsx";
import Charity from "./components/Charity.tsx";
import Footer from "./components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Charity" element={<Charity />} />
      <Route path="/Favorite" element={<Favorite />} />
      <Route path="/News" element={<News />} />
      <Route path="/About" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
