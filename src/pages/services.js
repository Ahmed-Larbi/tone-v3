import React from 'react';
import ServiceCard from './servicecard';
import Header from '../common/header';
import { Search } from 'lucide-react';
import Service1 from './images/service-1.png';
import Service2 from './images/service-2.png';
import Service3 from './images/service-3.png';
import Service1Image from './images/service1-photo.png';
import Service2Image from './images/service2-photo.png';
import Service3Image from './images/service3-photo.png';
import Footer from '../common/footer';


const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Interior Design',
      description: 'Transform your space with our expert interior design services.',
      image: Service1Image,
      features: ['Space Planning', 'Color Consultation', 'Furniture Selection']
    },
    {
      id: 2,
      title: 'Customized Furniture',
      description: 'Create stunning outdoor spaces that complement your lifestyle.',
      image: Service2Image,
      features: ['Design Consultation', 'Material and Finish Selection', 'Craftsmanship and Installation']
    },
    {
      id: 3,
      title: 'Fitout Installation',
      description: 'From concept to completion, our expert team ensures a seamless fitout process, delivering exceptional results on time and within budget.',
      image: Service3Image,
      features: ['Hardwood', 'Tile', 'Carpet Installation']
    },
  ];

  const testimonials = [
    {
      id: 2,
      content: 'The customized furniture and interior design services from Tone Design were fantastic. They created pieces that perfectly fit our space and style, making our home both stylish and comfortable. Their team was professional and a pleasure to work with.',
      author: 'Omar Khalid',
      position: 'United Arab Emirates'
    },
    {
      id: 1,
      content: "Tone Design transformed our home into a beautiful and functional space that truly reflects our family's style. The attention to detail and commitment to quality exceeded our expectations. We couldn’t be happier with the results!",
      author: "Layla Ahmed",
      position: 'United Arab Emirates'
    },
    {
      id: 3,
      content: "From the initial consultation to the final installation, Tone Design provided exceptional service and craftsmanship. Their ability to understand our vision and bring it to life was impressive. We highly recommend them for any interior design project.",
      author: 'Nadeen Ali ',
      position: 'United Arab Emirates'
    },

    
  ];

  const steps = [
    {
      header: 'Client Design Consultation',
      description: 'We start with an in-depth consultation to understand your vision, lifestyle, and preferences, ensuring our designs align perfectly with your needs.',
      icon: Service1 ,
    }, 
    {
      header: 'Prototyping Home Design',
      description: 'We create detailed prototypes and 3D models to visualize the design, allowing you to explore various styles and make informed decisions.',
      icon:Service2 ,
    },
    {
      header: 'Processing to Home Design',
      description: 'Once the design is finalized, we manage all aspects of the project, from sourcing materials to overseeing construction, ensuring a seamless execution.',
      icon: Service3,
    }
  ]

  return (
    <div className="bg-tone text-white">
        <Header/>

      <main className="container mx-auto py-8 px-4">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400 mb-12">We offer a wide range of design and installation services to meet all your needs. Our expert team ensures quality and satisfaction in every project.</p>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 self-start">How We Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {steps.map((step) => (
              <div key={step} className="bg-neutral-800 p-20 rounded-lg">
                <img src={step.icon} className='mb-8 mx-auto' />
                <h4 className="text-xl font-semibold mb-4">{step.header}</h4>
                <p className="text-gray-400">{step.description}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-neutral-800 p-6 rounded-lg">
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

     <Footer/>
    </div>
  );
};

export default ServicesPage;