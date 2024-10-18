import logo from './logo.svg';
import './App.css';
import MyComponent from './screens/hero';
import Services from './screens/services';
import About from './screens/about';
import Blogs from './screens/blogs';
import Projects from './screens/projects';
import Contacts from './screens/contacts';
import Home from './home'; 
import ToneAi from './ToneAI';
import ContactPage from './pages/contact_us_page';
import ProjectsPage from './pages/project_page';
import { Routes, Route } from 'react-router-dom';
import BlogPage from './pages/blogs';
import ServicesPage from './pages/services';
import AboutUs from './pages/about_us';
import ProjectShowcase from './pages/project_detail_page';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toneAi" element={<ToneAi />} />
        <Route path="/contact" element = {<ContactPage/>}/>
        <Route path="/project" element = {<ProjectsPage/>}/>
        <Route path="/blogs" element = {<BlogPage/>}/>
        <Route path="/services" element = {<ServicesPage/>}/>
        <Route path="/aboutus" element = {<AboutUs/>}/>
        <Route path="/project/:id" element={<ProjectShowcase />} />
      </Routes>
    </div>
  );
}

export default App;
