import { TextField } from "@mui/material";
import "./HomePage.css";
import { Link, NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="Home__Page">
        <h1 className="Featured__Post--h1">Featured Post</h1>
        <div className="Featured__Post">
          <img
            src="https://w0.peakpx.com/wallpaper/302/833/HD-wallpaper-blue-purple-waves-shapes-gradient-abstract.jpg  "
            alt=""
          />
          <p>Entrepreneurship </p>
          <h1>Designers </h1>
          <h1>who changed </h1>
          <h1>the web</h1>
          <h6>July 28, 2022 · 6 min read</h6>
        </div>
        <h1 className="Recent__Posts--h1">Recent Posts</h1>
        <div className="See__All">
          <NavLink to={"/posts"}>See All</NavLink>
        </div>
        <div className="Recent__Posts--Page">
          <div className="Recent__Posts">
            <img
              src="https://w0.peakpx.com/wallpaper/302/833/HD-wallpaper-blue-purple-waves-shapes-gradient-abstract.jpg  "
              alt=""
            />
            <p>NEUTRAL</p>
            <h1>
              7 Things about <br /> web design your <br /> boss wants you to
              <br /> know
            </h1>
          </div>
          <div className="Recent__Posts">
            <img
              src="https://w0.peakpx.com/wallpaper/302/833/HD-wallpaper-blue-purple-waves-shapes-gradient-abstract.jpg  "
              alt=""
            />
            <p>NEUTRAL</p>
            <h1>
              7 Things about <br /> web design your <br /> boss wants you to
              <br /> know
            </h1>
          </div>
          <div className="Recent__Posts">
            <img
              src="https://w0.peakpx.com/wallpaper/302/833/HD-wallpaper-blue-purple-waves-shapes-gradient-abstract.jpg  "
              alt=""
            />
            <p>NEUTRAL</p>
            <h1>
              7 Things about <br /> web design your <br /> boss wants you to
              <br /> know
            </h1>
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
              <li class="contact-item">Email me</li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
