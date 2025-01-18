import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pxShow = 500;

  const handleScroll = () => {
    setIsVisible(window.scrollY >= pxShow);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container">
        <div className="row">
          {/* Quick Links Section */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/login" className="text-white text-decoration-none">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/createblog" className="text-white text-decoration-none">
                  Add Blog
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-white text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Archives Section */}
          <div className="col-md-3 mb-4">
            <h5>Archives</h5>
            <ul className="list-unstyled">
              <li><a className="text-white text-decoration-none">January 2018</a></li>
              <li><a className="text-white text-decoration-none">December 2017</a></li>
              <li><a className="text-white text-decoration-none">November 2017</a></li>
              <li><a className="text-white text-decoration-none">October 2017</a></li>
              <li><a className="text-white text-decoration-none">September 2017</a></li>
              <li><a className="text-white text-decoration-none">August 2017</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-3 mb-4">
            <h5>Social</h5>
            <ul className="list-unstyled d-flex">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none me-3"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none me-3"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none me-3"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-3 mb-4">
            <h5>Our Newsletter</h5>
            <p>Stay updated with our latest news and insights.</p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Email Address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-4">
          <a
            href="#top"
            className={`btn btn-outline-light ${isVisible ? "" : "d-none"}`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to Top ↑
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
