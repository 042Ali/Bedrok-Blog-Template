import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

export default function NavBar({ page, setPage }) {
  return (
    <>
      <div className="Bedrok__Blok">
        <h1>BEDROK</h1>
        <div className="Bedrok__content">
          <div className="Bedrok__page">
            <div
              className={page === "HomePage" ? "active" : ""}
              onClick={() => setPage("HomePage")}
            >
              <p>Home</p>
            </div>
            {/*  */}
            <div
              className={page === "AboutPage" ? "active" : ""}
              onClick={() => setPage("AboutPage")}
            >
              <p>About</p>
            </div>
            {/*  */}
            <div
              className={page === "ContactPage" ? "active" : ""}
              onClick={() => setPage("ContactPage")}
            >
              <p>Contact</p>
            </div>
          </div>
          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <button>Subscribe</button>
        </div>
      </div>
      <div className="New"></div>
    </>
  );
}
