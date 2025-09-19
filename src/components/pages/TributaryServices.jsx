import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  Star, 
  MessageCircle,
  Calculator,
  FileText,
  Shield,
  TrendingUp
} from 'lucide-react';
import TestimonialSection from '@/components/TestimonialSection';

const TributaryServices = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Evita multas y sanciones del SRI",
      description: "Nos aseguramos de que todas tus declaraciones cumplan con los requisitos legales y se presenten a tiempo."
    },
    {
      icon: <Calculator className="w-8 h-8 text-blue-500" />,
      title: "Ten una proyección clara de tus pagos",
      description: "Te proporcionamos proyecciones detalladas de tus obligaciones tributarias para que puedas planificar mejor."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Asesoramiento personalizado según tu situación",
      description: "Cada negocio es único, por eso adaptamos nuestros servicios a tus necesidades específicas."
    }
  ];

  const services = [
    "Declaración de Impuestos (IVA, Renta)",
    "Devolución de IVA y Renta",
    "Elaboración de anexos",
    "Proyección de pagos de rentas",
    "Asesoría en casos complejos",
    "Regularización de situaciones tributarias"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 overlay-dark"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(/tributarios/Hero.jpg)' }}
        ></div>
        
        <div className="relative z-10 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <FileText className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Declaraciones Tributarias y Asesoría Fiscal
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            Simplificamos tus obligaciones tributarias para que te enfoques en el éxito de tu negocio
          </p>
        </div>
      </section>

      {/* Descripción detallada */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary-custom">
              Tu tranquilidad tributaria es nuestra prioridad
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <Card className="hover-scale card-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary-custom">Simplificación de Obligaciones</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Simplificamos tus obligaciones tributarias para que te enfoques en el éxito de tu negocio. Ofrecemos declaración de impuestos (IVA, Renta, Herencias), devolución de IVA y Renta y elaboración de anexos.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-scale card-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary-custom">Cumplimiento y Evitación de Multas</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Te ayudamos a cumplir con tus responsabilidades sin complicaciones y a evitar multas.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-scale card-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary-custom">Optimización Fiscal</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nuestro enfoque va más allá de la simple presentación de declaraciones. Analizamos tu situación particular, identificamos oportunidades de optimización fiscal y te brindamos asesoría estratégica.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-scale card-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary-custom">Decisiones Estratégicas</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Te brindamos asesoría estratégica para que tomes las mejores decisiones para tu negocio.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios incluidos */}
      <section className="py-20 bg-gray-50 bg-fixed bg-center bg-cover relative" style={{ backgroundImage: 'url(/tributarios/Parralax.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Servicios incluidos</h2>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              Cobertura completa de todas tus necesidades tributarias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale card-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-black font-medium">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Beneficios de nuestro servicio</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Más que cumplir con las obligaciones, te ayudamos a optimizar tu situación fiscal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-scale card-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Nuestro proceso de trabajo</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Un enfoque sistemático para garantizar el cumplimiento y la optimización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Análisis inicial</h3>
              <p className="text-gray-600">Revisamos tu situación actual y identificamos oportunidades</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Planificación</h3>
              <p className="text-gray-600">Desarrollamos una estrategia personalizada para tu caso</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ejecución</h3>
              <p className="text-gray-600">Preparamos y presentamos todas las declaraciones necesarias</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Seguimiento</h3>
              <p className="text-gray-600">Monitoreamos el cumplimiento y te mantenemos informado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <TestimonialSection 
        testimonials={[
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
        ]}
        images={[
          '/tributarios/Testimonio-1.jpg',
          '/tributarios/Testimonio-2.jpg',
          '/tributarios/Testimonio-3.jpg'
        ]}
      />
    </div>
  );
};

export default TributaryServices;

