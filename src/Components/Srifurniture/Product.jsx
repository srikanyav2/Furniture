import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="container-fluid p-5 text-bg-primary text-center">
        <h1>Our Furniture Collection</h1>
        <p>Discover our wide range of furniture designed for comfort, style, and durability.</p>
      </section>

      <div className="container mt-5">
        <div className="row">

          {data.map((p) => (
            <div key={p.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">

                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="text-muted">{p.category}</p>
                  <p>Price: ₹{p.price}</p>
                  <p>Warranty: {p.warranty}</p>
                  <p>Rating: {p.rating}</p>
                  <p>{p.description}</p>

                  {/* Correct for navigation */}
                  <Link
                    to={`/productDetails/${p.id}`}
                    className="btn btn-primary w-100"
                  >
                    View Details
                  </Link>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Product;