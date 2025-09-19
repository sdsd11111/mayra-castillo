import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3b7dbe] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <img src="/Logo.jpg" alt="Logo" className="h-10 w-auto mb-4" />
            <p className="text-gray-300 mb-4">
              Más que una contadora, tu aliada estratégica para el crecimiento de tu negocio.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white smooth-transition">
                Inicio
              </Link>
              <Link to="/nosotros" className="block text-gray-300 hover:text-white smooth-transition">
                Nosotros
              </Link>
              <Link to="/contacto" className="block text-gray-300 hover:text-white smooth-transition">
                Contacto
              </Link>
              <Link to="/servicios/tributarios" className="block text-gray-300 hover:text-white smooth-transition">
                Trámites Tributarios
              </Link>
              <Link to="/servicios/comercio-exterior" className="block text-gray-300 hover:text-white smooth-transition">
                Comercio Exterior
              </Link>
              <Link to="/servicios/formalizacion" className="block text-gray-300 hover:text-white smooth-transition">
                Formalización de Negocios
              </Link>
              <Link to="/servicios/digitales" className="block text-gray-300 hover:text-white smooth-transition">
                Trámites Digitales
              </Link>
            </nav>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">mayra.castillo02@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">0960184087 - 07 2 577313</span>
              </div>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white smooth-transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white smooth-transition"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white smooth-transition"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
            
            <div className="text-center text-gray-400 text-sm">
              <p>Diseñado por @cesarreyesjaramillo.com 2025. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

