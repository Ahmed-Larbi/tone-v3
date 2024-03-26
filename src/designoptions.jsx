// DesignOptions.jsx
import React, { useState } from 'react';

const DesignOptions = () => {
  const [selectedDesign, setSelectedDesign] = useState('');

  return (
    <div className="py-2.5 pr-20 pl-2.5 mt-14 ml-14 max-w-full rounded-xl shadow-lg backdrop-blur-sm w-[820px] max-md:pr-5 max-md:mt-10">
      <div className="flex justify-between gap-5 max-md:flex-col max-md:gap-0">
        <div className={`${selectedDesign === 'Entire' ? 'bg-custom-gradient' : 'bg-neutral-800'} flex flex-col w-[66%] max-md:ml-0 max-md:w-full`} onClick={() => setSelectedDesign('Entire')}>
          <div className="flex grow justify-center items-center px-16 py-7 mx-auto w-full text-xl font-medium tracking-normal leading-7 text-white rounded-xl shadow-lg backdrop-blur-sm max-md:px-5 max-md:mt-10">
            <DesignOption 
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f90a19d910ac74627b80ac0d2362015dafdb3a5c8e0f800fd428deb96eefafe0?apiKey=63c8f54986b74b018a5d0189da34d007&" 
              label="Entire Design" 
            />
          </div>
        </div>
        <div className={`${selectedDesign === 'Partial' ? 'bg-custom-gradient' : 'bg-neutral-800'} flex flex-col w-[66%] max-md:ml-0 max-md:w-full`} onClick={() => setSelectedDesign('Partial')}>
          <div className="flex justify-center items-center px-16 py-7 mx-auto w-full text-xl font-medium tracking-normal leading-7 text-white rounded-xl shadow-lg backdrop-blur-sm max-md:px-5 max-md:mt-10">
            <DesignOption 
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b795d6fd500d05f76569b07d6b87ccd3c07d5fc7891d0329cdd84fc2d12212fd?apiKey=63c8f54986b74b018a5d0189da34d007&" 
              label="Partial Modification" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DesignOption = ({ icon, label }) => (
    <div className="flex gap-4">
      <img
        loading="lazy"
        src={icon}
        alt={`${label} icon`}
        className="shrink-0 w-6 aspect-square fill-white"
      />
      <div className="flex-auto">{label}</div>
    </div>
  );

export default DesignOptions;
