// components/hero/page.tsx
import React from 'react';
import styles from './hero.module.css';
import Image from 'next/image'; 


const Hero = () => {
  return (
    <section id="home" className={styles.homeSection}>
    <div className={styles.hero}>
        <Image
src="/istockphoto-1401341149-612x612-removebg-preview.png"
alt="teacher"
width={300} 
        height={300}
        className={styles.image}

/>
<div className={styles.logos}>
<Image
src="/output-onlinegiftools (2).gif"
alt="teacher"
width={300} 
        height={300}
        className={styles.image}
/>
</div>
<div className={styles.courses}>
    <h2 className={styles.title}>Programming Courses</h2>
 <div className={styles.courseBox}>
   <p className={styles.animated}>
     Learn JavaScript, HTML, CSS, React, and more!
   </p>
   </div>
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>Learn Web Development from Scratch</h2>
        <p className={styles.heroSubtitle}>
          Join our interactive courses and master web development technologies like HTML, CSS, JavaScript, React, and more!
        </p>
        <button className={styles.ctaButton}>Get Started</button> 
        
        <div className={styles.image}>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default Hero;
