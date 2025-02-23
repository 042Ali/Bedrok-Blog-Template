import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer className="footer">
        <h1>BEDROK</h1>
        <p>Copyright 2022</p>

        <div className="footer-container">
          <h4 className="footer-title">CATEGORIES</h4>
          <ul className="footer-list">
            <li className="footer-item">
              <NavLink to="/Entrepreneurship" onClick={scrollToTop}>
                Entrepreneurship
              </NavLink>
            </li>
            <li className="footer-item">Creator</li>
            <li className="footer-item">Tech</li>
            <li className="footer-item">All</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="section-title">PAGES</h4>
          <ul className="section-list">
            <li className="section-item">
              <NavLink to="/" onClick={scrollToTop}>
                Home
              </NavLink>
            </li>
            <li className="section-item">
              <NavLink to="/about" onClick={scrollToTop}>
                About
              </NavLink>
            </li>
            <li className="section-item">Subscribe</li>
          </ul>
        </div>

        <div className="contact-section">
          <h4 className="contact-title">CONTACT</h4>
          <ul className="contact-list">
            <li className="contact-item">Twitter</li>
            <li className="contact-item">LinkedIn</li>
            <li style={{ display: "flex" }} className="contact-item">
              Email me
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
