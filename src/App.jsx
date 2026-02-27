import { useState, useEffect } from 'react';

import Navbar from './components/navbar';
import Header from './components/header';
import News from './api/news';
import Footer from './components/footer';

import './App.css';
import './assets/themes/themes.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const switchTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
      <Navbar switchTheme={switchTheme} currentTheme={theme} />
      <Header />
      <News />
      <Footer />
    </>
  )
}

export default App
