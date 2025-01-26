import "./AboutPage.css";
import TextField from '@mui/material/TextField';

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
            <p>Eum fuga reprehenderit tempore quidem suscipit fugiat a recusandae minima. Debitis et exercitationem. Nisi vero deserunt. Expedita aut fugiat autem similique officiis. Qui quo repellendus voluptatum. Quia nemo voluptatem cumque aut blanditiis neque.</p>
            <p>Eum fuga reprehenderit tempore quidem suscipit fugiat a recusandae minima. Debitis et exercitationem. Nisi vero deserunt. Expedita aut fugiat autem similique officiis. Qui quo repellendus voluptatum. Quia nemo voluptatem cumque aut blanditiis neque.</p>
          </div>
        </div>
        <div className="message">
          <div className="message-h1">
            <h1>A monthly post delivered straight to your inbox</h1>
          </div>
          <div className="message-input-btn">
          <TextField style={{backgroundColor:'white',borderRadius:'8px'}} id="outlined-basic" placeholder="Enter your email" variant="outlined" />
            <a href="">
            <button><h2>Submit</h2></button>
            </a>
          </div>
          <div className="message-p">
            <p>Zero spam, just the good stuff.</p>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-1">
            <h1>BEDROK </h1>
            <ul>Copyright 2022</ul>
          </div>
          <div className="all-footer">
          <div className="footer-2">
            <ul>CATEGORIES</ul>
            <ul>Entrepreneurship</ul>
            <ul>Creator</ul>
            <ul>Creator</ul>
            <ul>All</ul>
          </div>
          <div className="footer-3">
            <ul>PAGES</ul>
            <ul>Home</ul>
            <ul>About</ul>
            <ul>Subscribe</ul>
          </div>
          <div className="footer-4">
            <ul>CONTACT</ul>
            <ul>Twitter</ul>
            <ul>Linkedln</ul>
            <ul>Email me</ul>
          </div>
          </div>
        </footer>
      </div>
    </>
  );
}