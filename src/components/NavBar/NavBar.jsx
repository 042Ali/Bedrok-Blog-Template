import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="Bedrok__Blok">
        <h1>BEDROK</h1>
        <div className="Bedrok__content">
          <div className="Bedrok__page">
            <NavLink to={"/"}>Home</NavLink>
            {/*  */}
            <NavLink to={"/about"}>About</NavLink>
            {/*  */}
            <NavLink to={"/contact"}>Contact</NavLink>
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
