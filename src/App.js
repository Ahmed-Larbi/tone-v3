import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./home";
import ToneAi from "./ToneAI";
import ContactPage from "./pages/contact_us_page";
import ProjectsPage from "./pages/project_page";
import BlogPage from "./pages/blogs";
import ServicesPage from "./pages/services";
import AboutUs from "./pages/about_us";
import ProjectShowcase from "./pages/project_detail_page";
import ScrollToTop from "./scroll";
import WhatsappButton from "./common/whatsapp";
function App() {
  const location = useLocation(); // Get the current route

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toneAi" element={<ToneAi />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/project/:id" element={<ProjectShowcase />} />
      </Routes>
      {/* Show WhatsApp button unless on the Contact Us page */}
      {location.pathname !== "/contact" && <WhatsappButton />}
    </div>
  );
}

export default App;
