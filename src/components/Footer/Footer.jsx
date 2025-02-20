import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <h1>BEDROK</h1>
        <p>Copyright 2022</p>

        <div class="footer-container">
          <h4 class="footer-title">CATEGORIES</h4>
          <ul class="footer-list">
            <li class="footer-item">Entrepreneurship</li>
            <li class="footer-item">Creator</li>
            <li class="footer-item">Tech</li>
            <li class="footer-item">All</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4 class="section-title">PAGES</h4>
          <ul class="section-list">
            <li class="section-item">Home</li>
            <li class="section-item">About</li>
            <li class="section-item">Subscribe</li>
          </ul>
        </div>
        <div class="contact-section">
          <h4 class="contact-title">CONTACT</h4>
          <ul class="contact-list">
            <li class="contact-item">Twitter</li>
            <li class="contact-item">LinkedIn</li>
            <li style={{ display: "flex" }} class="contact-item">
              Email me
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
