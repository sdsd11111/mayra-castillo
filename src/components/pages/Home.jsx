import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Star,
  Handshake,
  Shield,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  CheckCircle,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';
import TestimonialSection from '@/components/TestimonialSection';
import ValuesSection from '@/components/ValuesSection';
import SEO from '@/components/SEO';

// Importar imágenes
// La imagen del hero se carga desde la carpeta public

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleHomeContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    // In development, show success without sending email
    if (process.env.NODE_ENV === 'development') {
      console.log('Development mode: Form data', formValues);
      setTimeout(() => {
        setSubmitStatus({
          type: 'success',
          message: 'Mensaje enviado correctamente (modo desarrollo). En producción, esto enviaría un correo.'
        });
        e.target.reset();
        setIsSubmitting(false);
      }, 1000);
      return;
    }

    // Production code
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.'
        });
        e.target.reset();
      } else {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde o contáctanos por WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      title: "Declaraciones y Asesoría Tributaria",
      description: "Ayudamos a personas que no conocen sus obligaciones tributarias a cumplir sus responsabilidades sin complicaciones.",
      services: ["Declaración de Impuestos (IVA, Renta)", "Devolución de IVA y Renta"],
      link: "/servicios/tributarios"
    },
    {
      title: "Asesoría en Comercio Exterior",
      description: "Sabemos cómo y dónde contratar trámites responsables. Te conectamos con nuestra red de contactos confiables.",
      services: ["Trámites de importación y exportación", "Trámites logísticos"],
      link: "/servicios/comercio-exterior"
    },
    {
      title: "Formalización de Negocios",
      description: "Te guiamos paso a paso en la formalización de tu emprendimiento para que puedas crecer sin riesgos.",
      services: ["Obtención de RUC", "Registro en ARSA", "Certificado de Microempresario"],
      link: "/servicios/formalizacion"
    },
    {
      title: "Trámites Digitales",
      description: "Te ayudamos a realizar todos tus trámites digitales para que tu negocio esté siempre al día y conectado.",
      services: ["Gestión de Firma Electrónica", "Configuración de accesos digitales"],
      link: "/servicios/digitales"
    },
    {
      title: "Asesoría Contable Integral",
      description: "Ofrecemos una proyección de pago de rentas y te explicamos casos basados en nuestra experiencia.",
      services: ["Trámites en IESS", "Ministerio de Trabajo", "Superintendencia de Compañías"],
      link: "/servicios/tributarios"
    },
    {
      title: "Trámites Variados",
      description: "Gestionamos una amplia gama de trámites para resolver cualquier problema que pueda surgir.",
      services: ["Asesoría financiera", "Trámites de herencia"],
      link: "/contacto"
    }
  ];

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

  const faqs = [
    {
      question: "¿Cómo y dónde contratar trámites responsables para mi negocio?",
      answer: "En Ing. Mayra Castillo, te asesoramos y conectamos con proveedores confiables en Logística, Comercio Exterior y trámites. Nuestro objetivo es que cumplas con tus obligaciones de manera responsable y sin estrés."
    },
    {
      question: "Soy una persona que no conoce sus obligaciones, ¿pueden ayudarme?",
      answer: "Claro que sí. Nuestro trabajo es resolver el problema de personas que, sin saberlo, tienen un dolor de cabeza contable. Nos encargamos de todo el proceso para que no tengas que preocuparte por nada."
    },
    {
      question: "¿Qué debo hacer si recibo ingresos de cuentas bancarias y no sé cómo declararlos?",
      answer: "Te brindamos la asesoría necesaria para regularizar tu situación. Realizamos la proyección de pago de rentas y te explicamos casos similares para que entiendas el proceso y cumplas con todas las normativas."
    },
    {
      question: "¿Cómo puedo saber si mi empresa tiene problemas contables o multas?",
      answer: "Muchos no saben que tienen problemas con las declaraciones, pero es una información pública en la Superintendencia de Compañías. Nosotros nos encargamos de revisarlo por ti y darte una solución al problema."
    },
    {
      question: "¿Qué me diferencia de otros asesores contables?",
      answer: "A diferencia de otros, no solo declaramos impuestos; somos tu aliado estratégico que se preocupa por tu crecimiento. Asumimos la responsabilidad de nuestros errores, lo que nos ha permitido ganarnos la confianza de nuestros clientes y fidelizarlos."
    }
  ];

  const values = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Experiencia",
      description: "Años de experiencia resolviendo problemas contables complejos"
    },
    {
      icon: <Handshake className="w-8 h-8 text-blue-500" />,
      title: "Compromiso",
      description: "Comprometidos con el éxito y crecimiento de tu negocio"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Confianza",
      description: "Asumimos la responsabilidad de nuestros errores y cubrimos las multas"
    }
  ];

  return (
    <>
      <SEO
        title="Ing. Mayra Castillo - Contadora Profesional en Loja, Ecuador"
        description="Servicios profesionales de contabilidad, asesoría tributaria, comercio exterior y formalización de negocios en Loja, Ecuador. Conoce tus obligaciones y haz crecer tu negocio."
        url="/"
        image="/Logo.jpg"
      />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center hero-gradient">
          <div className="absolute inset-0 overlay-dark"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: 'url(/Inicio/Hero.jpg)' }}
          ></div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conoce tus obligaciones, evita problemas y haz crecer tu negocio
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            </p>
            <a
              href="https://wa.me/593960184087"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#3b7dbe] hover:bg-[#3b7dbe] text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span className="whitespace-nowrap">Contáctanos por WhatsApp</span>
              </Button>
            </a>
          </div>
        </section>

        {/* Valores Section */}
        <ValuesSection values={values} />

        {/* Video Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary-custom">
              Descubre cómo simplificamos tu vida contable
            </h2>
            <div className="max-w-4xl mx-auto">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/1UM2TWVcJIg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section className="py-20 bg-gray-50 bg-fixed bg-center bg-cover relative" style={{ backgroundImage: 'url(/parallax.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 bg-black text-white p-6 rounded-lg">
              <h2 className="text-4xl font-bold mb-6">Nuestros Servicios</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Nuestra cartera de servicios está diseñada para cubrir todas tus necesidades contables,
                tributarias y financieras, ayudándote a cumplir con tus obligaciones y a crecer con seguridad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover-scale card-shadow overflow-hidden">
                  <div className="relative">
                    <div className="bg-primary-custom text-white p-6">
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to={service.link}>
                        <Button variant="outline" className="w-full">
                          Más información
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios Section */}
        <TestimonialSection
          testimonials={testimonials}
          images={[
            '/Testimonio-1.jpg',
            '/Testimonio-2.jpg',
            '/Testimonio-3.jpg'
          ]}
        />

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-primary-custom">Preguntas Frecuentes</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <button
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 smooth-transition"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary-custom flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary-custom flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-primary-custom mb-4">Contáctanos</h2>
              <p className="text-lg text-gray-700">Déjanos tus datos y nos pondremos en contacto contigo lo antes posible.</p>
            </div>
            <form onSubmit={handleHomeContactSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-custom"
                  placeholder="Ingresa tu nombre completo"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-custom"
                  placeholder="Ingresa tu correo electrónico"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-custom"
                  placeholder="Ingresa tu número de teléfono"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-custom"
                  placeholder="Escribe tu mensaje"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {submitStatus.message && (
                <div className={`p-3 rounded-md mb-6 ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="space-y-4">
                <button
                  type="submit"
                  className={`w-full bg-accent-custom hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary-custom ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </div>
                  ) : (
                    'Enviar mensaje'
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  O si lo prefieres, contáctanos directamente por WhatsApp
                </p>

                <a
                  href="https://wa.me/593960184087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md transition-colors"
                >
                  <MessageCircle className="mr-2" />
                  Chatear por WhatsApp
                </a>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

