import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewProducts = () => {

  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/products`)
      .then((res) => setproducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const Delete=()=>{
    axios.delete(`http://localhost:5000/products/${id}`)
     .then(() => {
  setproducts((prev) =>
    prev.filter((p) => p.id !== id)
  );
  alert('Deleted successfully');
})
    .catch((err) => console.log(err));
};
  

  return (
    <div className="container p-5">
      <div className="row">

        {products.map((p, index) => (
          <div className="col-lg-4 col-md-6 mb-3" key={p.id || index}>
            <div className="card">
              <div className="card-body">

                <h4 className="card-title text-danger border border-danger">{p.name}</h4>
                <p><strong>ID:</strong> {p.id}</p>
                <p><strong>Category:</strong> {p.category}</p>
                <p><strong>Price:</strong> {p.price}</p>
                <p><strong>Warranty:</strong> {p.warranty || p.warrantyInformation}</p>
                <p><strong>Rating:</strong> {p.rating}</p>
                <p>{p.description}</p>
                <button className=" text-danger me-3" >edit</button>
                <button onClick={()=>deleteproduct(p.id)} className="bg-primary">delete</button>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ViewProducts;