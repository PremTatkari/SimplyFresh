import React, {useState} from "react";
import "../style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [farmer, setFarmer] = useState({
    email: "",
    password: "",
    mobile_number: "",
    farm_name: "",
    farm_address: "",
  });

  const onChange = (e) => {
    setFarmer({ ...farmer, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/farmer", farmer)
      .then((res) => {
        setFarmer({
          email: "",
          password: "",
          mobile_number: "",
          farm_name: "",
          farm_address: "",
        });
        alert(res.data.msg);
        res.data.isLogged ? navigate("/") : navigate("/signup");
      })
      .catch((err) => console.log("Error while farmer registration"));
  };

  return (
    <div>
      <section className="login">
        <div class="form-box">
          <div class="form-value">
            <form onSubmit={onSubmit}>
              <h2>Register</h2>
              <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input name="email" value={farmer.email} type="email" required onChange={onChange}/>
                <label for="">Email</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input name="password" value={farmer.password} type="password" required onChange={onChange}/>
                <label for="">Password</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input name="mobile_number" value={farmer.mobile_number} type="Text" required onChange={onChange}/>
                <label for="">Mobile Number</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input name="farm_name" value={farmer.farm_name} type="Text" required onChange={onChange}/>
                <label for="">Farm Name</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input name="farm_address" value={farmer.farm_address} type="TextArea" required onChange={onChange}/>
                <label for="">Farm address</label>
              </div>

              <button>Register</button>
              <div class="register">
                <p>
                  Already have an account? <Link to="/login">Login</Link>
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
