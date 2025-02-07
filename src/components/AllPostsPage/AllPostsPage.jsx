import { useEffect, useState } from "react";
import axios from "axios";
import "./AllPostsPage.css";

export default function AllPostsPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <>
      <div className="All__Blog--Posts">
        <h1>All Blog Posts</h1>
        <div className="card--anchovy">
          {products.map((product) => (
            <div className="card--border" key={product.id}>
              <img className="Card--Image" src={product.image} alt="" />
              <p className="Card--nickname">{product.nickname}</p>
              <h1 style={{ fontSize: "30px" }} className="Card--name">
                {product.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
