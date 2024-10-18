import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Share, Link, Facebook, Instagram, Twitter, Calendar } from 'lucide-react';
import projectsData from '../data/projects';
import Header from '../common/header';
import Footer from '../common/footer';
import "react-multi-carousel/lib/styles.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectShowcase = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);

  // Find the project with the matching id
  const projectData = projectsData.find((project) => project.id === projectId);

  if (!projectData) {
    return <div className="text-white">Project not found</div>;
  }

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % projectData.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + projectData.images.length) % projectData.images.length);

  const CarouselSlider = () => {
    const settings = {
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 2.3,
      infinite: true,
      focusOnSelect: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <Slider {...settings}>
        {projectData.images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    );
  };


  return (
    <div className="bg-tone text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb path={projectData.breadcrumb} />

        {/* Project Title and Details */}
        <div className="mb-8">
          <h2 className="text-3xl text-left font-bold mb-4">{projectData.title}</h2>
          <div className="flex space-x-8 text-gray-400 mb-4">
            {projectData.details.map((detail, index) => (
              <div key={index} className="flex items-center">
                <img src={detail.icon} className='h-6 mr-4'/>
                <span>{detail.label}: {detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative mb-8">
        <CarouselSlider/>
        </div>
        

        {/* Project Content */}
        <div className="mb-8">
          {projectData.content.map((paragraph, index) => (
            <p key={index} className="text-gray-400 mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Buttons */}
        <div className="flex items-center space-x-4 mb-12">
          <span className="text-gray-400">Share This Page</span>
          <button className="p-2 rounded-full hover:bg-gray-700"><Share className="w-5 h-5" /></button>
          <button className="p-2 rounded-full hover:bg-gray-700"><Link className="w-5 h-5" /></button>
          <button className="p-2 rounded-full hover:bg-gray-700"><Facebook className="w-5 h-5" /></button>
          <button className="p-2 rounded-full hover:bg-gray-700"><Instagram className="w-5 h-5" /></button>
          <button className="p-2 rounded-full hover:bg-gray-700"><Twitter className="w-5 h-5" /></button>
        </div>

        {/* Recent Projects */}
        <RecentProjects projects={projectData.recentProjects} />
      </main>

      <Footer/>
    </div>
  );
};

// Breadcrumb Component
const Breadcrumb = ({ path }) => (
  <div className="py-4 text-left">
    <nav>
      {path.map((item, index) => (

        <span key={index} className="text-gray-400">
          {item} {index < path.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  </div>
);

// Recent Projects Component
const RecentProjects = ({ projects }) => (
  <div>
    <h3 className="text-2xl font-bold mb-6">Recent Projects</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {projects.map((project, index) => (
        <div key={index} className="relative group">
          <img src={project.image} alt={project.title} className="w-full h-100 object-cover rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h4 className="text-lg font-semibold">{project.title}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectShowcase;
