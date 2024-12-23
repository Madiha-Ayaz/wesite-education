import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Header from "../header/page";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Header/>
        <Link href="/">
          WebDev Academy
        </Link>
      </div>
      <div className={styles.navLinks}>
       <Link href="#"className={styles.navLink}>Home</Link>
       <Link href="#about"className={styles.navLink}>About</Link>
       <Link href="#contact" className={styles.navLink}>Contact</Link>
      </div>
    </nav>
  );
}
