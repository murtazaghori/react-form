import React from 'react';
import styles from './Form.module.css';
import image from '../../assets/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg'

const Form = () => {
  return (
    <div className={styles.Container}>
        
        <div className={styles.formSection}>
        <h3 className={styles.containerH3}>Sign up</h3>
        <h5 className={styles.subheading}>
          Already have account? <a href="#">Login here</a>
        </h5>
       
  
          <label className={styles.label}>Name</label>
          <input
            className={styles.inputFields}
            type="text"
            placeholder="Enter your name here"
          />
            <br />
          <label className={styles.label2}>Email id</label>
          <input
            className={styles.inputFields}
            type="email"
            placeholder="Enter user email ID here"
          />
          <br />
          <label className={styles.label3}>Password</label>
          <input
            className={styles.inputFields}
            type="password"
            placeholder="Enter password here"
          />
          <br/>
          <input className={styles.input} type="checkbox" /><small className={styles.label1}>By signing up you agree to receive updates and special offers.</small>
                 
                <button className={styles.button}>Submit</button>
                 

        </div>
         
        <div className={styles.imageSection}>
         <img src= "https://png.pngtree.com/png-clipart/20200701/original/pngtree-man-working-at-home-png-image_5349137.jpg" alt="" />
        </div>
      
    </div>
  );
};



export default Form;
