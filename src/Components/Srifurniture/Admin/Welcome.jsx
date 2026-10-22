import React from "react";
import UseCustom from "./UseCustom";

const Welcome = () => {

  const products = UseCustom("products");
  const students = UseCustom("students");
  const enquires = UseCustom("enquires");
  const users = UseCustom("users");
  const orders = UseCustom("orders");

  return (
    <div className="container p-5">
      <h2 className="text-danger">Welcome to Dashboard</h2>

      <div className="row">

        <div className="col-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h1>{products.length}</h1>
              <p>Products</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h1>{students.length}</h1>
              <p>Students</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h1>{enquires.length}</h1>
              <p>Enquires</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h1>{users.length}</h1>
              <p>Users</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h1>{orders.length}</h1>
              <p>Orders</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Welcome;