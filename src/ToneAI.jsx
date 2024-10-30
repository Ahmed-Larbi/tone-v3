import {useState} from "react";
import DesignOptions from "./designoptions";
import Navigation from "./navigation";
import { Link } from "react-router-dom";
import Header from "./common/header";

const SocialIcons = () => (
  <div className="flex gap-5 justify-between items-start my-auto">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/68129255d0ac13ef81dfe1be6274aec195985c4a4662817a591d05d9114ff3a7?apiKey=63c8f54986b74b018a5d0189da34d007&"
      alt="Facebook icon"
      className="shrink-0 aspect-[3.33] w-[66px]"
    />
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad8f63f9c0dd041406ef2e194608f936b3d9302c9ea745a0007f039bf4c0abc3?apiKey=63c8f54986b74b018a5d0189da34d007&"
      alt="Twitter icon"
      className="shrink-0 aspect-[1.25] w-[25px]"
    />
  </div>
);


const Breadcrumbs = () => (
  <div className="flex gap-2 self-start text-base leading-6 text-white">
    
    <div className="grow">Home</div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac6fd7e3b889a48684479184271cfbea58b34d310196901a587bc8745a9aecbb?apiKey=63c8f54986b74b018a5d0189da34d007&"
      alt="Right arrow icon"
      className="shrink-0 w-3.5 aspect-square"
    />
    <div>Tone AI</div>
  </div>
);


const ExampleImage = ({ src }) => (
  <img
    loading="lazy"
    src={src}
    alt="Example room"
    className="shrink-0 max-w-full aspect-square w-[190px] max-md:mt-5"
  />
);

const ExampleImages = () => (
  <div className="mt-10 ml-14 max-w-full w-[400px]">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <ExampleImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/90d37b139f5943c6dcf4846e89180845275d2a5cc9450aa07c57f2684d019fdd?apiKey=63c8f54986b74b018a5d0189da34d007&" />
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <ExampleImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/156e42a647915831ad65a04d73cbac099956e317f9f4db48f60f3fa19fba692a?apiKey=63c8f54986b74b018a5d0189da34d007&" />
      </div>
    </div>
  </div>
);

const Main = () => (
  <main className="flex flex-col items-center px-5 mt-10 w-full max-md:max-w-full">
    <Breadcrumbs />
    <h1 className="self-stretch mt-7 text-4xl font-semibold tracking-wide text-white leading-[64.2px] max-md:max-w-full max-md:text-4xl">
      Experience Innovation - Tone Design{" "}
    </h1>
    <p className="self-stretch mt-5 text-base tracking-normal leading-6 text-white max-md:max-w-full">
      Experience a smarter approach to design with Tone AI. To get started,
      simply upload a photo of your space and select the cabinet type. Tone AI
      will then generate a realistic rendering of your room.
    </p>
    <DesignOptions />
    <UploadArea />
    <div className="mt-16 ml-14 text-xl font-medium leading-7 text-center text-white lowercase max-md:mt-10">
      <span className="capitalize">Try </span>the example room images
    </div>
    <ExampleImages />
  </main>
);

const SocialLink = ({ src, alt }) => (
  <img loading="lazy" src={src} alt={alt} className="shrink-0 w-8 aspect-square" />
);

const Footer = () => (
  <footer className="flex gap-5 px-5 mt-9 w-full text-white  max-md:flex-wrap max-md:max-w-full">
    <div className="flex-auto my-auto text-base leading-6">
      © 2024 Tone Design Studio. All rights reserved.
    </div>
    <div className="flex gap-5 justify-center text-sm leading-5">
      <div className="my-auto">Follow us on: </div>
      <SocialLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/c249ae457009bad6cb609a0bf9f3ec64bdaeabb20babdef6424b6b6ef86ef557?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="Facebook" />
      <SocialLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/09a65031fd5e2f9bcf6d20b4f2a33f3b3f718ae42495b43b292aee8301b93512?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="Twitter" />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f145c47945b8de1b72dc542dcb4e8fdc1890e8d92f4505e5ba7f9328462e1b49?apiKey=63c8f54986b74b018a5d0189da34d007&"
        alt="Instagram"
        className="shrink-0 my-auto aspect-[0.96] w-[23px]"
      />
      <SocialLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/62c3f029801170beb46f6355258a71af2216afa774926e5d45641337984c626b?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="LinkedIn" />
    </div>
  </footer>
);

const UploadAreaOverlay = () => (
  <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center z-10">
    <div className="text-white text-6xl font-bold">
      Coming Soon
    </div>
  </div>
);

const UploadArea = ({ showOverlay }) => (
  <div className="relative flex justify-center items-center px-16 py-14 mt-9 ml-14 max-w-full text-base tracking-normal leading-6 text-white rounded-xl border-2 border-dashed bg-white bg-opacity-10 border-white border-opacity-30 w-[820px] max-md:px-5">
    {showOverlay && <UploadAreaOverlay />}
    <div className={`flex flex-col max-w-full w-[245px] ${showOverlay ? 'opacity-50' : 'opacity-100'}`}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4a56e8486e49d919f8d2ce91275882e8f0eb378912b8c5c346c13f009446c9a?apiKey=63c8f54986b74b018a5d0189da34d007&"
        alt="Upload icon"
        className="self-center w-20 aspect-square"
      />
      <div className="mt-11 max-md:mt-10">Drag and drop or browse to upload</div>
    </div>
  </div>
);

export default function ToneAi() {
  const [showComingSoon, setShowComingSoon] = useState(true);

  return (
    <div className="flex flex-col justify-center bg-[#212122]">
      <Header />
      <main className="flex flex-col items-center px-5 mt-10 w-full max-md:max-w-full">
        <h1 className="self-stretch mt-7 text-4xl font-semibold tracking-wide text-white leading-[64.2px] max-md:max-w-full max-md:text-4xl">
          Experience Innovation - Tone Design
        </h1>
        <p className="self-stretch mt-5 text-base tracking-normal leading-6 text-white max-md:max-w-full">
          Experience a smarter approach to design with Tone AI. To get started,
          simply upload a photo of your space and select the cabinet type. Tone AI
          will then generate a realistic rendering of your room.
        </p>
        <DesignOptions />
        <UploadArea showOverlay={showComingSoon} />
      </main>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/81f012845492db5b4644466a8d95177238e27b91377c106cbdf4b226cfe36093?apiKey=63c8f54986b74b018a5d0189da34d007&"
        alt=""
        className="self-stretch mt-24 w-full border-2 border-solid border-zinc-700 border-opacity-30 stroke-[2px] stroke-zinc-700 stroke-opacity-30 max-md:mt-10 max-md:max-w-full"
      />
      <Footer />
    </div>
  );
}