import styles from "./Message.module.css";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { FiSend } from "react-icons/fi";

export default function Message() {
  return (
    <>
      <div className="container mt-5 pt-4">
        {/* Header Section */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h1 className={styles["h1"]}>Contact Us</h1>
            <p className={styles["p"]}>
              We'd love to hear from you! Reach out through any of the methods below.
            </p>
          </div>
        </div>

        {/* Info Cards Section - responsive grid */}
        <div className="row g-4 justify-content-center mt-2">
          <div className="col-12 col-sm-6 col-md-4">
            <div className={`${styles["email"]} text-center p-4`}>
              <h4 className={styles["h4"]}>
                <MdOutlineMail className="me-2 text-primary" /> Email
              </h4>
              <p className={styles["p-2"]}>support@shophub.com</p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <div className={`${styles["phone"]} text-center p-4`}>
              <h4 className={styles["Phone"]}>
                <FaPhoneAlt className="me-2 text-primary" /> Phone
              </h4>
              <p className={styles["p-3"]}>+1 234 567 890</p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <div className={`${styles["address"]} text-center p-4`}>
              <h4 className={styles["Address"]}>
                <LuMapPin className="me-2 text-primary" /> Address
              </h4>
              <p className={styles["p-4"]}>123 Market Street, NY</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className={`${styles.cardContainer} p-4 shadow-sm rounded-4 bg-white`}>
              <h2 className={`${styles.title} mb-4 text-center`}>Send a Message</h2>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control ${styles.customInput}`}
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className={`form-control ${styles.customInput}`}
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className={`form-control ${styles.customInput}`}
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <button className="btn btn-primary w-100 py-2 d-flex align-items-center justify-content-center gap-2 mb-3">
                  <FiSend /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}