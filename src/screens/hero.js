import * as React from "react";
import MenuLinks from "../common/MenuLinks";
import Header from "../common/header";

const HeroSection = () => (
  <section className="flex z-10 flex-col mt-44 ml-3.5 max-w-full text-white w-[608px] max-md:mt-10">
    <h1 className="text-9xl font-semibold leading-[100.5px] max-md:max-w-full max-md:text-4xl">
      Refining
    </h1>
    <h2 className="text-6xl leading-[76.2px] max-md:max-w-full max-md:text-4xl">
      the Tone of your Space
    </h2>
    <p className="mt-7 mr-8 text-lg leading-7 max-md:mr-2.5 max-md:max-w-full">
      Transforming spaces into extraordinary realms of extravagance and elegance.
    </p>
    <button className="flex gap-5 justify-between self-start px-5 py-3 mt-8 text-base font-medium tracking-normal leading-6 border border-white border-solid rounded-[40px]">
      <span className="my-auto">Know more</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/61348b2042391a08c15c3e6ce7a70241241b28aa681a8955ddd3c8ad8b6cff6f?apiKey=63c8f54986b74b018a5d0189da34d007&"
        alt=""
        className="shrink-0 w-6 aspect-square"
      />
    </button>
  </section>
);

const MyComponent = () => {
  return (
    <div className="flex flex-col pt-0.5 pb-16 w-full bg-neutral-800 max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col w-full min-h-[701px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7b639cb7c24c09fbe5c5bd60e1b7b170ae564c677555ae18992e773bf7f03b0?apiKey=63c8f54986b74b018a5d0189da34d007&"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
      
        <div className="flex relative z-10 flex-col items-start pl-20 mt-0 -mb-24 w-full max-md:pl-5 max-md:mt-0 max-md:mb-2.5 max-md:max-w-full">
          <HeroSection />
          <div className="self-end mt-0 max-w-full w-[729px] max-md:mt-0 hidden lg:block">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e84b567f9d7638b1c1147d526deda32a8831b8e0cc1991bd40805f1959bb6365?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="" className="grow w-full aspect-[0.56]" />
              </div>
              <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe58cacc3c70192438a1dd5200e6519a6d88d5a4e8071d53b46555bbaa4c2174?apiKey=63c8f54986b74b018a5d0189da34d007&"
                  alt=""
                  className="grow mt-32 w-full mix-blend-soft-light aspect-[1.49] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/52ffe4b3fd8f20fc0aa795066c87d19b3c54dec5e733a2a5b4acc0699b935056?apiKey=63c8f54986b74b018a5d0189da34d007&"
          alt=""
          className="self-end mt-8 max-w-full aspect-[6.67] w-[867px] hidden lg:block"
        />
      </div>
    </div>
  );
};

export default MyComponent;