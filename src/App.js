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
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toneAi" element={<ToneAi />} />
        <Route path="/contact" element = {<ContactPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
