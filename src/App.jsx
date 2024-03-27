import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar-components/Navbar';
import DropNav from './components/navbar-components/DropNav';
import Home from './components/home-components/Home';
import About from './components/about-components/About';
import Projects from './components/port-components/Projects';
import Contact from './components/contact-components/Contact';
import './App.css';

const App = () => {
  // let width = window.innerWidth;
  // /**
  //  * TODO
  //  * I need to make sure I change the way the navbar renders,
  //  * while it works after a page refresh to change the initial 
  //  * navbar render, I also need to think about responsiveness
  //  * 
  //  * I wrote this without taking into account the dynamic or changing 
  //  * screen sizes, this will need changing ASAP
  //  */

  // if (width >= 600) {
  //   return (
  //     <>
  //       <Router>
  //         <Navbar />

  //         <Routes>
  //           <Route path="/" element={<Home />} />
  //           <Route path="/About" element={<About />} />
  //           <Route path="/Projects" element={<Projects />} />
  //           <Route path="/Contact" element={<Contact />} />
  //         </Routes>
  //       </Router>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Router>
  //         <DropNav />

  //         <Routes>
  //           <Route path="/" element={<Home />} />
  //           <Route path="/About" element={<About />} />
  //           <Route path="/Projects" element={<Projects />} />
  //           <Route path="/Contact" element={<Contact />} />
  //         </Routes>
  //       </Router>
  //     </>
  //   );
  // }
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
