// pages/Home.tsx
import React from 'react';
import Navbar from './components/navbar/page';
import styles from './home.module.css'; 
import Hero from './components/hero/page';
import Footer from './components/footer/page';
import  Contact from "./contact/page";
import Blog from "./about/page";
const Home= () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Hero /> 
      <Blog/>
      <Contact />
      <Footer />
</div>
  );
};

export default Home;
