import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import TributaryServices from './components/pages/TributaryServices';
import ForeignTrade from './components/pages/ForeignTrade';
import BusinessFormalization from './components/pages/BusinessFormalization';
import DigitalServices from './components/pages/DigitalServices';
import NewDigitalServices from './components/pages/NewDigitalServices';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/servicios/tributarios" element={<TributaryServices />} />
            <Route path="/servicios/comercio-exterior" element={<ForeignTrade />} />
            <Route path="/servicios/formalizacion" element={<BusinessFormalization />} />
            <Route path="/servicios/digitales" element={<DigitalServices />} />
            <Route path="/servicios/new-digitales" element={<NewDigitalServices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
