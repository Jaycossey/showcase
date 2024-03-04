import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar-components/Navbar';
import DropNav from './components/navbar-components/DropNav';
import Home from './components/home-components/Home';
import About from './components/about-components/About';
import Projects from './components/port-components/Projects';
import Contact from './components/contact-components/Contact';
import './App.css';

const App = () => {
  let width = window.innerWidth;
  

  if (width >= 600) {
    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </>
    );
  } else {
    return (
      <>
        <Router>
          <DropNav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App
