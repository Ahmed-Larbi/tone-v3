import * as React from "react";
import { Link } from "react-router-dom";

const MenuLink = ({ children, to }) => (
  <button>
    <Link to={to}>
      <div className="text-lg font-medium tracking-normal leading-7 text-white">
        {children}
      </div>
    </Link>
  </button>
);

const MenuLinks = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/project" },
    { name: "Tone AI", path: "/toneAi" },
    // { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="flex gap-5 justify-between self-start max-md:flex-wrap">
      {links.map((link, index) => (
        <MenuLink key={index} to={link.path}>
          {link.name}
        </MenuLink>
      ))}
    </div>
  );
};

export default MenuLinks;
