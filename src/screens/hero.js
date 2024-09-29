import * as React from "react";
import { Link } from "react-router-dom";

const MenuLink = ({ children, }) => (
  <button>
    
    <Link to ='/toneAi'>
    <div className="text-lg font-medium tracking-normal leading-7 text-white">
    {children}
  </div></Link>
  </button>
);

const MenuLinks = () => {
  const links = ["Home", "About", "Services", "Projects", "Tone AI", "Blogs", "Contact Us"];

  return (
    <div className="flex gap-5 justify-between self-start max-md:flex-wrap">
      {links.map((link, index) => (
        <MenuLink key={index}>{link}</MenuLink>
      ))}
    </div>
  );
};

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
        <div className="flex relative z-10 gap-5 justify-between items-start self-end mr-24 max-md:flex-wrap max-md:mr-2.5">
          {/* <div className="flex overflow-hidden relative flex-col justify-center self-stretch aspect-[1.03]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c03cb82d0e3e60dbdfefa8d2ad142c2f6a8ebb8e5ffaf469f2d921ba7933c4df?apiKey=63c8f54986b74b018a5d0189da34d007&"
              alt=""
              className="object-cover absolute inset-0 size-full"
            />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d14f349895b8183e510ab34f5cd603f5ecc3c45db148502ccb271ff64ba9dbb7?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="" className="w-full aspect-[1.03]" />
          </div> */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/68129255d0ac13ef81dfe1be6274aec195985c4a4662817a591d05d9114ff3a7?apiKey=63c8f54986b74b018a5d0189da34d007&"
            alt=""
            className="shrink-0 mt-11 aspect-[3.33] w-[66px] max-md:mt-10"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad8f63f9c0dd041406ef2e194608f936b3d9302c9ea745a0007f039bf4c0abc3?apiKey=63c8f54986b74b018a5d0189da34d007&"
            alt=""
            className="shrink-0 mt-11 aspect-[1.25] w-[25px] max-md:mt-10"
          />
        </div>
        <div className="flex relative z-10 flex-col items-start pl-20 mt-0 -mb-24 w-full max-md:pl-5 max-md:mt-0 max-md:mb-2.5 max-md:max-w-full">
          <nav className="flex gap-5 justify-between ml-3.5 max-w-full text-lg font-medium tracking-normal leading-7 text-white w-[887px] max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea67e7e7074d5efc90ea2b45eda4a1c0f34b3cf739516e91c0a0ebe0db0b4b3c?apiKey=63c8f54986b74b018a5d0189da34d007&"
              alt=""
              className="shrink-0 max-w-full aspect-[4.55] w-[168px]"
            />
            <MenuLinks />
          </nav>
          <HeroSection />
          <div className="self-end mt-0 max-w-full w-[729px] max-md:mt-0">
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
          className="self-end mt-8 max-w-full aspect-[6.67] w-[867px]"
        />
      </div>
    </div>
  );
};

export default MyComponent;