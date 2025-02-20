import "./ErrorPage.css";
import Footer from "../Footer/Footer";

export default function ErrorPage() {
  return (
    <>
      <div className="Error-container">
        <div className="Error-content">
          <h1 className="Error-title">404!</h1>
          <p className="Error-text">Page can’t be found</p>
          <a href="/" className="Error-button">
            Go Home
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
