import { TfiHeart } from "react-icons/tfi";
import styles from "./About.module.css";
import { FiAward, FiHeart, FiShield, FiShoppingBag, FiTruck, FiUsers } from "react-icons/fi";

// icons-1
const statsData = [
  { icon: FiShoppingBag, value: "1000+", label: "Quality Products", bg: "#e8f0fe", color: "#1a73e8" },
  { icon: FiUsers, value: "50K+", label: "Happy Customers", bg: "#e6f4ea", color: "#34a853" },
  { icon: FiAward, value: "15+", label: "Years Experience", bg: "#fef7e0", color: "#fbbc04" },
  { icon: FiHeart, value: "99%", label: "Satisfaction Rate", bg: "#f3e8ff", color: "#9333ea" }
];

// icons-2
const featuresDAata = [
  { icon: FiTruck, value: "Fast Shipping", label: "Free shipping on orders over $50. Get your products delivered quickly and safely.", bg: "#e8f0fe", color: "#1a73e8" },
  { icon: FiShield, value: "Secure Payment", label: "100% secure payment processing. Your information is always protected.", bg: "#e6f4ea", color: "#34a853" },
  { icon: TfiHeart, value: "24/7 Support", label: "Our customer service team is always here to help you with any questions.", bg: "#f3e8ff", color: "#9333ea" },
];

export default function Aboutshop() {
  return (
    <>
      {/* Header Section */}
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-10 col-lg-8">
            <p className={styles["p"]}>
              <FiShoppingBag className="me-2" />
              About ShopHub
            </p>
            <h1 className={styles["h1"]}>Your Trusted Shopping Destination</h1>
            <p className={styles["p-2"]}>
              ShopHub is your one-stop shop for premium products at unbeatable prices. We're committed to providing quality products and exceptional customer service.
            </p>
          </div>
        </div>
      </div>

      {/* Stats & Features Section */}
      <div className="container my-5">
        <div className="row g-4 text-center">
          {statsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm p-4 rounded-4 align-items-center">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px", backgroundColor: item.bg, color: item.color, fontSize: "24px" }}
                  >
                    <Icon />
                  </div>
                  <h2 className="fw-bold fs-3 m-0">{item.value}</h2>
                  <p className="text-muted small m-0 mt-1 fw-semibold">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="text-center fw-bold my-5">Why Choose ShopHub?</h2>

        <div className="row g-4">
          {featuresDAata.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="col-12 col-md-4">
                <div className="card h-100 border-0 shadow-sm p-4 rounded-4 text-start">
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "48px", height: "48px", backgroundColor: item.bg, color: item.color, fontSize: "20px" }}
                  >
                    <Icon />
                  </div>
                  <h5 className="fw-bold mb-2">{item.value}</h5>
                  <p className="text-muted small m-0" style={{ lineHeight: "1.6" }}>{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container my-5 text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className={styles["bg"]}>
              <h1 className={styles["Ready"]}>Ready to Start Shopping?</h1>
              <p className={styles["p-3"]}>
                Explore our wide range of products and find exactly what you're looking for.
              </p>
              <button className="btn btn-outline-light px-4 py-2 rounded-3">
                Browse Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}