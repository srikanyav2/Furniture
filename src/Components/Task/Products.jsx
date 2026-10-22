import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row">

         
          {product.map((p) => (
            <div key={p.id} className="col-md-6 col-lg-4 mb-4">

              
              <div className="card h-100 shadow-sm">

                
                <img
                  src={p.thumbnail}
                  className="card-img-top"
                  alt={p.title}
                />

                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="text-muted">{p.category}</p>
                  <p>Price: ₹{p.price}</p>
                  <p>Rating: {p.rating}</p>
                  <p>{p.description}</p>

                  <button className="btn btn-danger w-100">
                    Add to Cart
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Products;