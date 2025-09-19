import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  Star, 
  MessageCircle,
  Building,
  Clock,
  Shield,
  TrendingUp,
  FileCheck,
  Award,
  Users
} from 'lucide-react';
import ParallaxSection from '@/components/ui/ParallaxSection';

const heroImagePath = '/formalizacion/Hero.jpg';

const BusinessFormalization = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Ahorra tiempo y evita trámites complejos",
      description: "Nos encargamos de todos los procedimientos burocráticos para que tú te enfoques en tu negocio."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Asegura la legalidad de tu negocio",
      description: "Garantizamos que tu empresa cumpla con todos los requisitos legales desde el primer día."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Accede a beneficios fiscales como microempresario",
      description: "Te ayudamos a aprovechar todas las ventajas tributarias disponibles para tu tipo de negocio."
    }
  ];

  const services = [
    "Obtención del RUC",
    "Registro en ARSA",
    "Certificado de Microempresario",
    "Notificación Sanitaria",
    "Permisos municipales",
    "Registro de marca",
    "Constitución de compañías",
    "Asesoría en tipo de empresa"
  ];

  const process = [
    {
      step: "1",
      title: "Consulta inicial",
      description: "Evaluamos tu tipo de negocio y determinamos los requisitos específicos"
    },
    {
      step: "2", 
      title: "Documentación",
      description: "Te ayudamos a reunir y preparar toda la documentación necesaria"
    },
    {
      step: "3",
      title: "Gestión de trámites",
      description: "Realizamos todos los trámites ante las entidades correspondientes"
    },
    {
      step: "4",
      title: "Entrega y seguimiento",
      description: "Te entregamos todos los documentos y te asesoramos sobre los siguientes pasos"
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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 overlay-dark"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/formalizacion/hero.jpg')` }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Formalización de Emprendedores
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Acompañamos a emprendedores que buscan formalizarse de manera segura y eficiente
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

      {/* Descripción detallada */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold mb-8 text-primary-custom">
              Tu camino hacia la formalización empresarial
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-scale card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-custom">Obtención del RUC</h3>
                <p className="text-gray-600">
                  Te ayudamos a obtener tu Registro Único de Contribuyentes de manera rápida y eficiente.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-custom">Registro en ARSA</h3>
                <p className="text-gray-600">
                  Gestionamos tu registro en la Agencia Nacional de Regulación, Control y Vigilancia Sanitaria.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-custom">Certificado de Microempresario</h3>
                <p className="text-gray-600">
                  Obtén tu certificado que te permite acceder a beneficios fiscales como microempresario.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-custom">Notificación Sanitaria</h3>
                <p className="text-gray-600">
                  Te ayudamos a cumplir con los requisitos sanitarios para operar tu negocio.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-custom">Permisos Municipales</h3>
                <p className="text-gray-600">
                  Gestionamos los permisos necesarios para que tu negocio cumpla con las normativas locales.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-custom">Registro de Marca</h3>
                <p className="text-gray-600">
                  Protege tu identidad empresarial registrando tu marca de manera oficial.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios incluidos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Servicios incluidos</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Todo lo que necesitas para formalizar tu emprendimiento en un solo lugar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale card-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url('/formalizacion/Parralax.jpg')`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <ParallaxSection backgroundImage="/formalizacion/Parralax.jpg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 bg-black text-white p-6 rounded-lg">
              <h2 className="text-4xl font-bold mb-6">Beneficios de formalizar tu negocio</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Más que cumplir con la ley, la formalización abre puertas a nuevas oportunidades
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover-scale card-shadow bg-black text-white">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* Ventajas adicionales */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Ventajas de estar formalizado</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              La formalización no es solo un requisito legal, es una inversión en el futuro de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-scale card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Credibilidad</h3>
                <p className="text-gray-600 text-sm">Genera confianza en clientes y proveedores</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Beneficios fiscales</h3>
                <p className="text-gray-600 text-sm">Acceso a regímenes tributarios preferenciales</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Acceso a financiamiento</h3>
                <p className="text-gray-600 text-sm">Posibilidad de obtener créditos empresariales</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale card-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Crecimiento</h3>
                <p className="text-gray-600 text-sm">Base sólida para expandir tu negocio</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Nuestro proceso de formalización</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Un proceso simple y eficiente que te lleva de la idea al negocio formal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de empresa */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">¿Qué tipo de empresa te conviene?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Te asesoramos para elegir la estructura empresarial que mejor se adapte a tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary-custom">Persona Natural</h3>
                <p className="text-gray-600 mb-4">Ideal para emprendedores individuales con operaciones simples.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Proceso rápido y económico</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Menos requisitos documentales</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Control total del negocio</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary-custom">Microempresa</h3>
                <p className="text-gray-600 mb-4">Para negocios pequeños con beneficios tributarios especiales.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Beneficios fiscales</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Régimen simplificado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Acceso a programas gubernamentales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary-custom">Compañía</h3>
                <p className="text-gray-600 mb-4">Para negocios con socios o proyección de crecimiento.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Responsabilidad limitada</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Mayor credibilidad</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Facilita inversión externa</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Lo que nuestros clientes dicen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <img src="/formalizacion/Testimonio-1.jpg" alt="Testimonio 1" className="rounded-lg shadow-lg mb-4" />
                <p className="text-gray-700 mb-6 italic">"Gracias a la formalización, ahora mi negocio tiene acceso a beneficios fiscales y mayor credibilidad."</p>
                <p className="font-semibold text-primary-custom">Empresario</p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <img src="/formalizacion/Testimonio-2.jpg" alt="Testimonio 2" className="rounded-lg shadow-lg mb-4" />
                <p className="text-gray-700 mb-6 italic">"La Ingeniera Mayra me ayudó a formalizar mi negocio en tiempo récord. ¡Altamente recomendada!"</p>
                <p className="font-semibold text-primary-custom">Cliente Satisfecho</p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <img src="/formalizacion/Testimonio-3.jpg" alt="Testimonio 3" className="rounded-lg shadow-lg mb-4" />
                <p className="text-gray-700 mb-6 italic">"Formalizar mi negocio fue la mejor decisión. Ahora tengo acceso a financiamiento y programas gubernamentales."</p>
                <p className="font-semibold text-primary-custom">Usuario Formalizado</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessFormalization;

