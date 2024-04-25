import * as React from "react";

function ProjectCard({ image, alt }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full transition-transform duration-300 hover:-translate-y-4">
      <img
        loading="lazy"
        src={image}
        alt={alt}
        className="grow shrink-0 mt-9 max-w-full shadow-lg backdrop-blur-sm aspect-[0.83] w-[295px] max-md:mt-10"
      />
    </div>
  );
}

function SpecialProjectCard({ backgroundImage, overlayImage, overlayAlt }) {
  return (
    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden relative flex-col items-end px-16 pt-20 pb-7 shadow-lg backdrop-blur-sm aspect-[0.83] max-md:px-5 max-md:mt-5">
        <img
          loading="lazy"
          src={backgroundImage}
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src={overlayImage}
          alt={overlayAlt}
          className="mt-52 aspect-square w-[46px] max-md:mt-10"
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/540dfb17fb1a2c315625f0362cf35748eeb48637257ffb46f6b33e4c28fe68b4?apiKey=63c8f54986b74b018a5d0189da34d007&",
      alt: "Project 1",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/18cae2391d62caa38c1536815075cc9a6fed9f2b543be12476d709713ed771bc?apiKey=63c8f54986b74b018a5d0189da34d007&",
      alt: "Project 2 Overlay",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4e21475be56b81f11a359cf4e6c287803b3447224b6aad70998a7fdc450317a?apiKey=63c8f54986b74b018a5d0189da34d007&",
      alt: "Project 3",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c176d0f0950b72fceaf8dfcdb45e24bf138eb6bc779fb679f9276ca094d86240?apiKey=63c8f54986b74b018a5d0189da34d007&",
      alt: "Project 4",
    },
  ];

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
            {projects.map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    image={project.image}
                    alt={project.alt}
                  />
                );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center mt-9 mb-28 max-w-full text-base font-medium tracking-normal leading-6 text-white w-[187px] max-md:mb-10">
          <button className="flex gap-5 justify-between px-5 py-3 border border-white border-solid rounded-[40px]">
            <span>All Projects</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f430fb14b56c24c15d9501dbd3fe9a54de902ace59566951fafa1ba227f380?apiKey=63c8f54986b74b018a5d0189da34d007&"
              alt="Arrow icon"
              className="shrink-0 w-6 aspect-square"
            />
          </button>
        </div>
      </section>
    </div>
  );
}