import { useEffect, useState } from "react";
import "./Entrepreneurship.css";
import axios from "axios";
import Footer from "../Footer/Footer";

export default function Entrepreneurship() {
  const [entrepreneurships, setEntrepreneurships] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    axios
      .get("http://localhost:3000/Entrepreneurship")
      .then((response) => {
        setEntrepreneurships(response.data);
      })
      .catch((err) => {
        setError("Məlumat yüklənərkən xəta baş verdi.");
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = entrepreneurships.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const nextPage = () => {
    if (indexOfLastItem < entrepreneurships.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="Entrepreneurship__Page">
        <div className="CATEGORY">
          <h6 style={{ textTransform: "uppercase", letterSpacing: "5px" }}>
            CATEGORY
          </h6>
          <div className="Name__Entrepreneurship">
            <h1>Entrepreneurship</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Suspendisse varius enim in eros elementum tristique. Duis <br />
            cursus, mi quis viverra ornare, eros dolor interdum. <br />
          </p>
        </div>
        <div className="entrepreneurship--card">
          {currentItems.map((entrepreneurship) => (
            <div className="entrepreneurship--border" key={entrepreneurship.id}>
              <img
                className="entrepreneurship--image"
                src={entrepreneurship.image}
                alt=""
              />
              <p className="entrepreneurship--tag">{entrepreneurship.tag}</p>
              <h4 className="entrepreneurship--name">
                {entrepreneurship.name &&
                typeof entrepreneurship.name === "string"
                  ? entrepreneurship.name.replace(/([a-z])([A-Z])/g, "$1 $2")
                  : entrepreneurship.name}
              </h4>
            </div>
          ))}
        </div>
        <div
          className="entrepreneurship--next-back__button"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "450px",
          }}
        >
          <button
            className="entrepreneurship--back__button"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Back
          </button>
          <span
            className="entrepreneurship--page__indicator"
            style={{
              fontSize: "18px",
              fontWeight: "400",
              whiteSpace: "nowrap",
            }}
          >
            {currentPage} / {Math.ceil(entrepreneurships.length / itemsPerPage)}
          </span>
          <button
            className="entrepreneurship--next__button"
            onClick={nextPage}
            disabled={indexOfLastItem >= entrepreneurships.length}
          >
            Next
          </button>
        </div>
        <div className="entrepreneurship--separator"></div>
      </div>
      <Footer />
    </>
  );
}
