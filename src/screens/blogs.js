import * as React from "react";
import { useNavigate } from "react-router-dom";

function KnowMoreButton() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center mt-12 max-w-full text-base font-medium tracking-normal leading-6 w-[187px] max-md:mt-10" onClick={() => navigate("/services")}>
      <div className="flex gap-5 justify-between px-5 py-3 border border-white border-solid rounded-[40px]">
        <div className="my-auto">Know more</div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f430fb14b56c24c15d9501dbd3fe9a54de902ace59566951fafa1ba227f380?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="Arrow icon" className="shrink-0 w-6 aspect-square" />
      </div>
    </div>
  );
}

export default function Blogs() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <section className="flex flex-col items-center px-16 pt-20 pb-7 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
        <div className="mt-96 w-full max-w-[1195px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-2 font-light text-white max-md:mt-10 max-md:max-w-full">
                <h2 className="text-xl leading-7 max-md:max-w-full">Our Blogs (Coming soon)</h2>
                <h1 className="mt-6 text-6xl font-semibold capitalize leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Unleashing the <span className="capitalize">power</span> of{" "}
                  <span className="capitalize">interior design</span>
                </h1>
                <p className="mt-5 text-lg tracking-normal leading-7 max-md:max-w-full">
                Dive into our blog for expert insights and inspiration on turning your space into a haven of elegance and style. We cover everything from design trends and tips to practical advice for creating a harmonious and functional environment. Discover how our creative solutions and innovative ideas can elevate your home or office. Stay informed and inspired with our latest posts, designed to help you make the most of your interior design journey. Let us guide you in transforming your vision into a beautifully crafted reality.
                </p>
                <KnowMoreButton />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10">
                {/* <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fcb9ce2aed7ce719cc40e3751d6c2bbecfae46836b12ee3dc5e133d4d50cdf8?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="" className="self-end max-w-full aspect-[2.38] w-[109px]" /> */}
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f825edd596c03f67c6a9d1b629dd2fc3f3bdfb0b3b5a15fd5608e749ec9c483?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="Interior design" className="mt-9 w-full aspect-[0.81]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}