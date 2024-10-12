import React from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import Header from '../common/header';
import Footer from '../common/footer';

const ProjectCard = ({ image, category, title, id }) => (
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
    <div className="bg-tone text-white min-h-screen">
      <Header/>
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
                className="w-full bg-tone rounded-lg py-2 px-4 pr-10"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="relative">
            <select className="appearance-none bg-tone rounded-lg py-2 px-4 pr-10">
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

      </main>

       <Footer/>
    </div>
  );
};

export default ProjectsPage;