import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialSection = ({ testimonials, images }) => {
  return (
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
                <img src={images[index]} alt={`Testimonio ${index + 1}`} className="rounded-lg shadow-lg mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-primary-custom">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;