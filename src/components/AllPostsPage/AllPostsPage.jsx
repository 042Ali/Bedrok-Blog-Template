import { useEffect, useState } from "react";
import axios from "axios";
import "./AllPostsPage.css";
import Footer from "../Footer/Footer";

export default function AllPostsPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        setError("Məlumat yüklənərkən xəta baş verdi.");
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (indexOfLastItem < products.length) {
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
      <div className="All__Blog--Posts">
        <h1>All Blog Posts</h1>
        <div className="card--anchovy">
          {currentItems.map((product) => (
            <div className="card--border" key={product.id}>
              <img className="Card--Image" src={product.image} alt="" />
              <p className="Card--tag">{product.tag}</p>
              <h4 className="Card--name">
                {product.name && typeof product.name === "string"
                  ? product.name.replace(/([a-z])([A-Z])/g, "$1 $2")
                  : product.name}
              </h4>
            </div>
          ))}
        </div>
        <div
          className="Next--Back__Button"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "450px",
          }}
        >
          <button
            className="Back__Button"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Back
          </button>
          <span
            className="Page__Indicator"
            style={{
              fontSize: "18px",
              fontWeight: "400",
              whiteSpace: "nowrap",
            }}
          >
            {currentPage} / {Math.ceil(products.length / itemsPerPage)}
          </span>
          <button
            className="Next__Button"
            onClick={nextPage}
            disabled={indexOfLastItem >= products.length}
          >
            Next
          </button>
        </div>
        <div className="new3"></div>
        <Footer />
      </div>
    </>
  );
}
