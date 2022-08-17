import {FaFacebook, FaInstagram,FaLinkedin} from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer(){
    return(
      <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
              <FaFacebook/>
            </li>
            <li>
              <FaInstagram/>
            </li>
            <li>
              <FaLinkedin/>
            </li>
        </ul>
        <span className={styles.copy_right}>Jean Castilhos Software®</span>
      </footer>

    )
}

export default Footer;