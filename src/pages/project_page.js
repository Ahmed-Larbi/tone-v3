import React from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const ProjectCard = ({ image, category, title }) => (
  <div className="relative rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
      <span className="text-yellow-500 text-sm">{category}</span>
      <h3 className="text-white font-bold">{title}</h3>
    </div>
  </div>
);

const ProjectsPage = () => {
  const projects = [
    { image: '/api/placeholder/400/300', category: 'Category A', title: 'Project Title' },
    { image: '/api/placeholder/400/300', category: 'Category A', title: 'Project Title' },
    { image: '/api/placeholder/400/300', category: 'Category A', title: 'Project Title' },
    { image: '/api/placeholder/400/300', category: 'Category A', title: 'Project Title' },
    { image: '/api/placeholder/400/300', category: 'Category A', title: 'Project Title' },
    { image: '/api/placeholder/400/300', category: 'Category A', title: 'Project Title' },
    { image: '/api/placeholder/400/300', category: 'Category A', title: 'Project Title' },
    { image: '/api/placeholder/400/300', category: 'Category A', title: 'Project Title' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <span className="font-bold text-xl">TONE DESIGN</span>
          <nav>
            <ul className="flex space-x-4">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Tone AI</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </nav>
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

      <main className="p-8">
        <div className="text-sm mb-4">
          <span>Home</span> &gt; <span className="text-yellow-500">Projects</span>
        </div>

        <h1 className="text-4xl font-bold mb-8">Projects</h1>

        <div className="flex justify-between items-center mb-8">
          <div className="flex-1 mr-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for any projects..."
                className="w-full bg-gray-800 rounded-lg py-2 px-4 pr-10"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="relative">
            <select className="appearance-none bg-gray-800 rounded-lg py-2 px-4 pr-10">
              <option>Select Category</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg ml-4 flex items-center">
            Search
            <Search className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <span className="text-sm text-gray-400">Showing 8 of 16 results</span>
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-gray-800 rounded"><ChevronsLeft className="h-5 w-5" /></button>
            <button className="p-2 bg-gray-800 rounded"><ChevronLeft className="h-5 w-5" /></button>
            <button className="p-2 bg-yellow-500 text-black rounded">1</button>
            <button className="p-2 bg-gray-800 rounded">2</button>
            <button className="p-2 bg-gray-800 rounded">3</button>
            <button className="p-2 bg-gray-800 rounded">4</button>
            <button className="p-2 bg-gray-800 rounded">5</button>
            <span>...</span>
            <button className="p-2 bg-gray-800 rounded">17</button>
            <button className="p-2 bg-gray-800 rounded"><ChevronRight className="h-5 w-5" /></button>
            <button className="p-2 bg-gray-800 rounded"><ChevronsRight className="h-5 w-5" /></button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 p-4 mt-8">
        <div className="flex justify-between items-center">
          <span>© 2024 Tone Design Studio. All rights reserved.</span>
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

export default ProjectsPage;