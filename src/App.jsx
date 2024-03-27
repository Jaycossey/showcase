import Home from './components/home-components/Home';
import About from './components/about-components/About';
import Projects from './components/port-components/Projects';
import Contact from './components/contact-components/Contact';
import './App.css';
import { useRef } from 'react';

const App = () => {
  const projectRef = useRef();

  // scroll to projects page on button click
  const handleClick = () => {
    const anchorY = projectRef.current.getBoundingClientRect().y;
    window.scrollTo(0, scrollY + anchorY);
  }

  return (
    <>
      <Home onClick={handleClick} />
      <About />
      <a ref={projectRef}></a>
      <Projects />
      <Contact />
    </>
  )
}

export default App
