import { Link, NavLink } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi2";
export default function Navbar() {
  const links = [
    {
      body: "home",
      path: "/",
    },


    {
      body: "products",
      path: "/products",
    },


    {
      body: "about",
      path: "/about",
    },

    {
      body: "contact",
      path: "/contact",
    },
  ];



  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      {/* الـ container هنا هو اللي هيلم العناصر جواه */}
      <div className="container">
        <a className="navbar-brand text-primary" href="#">
          <HiShoppingBag />
          ShopHub</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link, index) => {
              return (
                <li key={index} className="nav-item">
                  <NavLink
                    className="nav-link text-capitalize"
                    aria-current="page"
                    to={link.path}
                  >
                    {link.body}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}