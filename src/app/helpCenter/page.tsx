import React from 'react'
import styles from "./helpCenter.module.css";
const page = () => {
  return (
    <div>
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
    
  )
}

export default page