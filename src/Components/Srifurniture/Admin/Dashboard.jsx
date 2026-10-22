import React, { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { loginData } from "../../../App";

const Dashboard = () => {

  const [login, setLogin] = useContext(loginData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!login?.status) {
      navigate('/login');
    }
  }, [login, navigate]); // ✅ dependency add chesam

  return (
    <div className="container-fluid">
      <div className="row">

        <aside className="col-lg-3">
          <h3>Welcome to Admin</h3>

          <Link to="addproduct">
            <button>Add Products</button>
          </Link>

          <Link to="viewproducts">
            <button>View Products</button>
          </Link>

          <Link to="vieworders">
            <button>View Orders</button>
          </Link>

          <Link to="viewenquiries">
            <button>View Enquiries</button>
          </Link>

          <Link to="viewreviews">
            <button>View Reviews</button>
          </Link>

        </aside>

        <div className="col-lg-9">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;