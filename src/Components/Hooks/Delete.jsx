import axios from "axios";
import React, { useEffect, useState } from "react";

const Delete = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        alert("User deleted");

        // update UI
        setUsers(users.filter((u) => u.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid">
      <div className="row m-5">

        {users.map((u) => (
          <div className="col-md-4 col-lg-6" key={u.id}>
            <div className="card mb-3">

              <div className="card-body">
                <h2 className="card-title">{u.name}</h2>
                <p>ID: {u.id}</p>
                <p>Username: {u.username}</p>
                <p>Email: {u.email}</p>

                <p>Street: {u.address.street}</p>
                <p>Suite: {u.address.suite}</p>
                <p>City: {u.address.city}</p>
                <p>Zipcode: {u.address.zipcode}</p>

                <p>Lat: {u.address.geo.lat}</p>
                <p>Lng: {u.address.geo.lng}</p>
              </div>

              <div className="card-footer">
                <button className="btn btn-primary me-3">Edit</button>

                <button
                  onClick={() => deleteProduct(u.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Delete;