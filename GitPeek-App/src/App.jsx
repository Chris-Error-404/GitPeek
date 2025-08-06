/* AOS Llibrary */
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



/* components */
import Navbar from "./Navbar.jsx"
import Hero from "./Hero.jsx"
import Container from "./Container.jsx"
import Footer from './Footer.jsx';

function App() {


  /* AOS library */
  useEffect(() => {
    AOS.init({
      duration: 200,
      once: true, 
    });
  }, []);

  return (
    <>
    <Navbar />
    <Hero />
    <Container />
    <Footer />
    </>
  )
}

export default App
