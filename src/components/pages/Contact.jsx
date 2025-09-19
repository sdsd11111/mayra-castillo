import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Star,
  MessageCircle
} from 'lucide-react';
import TestimonialSection from '@/components/TestimonialSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear mensaje para WhatsApp
    const message = `Hola, me gustaría contactar con ustedes.
    
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Mensaje: ${formData.mensaje}`;
    
    const whatsappUrl = `https://wa.me/593960184087?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const testimonials = [
    {
      text: "La Ingeniera Mayra solucionó un problema de 10 años con mis declaraciones tributarias. Su profesionalismo y conocimiento me ahorraron un dolor de cabeza enorme. Su trabajo es impecable y la recomiendo a todos mis contactos.",
      author: "Cliente Satisfecho"
    },
    {
      text: "Contratamos a la Ing. Castillo para la formalización de nuestro emprendimiento. En dos días teníamos todo listo, desde el RUC hasta la notificación sanitaria. Fue rápido, eficiente y transparente.",
      author: "Emprendedor"
    },
    {
      text: "Tenía miedo de contratar un asesor porque pensé que me cobrarían una fortuna. Mayra me ofreció una solución a un precio justo y me ayudó a entender mis obligaciones sin juzgarme. Es una persona que se enfoca en resolver el problema.",
      author: "Pequeño Empresario"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 overlay-dark"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/Contacto/Hero.jpg')` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contáctanos
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Estamos aquí para ayudarte con todas tus necesidades contables y tributarias
          </p>
          <a 
            href="https://wa.me/593960184087" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-[#3b7dbe] hover:bg-[#3b7dbe] text-white text-lg px-8 py-4 rounded-full">
              <MessageCircle className="mr-2" />
              Contáctanos por WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario de Contacto */}
            <div>
              <Card className="card-shadow">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary-custom">Envíanos un mensaje</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Correo electrónico *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="0999999999"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje *
                      </label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-accent-custom hover:bg-orange-600 text-white py-3"
                    >
                      <MessageCircle className="mr-2" />
                      Enviar mensaje por WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-8">
              <Card className="card-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary-custom">Información de contacto</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-custom rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                        <p className="text-gray-600">
                          Bernardo Valdivieso 207-57, entre Azuay y Miguel Riofrío.<br />
                          Edificio Soda Bar. Loja, Ecuador
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-custom rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Teléfonos</h4>
                        <p className="text-gray-600">
                          <a href="tel:+593960184087" className="hover:text-primary-custom">0960184087</a><br />
                          <a href="tel:+59372577313" className="hover:text-primary-custom">07 2 577313</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Correo electrónico</h4>
                        <p className="text-gray-600">
                          <a 
                            href="mailto:mayra.castillo02@gmail.com" 
                            className="hover:text-primary-custom"
                          >
                            mayra.castillo02@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Horarios de atención</h4>
                        <p className="text-gray-600">
                          Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                          Sábados: 8:00 AM - 12:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <Card className="card-shadow">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary-custom">Nuestra Ubicación</h2>
                <div className="w-full h-96 rounded-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.953217123456!2d-79.205678!3d-4.003456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sEdificio%20Soda%20Bar!5e0!3m2!1ses!2sec!4v1634567890123!5m2!1ses!2sec"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <TestimonialSection 
            testimonials={testimonials} 
            images={["/Contacto/Testimonio-1.jpg", "/Contacto/Testimonio-2.jpg", "/Contacto/Testimonio-3.jpg"]} 
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;

