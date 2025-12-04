import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Home,
  Briefcase,
  User,
  Phone,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

  const services = [
    { name: 'Trámites Tributarios', path: '/servicios/tributarios' },
    { name: 'Comercio Exterior', path: '/servicios/comercio-exterior' },
    { name: 'Formalización de Negocios', path: '/servicios/formalizacion' },
    { name: 'Trámites Digitales', path: '/servicios/new-digitales' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src="/Logo.jpg" alt="Logo" className="h-10 w-auto" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-custom smooth-transition"
            >
              <Home size={18} />
              <span>Inicio</span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
            >
              <button
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-custom smooth-transition"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <Briefcase size={18} />
                <span>Servicios</span>
                <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border"
                >
                  <div className="py-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        onClick={() => {
                          setIsServicesOpen(false);
                          window.scrollTo(0, 0);
                        }}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-custom smooth-transition"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/nosotros"
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-custom smooth-transition"
            >
              <User size={18} />
              <span>Nosotros</span>
            </Link>

            <Link
              to="/contacto"
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-custom smooth-transition"
            >
              <Phone size={18} />
              <span>Contacto</span>
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link to="/contacto">
              <Button className="bg-[#3b7dbe] hover:bg-[#3b7dbe] text-white">
                Contáctanos
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-700"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                <Home size={18} />
                <span>Inicio</span>
              </Link>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Briefcase size={18} />
                  <span>Servicios</span>
                </div>
                <div className="ml-6 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block text-gray-600 hover:text-primary-custom"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/nosotros"
                className="flex items-center space-x-2 text-gray-700"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                <User size={18} />
                <span>Nosotros</span>
              </Link>

              <Link
                to="/contacto"
                className="flex items-center space-x-2 text-gray-700"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                <Phone size={18} />
                <span>Contacto</span>
              </Link>

              <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-accent-custom hover:bg-orange-600 text-white">
                  Contáctanos
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

