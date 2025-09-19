import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Star, Handshake, Shield } from 'lucide-react';
import TestimonialSection from '@/components/TestimonialSection';

const About = () => {
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
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/Nosotros/Hero.jpg')` }}>
        <div className="absolute inset-0 overlay-dark"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nuestra Historia</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Conoce la trayectoria de la Ing. Mayra Castillo y su compromiso con el éxito de tu negocio
          </p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Nuestra Historia</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Descubre los hitos que han marcado nuestra trayectoria y cómo hemos llegado hasta aquí.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-scale card-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary-custom">Fundación</h3>
                <p className="text-gray-700 leading-relaxed">
                  En abril de 2021, la Ing. Castillo decidió emprender su propio despacho contable, ofreciendo un servicio personalizado y estratégico.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary-custom">Metodología Única</h3>
                <p className="text-gray-700 leading-relaxed">
                  Desarrollo de una metodología que combina conocimiento técnico con un enfoque humano y comprensivo.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale card-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary-custom">Reconocimiento</h3>
                <p className="text-gray-700 leading-relaxed">
                  Construcción de una sólida reputación basada en la confianza, responsabilidad y compromiso con el éxito de los clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Misión y Visión Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Nuestra Misión y Visión</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Misión */}
            <Card className="hover-scale card-shadow">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary-custom rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary-custom">Nuestra Misión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Resolver los problemas contables y tributarios de personas y empresas que, sin saberlo, 
                  enfrentan dificultades en el cumplimiento de sus obligaciones. Nos especializamos en 
                  identificar y solucionar estos "dolores de cabeza contables" de manera integral, 
                  permitiendo que nuestros clientes se enfoquen en lo que realmente importa: hacer crecer su negocio.
                </p>
              </CardContent>
            </Card>

            {/* Visión */}
            <Card className="hover-scale card-shadow">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-accent-custom rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent-custom">Nuestra Visión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser reconocidos como el aliado estratégico preferido por negocios en crecimiento que buscan 
                  formalización y cumplimiento tributario responsable. Aspiramos a ser la referencia en asesoría 
                  contable integral, caracterizándonos por nuestra responsabilidad, transparencia y compromiso 
                  con el éxito a largo plazo de nuestros clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary-custom">Nuestros Valores</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra relación con cada cliente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-scale card-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Star className="w-12 h-12 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Experiencia</h3>
                <p className="text-gray-600">
                  Años de experiencia resolviendo problemas contables complejos nos han dado el conocimiento 
                  y la perspectiva necesaria para abordar cualquier situación tributaria con confianza y eficacia.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale card-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Handshake className="w-12 h-12 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Compromiso</h3>
                <p className="text-gray-600">
                  Estamos comprometidos con el éxito y crecimiento de tu negocio. Tu tranquilidad y prosperidad 
                  son nuestros objetivos principales, y trabajamos incansablemente para lograrlos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale card-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Shield className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Confianza</h3>
                <p className="text-gray-600">
                  Asumimos la responsabilidad total de nuestros errores y cubrimos las multas correspondientes. 
                  Esta garantía nos ha permitido generar confianza y fidelidad a lo largo del tiempo.
                </p>
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
            images={["/Nosotros/Testimonio-1.jpg", "/Nosotros/Testimonio-2.jpg", "/Nosotros/Testimonio-3.jpg"]} 
          />
        </div>
      </section>
    </div>
  );
};

export default About;

