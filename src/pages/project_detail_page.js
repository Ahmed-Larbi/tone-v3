import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';
const ProjectDetailPage = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);

  // Find the project with the matching id
  const projectData = projectsData.find((project) => project.id === projectId);

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white">
      <Breadcrumb path={projectData.breadcrumb} />
      <ProjectHeader title={projectData.title} details={projectData.details} />
      <ImageCarousel images={projectData.images} />
      <ContentSection content={projectData.content} />
      <ShareButtons />
      <RecentProjects projects={projectData.recentProjects} />
    </div>
  );
};


const Breadcrumb = ({ path }) => (
  <div className="p-4">
    <nav>
      {path.map((item, index) => (
        <span key={index} className="text-gray-400">
          {item} {index < path.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  </div>
);

const ProjectHeader = ({ title, details }) => (
  <div className="p-4">
    <h1 className="text-4xl font-bold">{title}</h1>
    <div className="flex mt-4">
      {details.map((detail, index) => (
        <div key={index} className="mr-4 p-2 border border-blue-500 rounded">
          <p>{detail.label}</p>
          <p className="text-lg">{detail.value}</p>
        </div>
      ))}
    </div>
  </div>
);

import { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  
  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  
  return (
    <div className="relative p-4">
      <img src={images[current]} alt="Project" className="w-full" />
      <button onClick={prevImage} className="absolute left-0 top-1/2">‹</button>
      <button onClick={nextImage} className="absolute right-0 top-1/2">›</button>
    </div>
  );
};
const ContentSection = ({ content }) => (
  <div className="p-4">
    {content.map((paragraph, index) => (
      <p key={index} className="my-4">{paragraph}</p>
      ))}
  </div>
);
const ShareButtons = () => (
  <div className="p-4 flex justify-start space-x-2">
    <button className="bg-gray-700 p-2 rounded">Share</button>
    {/* Add icons here */}
  </div>
);
const RecentProjects = ({ projects }) => (
  <div className="p-4">
    <h2 className="text-2xl mb-4">Recent Projects</h2>
    <div className="flex space-x-4">
      {projects.map((project, index) => (
        <div key={index} className="w-1/4">
          <img src={project.image} alt={project.title} className="w-full" />
          <h3 className="mt-2">{project.title}</h3>
          <p>{project.category}</p>
        </div>
      ))}
    </div>
  </div>
);


export default ProjectDetailPage;
