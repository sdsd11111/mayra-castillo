import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  Star, 
  MessageCircle,
  Smartphone,
  Clock,
  Shield,
  Zap,
  FileCheck,
  Globe,
  Lock,
  Wifi
} from 'lucide-react';

const DigitalServices = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Agiliza tus trámites y procesos",
      description: "Realiza gestiones que antes tomaban días en cuestión de minutos desde cualquier lugar."
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: "Seguridad y validez legal en tus documentos",
      description: "La firma electrónica tiene la misma validez legal que la firma manuscrita tradicional."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "Acceso a trámites en cualquier momento",
      description: "Disponibilidad 24/7 para realizar tus gestiones sin restricciones de horario."
    }
  ];

  const services = [
    "Gestión de Firma Electrónica",
    "Configuración de accesos digitales",
    "Trámites en línea con el SRI",
    "Gestiones digitales con el IESS",
    "Trámites municipales en línea",
    "Configuración de clave fiscal",
    "Acceso a servicios gubernamentales digitales",
    "Capacitación en uso de plataformas digitales"
  ];

  const digitalPlatforms = [
    {
      name: "SRI en línea",
      description: "Declaraciones, consultas y gestiones tributarias",
      icon: <FileCheck className="w-8 h-8 text-blue-600" />
    },
    {
      name: "IESS Digital",
      description: "Afiliaciones, planillas y consultas laborales",
      icon: <Users className="w-8 h-8 text-green-600" />
    },
    {
      name: "Gobierno Digital",
      description: "Trámites ciudadanos y empresariales",
      icon: <Globe className="w-8 h-8 text-purple-600" />
    },
    {
      name: "Municipios",
      description: "Permisos, patentes y servicios municipales",
      icon: <Building className="w-8 h-8 text-orange-600" />
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
      <section className="relative min-h-screen flex items-center justify-center bg-blue-500">
        <div className="absolute inset-0 overlay-dark"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Firma Electrónica y Trámites Digitales
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            En un mundo cada vez más digital, te ayudamos a gestionar tu firma electrónica y a configurar todos los accesos para tus trámites en línea. Facilitamos el proceso para que puedas hacer tus gestiones desde donde estés, de forma segura y eficiente.
          </p>
          <Button className="bg-[#3b7dbe] hover:bg-[#3b7dbe] text-white text-lg px-8 py-4 rounded-full">
            <MessageCircle className="mr-2" />
            Contáctanos
          </Button>
        </div>
      </section>

      {/* Descripción detallada */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary-custom">
              Tu puerta de entrada al mundo digital
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              En un mundo cada vez más digital, te ayudamos a gestionar tu firma electrónica y a configurar 
              todos los accesos para tus trámites en línea. Facilitamos el proceso para que puedas hacer tus 
              gestiones desde donde estés, de forma segura y eficiente.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              La transformación digital no es solo una tendencia, es una necesidad. Te acompañamos en este 
              proceso para que aproveches todas las ventajas de la tecnología sin complicaciones, ahorrando 
              tiempo y recursos mientras mantienes la seguridad y validez legal de todos tus documentos.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios incluidos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Servicios incluidos</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Todo lo que necesitas para digitalizar tus procesos empresariales
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Beneficios de la digitalización</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Más que tecnología, es una nueva forma de hacer negocios más eficiente
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

      {/* Plataformas digitales */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Plataformas que manejamos</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Te ayudamos a navegar y utilizar las principales plataformas digitales gubernamentales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitalPlatforms.map((platform, index) => (
              <Card key={index} className="text-center hover-scale card-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {platform.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                  <p className="text-gray-600 text-sm">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de configuración */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Proceso de configuración</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Un proceso simple para que tengas acceso completo a todos los servicios digitales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Evaluación de necesidades</h3>
              <p className="text-gray-600">Identificamos qué servicios digitales necesitas para tu negocio</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Obtención de firma electrónica</h3>
              <p className="text-gray-600">Gestionamos tu firma electrónica con las entidades certificadoras</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Configuración de accesos</h3>
              <p className="text-gray-600">Configuramos todos tus accesos a las plataformas necesarias</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Capacitación y soporte</h3>
              <p className="text-gray-600">Te enseñamos a usar las plataformas y te damos soporte continuo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas competitivas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">¿Por qué digitalizar tus procesos?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              La digitalización no es solo una tendencia, es una ventaja competitiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Ahorro de tiempo</h3>
                </div>
                <p className="text-gray-600">Reduce significativamente el tiempo invertido en trámites burocráticos</p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Mayor seguridad</h3>
                </div>
                <p className="text-gray-600">Los documentos digitales son más seguros y difíciles de falsificar</p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Acceso remoto</h3>
                </div>
                <p className="text-gray-600">Realiza gestiones desde cualquier lugar con conexión a internet</p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Trazabilidad</h3>
                </div>
                <p className="text-gray-600">Historial completo de todas las gestiones realizadas</p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Respuesta inmediata</h3>
                </div>
                <p className="text-gray-600">Obtén respuestas y confirmaciones en tiempo real</p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Disponibilidad 24/7</h3>
                </div>
                <p className="text-gray-600">Sin restricciones de horario para realizar tus gestiones</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-custom">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para digitalizar tu negocio?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            No te quedes atrás en la era digital. Te ayudamos a aprovechar todas las ventajas 
            de la tecnología para hacer tu negocio más eficiente y competitivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/593960184087" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-accent-custom hover:bg-orange-600 text-white text-lg px-8 py-4">
                <MessageCircle className="mr-2" />
                Contáctanos por WhatsApp
              </Button>
            </a>
            <Link to="/contacto">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary-custom text-lg px-8 py-4">
                Más información
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Lo que nuestros clientes dicen</h2>
            <p className="text-lg text-gray-700">
              Nuestra experiencia se mide en la tranquilidad y el éxito de nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-scale card-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                    <p className="font-semibold text-primary-custom">{testimonial.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalServices;

