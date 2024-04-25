import logo from './logo.svg';
import './App.css';
import MyComponent from './screens/hero';
import Services from './screens/services';
import About from './screens/about';
import Blogs from './screens/blogs';
import Projects from './screens/projects';
import Contacts from './screens/contacts';
function Home() {
  return (
    <div>
      <MyComponent/>
      <Services/>
      <About/>
      <Blogs/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default Home;
