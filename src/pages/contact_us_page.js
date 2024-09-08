import React, { useState } from 'react';
import { MapPin, Clock, Phone, ChevronRight, Menu, X } from 'lucide-react';
import MyComponent from '../screens/hero';

const ContactPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-tone text-white min-h-screen">
    

    

<main className="p-4 md:p-8">
  <div className="text-sm mb-4 text-left">
    <span>Home</span> &gt; <span>Contact Us</span>
  </div>

  <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-left">Contact Us</h1>

        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <form>
              <div className="mb-4">
                <label htmlFor="fullName" className="block mb-2">Full Name</label>
                <input type="text" id="fullName" className="w-full p-2 bg-white bg-opacity-10 rounded" placeholder="Enter your full name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 bg-white bg-opacity-10 rounded" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" className="w-full p-2 bg-white bg-opacity-10 rounded h-32" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="bg-yellow-500 text-black px-4 py-2 rounded">Submit</button>
            </form>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="bg-white bg-opacity-10 p-4 rounded mb-4">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Office@tonedesign.org</span>
              </div>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+971 50 123 4542</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>@tonedesignstudio</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 bg-white bg-opacity-10 p-4 rounded mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Location</h2>
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 text-yellow-500" />
              <span>Address: Abu Dhabi, UAE</span>
            </div>
            <div className="flex items-center mb-2">
              <Clock className="mr-2 text-yellow-500" />
              <span>Working Hours: 9:00 AM to 5:00 PM</span>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="mr-2 text-yellow-500" />
              <span>Contact Number: +971 50 123 4542</span>
            </div>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded flex items-center">
              Get directions
              <ChevronRight className="ml-2" />
            </button>
          </div>
          <div className="w-full md:w-2/3 md:pl-8 mt-4 md:mt-0">
            {/* Placeholder for the map */}
            <div className="bg-white bg-opacity-10 h-64 rounded">
              {/* Map component would go here */}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white bg-opacity-10 p-4 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="mb-4 md:mb-0">© 2024 Tone Design Studio. All rights reserved.</span>
          <div className="flex space-x-4">
            <a href="#" className="text-white">Facebook</a>
            <a href="#" className="text-white">Instagram</a>
            <a href="#" className="text-white">Twitter</a>
            <a href="#" className="text-white">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;