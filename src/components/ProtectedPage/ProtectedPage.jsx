import Footer from "../Footer/Footer";
import "./ProtectedPage.css";

export default function ProtectedPage() {
  return (
    <>
      <div className="Protected__Page">
        <form className="form">
          <h1 className="title">Protected Page</h1>
          <div className="input-group">
            <input
              type="password"
              placeholder="Enter your password"
              className="input"
            />
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
