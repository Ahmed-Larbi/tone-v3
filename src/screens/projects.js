import * as React from "react";
import { useNavigate } from "react-router-dom";
import projectsData from '../data/projects';


function ProjectCard({ image, alt, name, id }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full transition-transform duration-300 hover:-translate-y-4" onClick={() => navigate(`project/${id}`)}>
      <div className="relative grow shrink-0 mt-9 max-w-full shadow-lg backdrop-blur-sm aspect-[0.83] w-[295px] max-md:mt-10">
        <img
          loading="lazy"
          src={image}
          alt={alt}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 w-full py-2  bg-opacity-100 text-black font-semibold text-center">
          {name}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <section className="flex flex-col items-center p-20 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
        <h2 className="mt-11 text-xl font-light leading-7 text-white capitalize max-md:mt-10">
          Get <span className="capitalize">inspired</span> by{" "}
        </h2>
        <h1 className="mt-6 text-6xl font-semibold text-white leading-[64.2px] max-md:max-w-full max-md:text-4xl">
          Our Past Projects
        </h1>
        <div className="mt-9 w-full max-w-[1240px] max-md:max-w-full ">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {projectsData.map((project, index) => (
              <ProjectCard
                id = {project.id}
                key={index}
                image={project.images[0]}
                name={project.title}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center mt-9 mb-28 max-w-full text-base font-medium tracking-normal leading-6 text-white w-[187px] max-md:mb-10">
        
        </div>
      </section>
    </div>
  );
}
