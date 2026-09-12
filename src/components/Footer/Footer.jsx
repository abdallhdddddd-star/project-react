import styles from "./Footer.module.css";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";


export default function Footer() {
  return (<>

    <footer className={styles.footer}>
      <div className={styles.container}>


        <div className={styles.column}>
          <div className={styles.logo}>
            <IoBagHandleSharp className={styles.logoIcon} />
            <h2>ShopHub</h2>
          </div>
          <p className={styles.description}>
            Your trusted destination for premium products at unbeatable prices. Quality guaranteed.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialBtn}><FaFacebookF /></a>
            <a href="#" className={styles.socialBtn}><FaTwitter /></a>
            <a href="#" className={styles.socialBtn}><FaInstagram /></a>
            <a href="#" className={styles.socialBtn}><FaLinkedinIn /></a>
          </div>
        </div>


        <div className={styles.column}>
          <h3 className={styles.title}>Quick Links</h3>
          <ul className={styles.list}>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>


        <div className={styles.column}>
          <h3 className={styles.title}>Customer Service</h3>
          <ul className={styles.list}>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>


        <div className={styles.column}>
          <h3 className={styles.title}>Contact Us</h3>
          <ul className={styles.contactList}>
            <li>
              <FiMapPin className={styles.contactIcon} />
              <span>123 Shopping Street<br />New York, NY 10001</span>
            </li>
            <li>
              <FiPhone className={styles.contactIcon} />
              <span>+1 (234) 567-890</span>
            </li>
            <li>
              <FiMail className={styles.contactIcon} />
              <span>info@shophub.com</span>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  </>);
}