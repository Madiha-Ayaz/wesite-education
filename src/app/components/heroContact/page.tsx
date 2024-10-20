import React from 'react';
import styles from './hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNode, faGit } from '@fortawesome/free-brands-svg-icons';
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const page = () => {
  return (
    <div >
      <div className={styles.pageContainer1}>
      <div className="call_image">
      <Image
      src="/output-onlinegiftools.gif"
      alt="call image"
      width={400}
      height={400}
      />
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.h2}>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input className={styles.inputField} type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input className={styles.inputField} type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea   className={styles.inputField}  id="message" name="message" required></textarea>

          <button  className={styles.button} type="submit">Send</button>
        </form>
      </div>
<div className={styles.container_circle}>
     <div className={styles.all_icon}>
        <div className={styles.icon}>
        <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faCss3} />
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faJs} />
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faReact} />
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faNode} />
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faGit} />
        </div>
      <div className={styles.circle}></div>
      </div>
      </div>
      </div>
      <div className={styles.pageContainer2}>
        <div className={styles.link}>
          
         <Link href="/heroContact" className={styles.helpCenter}>Help Center</Link>
        <ul>
        <h2 className={styles.skills}>Skills</h2>
        <div className={styles.subHeading}>
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Next.js</li>
        </div>
        </ul>
        </div>
        <div className={styles.courses}>
          <h1 className={styles.courses_heading}>Courses</h1>
<ul className={styles.courses_li}>
<li>Web 3 and Metaverse</li>
<li>Cloud-Native Computing</li>
<li>Artificial Intelligence (AI) and Deep Learning</li>
<li>Ambient Computing and IoT</li>
<li>Genomics and Bioinformatics</li>
<li>Network Programmability and Automation
Social Links</li>
</ul>
<div className={styles.Social_icons}>
 <a href="https://github.com/Madiha-Ayaz" className={styles.icon1} target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="
www.youtube.com/@user-rh3pc6wg7k" className={styles.icon2} target="_blank" rel="noopener noref">
        <FaYoutube size={30} />
      </a>
      <a href="https://www.instagram.com/yourUsername" className={styles.icon3} target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} />
      </a>
      <a href="https://www.linkedin.com/in/madiha-ayaz-ba68512b5/" className={styles.icon4} target="_blank" rel="noopener noreferr">
        <FaLinkedin size={30} />
        </a>
 </div>
        </div>
        
        <div className={styles.comment}>
 <label htmlFor="comment" className={styles.comment_label}>Comments</label>
 <textarea    id="comment" name="comment" required></textarea>
 <button className={styles.button_comment}>Send</button>
 </div>
</div>
      </div>
      
    

  );
};

export default page;
