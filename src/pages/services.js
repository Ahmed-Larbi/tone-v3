import React from 'react';
import ServiceCard from './servicecard';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Interior Design',
      description: 'Transform your space with our expert interior design services.',
      image: '/api/placeholder/400/300',
      features: ['Space Planning', 'Color Consultation', 'Furniture Selection']
    },
    {
      id: 2,
      title: 'Landscape Design',
      description: 'Create stunning outdoor spaces that complement your lifestyle.',
      image: '/api/placeholder/400/300',
      features: ['Garden Planning', 'Hardscape Design', 'Plant Selection']
    },
    {
      id: 3,
      title: 'Floor Installation',
      description: 'Expert installation of various flooring types to suit your needs.',
      image: '/api/placeholder/400/300',
      features: ['Hardwood', 'Tile', 'Carpet Installation']
    },
    {
      id: 4,
      title: 'HVAC Installation',
      description: 'Professional installation and maintenance of heating and cooling systems.',
      image: '/api/placeholder/400/300',
      features: ['System Design', 'Installation', 'Maintenance']
    },
  ];

  const testimonials = [
    {
      id: 1,
      content: 'Tone Design transformed our home into a stunning space that perfectly reflects our style. Their attention to detail and creativity exceeded our expectations.',
      author: 'John Doe',
      position: 'Homeowner'
    },
    {
      id: 2,
      content: 'We were impressed by the professionalism and expertise of the Tone Design team. They made the entire process smooth and enjoyable.',
      author: 'Jane Smith',
      position: 'Business Owner'
    }
  ];

  return (
    <div className="bg-tone text-white min-h-screen">
      <header className="container mx-auto py-6 px-4">
        {/* Header content (same as before) */}
      </header>

      <main className="container mx-auto py-8 px-4">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400 mb-12">We offer a wide range of design and installation services to meet all your needs. Our expert team ensures quality and satisfaction in every project.</p>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">How We Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((step) => (
              <div key={step} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full mb-4">
                  <span className="text-black font-bold">{step}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Step {step}</h4>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-16">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-semibold mb-8">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-800 p-6 rounded-lg">
                <svg className="w-8 h-8 text-yellow-500 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-400 mb-4">{testimonial.content}</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6 mt-12">
        {/* Footer content (same as before) */}
      </footer>
    </div>
  );
};

export default ServicesPage;