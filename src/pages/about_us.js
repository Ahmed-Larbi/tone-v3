import React from 'react';
import { LightbulbIcon, BrainIcon, StarIcon, Search } from 'lucide-react';
import groupImage from './images/Group2008.png'
import BookConsultationButton from './button';
import TeamMember from './images/man-picture.png'
import Header from '../common/header';
import Footer from '../common/footer';
import Whyus1 from './images/whyus1.png'
import Whyus2 from './images/whyus2.png'
import Whyus3 from './images/whyus3.png'

const AboutUs = () => {

  const steps = [
    {
      header: 'Personalized Designs',
      description: 'Our personalized approach ensures that every project is tailored to your specific needs and desires.',
      icon: Whyus1 ,
    }, 
    {
      header: 'Innovative Solution',
      description: 'We are committed to using sustainable materials and practices, creating spaces that are both beautiful and environmentally responsible.',
      icon:Whyus2 ,
    },
    {
      header: 'Expertise & Experience',
      description: 'Our attention to detail and high-quality craftsmanship guarantee exceptional results.',
      icon: Whyus3,
    }
  ]
  return (
    <div className="bg-tone text-white">
       <Header/>
      <main className="p-4 md:p-8">
        <section className="mb-12">
          
          <div className="flex flex-row max-sm:flex-col gap-24 items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-8">About Us</h1>
              <p className="mb-8 p-4">Tone Design is a renowned interior design firm in the UAE, dedicated to crafting exceptional spaces that empower our clients' lives. With a passion for innovation and a commitment to sustainability, we deliver transformative designs that exceed expectations. Our approach combines creativity and functionality to ensure each project not only looks stunning but also enhances the way you live and work.
Our team of talented designers brings together diverse perspectives and expertise, allowing us to cater to a wide range of client preferences and styles. We believe that design should be a reflection of your personality and lifestyle, creating spaces that inspire and rejuvenate. From modern minimalism to classic elegance, we tailor every detail to align with your vision while ensuring comfort and practicality. At Tone Design, we turn your dreams into reality, one thoughtfully designed space at a time.</p>
            </div>
            <div>
              <img src={groupImage} alt="Interior Design" className="w-full h-auto rounded" />
            </div>
          </div>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-8">
          <div className="bg-light-gray-opacity p-6 rounded">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p>We envision a future where interior design transcends mere decoration. We forge timeless sanctuaries, infused
with cutting-edge technology and sustainable soul, that inspire and rejuvenate. Our artistry transforms spaces into expressions of everevolving lives, seamlessly adapting to function and elevate the human experience.</p>
          </div>
          <div className="bg-light-gray-opacity p-6 rounded">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>We ignite creativity to craft exceptional spaces that empower our clients' personalities. Fueled by innovation and sustainability, we exceed expectations by delivering transformative designs that elevate lives and leave a lasting positive footprint on the world. Our unwavering commitment fosters enduring partnerships, making us the trusted confidant for all your design aspirations.</p>
          </div>
        </section>

        <section className="mb-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <img src={TeamMember} alt="Team Member" className="w-full h-auto rounded" />
          </div>
          <div className="md:w-2/3">
            <p className="mb-4">At Tone Design, we believe that design is more than just aesthetics. It's about creating spaces that enhance your well-being and elevate your quality of life. Our goal is to build lasting relationships with our clients by delivering exceptional service and exceeding their expectations. We focus on thoughtful design solutions that balance functionality and beauty, ensuring each space feels uniquely personal. With a keen eye for detail and a commitment to quality, we transform your vision into a space that truly feels like home.</p>
            <p className='self-start'> Mohammed Yasin Larbi </p>
            <p className='self-start'>  CO-Founder of Tone Design</p>
          </div>

          <div className="md:w-1/3">
            <img src={TeamMember} alt="Team Member" className="w-full h-auto rounded" />
          </div>
          <div className="md:w-2/3">
            <p className="mb-4">At Tone Design, we believe that design is more than just aesthetics. It's about creating spaces that enhance your well-being and elevate your quality of life. Our goal is to build lasting relationships with our clients by delivering exceptional service and exceeding their expectations. We focus on thoughtful design solutions that balance functionality and beauty, ensuring each space feels uniquely personal. With a keen eye for detail and a commitment to quality, we transform your vision into a space that truly feels like home.</p>
            <p className='self-start'> Jasoor Ibrahim </p>
            <p className='self-start'> CO-Founder of Tone Design</p>
          </div>
        </section>
        

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Why Us</h2>
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

        <section>
          <h2 className="text-3xl font-bold mb-8">Tone Design in Numbers</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: '+200', description: 'Satisfied Projects Completed' },
              { number: '+100', description: 'Custom Design Solutions' },
              { number: '15', description: 'Awards for Design Excellence' },
            ].map((item, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-yellow-500 mb-2">{item.number}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default AboutUs;