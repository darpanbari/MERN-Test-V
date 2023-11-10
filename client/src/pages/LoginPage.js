import React, { useState } from "react";
import LoginWithOauth from "../components/Auth/LoginWithOauth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      `http://localhost:9090/customers/auth/login`,
      {
        email, password
      }
    );
    if (res) {
      alert("Login successful! Redirecting to /dashboard...");
      navigate("/all-customers"); 
    } else {
      alert(res.data.message);
    }
  } catch (error) {
    console.log(error);
    alert(`${email} is not yet registered, Please login with Google!`);
  }
};

  return (
    <div
      className=" d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card mx-2 px-5 py-4" style={{width:"500px"}}>
        <h4 className="card-title text-center mb-4 text-pink">LOGIN</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control w-100"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary border-0 px-5 bg-pink"
            >
              LOGIN
            </button>
          </div>
          <hr />
          <div className="text-center my-4 w-100">
            <LoginWithOauth />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
