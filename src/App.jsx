import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Careers from "./components/Careers";
import Services from "./components/services";
import Blog from "./components/Blog";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} /> {/* The new route */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
