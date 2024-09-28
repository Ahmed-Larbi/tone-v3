import React from 'react';
import { LightbulbIcon, BrainIcon, StarIcon, Search } from 'lucide-react';
import groupImage from './images/Group2008.png'
import BookConsultationButton from './button';
import TeamMember from './images/man-picture.png'

const AboutUs = () => {
  return (
    <div className="bg-tone text-white min-h-screen">
       <header className="p-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <span className="font-bold text-xl">TONE DESIGN</span>
            <div className="flex space-x-4">
              <a>Home</a>
              <a>About</a>
              <a>Services</a>
              <a>Projects</a>
              <a>Tone AI</a>
              <a>Blogs</a>
              <a>Contact Us</a>
            </div>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="h-5 w-5" />
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="p-4 md:p-8">
        <section className="mb-12">
          
          <div className="flex flex-row md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ipsum at augue tempor, eget convallis mauris lacinia. Donec sagittis diam in leo efficitur, sed faucibus massa viverra.</p>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded">Read More</button>
            </div>
            <div className="md:w-1/3">
              <img src={groupImage} alt="Interior Design" className="w-full h-auto rounded" />
            </div>
          </div>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-8">
          <div className="bg-light-gray-opacity p-6 rounded">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-light-gray-opacity p-6 rounded">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </section>

        <section className="mb-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <img src={TeamMember} alt="Team Member" className="w-full h-auto rounded" />
          </div>
          <div className="md:w-2/3">
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ipsum at augue tempor, eget convallis mauris lacinia. Donec sagittis diam in leo efficitur, sed faucibus massa viverra.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Why Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <LightbulbIcon className="w-12 h-12 text-yellow-500" />, title: 'Innovative Solutions', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
              { icon: <BrainIcon className="w-12 h-12 text-yellow-500" />, title: 'Personalized Designs', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
              { icon: <StarIcon className="w-12 h-12 text-yellow-500" />, title: 'Expertise & Experience', description: 'Duis aute irure dolor in reprehenderit in voluptate velit.' },
            ].map((item, index) => (
              <div key={index} className="bg-light-gray-opacity p-6 rounded text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.description}</p>
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

      <footer className="bg-light-gray-opacity p-4 text-center">
        <p>&copy; 2024 Tone Design Studio. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-white hover:text-yellow-500">Facebook</a>
          <a href="#" className="text-white hover:text-yellow-500">Twitter</a>
          <a href="#" className="text-white hover:text-yellow-500">Instagram</a>
          <a href="#" className="text-white hover:text-yellow-500">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;