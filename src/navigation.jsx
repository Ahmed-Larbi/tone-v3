export default function Navigation ({isToneAi = false}) {
    return <nav className="flex gap-5 justify-between text-lg font-medium tracking-normal leading-7 text-white max-md:flex-wrap max-md:max-w-full">
      <Logo />
      <div className="flex gap-5 justify-between self-start pr-5 max-md:flex-wrap">
        <NavigationLink>Home</NavigationLink>
        
        {isToneAi && <NavigationLink>About</NavigationLink>}        
        {isToneAi &&<NavigationLink>Services</NavigationLink>}
        {isToneAi &&<NavigationLink>Projects</NavigationLink>}
        {isToneAi &&<NavigationLink>Tone AI</NavigationLink>}
        {isToneAi &&<NavigationLink>Blogs</NavigationLink>}
        {isToneAi &&<NavigationLink>Contact Us</NavigationLink>}
      </div>
    </nav>
}


  const NavigationLink = ({ children }) => <button className="hover:bg-black">{children}</button>;

  const Logo = () => (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea67e7e7074d5efc90ea2b45eda4a1c0f34b3cf739516e91c0a0ebe0db0b4b3c?apiKey=63c8f54986b74b018a5d0189da34d007&"
      alt="Company logo"
      className="shrink-0 max-w-full aspect-[4.55] w-[168px]"
    />
  );
