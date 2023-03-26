import React, { useState } from "react";
import "../style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [farmer, setFarmer] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFarmer({...farmer, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/farmer/login",farmer)
      .then((res) => {
        setFarmer({
          email: "",
          password: "",
        });
        alert(res.data.msg);
        res.data.isLogged ? navigate("/") : navigate("/login")
      })
      .catch((err) => console.log("Error while farmer registration"));
  };

  return (
    <div>
      <section className="login">
        <div class="form-box">
          <div class="form-value">
            <form onSubmit={onSubmit}>
              <h2>Login</h2>
              <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  name="email"
                  value={farmer.email}
                  type="email"
                  required
                  onChange={onChange}
                />
                <label for="">Email</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  name="password"
                  value={farmer.password}
                  type="password"
                  required
                  onChange={onChange}
                />
                <label for="">Password</label>
              </div>

              <button>Log in</button>
              <div class="register">
                <p>
                  Don't have a account? <Link to="/signup">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}
