/* AOS Library */
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/* components */
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Container from "./Container.jsx";
import Footer from './Footer.jsx';

function App() {
  const [isDark, setIsDark] = useState(false);

  /* AOS library */
  useEffect(() => {
    AOS.init({
      duration: 200,
      once: true,
    });
  }, []);

  // ✅ Set theme on initial load
  useEffect(() => {
    const userTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const dark = userTheme === 'dark' || (!userTheme && systemPrefersDark);
    document.documentElement.classList.toggle('dark', dark);
    setIsDark(dark);
  }, []);

  // ✅ Function to toggle theme
  const toggleDarkMode = () => {
    const newDark = !isDark;
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
    setIsDark(newDark);
  };

  return (
    <>
    <main className="bg-[var(--foreground)] dark:bg-[var(--background)]">
      <Navbar onToggleDark={toggleDarkMode} isDark={isDark} />
      <Hero />
      <Container />
      <Footer />
    </main>
    </>
  );
}

export default App;
