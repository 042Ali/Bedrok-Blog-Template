import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./homePage.css";

export default function homePage() {
  return (
    <>
      <div className="Bedrok__Blok">
        <h1>BEDROK</h1>
        <div className="Bedrok__content">
          <div className="Bedrok__page">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
}
