import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  Star, 
  MessageCircle,
  Globe,
  Truck,
  Users,
  Shield,
  Clock,
  Award
} from 'lucide-react';
import ParallaxSection from '@/components/ui/ParallaxSection';
import TestimonialSection from '@/components/TestimonialSection';

const ForeignTrade = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Red de proveedores verificados para tus trámites",
      description: "Te conectamos con agentes de aduana, transportistas y otros proveedores confiables con años de experiencia."
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: "Asesoría experta en los procesos de importación y exportación",
      description: "Conocemos todos los procedimientos y te guiamos paso a paso para evitar errores costosos."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "Trámites rápidos y eficientes",
      description: "Optimizamos los tiempos de gestión para que tus operaciones comerciales no se vean afectadas."
    }
  ];

  const services = [
    "Trámites de importación y exportación",
    "Asesoría logística integral",
    "Conexión con agentes de aduana certificados",
    "Gestión de transportistas confiables",
    "Trámites de accesos a puertos",
    "Documentación para comercio exterior",
    "Asesoría en regulaciones aduaneras",
    "Optimización de procesos logísticos"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 overlay-dark"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(/comercio-exterior/Hero.jpg)' }}
        ></div>
        
        <div className="relative z-10 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Globe className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Asesoría en Comercio Exterior
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            Te guiamos en cada paso de tus importaciones y exportaciones con una red de contactos confiables
          </p>
        </div>
      </section>

      {/* Descripción detallada */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary-custom">
              Tu puerta de entrada al comercio internacional
            </h2>
            <div className="relative">
              {/* Mobile slider container */}
              <div className="md:hidden overflow-hidden w-full">
                <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
                  <div className="flex-none w-5/6 sm:w-2/3 pr-4 snap-center">
                    <Card className="h-full">
                      <CardContent className="p-6 h-full">
                        <h3 className="text-xl font-semibold mb-4 text-primary-custom">Guía en Importaciones y Exportaciones</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Te guiamos en cada paso de tus importaciones y exportaciones. Te conectamos con nuestra red de contactos confiables, como agentes de aduana y transportistas.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex-none w-5/6 sm:w-2/3 pr-4 snap-center">
                    <Card className="h-full">
                      <CardContent className="p-6 h-full">
                        <h3 className="text-xl font-semibold mb-4 text-primary-custom">Accesos y Asesoría Logística</h3>
                        <p className="text-gray-700 leading-relaxed">
                          También tramitamos accesos a los puertos y brindamos asesoría logística integral.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex-none w-5/6 sm:w-2/3 pr-4 snap-center">
                    <Card className="h-full">
                      <CardContent className="p-6 h-full">
                        <h3 className="text-xl font-semibold mb-4 text-primary-custom">Simplificación de Procesos</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Simplificamos los trámites de comercio exterior para que puedas enfocarte en hacer crecer tu negocio a nivel internacional.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex-none w-5/6 sm:w-2/3 pr-4 snap-center">
                    <Card className="h-full">
                      <CardContent className="p-6 h-full">
                        <h3 className="text-xl font-semibold mb-4 text-primary-custom">Red de Contactos Confiables</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Accede a nuestra red de agentes de aduana, transportistas y proveedores verificados para garantizar el éxito de tus operaciones.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Desktop grid */}
              <div className="hidden md:grid grid-cols-2 gap-8">
                <Card className="hover-scale card-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary-custom">Guía en Importaciones y Exportaciones</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Te guiamos en cada paso de tus importaciones y exportaciones. Te conectamos con nuestra red de contactos confiables, como agentes de aduana y transportistas.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale card-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary-custom">Accesos y Asesoría Logística</h3>
                    <p className="text-gray-700 leading-relaxed">
                      También tramitamos accesos a los puertos y brindamos asesoría logística integral.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale card-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary-custom">Simplificación de Procesos</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Simplificamos los trámites de comercio exterior para que puedas enfocarte en hacer crecer tu negocio a nivel internacional.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-scale card-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary-custom">Red de Contactos Confiables</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Accede a nuestra red de agentes de aduana, transportistas y proveedores verificados para garantizar el éxito de tus operaciones.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios incluidos */}
      <section className="py-20 bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(/comercio-exterior/parralax.jpg)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 bg-black text-white p-6 rounded-lg">
            <h2 className="text-4xl font-bold mb-6">Servicios incluidos</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Cobertura completa para todas tus necesidades de comercio exterior
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
      <ParallaxSection backgroundImage="/comercio-exterior/parralax.jpg">
        <div className="text-center mb-16 bg-black text-white p-6 rounded-lg">
          <h2 className="text-4xl font-bold mb-6">Beneficios de nuestro servicio</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Más que gestionar trámites, te conectamos con una red de confianza
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
      </ParallaxSection>

      {/* Red de contactos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Nuestra red de contactos</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Años de experiencia nos han permitido construir una sólida red de profesionales confiables
            </p>
          </div>

          <div className="relative">
            {/* Mobile slider container */}
            <div className="md:hidden overflow-hidden w-full">
              <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
                <div className="flex-none w-5/6 sm:w-2/3 pr-4 snap-center">
                  <Card className="h-full">
                    <CardContent className="p-6 h-full">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Agentes de Aduana</h3>
                      <p className="text-gray-600 text-sm">Certificados y con amplia experiencia en trámites aduaneros</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-none w-5/6 sm:w-2/3 pr-4 snap-center">
                  <Card className="h-full">
                    <CardContent className="p-6 h-full">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Truck className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Transportistas</h3>
                      <p className="text-gray-600 text-sm">Empresas de logística confiables para el transporte de mercancías</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-none w-5/6 sm:w-2/3 pr-4 snap-center">
                  <Card className="h-full">
                    <CardContent className="p-6 h-full">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Operadores Logísticos</h3>
                      <p className="text-gray-600 text-sm">Especialistas en cadena de suministro internacional</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-none w-5/6 sm:w-2/3 pr-4 snap-center">
                  <Card className="h-full">
                    <CardContent className="p-6 h-full">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Consultores</h3>
                      <p className="text-gray-600 text-sm">Expertos en regulaciones y normativas internacionales</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover-scale card-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Agentes de Aduana</h3>
                  <p className="text-gray-600 text-sm">Certificados y con amplia experiencia en trámites aduaneros</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale card-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Transportistas</h3>
                  <p className="text-gray-600 text-sm">Empresas de logística confiables para el transporte de mercancías</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale card-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Operadores Logísticos</h3>
                  <p className="text-gray-600 text-sm">Especialistas en cadena de suministro internacional</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale card-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Consultores</h3>
                  <p className="text-gray-600 text-sm">Expertos en regulaciones y normativas internacionales</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Nuestro proceso de trabajo</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Un enfoque sistemático para garantizar el éxito de tus operaciones de comercio exterior
            </p>
          </div>

          <div className="relative">
            {/* Mobile slider container */}
            <div className="md:hidden overflow-hidden w-full">
              <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
                <div className="flex-none w-5/6 sm:w-2/3 pr-4 snap-center">
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Evaluación inicial</h3>
                    <p className="text-gray-600">Analizamos tus necesidades específicas de comercio exterior</p>
                  </div>
                </div>

                <div className="flex-none w-5/6 sm:w-2/3 pr-4 snap-center">
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Conexión con expertos</h3>
                    <p className="text-gray-600">Te conectamos con los mejores profesionales para tu caso</p>
                  </div>
                </div>

                <div className="flex-none w-5/6 sm:w-2/3 pr-4 snap-center">
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Gestión integral</h3>
                    <p className="text-gray-600">Coordinamos todos los aspectos de tu operación comercial</p>
                  </div>
                </div>

                <div className="flex-none w-5/6 sm:w-2/3 pr-4 snap-center">
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">4</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Seguimiento continuo</h3>
                    <p className="text-gray-600">Monitoreamos el progreso y te mantenemos informado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Evaluación inicial</h3>
                <p className="text-gray-600">Analizamos tus necesidades específicas de comercio exterior</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Conexión con expertos</h3>
                <p className="text-gray-600">Te conectamos con los mejores profesionales para tu caso</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Gestión integral</h3>
                <p className="text-gray-600">Coordinamos todos los aspectos de tu operación comercial</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Seguimiento continuo</h3>
                <p className="text-gray-600">Monitoreamos el progreso y te mantenemos informado</p>
              </div>
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
          '/comercio-exterior/Testimonio-1.jpg',
          '/comercio-exterior/Testimonio-2.jpg',
          '/comercio-exterior/Testimonio-3.jpg'
        ]}
      />
    </div>
  );
};

export default ForeignTrade;

