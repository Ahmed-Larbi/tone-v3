import * as React from "react";

function ServiceCard({ imageSrc, title, altText }) {
  return (
    <div className="flex flex-col grow items-center px-14 py-16 mt-11 w-full font-medium text-white rounded-xl shadow-lg backdrop-blur-sm max-md:px-5 max-md:mt-10">
      <img src={imageSrc} alt={altText} className="w-20 aspect-square" />
      {title && <div className="mt-9 text-xl leading-7 text-center capitalize">{title}</div>}
      <div className="flex flex-col justify-center self-stretch mt-11 text-base tracking-normal leading-6 max-md:mt-10">
        <div className="flex gap-5 justify-between px-5 py-3 border border-white border-solid rounded-[40px]">
          <div className="my-auto">View details</div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f430fb14b56c24c15d9501dbd3fe9a54de902ace59566951fafa1ba227f380?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="Arrow icon" className="shrink-0 w-6 aspect-square" />
        </div>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a56f63e69cc10ee799d32799a207118d8148355ebea015c75f7a0f9e6e84d56?apiKey=63c8f54986b74b018a5d0189da34d007&",
      altText: "Interior design",
      title: "Interior design"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8beffcc80121aba0faf34b7a519ceb3cac7f7cd363d6890d26dbcb2972c2f0af?apiKey=63c8f54986b74b018a5d0189da34d007&",
      title: "Custom Furniture",
      altText: "Custom furniture",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a5c922d4ab470ff0196b3d8e6a3ed8235d95f0c1a3af85f9042716b209eddfe?apiKey=63c8f54986b74b018a5d0189da34d007&",
      altText: "Home renovation",
      title: "Home renovation",

    },
  ];

  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="pt-20 w-full bg-neutral-800 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-20 text-white max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col items-start pr-5 pl-20 max-md:pl-5 max-md:max-w-full">
                <div className="text-xl font-light leading-7 lowercase">
                  Elevate <span className="lowercase">your</span> living experience <span className="lowercase">with</span>
                </div>
                <h1 className="mt-6 text-6xl font-semibold capitalize leading-[64.2px] max-md:text-4xl">Our Services</h1>
              </div>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/07ba62215d863a8a6e91c51daa1aaf36a4caaba1008622324299ed7632e1339b?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="Living room interior" className="mt-28 w-full aspect-[1.09] max-md:mt-10 max-md:max-w-full" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/25cc3f433bcc9535cc8366b7ae0969da31ec0369184a2024917486f61b2aba87?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="Decorative element" className="self-end mr-24 max-w-full aspect-[2.38] w-[109px] max-md:mr-2.5" />
              <div className="px-5 mt-3.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  {services.map((service, index) => (
                    <div key={index} className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full transition-transform duration-300 hover:-translate-y-4">
                      <ServiceCard imageSrc={service.imageSrc} title={service.title} altText={service.altText} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;