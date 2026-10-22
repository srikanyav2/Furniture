import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); 

  const [product, setProducts] = useState({}); // 

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [id]); // 

  // 
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(product.price || 0);

  return (
    <div className="container p-5">
      <div className="row">
        
        <div className="col-lg-6">
          <img
            src={product.image} 
            className="img-fluid rounded shadow"
            alt={product.name}
          />
        </div>

        <div className="col-lg-6">
          <h1>{product.name}</h1>
          <h4 className="text-success"> {formattedPrice}</h4>
          <p>{product.description}</p>
          <p><strong>brand:</strong>{product?.brand}
          </p>
          <p>
            <strong>Rating:</strong>{product.rating}
          </p>
          <p>
            <strong>warrenty:</strong>{product?.warranty}
          </p>
          <p>
            <strong>availability:</strong> {product.stock ? (
                <span className="text-danger">in stock</span>
            ) : (
                <span className="text-primary">out of  stock</span>
            )
        }
          </p>
          <button className="btn btn-primary me-2">add to cart</button>
          <button className="text-danger">Buy now</button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;