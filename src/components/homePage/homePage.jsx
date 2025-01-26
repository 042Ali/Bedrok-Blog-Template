import { TextField } from "@mui/material";
import "./HomePage.css";
import { Link, NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="Home__Page">
        <h1 className="Featured__Post--h1">Featured Post</h1>
        <div className="Featured__Post">
          <img src="./Frame--387.png" alt="" />
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
            <img src="./Frame--387.png" alt="" />
            <p>NEUTRAL</p>
            <h1>
              7 Things about <br /> web design your <br /> boss wants you to
              <br /> know
            </h1>
          </div>
          <div className="Recent__Posts">
            <img src="./Frame--387.png" alt="" />
            <p>NEUTRAL</p>
            <h1>
              7 Things about <br /> web design your <br /> boss wants you to
              <br /> know
            </h1>
          </div>
          <div className="Recent__Posts">
            <img src="./Frame--387.png" alt="" />
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
      </div>
    </>
  );
}
