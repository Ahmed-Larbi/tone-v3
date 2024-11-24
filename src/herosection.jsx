import * as React from "react";

function Header() {
  return (
    <header className="flex relative z-10 gap-5 justify-between items-start self-end mr-24 max-md:flex-wrap max-md:mr-2.5">
      <div className="flex overflow-hidden relative flex-col justify-center self-stretch aspect-[1.03]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ea35169b37a5f7f957aab645ced1f94ef595dd3cdfa21ddec0ab98bc21c905d?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="" className="object-cover absolute inset-0 size-full" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/37b2b14a2758c8b7ed1e031c9b4e0da909490a4e66f9e1d17b0f90c9dcd25375?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="" className="w-full aspect-[1.03]" />
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/68129255d0ac13ef81dfe1be6274aec195985c4a4662817a591d05d9114ff3a7?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="" className="shrink-0 mt-11 aspect-[3.33] w-[66px] max-md:mt-10" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad8f63f9c0dd041406ef2e194608f936b3d9302c9ea745a0007f039bf4c0abc3?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="" className="shrink-0 mt-11 aspect-[1.25] w-[25px] max-md:mt-10" />
    </header>
  );
}

function Navigation() {
  const navItems = [
    { label: "Home" },
    { label: "About" },
    { label: "Services" },
    { label: "Projects" },
    { label: "Tone AI" },
    { label: "Blogs" },
    { label: "Contact Us" },
  ];

  return (
    <nav className="flex gap-5 justify-between self-start max-md:flex-wrap">
      {navItems.map((item, index) => (
        <div key={index}>{item.label}</div>
      ))}
    </nav>
  );
}

function Hero() {
  return (
    <section className="flex z-10 flex-col mt-44 ml-3.5 max-w-full text-white w-[608px] max-md:mt-10">
      <h1 className="text-9xl font-semibold leading-[100.5px] max-md:max-w-full max-md:text-4xl">Refining</h1>
      <h2 className="text-6xl leading-[76.2px] max-md:max-w-full max-md:text-4xl">the Tone of your Space</h2>
      <p className="mt-7 mr-8 text-lg leading-7 max-md:mr-2.5 max-md:max-w-full">
      Dive into our blog for expert insights and inspiration on turning your space into a haven of elegance and style. We cover everything from design trends and tips to practical advice for creating a harmonious and functional environment. Discover how our creative solutions and innovative ideas can elevate your home or office. 
      Stay informed and inspired with our latest posts, designed to help you make the most of your interior design journey. Let us guide you in transforming your vision into a beautifully crafted reality.
      </p>
      <button className="flex gap-5 justify-between self-start px-5 py-3 mt-8 text-base font-medium tracking-normal leading-6 border border-white border-solid rounded-[40px]">
        <span className="my-auto">Know more</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/61348b2042391a08c15c3e6ce7a70241241b28aa681a8955ddd3c8ad8b6cff6f?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="" className="shrink-0 w-6 aspect-square" />
      </button>
    </section>
  );
}

function ImageGrid() {
  return (
    <div className="self-end mt-0 max-w-full w-[729px] max-md:mt-0">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b058d1c5c09513079230551ffa5c038388b6d0eef32bdb0e481cfa066741c2b4?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="" className="grow w-full aspect-[0.56]" />
        </div>
        <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d7b5c71fef89ecd454262fed09c8def8d1a1c2981c85819be2647c6452caf89?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="" className="grow mt-32 w-full mix-blend-soft-light aspect-[1.49] max-md:mt-10 max-md:max-w-full" />
        </div>
      </div>
    </div>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col pt-0.5 pb-16 w-full bg-neutral-800 max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col w-full min-h-[701px] max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6a1cddd938838469f8a792eb90ad1176f4ecae900c88523f8bd97ca698fc0c6?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="" className="object-cover absolute inset-0 size-full" />
          <Header />
          <div className="flex relative z-10 flex-col items-start pl-20 mt-0 -mb-24 w-full max-md:pl-5 max-md:mt-0 max-md:mb-2.5 max-md:max-w-full">
            <div className="flex gap-5 justify-between ml-3.5 max-w-full text-lg font-medium tracking-normal leading-7 text-white w-[887px] max-md:flex-wrap">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e90b071c402a52986541fe1829fa97b2bfc0a6589edff0fd0b4d3607dc6e3e4?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="" className="shrink-0 max-w-full aspect-[4.55] w-[168px]" />
              <Navigation />
            </div>
            <Hero />
            <ImageGrid />
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d7903f6f2281b6613d566e31ed0227e5fff63ed996f7eda615f14dd543c4420?apiKey=63c8f54986b74b018a5d0189da34d007&" alt="" className="self-end mt-8 max-w-full aspect-[6.67] w-[867px]" />
        </div>
      </div>
    </div>
  );
}

export default MyComponent;