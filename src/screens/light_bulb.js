import React from 'react';

const ImageSectionWithLightBulb = () => {
  return (
    <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full relative">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe58cacc3c70192438a1dd5200e6519a6d88d5a4e8071d53b46555bbaa4c2174?apiKey=63c8f54986b74b018a5d0189da34d007&"
        alt="Couch"
        className="grow mt-32 w-full mix-blend-soft-light aspect-[1.49] max-md:mt-10 max-md:max-w-full"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c03cb82d0e3e60dbdfefa8d2ad142c2f6a8ebb8e5ffaf469f2d921ba7933c4df?apiKey=63c8f54986b74b018a5d0189da34d007&"
        alt="Light bulb"
        className="absolute top-24 right-24 w-16 h-16 animate-flicker"
      />
    </div>
  );
};

export default ImageSectionWithLightBulb;