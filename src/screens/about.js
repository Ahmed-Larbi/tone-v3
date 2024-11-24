import * as React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col">
      <div className="pt-20 w-full bg-neutral-800 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative z-10 flex-col items-end self-stretch px-14 pt-20 my-auto min-h-[492px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/38a412a953ef576c840f00cce4d32454f1b382a18d14e110f4ff066a7a8db7d5?apiKey=63c8f54986b74b018a5d0189da34d007&"
                className="object-cover absolute inset-0 size-full"
                alt=""
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a97e13362d78881e7cc752796b0e786c0319b7a81fe5a95c0baad9be99047056?apiKey=63c8f54986b74b018a5d0189da34d007&"
                className="z-10 mt-48 max-w-full aspect-[0.44] w-[173px] max-md:mt-10"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow items-start p-20 mt-56 text-base text-white min-h-[707px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6436ba9365895b3c58f680f94409b1b9cbbc432696e02d89c59e3b35b6c0230?apiKey=63c8f54986b74b018a5d0189da34d007&"
                className="object-cover absolute inset-0 size-full z-1"
                alt=""
              />
              <h2 className="relative mt-16 text-xl font-light leading-7 capitalize max-md:mt-10 max-md:max-w-full">
                Get to <span className="capitalize">know</span>{" "}
                <span className="capitalize">more</span>{" "}
                <span className="capitalize">about</span>{" "}
              </h2>
              <h1 className="relative mt-7 text-6xl font-semibold leading-[64.2px] max-md:max-w-full max-md:text-4xl">
                Who We Are{" "}
              </h1>
              <p className="relative mt-8 tracking-normal leading-6 max-md:max-w-full">
              At Tone Design, we are a premier interior design firm specializing in transforming spaces into realms of extravagance and elegance. Our team blends creativity and expertise to deliver exceptional results tailored to your unique vision. We are committed to innovation and quality, 
              ensuring each design is both beautiful and functional. With a focus on personalized service, we aim to exceed expectations and create spaces that inspire and rejuvenate.
              </p>
              <div className="flex relative flex-col justify-center mt-12 max-w-full font-medium tracking-normal leading-[137.5%] w-[187px] max-md:mt-10 z-10" >
                <button className="flex gap-5 justify-between px-5 py-3 border border-white border-solid rounded-[40px]" onClick={() => navigate('/aboutus')}>
                  <span className="my-auto">Know more</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/61348b2042391a08c15c3e6ce7a70241241b28aa681a8955ddd3c8ad8b6cff6f?apiKey=63c8f54986b74b018a5d0189da34d007&"
                    className="shrink-0 w-6 aspect-square"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}