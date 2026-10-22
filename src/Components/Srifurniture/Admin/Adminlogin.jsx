import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginData } from "../../../App";

const Adminlogin = () => {

  // ✅ Context
  const [login, setLogin] = useContext(loginData);

  // ✅ Form state
  const [details, setDetails] = useState({
    email: "",
    password: ""
  });

  // ✅ Users data
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  // ✅ Fetch users (only once)
  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ✅ Handle input change
  const changeData = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  console.log("User from DB:", users[0]);
  console.log("Entered details:", details);

  // ✅ Submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check user exist or not
    const exist = users.find(
      (u) => u.email === details.email && u.password === details.password
    );

    if (exist) {
      setLogin({ status: true, user: exist }); // store in context
      alert("Login successful");

      // clear form
      setDetails({ email: "", password: "" });

      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="row">
      <div className="container">
        <div className="col-lg-6 p-5 text-center">

          <h2 className="fw-bold text-danger">Admin Login</h2>

          <form onSubmit={submitHandler}>
            <input
              type="email"
              className="form-control mb-3 shadow"
              name="email"
              placeholder="Enter your email"
              value={details.email}
              onChange={changeData}
              required
            />

            <input
              type="password"
              className="form-control mb-3 shadow"
              name="password"
              placeholder="Enter your password"
              value={details.password}
              onChange={changeData}
              required
            />

            <input
              type="submit"
              value="Login"
              className="form-control mb-3 bg-primary text-white"
            />

          </form>

        </div>
      </div>
    </div>
  );
};

export default Adminlogin;