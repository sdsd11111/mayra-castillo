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

const NewDigitalServices = () => {
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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/tramites-digitales/hero.jpg')` }}>
        <div className="absolute inset-0 overlay-dark"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Firma Electrónica y Trámites Digitales
          </h1>
          <Button className="bg-[#3b7dbe] hover:bg-[#3b7dbe] text-white text-lg px-8 py-4 rounded-full">
            <MessageCircle className="mr-2" />
            Contáctanos
          </Button>
        </div>
      </section>

      {/* Descripción detallada */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary-custom">
              Tu puerta de entrada al mundo digital
            </h2>
          </div>

          <div className="relative">
            {/* Mobile slider container */}
            <div className="md:hidden w-full overflow-hidden px-4">
              <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 -ml-4">
                <div className="flex-none w-5/6 sm:w-2/3 pl-4 snap-center">
                  <Card className="h-full">
                    <CardContent className="p-6 h-full">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        En un mundo cada vez más digital, te ayudamos a gestionar tu firma electrónica y a configurar 
                        todos los accesos para tus trámites en línea.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-none w-5/6 sm:w-2/3 pl-4 snap-center">
                  <Card className="h-full">
                    <CardContent className="p-6 h-full">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Facilitamos el proceso para que puedas hacer tus gestiones desde donde estés, de forma segura y eficiente.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-none w-5/6 sm:w-2/3 pl-4 snap-center">
                  <Card className="h-full">
                    <CardContent className="p-6 h-full">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        La transformación digital no es solo una tendencia, es una necesidad.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-none w-5/6 sm:w-2/3 pl-4 snap-center">
                  <Card className="h-full">
                    <CardContent className="p-6 h-full">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Te acompañamos en este proceso para que aproveches todas las ventajas de la tecnología sin complicaciones.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="hover-scale card-shadow">
                <CardContent className="p-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    En un mundo cada vez más digital, te ayudamos a gestionar tu firma electrónica y a configurar 
                    todos los accesos para tus trámites en línea.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale card-shadow">
                <CardContent className="p-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Facilitamos el proceso para que puedas hacer tus gestiones desde donde estés, de forma segura y eficiente.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale card-shadow">
                <CardContent className="p-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    La transformación digital no es solo una tendencia, es una necesidad.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale card-shadow">
                <CardContent className="p-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Te acompañamos en este proceso para que aproveches todas las ventajas de la tecnología sin complicaciones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url('/tramites-digitales/parralax.jpg')`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 bg-black text-white p-6 rounded-lg">
            <h2 className="text-4xl font-bold mb-6">Beneficios</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Descubre cómo nuestros servicios digitales pueden transformar la manera en que gestionas tus trámites
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

      {/* Descripción adicional */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-scale card-shadow">
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  En un mundo cada vez más digital, te ayudamos a gestionar tu firma electrónica y a configurar 
                  todos los accesos para tus trámites en línea.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Facilitamos el proceso para que puedas hacer tus gestiones desde donde estés, de forma segura y eficiente.
                </p>
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
            <p className="text-lg text-gray-700">
              Nuestra experiencia se mide en la tranquilidad y el éxito de nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <img src="/tramites-digitales/Testimonio-1.jpg" alt="Testimonio 1" className="rounded-lg shadow-lg mb-4" />
                <p className="text-gray-700 mb-6 italic">"Gracias a los trámites digitales, ahora puedo gestionar todo desde mi oficina sin necesidad de trasladarme."</p>
                <p className="font-semibold text-primary-custom">Empresario</p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <img src="/tramites-digitales/Testimonio-2.jpg" alt="Testimonio 2" className="rounded-lg shadow-lg mb-4" />
                <p className="text-gray-700 mb-6 italic">"La firma electrónica me ha permitido ahorrar tiempo y realizar mis trámites de manera eficiente."</p>
                <p className="font-semibold text-primary-custom">Cliente Satisfecho</p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-8">
                <img src="/tramites-digitales/Testimonio-3.jpg" alt="Testimonio 3" className="rounded-lg shadow-lg mb-4" />
                <p className="text-gray-700 mb-6 italic">"Con los servicios digitales, todo es más rápido y seguro. ¡Altamente recomendado!"</p>
                <p className="font-semibold text-primary-custom">Usuario Digital</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewDigitalServices;