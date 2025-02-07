import "./AboutPage.css";
import TextField from "@mui/material/TextField";

export default function AboutPage() {
  return (
    <>
      <div className="About__page">
        <div className="About__page-div">
          <h1 className="about-text">ABOUT ME</h1>
          <h1 className="about-h1">Hey, I’m Isaiah</h1>
        </div>
        <div className="New-1"></div>
        <br />
        <div className="div-content">
          <div className="div-content-h1">
            <h1>My Story</h1>
          </div>
          <div className="div-content-p">
            <p>
              Eum fuga reprehenderit tempore quidem suscipit fugiat a recusandae
              minima. Debitis et exercitationem. Nisi vero deserunt. Expedita
              aut fugiat autem similique officiis. Qui quo repellendus
              voluptatum. Quia nemo voluptatem cumque aut blanditiis neque.
            </p>
            <p>
              Eum fuga reprehenderit tempore quidem suscipit fugiat a recusandae
              minima. Debitis et exercitationem. Nisi vero deserunt. Expedita
              aut fugiat autem similique officiis. Qui quo repellendus
              voluptatum. Quia nemo voluptatem cumque aut blanditiis neque.
            </p>
          </div>
        </div>
        <div className="message">
          <div className="message-h1">
            <h1>A monthly post delivered straight to your inbox</h1>
          </div>
          <div className="message-input-btn">
            <TextField
              style={{ backgroundColor: "white", borderRadius: "8px" }}
              id="outlined-basic"
              placeholder="Enter your email"
              variant="outlined"
            />
            <a href="">
              <button>
                <h2>Submit</h2>
              </button>
            </a>
          </div>
          <div className="message-p">
            <p>Zero spam, just the good stuff.</p>
          </div>
        </div>
        <footer className="about">
          <h1>BEDROK</h1>
          <p>Copyright 2022</p>

          <div class="about-container">
            <h4 class="about-title">CATEGORIES</h4>
            <ul class="about-list">
              <li class="about-item">Entrepreneurship</li>
              <li class="about-item">Creator</li>
              <li class="about-item">Tech</li>
              <li class="about-item">All</li>
            </ul>
          </div>
          <div class="about-section">
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
              <li class="contact-item">Email me</li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
